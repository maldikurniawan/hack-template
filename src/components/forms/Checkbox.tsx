import { ThemeContext } from "@/context/ThemeContext";
import { useContext } from "react";
import { TbCheck } from "react-icons/tb";
import { ButtonRipple } from "..";

interface CheckboxProps {
    id: string;
    checked: boolean;
    onChange: () => void; // Updated to match the expected onClick type
    size?: "xs" | "sm" | "md" | "lg" | "xl" | string;
    color?: "lightGreen" | "lightGray" | "lightPurple" | "lightYellow" | "lightRed" | "lightBlue" | string | null;
    disabled?: boolean | null;
    label: string;
}

const Checkbox: React.FC<CheckboxProps> = ({ id, checked, onChange, size = "md", color = "lightGreen", disabled = false, label }) => {
    const { themeColor } = useContext(ThemeContext);

    // Color
    const checkboxColor =
        color === null
            ? themeColor
            : {
                lightGreen: themeColor,
                lightGray: "#B0B0B0",
                lightPurple: "#B05CED",
                lightYellow: "#EDDB5C",
                lightRed: "#ED5C73",
                lightBlue: "#5CB0ED",
            }[color] || color;

    // Size
    const checkSize =
        size === null
            ? 16
            : {
                xs: 12,
                sm: 14,
                md: 16,
                lg: 18,
                xl: 20,
            }[size] || 16;

    const text =
        size === null
            ? 14
            : {
                xs: 10,
                sm: 12,
                md: 14,
                lg: 16,
                xl: 18,
            }[size] || 14;

    return (
        <div className="flex items-center gap-x-1">
            <ButtonRipple
                className="relative rounded-full flex items-center justify-center transition-[background] hover:bg-white/30"
                color={checkboxColor ? `${checkboxColor}50` : `#989C9D50`}
                style={{
                    width: checkSize + 16,
                    height: checkSize + 16,
                }}
                onClick={onChange} // onChange toggles the checked state
                disabled={disabled ?? false} // Handle null with a fallback to false
            >
                {checked && (
                    <TbCheck
                        size={text}
                        style={{
                            marginLeft: -text / 2,
                            marginTop: -text / 2,
                        }}
                        className={`absolute text-white z-10 top-1/2 left-1/2 inset-0 pointer-events-none`}
                    />
                )}
                <input
                    id={id}
                    style={{
                        width: checkSize,
                        height: checkSize,
                        background: checked
                            ? checkboxColor
                                ? checkboxColor
                                : themeColor
                            : "transparent",
                    }}
                    className={`appearance-none rounded outline-none pointer-events-none ${checked ? "shadow" : "border border-white"
                        } ${disabled ? "opacity-50" : ""}`}
                    readOnly
                    checked={checked}
                    type="checkbox"
                />
            </ButtonRipple>
            {label && (
                <label
                    htmlFor={id}
                    style={{
                        fontSize: text,
                    }}
                    className={`cursor-pointer ${disabled
                        ? "pointer-events-none text-white/30"
                        : "text-white"
                        }`}
                >
                    {label}
                </label>
            )}
        </div>
    );
};

Checkbox.defaultProps = {
    id: "",
    checked: false,
    onChange: () => { },
    size: "md",
    color: "lightGreen",
    disabled: false,
    label: "",
};

export default Checkbox;