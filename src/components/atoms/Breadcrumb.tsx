import React from "react";

interface BreadcrumbItem {
    label: string;
    href?: string;
}

interface BreadcrumbProps {
    items: BreadcrumbItem[];
    separator?: "slash" | "arrow" | "dot";
    variant?: 'separator' | 'arrowed';
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({
    items,
    separator,
    variant = "separator",
}) => {
    const renderSeparator = () => {
        switch (separator) {
            case "arrow":
                return <span className="before:content-['>'] before:px-1.5 text-[#FAFAFA90]"> </span>;
            case "dot":
                return <span className="before:content-['•'] before:px-1.5 text-[#FAFAFA90]"> </span>;
            case "slash":
                return <span className="before:content-['/'] before:px-1.5 text-[#FAFAFA90]"> </span>;
            default:
                return;
        }
    };

    return (
        <div>
            {variant === 'separator' && (
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
            )}
            {variant === 'arrowed' && (
                <ol className="flex text-white font-semibold">
                    <li className="bg-[#1A1A1A]">
                        <button className="p-1.5 pl-3 pr-2 relative h-full flex items-center before:absolute before:-right-[15px] before:inset-y-0 before:m-auto before:w-0 before:h-0 before:border-[18px] before:border-l-[15px] before:border-r-0 before:border-t-transparent before:border-b-transparent before:border-l-[#1A1A1A] before:z-[1] hover:text-white/70">
                            Home
                        </button>
                    </li>
                    <li className="bg-[#ebedf2]">
                        <button className="bg-[#333] text-white p-1.5 pl-6 pr-2 relative h-full flex items-center before:absolute before:-right-[15px] before:inset-y-0 before:m-auto before:w-0 before:h-0 before:border-[18px] before:border-l-[15px] before:border-r-0 before:border-t-transparent before:border-b-transparent before:border-l-[#333] before:z-[1]">
                            Components
                        </button>
                    </li>
                    <li className="bg-[#1A1A1A]">
                        <button className="p-1.5 px-3 pl-6 relative h-full flex items-center before:absolute before:-right-[15px] before:inset-y-0 before:m-auto before:w-0 before:h-0 before:border-[18px] before:border-l-[15px] before:border-r-0 before:border-t-transparent before:border-b-transparent before:border-l-[#1A1A1A] before:z-[1] hover:text-white/70">
                            UI Kit
                        </button>
                    </li>
                </ol>
            )}
        </div>
    );
};

export default Breadcrumb;
