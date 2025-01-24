import React, { ReactNode } from "react";
import { FaRegWindowMaximize, FaTimes } from "react-icons/fa";
import { VscChromeMinimize } from "react-icons/vsc";
import ScrambleText from "../atoms/ScrambleText";

interface TerminalCardProps {
    children: ReactNode;
    icon?: ReactNode;
    title?: string;
    onClick?: () => void;
}

const TerminalCard: React.FC<TerminalCardProps> = ({
    children,
    icon,
    title,
    onClick,
}) => {
    return (
        <div
            onClick={onClick}
            className={`relative w-full ${onClick ? "cursor-pointer" : ""}`}
        >
            <div className="flex justify-between font-bold items-center bg-[#0F0] text-black relative">
                <div className="flex gap-2 px-2">
                    {icon && <div className="text-2xl">{icon}</div>}
                    {title &&
                        <div className="text-lg">
                            <ScrambleText>
                                {title}
                            </ScrambleText>
                        </div>
                    }
                </div>
                <div className="text-4xl flex cursor-pointer">
                    <VscChromeMinimize className="hover:bg-black/30 p-2" />
                    <FaRegWindowMaximize className="hover:bg-black/30 p-2" />
                    <FaTimes className="hover:bg-red-600 hover:text-white p-2" />
                </div>
            </div>
            <div className="text-white relative border border-[#0F0] border-t-0 p-4">{children}</div>
        </div>
    );
};

export default TerminalCard;
