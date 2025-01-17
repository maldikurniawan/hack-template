import { DOTS, usePagination } from "@/hooks/usePagination";
import { TbChevronLeft, TbChevronRight, TbDots } from "react-icons/tb";
import { useContext } from "react";
import { ThemeContext } from "@/context/ThemeContext";

interface PaginationProps {
    onPageChange: (page: number) => void;
    totalCount: number;
    siblingCount?: number;
    currentPage: number;
    pageSize: number;
    activeColor?: "lightGreen" | "lightGray" | "lightPurple" | "lightYellow" | "lightRed" | "lightBlue" | string;
    rounded?: "none" | "sm" | "rounded" | "md" | "lg" | "xl" | "2xl" | "3xl" | "full" | string;
    variant?: "solid" | "flat" | string;
    size?: "xs" | "sm" | "md" | "lg" | "xl" | number | string;
}

const Pagination: React.FC<PaginationProps> = ({
    onPageChange,
    totalCount,
    siblingCount = 1,
    currentPage,
    pageSize,
    activeColor = "lightGreen",
    rounded = "none",
    variant = "flat",
    size = "sm",
}) => {
    const { themeColor } = useContext(ThemeContext);

    const paginationRange = usePagination({
        currentPage,
        totalCount,
        siblingCount,
        pageSize,
    }) ?? [];

    const onNext = () => onPageChange(currentPage + 1);
    const onPrevious = () => onPageChange(currentPage - 1);

    const colorPaginations: Record<string, string> = {
        lightGreen: themeColor,
        lightGray: "#B0B0B0",
        lightPurple: "#B05CED",
        lightYellow: "#EDDB5C",
        lightRed: "#ED5C73",
        lightBlue: "#5CB0ED",
    };

    const colorPagination = colorPaginations[activeColor] || activeColor;

    const sizePagination = {
        xs: 25,
        sm: 30,
        md: 35,
        lg: 40,
        xl: 45,
    }[size] || size;

    const lastPage = paginationRange[paginationRange.length - 1] as number;

    const pageRounded =
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
        }[rounded] || "rounded-none";

    // Define shadow styles based on variant
    const getShadowStyle = variant === "solid" ? "border border-white/50" : "";

    const disabledColor = "#E0E0E0";

    return (
        <div className="flex gap-2">
            {totalCount > 0 && (
                <>
                    {/* Left Navigation */}
                    <button
                        style={{
                            width: sizePagination,
                            height: sizePagination,
                            backgroundColor: "#4D535595",
                            color: "white",
                        }}
                        className={`${getShadowStyle} flex justify-center items-center ${pageRounded}`}
                        onClick={onPrevious}
                        disabled={currentPage === 1}
                    >
                        <TbChevronLeft
                            style={{
                                color: currentPage === 1 ? disabledColor : "inherit",
                            }}
                        />
                    </button>

                    {paginationRange.map((pageNumber, index) => {
                        if (pageNumber === DOTS) {
                            return (
                                <button
                                    key={index}
                                    style={{
                                        width: sizePagination,
                                        height: sizePagination,
                                        backgroundColor: "#4D535595",
                                        color: "white",
                                    }}
                                    disabled
                                    className={`${getShadowStyle} flex justify-center items-center ${pageRounded}`}
                                >
                                    <TbDots
                                        style={{
                                            color: disabledColor,
                                        }}
                                    />
                                </button>
                            );
                        }

                        return (
                            <button
                                key={index}
                                style={{
                                    width: sizePagination,
                                    height: sizePagination,
                                    backgroundColor:
                                        pageNumber === currentPage
                                            ? colorPagination
                                            : "#BABCBD90",
                                    color:
                                        pageNumber === currentPage
                                            ? "black"
                                            : "white",
                                }}
                                className={`${getShadowStyle} flex justify-center items-center ${pageRounded}`}
                                onClick={() => onPageChange(pageNumber as number)}
                            >
                                {pageNumber}
                            </button>
                        );
                    })}

                    {/* Right Navigation */}
                    <button
                        style={{
                            width: sizePagination,
                            height: sizePagination,
                            backgroundColor: "#4D535595",
                            color: "white",
                        }}
                        className={`${getShadowStyle} flex justify-center items-center ${pageRounded}`}
                        onClick={onNext}
                        disabled={currentPage === lastPage}
                    >
                        <TbChevronRight
                            style={{
                                color: currentPage === lastPage ? disabledColor : "inherit",
                            }}
                        />
                    </button>
                </>
            )}
        </div>
    );
};

export default Pagination;
