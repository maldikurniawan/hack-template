import React, { Fragment } from "react";
import {
    Popover,
    PopoverButton,
    PopoverPanel,
    Transition,
} from "@headlessui/react";
import { HiMenuAlt2 } from "react-icons/hi";

interface HeaderProps {
    sideOpen: boolean;
    setSideOpen: (open: boolean) => void;
}

const Header: React.FC<HeaderProps> = ({
    sideOpen,
    setSideOpen,
}) => {

    return (
        <Fragment>
            <div className="p-4">
                <div className="w-full flex bg-[#001e00]/50 py-2 justify-between items-center px-3 relative z-10">
                    <div
                        onClick={() => setSideOpen(!sideOpen)}
                        className="p-1 rounded-lg border-[#001e00] border-2 hover:bg-[#5ced73] hover:text-black text-white text-xl cursor-pointer transition-all"
                    >
                        <HiMenuAlt2 />
                    </div>
                    <Popover as="div" className="flex relative">
                        <PopoverButton>
                            <div className="w-10 h-10 rounded-full cursor-pointer overflow-hidden border border-green-900">
                                <img
                                    className="object-cover h-full w-full"
                                    src="https://picsum.photos/200"
                                    alt="user"
                                />
                            </div>
                        </PopoverButton>
                        <Transition
                            enter="transition duration-100 ease-out"
                            enterFrom="transform scale-95 opacity-0"
                            enterTo="transform scale-100 opacity-100"
                            leave="transition duration-75 ease-out"
                            leaveFrom="transform scale-100 opacity-100"
                            leaveTo="transform scale-95 opacity-0"
                        >
                            <PopoverPanel className="absolute z-[50] w-max min-w-[170px] flex flex-col right-3 top-14 rounded-lg bg-black border border-green-900 pt-3 pb-1 px-1 text-white">
                                <div className="px-2 pb-2">
                                    <div className="text-lg font-bold">Admin</div>
                                </div>
                                <div className="flex flex-col">
                                    <button
                                        className="text-xs py-2 px-2 rounded-lg text-left hover:bg-white hover:text-slate-600 transition-all"
                                    >
                                        Keluar
                                    </button>
                                </div>
                            </PopoverPanel>
                        </Transition>
                    </Popover>
                </div>
            </div>
        </Fragment>
    );
};

export default Header;