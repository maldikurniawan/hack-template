import { Breadcrumb, TerminalCard } from "@/components"
import { motion } from "framer-motion";

const BreadcrumbPage = () => {
    const breadcrumbItems = [
        { label: "Home", href: "/" },
        { label: "UI Kit", href: "/" },
        { label: "Breadcrumb" },
    ];

    return (
        <motion.div
            className="grid grid-cols-1 lg:grid-cols-2 gap-4"
            initial={{ y: window.innerHeight, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.3 }}
            viewport={{ once: true }}
        >
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
        </motion.div>
    )
}

export default BreadcrumbPage