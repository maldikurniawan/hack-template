import React, { Fragment } from "react";
import { HiMenuAlt2 } from "react-icons/hi";
import { Avatar, Badge, ButtonRipple, Popover, List } from "@/components";
import { TbLogout } from "react-icons/tb";
import { useNavigate } from "react-router-dom";

interface HeaderProps {
    sideOpen: boolean;
    setSideOpen: (open: boolean) => void;
}

const Header: React.FC<HeaderProps> = ({
    sideOpen,
    setSideOpen,
}) => {

    const navigate = useNavigate();

    return (
        <Fragment>
            <div className="p-4 bg-black z-10">
                <div className="w-full flex bg-black py-2 backdrop-blur-xl justify-between items-center px-3 relative border border-[#0F0]">
                    <div
                        onClick={() => setSideOpen(!sideOpen)}
                        className="p-1 border-[#0F0] border-2 hover:bg-[#0F0] hover:text-black text-white text-xl cursor-pointer transition-all"
                    >
                        <HiMenuAlt2 />
                    </div>
                    <Popover
                        placement="bottom-end"
                        spacing={20}
                        rounded="none"
                        button={
                            <ButtonRipple className="rounded-full">
                                <Badge size="sm" placement="right-end" color="lightGreen">
                                    <Avatar color="lightGreen">AD</Avatar>
                                </Badge>
                            </ButtonRipple>
                        }
                    >
                        <div className="text-sm w-full md:min-w-[260px] text-white">
                            <div className="p-4 border-b border-[#0F0]">
                                <div className="flex gap-2 items-center">
                                    <div className="w-fit">
                                        <Avatar color="lightGreen">AD</Avatar>
                                    </div>
                                    <div>
                                        <div className="text-sm font-semibold whitespace-nowrap">
                                            Admin
                                        </div>
                                        <div className="text-xs">Admin</div>
                                    </div>
                                </div>
                            </div>

                            <div className="p-2 font-medium">
                                <List
                                    onClick={() => navigate("/login")}
                                    color="lightRed"
                                    prefix={<TbLogout />}
                                    density="loose"
                                >
                                    Logout
                                </List>
                            </div>
                        </div>
                    </Popover>
                </div>
            </div>
        </Fragment>
    );
};

export default Header;