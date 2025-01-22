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
        lightGray: "#CCCCCC",
        lightPurple: "#8000FF",
        lightYellow: "#CCFF00",
        lightRed: "#FF0F0F",
        lightBlue: "#00FFFF",
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
        <Card variant="secondary">
            <div className={`text-sm text-white`}>
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
                <div className="text-xs">
                    {description}
                </div>
            </div>
        </Card>
    );
};

export default CardStatistic;
