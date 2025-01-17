import { ThemeContext } from "@/context/ThemeContext";
import { useContext, MouseEventHandler, CSSProperties, ReactNode, ButtonHTMLAttributes  } from "react";
import useRipple from "use-ripple-hook";

type ButtonRippleProps = ButtonHTMLAttributes<HTMLButtonElement> & {
    color?: "lightGreen" | "lightGray" | "lightPurple" | "lightYellow" | "lightRed" | "lightBlue" | string;
    duration?: number;
    cancelAutomatically?: boolean;
    disabled?: boolean;
    children?: ReactNode;
    onClick?: MouseEventHandler<HTMLButtonElement>;
    className?: string;
    style?: CSSProperties;
    stopPropagation?: boolean;
}

const ButtonRipple = ({
    color = "",
    duration = 500,
    cancelAutomatically = false,
    disabled = false,
    children = null,
    onClick = () => { },
    className = "",
    style = {},
    stopPropagation = false,
    ...rest
}: ButtonRippleProps) => {
    
    const { themeColor } = useContext(ThemeContext);

    // Color
    const btnColors: Record<string, string> = {
        lightGreen: themeColor,
        lightGray: "#B0B0B0",
        lightPurple: "#B05CED",
        lightYellow: "#EDDB5C",
        lightRed: "#ED5C73",
        lightBlue: "#5CB0ED",
    };

    const btnColor = btnColors[color] || color;

    const [ripple, event] = useRipple({
        duration,
        color: btnColor || "#00000030",
        cancelAutomatically,
        timingFunction: "cubic-bezier(.42,.36,.28,.88)",
        disabled,
    });

    return (
        <button
            {...rest}
            className={className}
            style={style}
            disabled={disabled}
            ref={ripple}
            onMouseDown={event}
            onClick={(e) => {
                if (stopPropagation) e.stopPropagation();
                onClick?.(e);
            }}
        >
            {children}
        </button>
    );
};

export default ButtonRipple;
