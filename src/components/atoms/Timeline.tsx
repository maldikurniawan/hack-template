import { ThemeContext } from "@/context/ThemeContext";
import { useWindowSize } from "@/hooks/useWindowSize";
import React, { useContext, FC } from "react";

interface TimelineProps {
    multi?: boolean;
    children?: React.ReactNode;
}

const Timeline: FC<TimelineProps> & { Item: FC<TimelineItemProps> } = ({ multi = false, children }) => {
    const child = React.Children.map(children, (el) => {
        return React.cloneElement(el as React.ReactElement, { multi });
    });

    return (
        <div
            className={`grid gap-y-4 ${multi
                ? "grid-cols-[minmax(min-content,24px)_auto] md:grid-cols-[auto_minmax(min-content,24px)_auto]"
                : "grid-cols-[minmax(min-content,24px)_auto]"
                }`}
        >
            {child}
        </div>
    );
};

interface TimelineItemProps {
    icon?: React.ReactNode;
    variant?: "solid" | "tonal" | "dot" | "default" | string;
    color?: "lightGreen" | "lightGray" | "lightPurple" | "lightYellow" | "lightRed" | "lightBlue" | string;
    size?: "xs" | "sm" | "md" | "lg" | "xl" | number | (() => string) | (() => Object);
    noline?: boolean;
    position?: "left" | "right";
    rounded?: "none" | "sm" | "rounded" | "md" | "lg" | "xl" | "2xl" | "3xl" | "full";
    multi?: boolean;
    children?: React.ReactNode;
}

const TimelineItem: React.FC<TimelineItemProps> = ({
    icon,
    variant = "default",
    color = "lightGreen",
    size = "md",
    noline = false,
    position = "right",
    rounded = "full",
    multi,
    children,
}) => {
    const { themeColor } = useContext(ThemeContext);
    const { width } = useWindowSize();

    // Color
    const timelineColors: Record<string, string> = {
        lightGreen: themeColor,
        lightGray: "#BEBEBE",
        lightPurple: "#9B30FF",
        lightYellow: "#FFFF00",
        lightRed: "#FF0000",
        lightBlue: "#0000FF",
    };

    const timelineColor = timelineColors[color] || color;

    // Rounded
    const roundedClasses = {
        none: "rounded-none",
        sm: "rounded-sm",
        rounded: "rounded",
        md: "rounded-md",
        lg: "rounded-lg",
        xl: "rounded-xl",
        "2xl": "rounded-2xl",
        "3xl": "rounded-3xl",
        full: "rounded-full",
    };

    const timelineRounded = roundedClasses[rounded as keyof typeof roundedClasses] || "rounded-full";

    const timelinePosition = position === "left" ? "left" : "right";

    const timelineSize =
        {
            xs: 12,
            sm: 14,
            md: 16,
            lg: 18,
            xl: 20,
        }[size as keyof typeof size] || size;

    let style: React.CSSProperties = {};
    if (variant === "solid") {
        style = {
            backgroundColor: timelineColor,
            color: "white",
            padding: "0.5rem",
        };
    } else if (variant === "tonal") {
        style = {
            backgroundColor: `${timelineColor}30`,
            color: timelineColor,
            padding: "0.5rem",
        };
    } else if (variant === "dot") {
        style = {
            backgroundColor: `${timelineColor}30`,
            padding: "3px",
        };
    } else {
        style = {
            color: timelineColor,
            padding: "0.5rem",
        };
    }

    let lineStyle: React.CSSProperties = {};
    if (variant === "dot") {
        lineStyle = {
            height: `calc(100% - ${timelineSize + 3}px)`,
            top: timelineSize + 12,
        };
    } else {
        lineStyle = {
            height: `calc(100% - ${timelineSize + 16}px)`,
            top: timelineSize + 24,
        };
    }

    return (
        <>
            {multi && (
                <div className="w-full pr-5 hidden md:block">
                    {timelinePosition === "left" && <div>{children}</div>}
                </div>
            )}
            <div className="w-full flex flex-col items-center relative">
                <div
                    style={{
                        ...style,
                        fontSize: `${timelineSize}px`,
                    }}
                    className={`z-10 ${timelineRounded}`}
                >
                    {variant !== "dot" ? (
                        icon
                    ) : (
                        <div
                            style={{
                                width: `${timelineSize - 2}px`,
                                height: `${timelineSize - 2}px`,
                                borderRadius: "50%",
                                backgroundColor: timelineColor,
                            }}
                        ></div>
                    )}
                </div>
                {!noline && (
                    <div
                        style={{
                            ...lineStyle,
                        }}
                        className="w-px absolute bg-white z-0"
                    ></div>
                )}
            </div>
            <div className="w-full pl-5">
                {(timelinePosition === "right" || !multi || width <= 778) && (
                    <div>{children}</div>
                )}
            </div>
        </>
    );
};

Timeline.Item = TimelineItem;

export default Timeline;
