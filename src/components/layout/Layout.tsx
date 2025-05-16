import React, { Fragment, useEffect, useState } from "react";
import { Sidebar, Header, Footer } from "@/components";
import { Outlet } from "react-router-dom";

const Layout: React.FC = () => {
    const [sideOpen, setSideOpen] = useState<boolean>(true);

    useEffect(() => {
        setSideOpen(window.innerWidth >= 767);
    }, []);

    return (
        <Fragment>
            <div className="flex">
                <Sidebar sideOpen={sideOpen} setSideOpen={setSideOpen} />
                <div className="w-full h-screen flex flex-col relative">
                    <Header sideOpen={sideOpen} setSideOpen={setSideOpen} />
                    <div className="bg-black h-full overflow-y-auto px-4 py-4 text-white scroll-hidden">
                        <Outlet />
                    </div>
                    <Footer />
                </div>
            </div>
        </Fragment>
    );
};

export default Layout;
