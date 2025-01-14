import React, { ReactNode } from "react";

interface CardProps {
    children: ReactNode;
    icon?: ReactNode;
    title?: string;
    variant?: "default" | "primary" | "base" | "success" | "warning" | "danger" | "info" | "secondary" | string;
    onClick?: () => void;
}

const Card: React.FC<CardProps> = ({ children, icon, title, variant = "default", onClick, }) => {
    // Define card color styles based on the variant
    const cardColors: { [key: string]: string } = {
        default: "bg-gradient-to-r from-[#001e00]/50 via-[#001e00]/75 to-green-900/75",
        primary: "bg-gradient-to-r from-[#001e00] via-[#001e00] to-green-900",
        base: "bg-gradient-to-r from-[#1e1e1e] via-[#1e1e1e] to-gray-900",
        success: "bg-gradient-to-r from-[#1e001e] via-[#1e001e] to-purple-900",
        warning: "bg-gradient-to-r from-[#3e3e00] via-[#3e3e00] to-yellow-900",
        danger: "bg-gradient-to-r from-[#3e001e] via-[#3e001e] to-red-900",
        info: "bg-gradient-to-r from-[#001e3e] via-[#001e3e] to-blue-900",
        secondary: "shadow-[0_0px_2px_rgb(255,255,255,0.5)] bg-[#001e00]",
    };

    return (
        <div
            onClick={onClick}
            className={`relative ${cardColors[variant]} w-full shadow p-4 border border-[#001e00] ${onClick ? "cursor-pointer" : ""}`}
        >
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
