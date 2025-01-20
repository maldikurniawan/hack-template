import React from "react";

interface BreadcrumbItem {
    label: string;
    href?: string;
}

interface BreadcrumbProps {
    items: BreadcrumbItem[];
    separator?: "slash" | "arrow" | "dot";
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({ items, separator = "slash" }) => {
    const renderSeparator = () => {
        switch (separator) {
            case "arrow":
                return <span className="before:content-['→'] before:px-1.5 text-[#FAFAFA90]"> </span>;
            case "dot":
                return <span className="before:content-['•'] before:px-1.5 text-[#FAFAFA90]"> </span>;
            case "slash":
            default:
                return <span className="before:content-['/'] before:px-1.5 text-[#FAFAFA90]"> </span>;
        }
    };

    return (
        <div>
            <ol className="flex font-semibold">
                {items.map((item, index) => (
                    <li key={index} className="flex items-center">
                        {item.href ? (
                            <a href={item.href} className="text-[#FAFAFA90]">
                                {item.label}
                            </a>
                        ) : (
                            <span className="text-white">{item.label}</span>
                        )}
                        {index < items.length - 1 && renderSeparator()}
                    </li>
                ))}
            </ol>
        </div>
    );
};

export default Breadcrumb;
