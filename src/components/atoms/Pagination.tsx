import { DOTS, usePagination } from "@/hooks/usePagination";
import { TbChevronLeft, TbChevronRight, TbDots } from "react-icons/tb";
import { Button } from "..";
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
    size?: "xs" | "sm" | "md" | "lg" | "xl" | string;
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
    size = "xs",
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

    // Define color options for pagination buttons
    const colorPaginations: Record<string, string> = {
        lightGreen: themeColor,
        lightGray: "#B0B0B0",
        lightPurple: "#B05CED",
        lightYellow: "#EDDB5C",
        lightRed: "#ED5C73",
        lightBlue: "#5CB0ED",
    };

    const colorPagination = colorPaginations[activeColor] || activeColor;

    // Define size options for pagination buttons
    const sizePagination =
        {
            // xs: 25,
            // sm: 30,
            // md: 35,
            // lg: 40,
            // xl: 45,
        }[size] || size;

    const lastPage = paginationRange[paginationRange.length - 1] as number;

    const variantType: "solid" | "flat" = variant === "flat" ? "flat" : "solid";

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
        ? (rounded as typeof validRoundedValues[number])
        : "md";

    return (
        <div className="flex gap-2">
            {totalCount > 0 && (
                <>
                    {/* Left Navigation */}
                    <Button
                        size={sizePagination}
                        className="text-xs"
                        color={colorMode === "light" ? "#BABCBD95" : "#4D535595"}
                        textcolor={colorMode === "light" ? "#171C1E" : "white"}
                        variant={variantType}
                        rounded={roundedType}
                        onClick={onPrevious}
                        disabled={currentPage === 1}
                    >
                        <TbChevronLeft />
                    </Button>

                    {paginationRange.map((pageNumber, index) => {
                        if (pageNumber === DOTS) {
                            return (
                                <Button
                                    key={index}
                                    size={sizePagination}
                                    className="text-xs"
                                    color={colorMode === "light" ? "#BABCBD95" : "#4D535595"}
                                    textcolor={colorMode === "light" ? "#171C1E" : "white"}
                                    variant={variantType}
                                    rounded={roundedType}
                                    disabled
                                >
                                    <TbDots />
                                </Button>
                            );
                        }

                        return (
                            <Button
                                key={index}
                                size={sizePagination}
                                className="text-xs"
                                color={
                                    pageNumber === currentPage
                                        ? colorPagination
                                        : colorMode === "light"
                                            ? "#BABCBD95"
                                            : "#4D535595"
                                }
                                textcolor={
                                    pageNumber === currentPage
                                        ? "white"
                                        : colorMode === "light"
                                            ? "#171C1E"
                                            : "white"
                                }
                                variant={variantType}
                                rounded={roundedType}
                                onClick={() => onPageChange(pageNumber as number)}
                            >
                                {pageNumber}
                            </Button>
                        );
                    })}

                    {/* Right Navigation */}
                    <Button
                        size={sizePagination}
                        className="text-xs"
                        color={colorMode === "light" ? "#BABCBD95" : "#4D535595"}
                        textcolor={colorMode === "light" ? "#171C1E" : "white"}
                        variant={variantType}
                        rounded={roundedType}
                        disabled={currentPage === lastPage}
                        onClick={onNext}
                    >
                        <TbChevronRight />
                    </Button>
                </>
            )}
        </div>
    );
};

export default Pagination;
