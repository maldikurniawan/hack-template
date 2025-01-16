import { ThemeContext } from "@/context/ThemeContext";
import { useContext } from "react";
import { Card } from "..";

// Define prop types for CardStatistic component
interface CardStatisticProps {
    title: string;
    value: number;
    description: string;
    color?: "lightGreen" | "lightGray" | "lightPurple" | "lightYellow" | "lightRed" | "lightBlue";
    icon: React.ReactNode;
    iconRounded?: "none" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "full";
}

const CardStatistic: React.FC<CardStatisticProps> = ({
    title,
    value,
    description,
    color = "lightGreen",
    icon,
    iconRounded = "md",
}) => {
    const { themeColor } = useContext(ThemeContext);

    // Color
    const cardColors: Record<string, string> = {
        lightGreen: themeColor,
        lightGray: "#B0B0B0",
        lightPurple: "#B05CED",
        lightYellow: "#EDDB5C",
        lightRed: "#ED5C73",
        lightBlue: "#5CB0ED",
    };

    const cardColor = cardColors[color] || color;

    // Rounded
    const icRounded =
        {
            none: "rounded-none",
            sm: "rounded-sm",
            md: "rounded-md",
            lg: "rounded-lg",
            xl: "rounded-xl",
            "2xl": "rounded-2xl",
            "3xl": "rounded-3xl",
            full: "rounded-full",
        }[iconRounded] || "rounded-md";

    return (
        <Card>
            <div className={`text-sm`}>
                <div className="flex items-center gap-4 mb-2">
                    <div
                        style={{
                            backgroundColor: `${cardColor}30`,
                        }}
                        className={`w-10 h-10 flex items-center justify-center ${icRounded}`}
                    >
                        <div
                            style={{
                                color: cardColor,
                            }}
                            className="text-xl"
                        >
                            {icon}
                        </div>
                    </div>
                    <div className="font-medium text-lg">{value}</div>
                </div>

                <div className="font-medium">{title}</div>
                <div className="text-xs text-white/50">
                    {description}
                </div>
            </div>
        </Card>
    );
};

export default CardStatistic;
