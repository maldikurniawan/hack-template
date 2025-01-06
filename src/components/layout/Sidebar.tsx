import React, { Fragment, useState, useRef } from "react";
import { useOnClickOutside } from "@/hooks/useOnClickOutside";
import { menu } from "@/constants/menu";
import { MdKeyboardArrowRight } from "react-icons/md";
import { useLocation, Link } from "react-router-dom";

interface SidebarProps {
    sideOpen: boolean;
    setSideOpen: (open: boolean) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ sideOpen, setSideOpen }) => {
    const [navopen, setNavopen] = useState<Record<number, boolean>>({});
    const location = useLocation();
    const ref = useRef<HTMLDivElement>(null);

    useOnClickOutside(ref, () => setNavopen({}));

    const toggleNavOpen = (index: number) => {
        setNavopen((prev) => ({
            ...prev,
            [index]: !prev[index],
        }));
    };

    return (
        <Fragment>
            <div
                onClick={() => setSideOpen(!sideOpen)}
                className={`z-50 fixed w-screen h-screen md:hidden ${sideOpen ? "" : "hidden"}`}
            ></div>

            <div
                ref={ref}
                className={`z-50 fixed md:relative h-screen flex flex-col bg-[#030B07] border-r border-r-green-900 text-white transition-all duration-300 ease-in-out ${sideOpen
                    ? "w-[14rem] translate-x-0"
                    : "w-0 translate-x-[-100%]"
                    }`}
            >
                <div className="w-full flex justify-center my-4">
                    Logo
                </div>

                <div className="px-2 pb-5 text-xl overflow-y-auto max-h-[80vh] hidden-scroll">
                    {menu.map((item, index) => (
                        <div key={index}>
                            <div onClick={() => item.sub && toggleNavOpen(index)}>
                                {item.path ? (
                                    <Link
                                        to={item.path}
                                        className={`mb-2 flex items-center gap-2 p-2 cursor-pointer capitalize text-base rounded-lg ${location.pathname.includes(item.path) ? "bg-black text-white border border-green-900" : "hover:bg-gray-100 hover:text-black"}`}
                                    >
                                        <div>{item.icon}</div>
                                        <div className={`${sideOpen ? "block" : "hidden"}`}>{item.name}</div>
                                    </Link>
                                ) : (
                                    <div
                                        className={`mb-2 flex items-center gap-2 p-2 cursor-pointer text-base rounded-lg ${navopen[index] ? "bg-white text-black" : "hover:bg-gray-100 hover:text-black"}`}
                                    >
                                        <div>{item.icon}</div>
                                        <div className={`${sideOpen ? "block" : "hidden"}`}>{item.name}</div>
                                        {item.sub && item.sub.length > 0 && (
                                            <MdKeyboardArrowRight
                                                className={`transition-transform ${navopen[index] ? "rotate-90" : ""}`}
                                            />
                                        )}
                                    </div>
                                )}
                            </div>

                            {item.sub && item.sub.length > 0 && navopen[index] && (
                                <div className="pl-6">
                                    {item.sub.map((subItem, subIndex) => (
                                        <Link
                                            key={subIndex}
                                            to={subItem.path}
                                            className={`mb-2 flex items-center gap-2 p-2 rounded-lg text-sm ${location.pathname.includes(subItem.path) ? "bg-gray-300 text-black" : "hover:bg-gray-300 hover:text-black"}`}
                                        >
                                            <div>{subItem.icon}</div>
                                            <div>{subItem.name}</div>
                                        </Link>
                                    ))}
                                </div>
                            )}
                        </div>
                    ))}
                </div>

                {sideOpen && (
                    <div className="text-[8px] text-center flex w-full mt-auto mb-2 items-center justify-center">
                        Copyright &copy; PT. Queen Network Nusantara
                    </div>
                )}
            </div>
        </Fragment>
    );
};

export default Sidebar;
