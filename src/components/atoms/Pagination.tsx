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
    const { themeColor, colorMode } = useContext(ThemeContext);

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

    const validRoundedValues = [
        "none",
        "sm",
        "rounded",
        "md",
        "lg",
        "xl",
        "2xl",
        "3xl",
        "full",
    ] as const;

    const roundedType = validRoundedValues.includes(rounded as any)
        ? rounded
        : "md";

    // Define shadow styles based on variant
    const getShadowStyle = variant === "solid" ? "border border-green-600" : "";

    const disabledColor = colorMode === "light" ? "#E0E0E0" : "#6E6E6E"; // Disabled color

    return (
        <div className="flex gap-2">
            {totalCount > 0 && (
                <>
                    {/* Left Navigation */}
                    <button
                        style={{
                            width: sizePagination,
                            height: sizePagination,
                            backgroundColor: colorMode === "light" ? "#BABCBD95" : "#4D535595",
                            color: colorMode === "light" ? "#171C1E" : "white",
                            borderRadius: roundedType,
                        }}
                        className={`${getShadowStyle} flex justify-center items-center`}
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
                                        backgroundColor: colorMode === "light" ? "#BABCBD95" : "#4D535595",
                                        color: colorMode === "light" ? "#171C1E" : "white",
                                        borderRadius: roundedType,
                                    }}
                                    disabled
                                    className={`${getShadowStyle} flex justify-center items-center`}
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
                                            : colorMode === "light"
                                                ? "#BABCBD95"
                                                : "#4D535595",
                                    color:
                                        pageNumber === currentPage
                                            ? "black"
                                            : colorMode === "light"
                                                ? "#171C1E"
                                                : "white",
                                    borderRadius: roundedType,
                                }}
                                className={`${getShadowStyle} flex justify-center items-center`}
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
                            backgroundColor: colorMode === "light" ? "#BABCBD95" : "#4D535595",
                            color: colorMode === "light" ? "#171C1E" : "white",
                            borderRadius: roundedType,
                        }}
                        className={`${getShadowStyle} flex justify-center items-center`}
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
