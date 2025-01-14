import { ThemeContext } from "@/context/ThemeContext";
import { useOnClickOutside } from "@/hooks/useOnClickOutside";
import moment from "moment/moment";
import { useContext, useRef, useState } from "react";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import { TextField } from "..";
import {
    autoUpdate,
    flip,
    offset,
    shift,
    useFloating,
} from "@floating-ui/react";

interface DatePickerProps {
    id?: string;
    name?: string;
    label?: string;
    disabled?: boolean;
    placeholder?: string;
    variant?: "basic" | "outline" | "underlined" | "filled" | string;
    size?: "sm" | "md" | "lg" | "xl" | string;
    color?: "lightGreen" | "lightGray" | "lightPurple" | "lightYellow" | "lightRed" | "lightBlue" | string;
    rounded?: "none" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "4xl" | string;
    density?: "tight" | "normal" | "loose" | string;
    prefix?: React.ReactNode;
    suffix?: React.ReactNode;
    prepend?: React.ReactNode;
    append?: React.ReactNode;
    note?: React.ReactNode;
    error?: React.ReactNode;
    mode?: "single" | "multiple" | "range";
    fromYear?: number;
    toYear?: number;
    value?: any;
    setValue?: any;
    onChange?: (date: any) => void;
    required?: boolean;
    placement?:
    | "top"
    | "top-start"
    | "top-end"
    | "right"
    | "right-start"
    | "right-end"
    | "bottom"
    | "bottom-start"
    | "bottom-end"
    | "left"
    | "left-start"
    | "left-end";
    position?: "relative" | "fixed" | "absolute" | "sticky";
}

const DatePicker: React.FC<DatePickerProps> = ({
    id,
    name,
    label,
    disabled,
    placeholder,
    variant = "basic",
    size = "md",
    color = "lightGreen",
    rounded = "none",
    density = "normal",
    prefix,
    suffix,
    prepend,
    append,
    note,
    error,
    mode = "single",
    fromYear,
    toYear,
    value,
    setValue,
    onChange,
    required = false,
    placement = "bottom-start",
    position = "relative",
}) => {
    const { themeColor, colorMode } = useContext(ThemeContext);
    const currentYear = moment().year();
    const fromYearValue = fromYear || 2015;
    const toYearValue = toYear || currentYear + 2;

    const [open, setOpen] = useState(false);

    const ref = useRef<HTMLDivElement>(null);
    useOnClickOutside(ref, () => setOpen(false));

    // Color mapping
    const datepickerColor =
        {
            lightGreen: themeColor,
            lightGray: "#BABCBD",
            lightPurple: "#4ED17E",
            lightYellow: "#EEC239",
            lightRed: "#F26969",
            lightBlue: "#629BF8",
        }[color] || color;

    const { refs, floatingStyles } = useFloating({
        placement,
        whileElementsMounted: autoUpdate,
        middleware: [offset(), flip(), shift()],
    });

    return (
        <div ref={ref} className="relative">
            <div ref={refs.setReference}>
                <TextField
                    id={id}
                    name={name}
                    label={label}
                    disabled={disabled}
                    placeholder={placeholder}
                    variant={variant}
                    size={size}
                    color={color}
                    rounded={rounded}
                    density={density}
                    prefix={prefix}
                    suffix={suffix}
                    prepend={prepend}
                    append={append}
                    note={note}
                    error={error}
                    value={
                        mode === "range"
                            ? `${moment(value).format("DD/MM/YYYY")} - ${moment(value).format("DD/MM/YYYY")}`
                            : mode === "multiple"
                                ? Array.isArray(value) ? value.map((v) => moment(v).format("DD/MM/YYYY")).join(", ") : ""
                                : value
                                    ? moment(value).format("DD/MM/YYYY")
                                    : ""
                    }
                    onClick={() => setOpen(!open)}
                    readOnly
                    required={required}
                />
            </div>

            {open && (
                <div
                    ref={refs.setFloating}
                    style={floatingStyles}
                    className={`bg-black w-fit rounded-lg shadow-lg border border-lightGray-50 dark:border-lightGray-500 z-10 ${position}`}
                >
                    <DayPicker
                        required
                        className="m-0 p-4 text-sm"
                        selected={value}
                        onSelect={setValue}
                        onDayClick={(e) => {
                            if (mode === "single") setOpen(false);
                            onChange?.(e);
                        }}
                        modifiersStyles={{
                            selected: {
                                backgroundColor: datepickerColor,
                                color: "#fff",
                            },
                        }}
                        styles={{
                            dropdown: {
                                backgroundColor: colorMode === "light" ? "#fff" : "#171C1E",
                            },
                            caption_label: {
                                fontSize: "0.875rem",
                            },
                        }}
                        classNames={{
                            button: `rdp-button hover:!bg-white ${mode !== "range" ? "rounded-lg" : ""
                                } ${mode === "single" ? "aria-selected:!pointer-events-none" : ""
                                }`,
                            day_selected: "rdp-day_selected ",
                        }}
                        mode={mode}
                        captionLayout="dropdown"
                        fromYear={fromYearValue}
                        toYear={toYearValue}
                        showOutsideDays
                    />
                </div>
            )}
        </div>
    );
};

export default DatePicker;
