import React, { ReactNode } from "react";

interface CardProps {
    children: ReactNode;
    icon?: ReactNode;
    title?: string;
    variant?: "primary" | "base" | "success" | "warning" | "danger" | "info" | "secondary" | string;
    onClick?: () => void;
}

const Card: React.FC<CardProps> = ({ children, icon, title, variant = "primary", onClick, }) => {
    // Define card color styles based on the variant
    const cardColors: { [key: string]: string } = {
        primary: "bg-gradient-to-r from-[#00FF00] via-[#00FF00] to-green-900 text-black",
        base: "bg-gradient-to-r from-[#BEBEBE] via-[#BEBEBE] to-gray-900 text-black",
        success: "bg-gradient-to-r from-[#9B30FF] via-[#9B30FF] to-purple-900 text-black",
        warning: "bg-gradient-to-r from-[#FFFF00] via-[#FFFF00] to-yellow-900 text-black",
        danger: "bg-gradient-to-r from-[#FF0000] via-[#FF0000] to-red-900 text-black",
        info: "bg-gradient-to-r from-[#0000FF] via-[#0000FF] to-blue-900 text-black",
        secondary: "border border-[#0F0] bg-black",
    };

    return (
        <div
            onClick={onClick}
            className={`relative ${cardColors[variant]} w-full shadow p-4 ${onClick ? "cursor-pointer" : ""}`}
        >
            <div
                style={{
                    maskImage: `linear-gradient(to left top, transparent, black)`,
                    WebkitMaskImage: `linear-gradient(to left top, transparent, black)`,
                }}
                className="absolute z-0 inset-0 h-full w-full bg-[linear-gradient(to_right,#80808040_1px,transparent_1px),linear-gradient(to_bottom,#80808040_1px,transparent_1px)] bg-[size:24px_24px]"
            ></div>
            <div className="flex items-center gap-2 font-bold text-black relative">
                {icon && <div className="text-2xl">{icon}</div>}
                {title && <div className="text-lg">{title}</div>}
            </div>
            <div className="relative">{children}</div>
        </div>
    );
};

export default Card;
