import React, { Fragment, useEffect, useState } from "react";
import { Sidebar, Header, Footer, Loader } from "@/components";
import { Outlet } from "react-router-dom";

const Layout: React.FC = () => {
    const [sideOpen, setSideOpen] = useState<boolean>(true);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const timeout = setTimeout(() => {
            setLoading(false);
        }, 100);

        setSideOpen(window.innerWidth >= 767);

        return () => clearTimeout(timeout);
    }, []);

    return (
        <Fragment>
            {loading ? (
                <div className="flex justify-center items-center h-screen bg-black">
                    <Loader />
                </div>
            ) : (
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
            )}
        </Fragment>
    );
};

export default Layout;
