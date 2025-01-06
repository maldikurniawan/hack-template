import React, { Fragment, useState, useRef } from "react";
import Menu from "./Menu";

interface SidebarProps {
    sideOpen: boolean;
    setSideOpen: (open: boolean) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ sideOpen, setSideOpen }) => {
    const [openHover, setOpenHover] = useState<boolean>(false);
    const scrollbarContainer = useRef<HTMLDivElement | null>(null);
    const ref = useRef<HTMLDivElement>(null);

    return (
        <Fragment>
            <div
                onClick={() => setSideOpen(!sideOpen)}
                className={`z-50 fixed w-screen h-screen md:hidden ${sideOpen ? "block" : "hidden"}`}
            ></div>

            <div
                ref={ref}
                className={`z-50 fixed md:relative h-screen flex flex-col bg-[#030B07] border-r border-r-green-900 text-white transition-all duration-300 ease-in-out ${sideOpen
                    ? "md:w-[20rem] w-[16rem] translate-x-0"
                    : "w-0 translate-x-[-100%]"}`
                }
                onMouseEnter={() => setOpenHover(true)}
                onMouseLeave={() => setOpenHover(false)}
            >
                <div className={`w-full flex justify-center my-4 ${sideOpen ? "block" : "hidden"}`}>
                    Logo
                </div>

                <div
                    ref={scrollbarContainer}
                    className={`relative flex-1 overflow-auto scroll-hidden group/rail ${openHover ? 'bg-black' : ''}`}
                >
                    <Menu sideOpen={sideOpen} openHover={openHover} />
                </div>
            </div>
        </Fragment>
    );
};

export default Sidebar;
