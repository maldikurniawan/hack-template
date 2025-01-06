import { useWindowSize } from "@/hooks/useWindowSize";
import PerfectScrollbar from "perfect-scrollbar";
import { useEffect, useRef, useState } from "react";
import { LiaCircle, LiaDotCircle } from "react-icons/lia";
import { TbX } from "react-icons/tb";
import Menu from "./Menu";

interface SidebarProps {
    sideOpen: boolean;
    setSideOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Sidebar: React.FC<SidebarProps> = ({ sideOpen, setSideOpen }) => {
    const { width } = useWindowSize();
    const [openHover, setOpenHover] = useState<boolean>(false);
    const scrollbarContainer = useRef<HTMLDivElement | null>(null);
    const [scrolled, setScrolled] = useState<boolean>(false);

    // Initialize PerfectScrollbar
    useEffect(() => {
        if (scrollbarContainer.current) {
            const ps = new PerfectScrollbar(scrollbarContainer.current, {
                wheelPropagation: true,
                useBothWheelAxes: true,
            });

            scrollbarContainer.current.addEventListener("ps-scroll-y", () => {
                if (ps.scrollbarYTop > 0) {
                    setScrolled(true);
                } else {
                    setScrolled(false);
                }
            });

            return () => {
                ps.destroy();
            };
        }
    }, []);

    useEffect(() => {
        if (width && width < 1024) {
            setSideOpen(false);
        }
    }, [width, setSideOpen]); // eslint-disable-line react-hooks/exhaustive-deps

    return (
        <>
            {/* Sidebar */}
            <aside
                onMouseEnter={() => width > 1024 && setOpenHover(true)}
                onMouseLeave={() => setOpenHover(false)}
                className={`fixed lg:left-0 z-50 h-full flex flex-col bg-white dark:bg-base-600 transition-[width,left] duration-500 tracking-wide ${sideOpen || openHover ? "w-64 -left-0" : "w-20 -left-96"
                    }`}
            >
                {/* Background */}
                Ini Logo

                {/* Logo */}
                <div className="flex justify-between items-center w-full h-16 px-3 mx-auto">
                    <div className="flex gap-2 items-center px-[8px]">
                        <img src="/images/icons/egawi.png" alt="" className="w-10" />
                        <div
                            className={`font-bold transition-opacity duration-[1000ms] whitespace-nowrap ${sideOpen || openHover ? "opacity-100" : "opacity-0"
                                } ${sideOpen || openHover ? "visible" : "invisible"}`}
                        >
                            E-Gawi
                        </div>
                    </div>
                    <div className=" px-[8px]">
                        <button
                            className={`text-xl hidden lg:block ${!sideOpen && !openHover ? "lg:hidden" : ""
                                }`}
                        >
                            {sideOpen ? (
                                <LiaDotCircle onClick={() => setSideOpen(false)} />
                            ) : (
                                <LiaCircle onClick={() => setSideOpen(true)} />
                            )}
                        </button>
                    </div>
                    <button
                        className="block lg:hidden p-2 rounded-full transition-[background] hover:bg-neutral-200 dark:hover:bg-base-400"
                        onClick={() => setSideOpen(false)}
                    >
                        <TbX />
                    </button>
                </div>

                {/* shadow */}
                <div
                    className={`bg-gradient-to-b from-white to-transparent dark:bg-gradient-to-b dark:from-base-600 dark:to-transparent h-10 w-full absolute top-16 z-10 transition-opacity duration-200 pointer-events-none ${scrolled ? "opacity-100" : "opacity-0"
                        }`}
                ></div>

                {/* Menu */}
                <div
                    ref={scrollbarContainer}
                    className="relative flex-1 overflow-hidden group/rail"
                >
                    <Menu sideOpen={sideOpen} openHover={openHover} />
                </div>
            </aside>

            {/* Backdrop */}
            <div
                onClick={() => setSideOpen(false)}
                className={`fixed inset-0 bg-black/30 z-40 transition-opacity duration-500 ${sideOpen
                        ? "opacity-100 pointer-events-auto lg:opacity-0 lg:pointer-events-none"
                        : "opacity-0 pointer-events-none"
                    }`}
            ></div>
        </>
    );
};

export default Sidebar;
