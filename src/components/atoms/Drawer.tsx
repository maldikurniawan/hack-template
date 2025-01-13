import { ThemeContext } from "@/context/ThemeContext";
import { useOnClickOutside } from "@/hooks/useOnClickOutside";
import { useWindowSize } from "@/hooks/useWindowSize";
import { ReactNode, Dispatch, SetStateAction, useContext, useRef } from "react";
import { TbX } from "react-icons/tb";
import { ButtonRipple } from "..";

/**
 * Drawer component props type
 */
interface DrawerProps {
    title: string;
    description: string;
    width?: string;
    open: boolean;
    setOpen: Dispatch<SetStateAction<boolean>>;
    dismiss: boolean;
    children: ReactNode;
}

const Drawer = ({
    title,
    description,
    width = "380px",
    open,
    setOpen,
    dismiss,
    children,
}: DrawerProps) => {
    const { width: windowWidth, height: windowHeight } = useWindowSize();
    const { colorMode } = useContext(ThemeContext);
    const ref = useRef<HTMLDivElement | null>(null);

    useOnClickOutside(ref, () => {
        if (dismiss) {
            setOpen(false);
        }
    });

    let style;
    if (windowWidth === 0) {
        return null;
    }

    if (windowWidth < 768) {
        style = {
            width: "100%",
            top: open ? "0" : `${windowHeight}px`,
            left: "0",
        };
    } else {
        style = {
            width: width,
            right: open ? "0" : `-${width}`,
            bottom: "0",
        };
    }

    return (
        <div
            ref={ref}
            className={`fixed z-50 bg-[#001e00]/90 backdrop-blur-sm text-white h-screen shadow-2xl transition-[right,top] duration-500`}
            style={{
                ...style,
            }}
        >
            <div className="sticky top-0 p-4 border-b border-white flex items-center justify-between">
                <div>
                    <div className="leading-none">{title}</div>
                    <div className="text-xs text-white leading-none">{description}</div>
                </div>
                <ButtonRipple
                    color={colorMode === "light" ? "#00000030" : "#ffffff30"}
                    className="p-2 rounded-full transition-[background]"
                    onClick={() => setOpen(false)}
                >
                    <TbX />
                </ButtonRipple>
            </div>
            <div
                style={{
                    height: `calc(100vh - 64px)`,
                }}
                className="overflow-y-auto custom-scroll"
            >
                {children}
            </div>
        </div>
    );
};

Drawer.defaultProps = {
    title: "Drawer",
    description: "Drawer description",
    width: "380px",
    open: false,
    dismiss: true,
};

export default Drawer;
