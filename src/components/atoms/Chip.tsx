import { ThemeContext } from "@/context/ThemeContext";
import { useContext, ReactNode, CSSProperties } from "react";

interface ChipProps {
    variant?: "solid" | "outline" | "tonal";
    color?: "lightGreen" | "lightGray" | "lightPurple" | "lightYellow" | "lightRed" | "lightBlue" | string;
    size?: "xs" | "sm" | "md" | "lg" | "xl";
    rounded?: "none" | "sm" | "rounded" | "md" | "lg" | "xl" | "2xl" | "3xl" | "full";
    className?: string;
    children?: ReactNode;
}

const Chip: React.FC<ChipProps> = ({
    variant = "solid",
    color = "lightGreen",
    size = "sm",
    rounded = "full",
    className,
    children,
}) => {
    const { themeColor } = useContext(ThemeContext);

    // Color Mapping
    const btnColors: Record<string, string> = {
        lightGreen: themeColor,
        lightGray: "#CCCCCC",
        lightPurple: "#8000FF",
        lightYellow: "#CCFF00",
        lightRed: "#FF0F0F",
        lightBlue: "#00FFFF",
    };

    const btnColor = btnColors[color] || color;

    // Size Mapping
    const btnSize =
        {
            xs: "px-1.5 py-0.5 text-[10px]",
            sm: "px-2 py-1 text-xs",
            md: "px-3 py-1.5 text-sm",
            lg: "px-4 py-2 text-white",
            xl: "px-5 py-2.5 text-lg",
        }[size] || "px-2 py-1 text-xs";

    // Rounded Mapping
    const btnRounded =
        {
            none: "rounded-none",
            sm: "rounded-sm",
            rounded: "rounded",
            md: "rounded-md",
            lg: "rounded-lg",
            xl: "rounded-xl",
            "2xl": "rounded-2xl",
            "3xl": "rounded-3xl",
            full: "rounded-full",
        }[rounded] || "rounded-full";

    // Style Mapping
    let btnStyle: CSSProperties = {};
    if (variant === "outline") {
        btnStyle = {
            border: `1px solid ${btnColor}`,
            color: btnColor,
        };
    } else if (variant === "solid") {
        btnStyle = {
            color: "black",
            backgroundColor: btnColor,
            boxShadow: "0px 1px 2px 0 rgba(0, 0, 0, 0.05)",
        };
    } else {
        btnStyle = {
            backgroundColor: `${btnColor}30`,
            color: btnColor,
        };
    }

    return (
        <div
            style={btnStyle}
            className={`outline-none max-w-full truncate whitespace-nowrap tracking-wide text-center ${btnRounded} ${btnSize} ${className || "font-medium"
                }`}
        >
            {children}
        </div>
    );
};

export default Chip;
