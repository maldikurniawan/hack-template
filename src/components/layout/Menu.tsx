import { menu } from "@/constants/menu";
import { useWindowSize } from "@/hooks/useWindowSize";
import { Disclosure, DisclosureButton, DisclosurePanel, Transition } from "@headlessui/react";
import { useEffect, useState } from "react";
import { RxBorderDashed } from "react-icons/rx";
import { TbChevronRight, TbCircle } from "react-icons/tb";
import { NavLink, useLocation } from "react-router-dom";

interface MenuProps {
    sideOpen: boolean;
    openHover: boolean;
}

type NavState = Record<string, boolean>;

const Menu: React.FC<MenuProps> = ({ sideOpen, openHover }) => {
    const [initNav, setInitNav] = useState<NavState>({});
    const [nav, setNav] = useState<NavState>({});
    const { pathname } = useLocation();
    const { width } = useWindowSize();

    const closeAllNav = () => {
        setNav(initNav);
    };

    const navOpen = (data: string) => {
        setNav((prev) => ({ ...prev, [data]: !prev[data] }));
    };

    const navClose = (data: any) => {
        if (data) {
            setNav((prev) => ({ ...prev, [data]: true }));
        } else {
            setNav(initNav);
        }
    };

    useEffect(() => {
        if (width && width < 1024) {
            closeAllNav();
        }
    }, [width]);

    useEffect(() => {
        const initialNavState = menu
            .filter((item) => item.sub && item.sub.length > 0)
            .reduce<Record<string, boolean>>((acc, item) => {
                // Check if item.name is a string before using it as a key
                if (typeof item.name === 'string') {
                    acc[item.name] = false;
                }
                return acc;
            }, {});

        setNav(initialNavState);
        setInitNav(initialNavState);
    }, []);

    useEffect(() => {
        if (!openHover) {
            if (!sideOpen) setNav(initNav);
        }
    }, [openHover, sideOpen, initNav]);

    useEffect(() => {
        if (!sideOpen && openHover) {
            const menuActive = pathname.split("/")[2];
            setNav((prev) => ({ ...prev, [menuActive]: true }));
        }
    }, [openHover, sideOpen, pathname, initNav]);

    return (
        <div className="my-3">
            {menu.map((item, itemIdx) => {
                if (item.label) {
                    return (
                        <div
                            key={itemIdx}
                            className={`px-3 mt-6 mb-3 m-3 text-xs text-base-200 whitespace-nowrap h-3 ${sideOpen || openHover ? "" : "flex items-center justify-center"
                                }`}
                        >
                            {sideOpen || openHover ? item.label : <RxBorderDashed />}
                        </div>
                    );
                }

                if (!item.sub || item.sub.length === 0) {
                    return (
                        <NavLink onClick={navClose} key={itemIdx} to={item.path || "#"}>
                            {({ isActive }) => (
                                <div className="mb-1 px-3 w-full text-sm">
                                    <div
                                        className={`flex items-center justify-between w-full h-10 px-[18px] py-2 rounded-md overflow-hidden ${isActive
                                            ? "bg-base-50 dark:bg-base-500"
                                            : "hover:bg-base-50 dark:hover:bg-base-500"
                                            }`}
                                    >
                                        <span className="flex items-center gap-2">
                                            <span className="text-xl w-5">
                                                {isActive ? item.iconActive || item.icon : item.icon}
                                            </span>
                                            <span
                                                className={`${sideOpen || openHover ? "opacity-100" : "opacity-0"
                                                    }`}
                                            >
                                                {item.title}
                                            </span>
                                        </span>
                                    </div>
                                </div>
                            )}
                        </NavLink>
                    );
                }

                if (item.sub && item.sub.length > 0) {
                    return (
                        <Disclosure key={itemIdx}>
                            <DisclosureButton
                                onClick={() => navOpen(typeof item.name === 'string' ? item.name : '')}
                                className="w-full px-3 mb-1 text-sm"
                            >
                                <div
                                    className={`flex items-center justify-between w-full h-10 px-[18px] py-2 rounded-md overflow-hidden ${nav[typeof item.name === 'string' ? item.name : '']
                                        ? "bg-base-50 dark:bg-base-500"
                                        : "hover:bg-base-50 dark:hover:bg-base-500"
                                        } ${pathname.split("/")[2] === item.name
                                            ? "bg-base-50 dark:bg-base-500"
                                            : ""
                                        }`}
                                >
                                    <span className="flex items-center gap-2">
                                        <span className="text-xl w-5">{item.icon}</span>
                                        <span
                                            className={`tracking-wide ${sideOpen || openHover ? "opacity-100" : "opacity-0"
                                                }`}
                                        >
                                            {item.title}
                                        </span>
                                    </span>

                                    <div
                                        className={`flex items-center gap-2 transition-[transform,opacity] ${nav[typeof item.name === 'string' ? item.name : ''] ? "rotate-90" : ""
                                            } ${sideOpen || openHover ? "opacity-100" : "opacity-0"}`}
                                    >
                                        <TbChevronRight />
                                    </div>
                                </div>
                            </DisclosureButton>
                            <Transition
                                show={nav[typeof item.name === 'string' ? item.name : '']}
                                enter="transition-[max-height] duration-300 ease-in"
                                enterFrom="max-h-0"
                                enterTo="max-h-[180vh]"
                                leave="transition-[max-height] duration-300 ease-out"
                                leaveFrom="max-h-[180vh]"
                                leaveTo="max-h-0"
                            >
                                <DisclosurePanel as="div" className="pb-2">
                                    {item.sub.map((subItem, subItemIdx) => (
                                        <div key={subItemIdx} className="mb-1 px-3 w-full text-sm">
                                            <NavLink
                                                onClick={() => {
                                                    localStorage.removeItem("editUserData"); // Remove the item from localStorage
                                                    navClose(item.name); // Call navClose with only one argument
                                                }}
                                                to={subItem.path || "#"}
                                            >
                                                {({ isActive }) => (
                                                    <div
                                                        className={`flex items-center justify-between w-full h-10 px-[18px] py-2 rounded-md overflow-hidden ${isActive
                                                            ? "bg-base-50 dark:bg-base-500"
                                                            : "hover:bg-base-50 dark:hover:bg-base-500"
                                                            }`}
                                                    >
                                                        <span className="flex items-center gap-2">
                                                            <span className="text-[10px] w-[18px] ml-1">
                                                                <TbCircle />
                                                            </span>
                                                            <span
                                                                className={`${sideOpen || openHover
                                                                    ? "opacity-100"
                                                                    : "opacity-0"
                                                                    }`}
                                                            >
                                                                {subItem.title}
                                                            </span>
                                                        </span>
                                                    </div>
                                                )}
                                            </NavLink>
                                        </div>
                                    ))}
                                </DisclosurePanel>
                            </Transition>
                        </Disclosure>
                    );
                }

                return null;
            })}
        </div>
    );
};

export default Menu;
