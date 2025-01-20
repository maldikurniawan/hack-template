import { ThemeContext } from "@/context/ThemeContext";
import { Accordion, AccordionItem } from "@szhsin/react-accordion";
import { useContext, ReactNode, FC } from "react";
import { FiChevronRight } from "react-icons/fi";

interface CollapsibleProps {
    multiple?: boolean;
    initialExpanded?: boolean;
    children: ReactNode;
}

const Collapsible: FC<CollapsibleProps> & { Item: FC<CollapsibleItemProps> } = ({ multiple, initialExpanded, children }) => {
    return (
        <Accordion
            allowMultiple={multiple}
            initialEntered={initialExpanded}
            className="w-full"
            transition
            transitionTimeout={300}
        >
            {children}
        </Accordion>
    );
};

interface CollapsibleItemProps {
    header: ReactNode;
    children: ReactNode;
    icon?: ReactNode;
    initialExpanded?: boolean;
    disabled?: boolean;
}

const CollapsibleItem: FC<CollapsibleItemProps> = ({
    header,
    children,
    icon,
    initialExpanded,
    disabled,
}) => {
    const { themeSkin } = useContext(ThemeContext);

    return (
        <AccordionItem
            disabled={disabled}
            initialEntered={initialExpanded}
            className={`text-sm mb-2 ${themeSkin === "default"
                ? "border border-[#333] bg-[#1a1a1a]"
                : themeSkin
                }`}
            buttonProps={{
                className: "w-full text-left px-4 py-3 min-h-[42px]",
            }}
            contentProps={{
                className: "transition-all ease-in-out duration-300",
            }}
            header={({ state: { isEnter } }) => (
                <div className="flex items-center justify-between w-full">
                    {header}
                    {icon ? (
                        icon
                    ) : (
                        <FiChevronRight
                            className={`transition-transform duration-300 ${isEnter ? "rotate-90" : ""}`}
                        />
                    )}
                </div>
            )}
        >
            {typeof children === "string" ? (
                <div className="px-4 pb-3 text-sm">{children}</div>
            ) : (
                children
            )}
        </AccordionItem>
    );
};

Collapsible.Item = CollapsibleItem;

export default Collapsible;
