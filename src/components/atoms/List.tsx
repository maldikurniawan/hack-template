import { ThemeContext } from "@/context/ThemeContext";
import { useContext, useState, ReactNode } from "react";

interface ListProps {
    color?: "lightGreen" | "lightGray" | "lightPurple" | "lightYellow" | "lightRed" | "lightBlue" | string;
    rounded?: "none" | "sm" | "rounded" | "md" | "lg" | "xl" | "2xl" | "3xl" | "full";
    density?: "tight" | "normal" | "loose";
    size?: "xs" | "sm" | "md" | "lg" | "xl";
    prefix?: ReactNode;
    suffix?: ReactNode;
    active?: boolean;
    onClick?: () => void;
    children?: ReactNode;
}

const List: React.FC<ListProps> = ({
    color = "lightGreen",
    rounded = "md",
    density = "normal",
    size = "md",
    prefix = null,
    suffix = null,
    active = false,
    onClick = () => { },
    children = null,
}) => {
    const { themeColor } = useContext(ThemeContext);

    const [isHover, setIsHover] = useState(false);

    // Color
    const listColors: Record<string, string> = {
        lightGreen: themeColor,
        lightGray: "#B0B0B0",
        lightPurple: "#B05CED",
        lightYellow: "#EDDB5C",
        lightRed: "#ED5C73",
        lightBlue: "#5CB0ED",
    };

    const listColor = listColors[color] || color;

    // Rounded
    const listRounded =
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
        }[rounded] || "rounded-md";

    // Density
    const listDensity =
        {
            tight: "py-2 px-2",
            normal: "py-2.5 px-2.5",
            loose: "py-3 px-3",
        }[density] || "py-2.5 px-2.5";

    // Size
    const listSize =
        {
            xs: 10,
            sm: 12,
            md: 14,
            lg: 16,
            xl: 18,
        }[size] || 14;

    return (
        <div
            style={{
                backgroundColor: active ? listColor : isHover ? `${listColor}20` : "",
                color: active ? "#fff" : isHover ? listColor : "",
                fontSize: listSize,
            }}
            onMouseEnter={() => setIsHover(true)}
            onMouseLeave={() => setIsHover(false)}
            onClick={onClick}
            className={`flex w-full items-center justify-between gap-2 leading-none cursor-pointer ${listRounded} ${listDensity}`}
        >
            <div className="flex items-center gap-2">
                {prefix && (
                    <div style={{ fontSize: listSize + 2 }}>{prefix}</div>
                )}
                <div className="truncate whitespace-nowrap">{children}</div>
            </div>
            {suffix && <div style={{ fontSize: listSize + 2 }}>{suffix}</div>}
        </div>
    );
};

export default List;
