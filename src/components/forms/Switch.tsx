import { ThemeContext } from "@/context/ThemeContext";
import { useContext } from "react";

interface SwitchProps {
    id?: string;
    label?: string;
    value: boolean;
    onChange: React.Dispatch<React.SetStateAction<boolean>>;
    size?: "sm" | "md" | "lg" | "xl" | string;
    color?: "lightGreen" | "lightPurple" | "lightYellow" | "lightRed" | "lightBlue" | string;
    disabled?: boolean;
    required?: boolean;
}

const Switch: React.FC<SwitchProps> = ({
    id,
    label = "",
    value = false,
    onChange = () => { },
    size = "md",
    color = "lightGreen",
    disabled = false,
    required = false,
}) => {
    const { themeColor, colorMode } = useContext(ThemeContext);

    // Color mapping
    const switchColors: Record<string, string> = {
        lightGreen: themeColor,
        lightGray: "#B0B0B0",
        lightPurple: "#B05CED",
        lightYellow: "#EDDB5C",
        lightRed: "#ED5C73",
        lightBlue: "#5CB0ED",
    };

    const switchColor = switchColors[color] || color;

    // Size mapping
    const switchSize =
        {
            sm: 16,
            md: 18,
            lg: 20,
            xl: 22,
        }[size] || 18;

    // Font size mapping
    const text =
        {
            sm: 12,
            md: 14,
            lg: 16,
            xl: 18,
        }[size] || 14;

    return (
        <div className="flex gap-2">
            <div
                style={{
                    backgroundColor: disabled
                        ? "#BABCBA80"
                        : value
                            ? switchColor
                            : colorMode === "light"
                                ? "#BABCBD"
                                : "#4D5355",
                    width: switchSize * 2 - 4,
                    height: switchSize,
                    opacity: disabled ? 0.5 : 1,
                }}
                className="relative rounded-full overflow-hidden"
            >
                <div
                    style={{
                        left: value ? switchSize - 2 : 4,
                        width: switchSize - 6,
                        height: switchSize - 6,
                        top: "50%",
                        transform: "translateY(-50%)",
                        backgroundColor: "white",
                    }}
                    className="rounded-full absolute transition-[left]"
                ></div>
                <input
                    id={id}
                    disabled={disabled}
                    checked={value}
                    onChange={(e) => onChange(e.target.checked)}
                    type="checkbox"
                    className={`absolute w-full h-full top-0 left-0 opacity-0 ${disabled ? "" : "cursor-pointer"
                        }`}
                />
            </div>
            {label && (
                <label
                    htmlFor={id}
                    style={{
                        fontSize: text,
                    }}
                    className={`cursor-pointer ${disabled
                        ? "pointer-events-none text-white"
                        : "text-white/50"
                        } ${required ? "required" : ""}`}
                >
                    {label}
                </label>
            )}
        </div>
    );
};

export default Switch;
