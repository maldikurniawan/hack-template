import { Breadcrumb, Card } from "@/components"

const BreadcrumbPage = () => {
    const breadcrumbItems = [
        { label: "Home", href: "/" },
        { label: "Components", href: "/" },
        { label: "UI Kit" },
    ];

    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <Card>
                <div className="text-lg font-normal mb-4">Basic</div>
                <Breadcrumb items={breadcrumbItems} separator="slash" />
            </Card>
            <Card>
                <div className="text-lg font-normal mb-4">Arrowed</div>
                <Breadcrumb items={breadcrumbItems} separator="arrow" />
            </Card>
            <Card>
                <div className="text-lg font-normal mb-4">Dotted</div>
                <Breadcrumb items={breadcrumbItems} separator="dot" />
            </Card>
            <Card>
                <div className="text-lg font-normal mb-4">Arrowed Background</div>
                <Breadcrumb items={breadcrumbItems} variant="arrowed" />
            </Card>
        </div>
    )
}

export default BreadcrumbPage