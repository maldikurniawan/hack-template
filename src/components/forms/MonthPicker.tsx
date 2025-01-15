import { useOnClickOutside } from "@/hooks/useOnClickOutside";
import moment from "moment";
import { useContext, useRef, useState } from "react";
import { TbChevronLeft, TbChevronRight } from "react-icons/tb";
import { Button, TextField } from "..";
import { ThemeContext } from "@/context/ThemeContext";
import { autoUpdate, flip, offset, shift, useFloating } from "@floating-ui/react";

// Define the types for the props
interface MonthPickerProps {
    id?: string;
    name?: string;
    label?: string;
    disabled?: boolean;
    placeholder?: string;
    variant?: "basic" | "outline" | "underlined" | "filled" | string;
    size?: "sm" | "md" | "lg" | "xl";
    color?: "lightGreen" | "lightGray" | "lightPurple" | "lightYellow" | "lightRed" | "lightBlue" | string;
    rounded?: "none" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "4xl" | string;
    density?: "tight" | "normal" | "loose" | string;
    prefix?: React.ReactNode;
    suffix?: React.ReactNode;
    prepend?: React.ReactNode;
    append?: React.ReactNode;
    note?: React.ReactNode;
    error?: React.ReactNode;
    value?: string | Date;
    setValue?: React.Dispatch<React.SetStateAction<string>>;
    onChange?: any;
    required?: boolean;
    clearable?: boolean;
    placement?: "top" | "top-start" | "top-end" | "right" | "right-start" | "right-end" | "bottom" | "bottom-start" | "bottom-end" | "left" | "left-start" | "left-end";
    position?: "relative" | "fixed" | "absolute" | "sticky";
}

const MonthPicker: React.FC<MonthPickerProps> = ({
    id,
    name,
    label,
    disabled = false,
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
    value = new Date(),
    setValue,
    onChange,
    required = false,
    clearable = false,
    placement = "bottom-start",
    position = "relative",
}) => {
    const { themeColor } = useContext(ThemeContext);
    const [open, setOpen] = useState<boolean>(false);
    const ref = useRef<HTMLDivElement | null>(null);
    useOnClickOutside(ref, () => setOpen(false));
    const monthList = moment.months();
    const [year, setYear] = useState<number>(new Date().getFullYear());

    const colorMonthPickers: Record<string, string> = {
        lightGreen: themeColor,
        lightGray: "#B0B0B0",
        lightPurple: "#B05CED",
        lightYellow: "#EDDB5C",
        lightRed: "#ED5C73",
        lightBlue: "#5CB0ED",
    };

    const colorMonthPicker = colorMonthPickers[color] || color;

    const { refs, floatingStyles } = useFloating({
        placement: placement,
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
                    color={colorMonthPicker}
                    rounded={rounded}
                    density={density}
                    prefix={prefix}
                    suffix={suffix}
                    prepend={prepend}
                    append={append}
                    note={note}
                    error={error}
                    clearable={clearable}
                    value={value ? moment(value).format("MMMM YYYY") : ""}
                    onClick={() => {
                        setOpen(!open);
                        if (value) {
                            setYear(Number(moment(value).format("YYYY")));
                        } else {
                            setYear(new Date().getFullYear());
                        }
                    }}
                    setValue={setValue}
                    readOnly
                    required={required}
                />
            </div>

            {open && (
                <div
                    ref={refs.setFloating}
                    style={floatingStyles}
                    className={`bg-black w-fit rounded-lg shadow-lg border border-white z-10 p-4 ${position}`}
                >
                    <div className="flex items-center justify-between mb-2">
                        <Button
                            onClick={() => {
                                setYear(year - 1);
                            }}
                            variant="text"
                            color={colorMonthPicker}
                            size={40}
                        >
                            <TbChevronLeft />
                        </Button>
                        <div>{year}</div>
                        <Button
                            onClick={() => {
                                setYear(year + 1);
                            }}
                            variant="text"
                            color={colorMonthPicker}
                            size={40}
                        >
                            <TbChevronRight />
                        </Button>
                    </div>
                    <div className="grid grid-cols-3 sm:grid-cols-4 gap-2">
                        {monthList.map((month, index) => (
                            <div className="flex items-center justify-center" key={index}>
                                <div
                                    onClick={() => {
										onChange && onChange(new Date(year, index, 1));
										setOpen(false);
									}}
                                    style={{
                                        backgroundColor:
                                            moment(value).format("MMMM") === month &&
                                                moment(value).format("YYYY") === year.toString()
                                                ? colorMonthPicker
                                                : "",
                                        color:
                                            moment(value).format("MMMM") === month &&
                                                moment(value).format("YYYY") === year.toString()
                                                ? "white"
                                                : "",
                                    }}
                                    className="text-sm m-0 w-10 h-10 flex items-center justify-center cursor-pointer hover:bg-white rounded-md"
                                >
                                    {month.substring(0, 3)}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default MonthPicker;
