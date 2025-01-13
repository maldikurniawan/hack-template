import React, { ReactNode } from "react";

interface CardProps {
    children: ReactNode;
    icon?: ReactNode;
    title?: string;
}

const Card: React.FC<CardProps> = ({ children, icon, title }) => {
    return (
        <div className="relative bg-gradient-to-r from-[#001e00]/50 via-[#001e00]/75 to-green-900/75 w-full shadow p-4 border border-[#001e00]">
            <div
                style={{
                    maskImage: `linear-gradient(to left top, transparent, black)`,
                    WebkitMaskImage: `linear-gradient(to left top, transparent, black)`,
                }}
                className="absolute z-0 inset-0 h-full w-full bg-[linear-gradient(to_right,#80808020_1px,transparent_1px),linear-gradient(to_bottom,#80808020_1px,transparent_1px)] bg-[size:24px_24px]"
            ></div>
            <div className="flex items-center gap-2 font-bold text-black relative">
                {icon && <div className="text-2xl">{icon}</div>}
                {title && <div className="text-lg">{title}</div>}
            </div>
            <div className="text-white relative">{children}</div>
        </div>
    );
};

export default Card;
