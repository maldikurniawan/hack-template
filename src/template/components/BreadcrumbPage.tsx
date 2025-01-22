import { Breadcrumb, TerminalCard } from "@/components"

const BreadcrumbPage = () => {
    const breadcrumbItems = [
        { label: "Home", href: "/" },
        { label: "UI Kit", href: "/" },
        { label: "Breadcrumb" },
    ];

    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <TerminalCard title="Basic">
                <Breadcrumb items={breadcrumbItems} separator="slash" />
            </TerminalCard>
            <TerminalCard title="Arrowed">
                <Breadcrumb items={breadcrumbItems} separator="arrow" />
            </TerminalCard>
            <TerminalCard title="Dotted">
                <Breadcrumb items={breadcrumbItems} separator="dot" />
            </TerminalCard>
            <TerminalCard title="Arrowed Background">
                <Breadcrumb items={breadcrumbItems} variant="arrowed" />
            </TerminalCard>
        </div>
    )
}

export default BreadcrumbPage