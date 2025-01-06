import React, { Fragment, useEffect, useState } from "react";
import { Sidebar, Header } from "@/components";
import { Outlet } from "react-router-dom";

const Layout: React.FC = () => {
    const [sideOpen, setSideOpen] = useState<boolean>(false);

    useEffect(() => {
        setSideOpen(window.innerWidth >= 767);
    }, []);

    return (
        <Fragment>
            <div className="flex">
                <Sidebar sideOpen={sideOpen} setSideOpen={setSideOpen} />
                <div className="w-full h-screen flex flex-col relative">
                    <Header sideOpen={sideOpen} setSideOpen={setSideOpen} />
                    <div className="bg-black h-full overflow-y-auto custom-scroll px-8 py-4 relative z-[0]">
                        <Outlet />
                    </div>
                </div>
            </div>
        </Fragment>
    );
};

export default Layout;
