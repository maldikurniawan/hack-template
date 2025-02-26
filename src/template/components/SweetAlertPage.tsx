import { SweetAlert, TerminalCard } from "@/components"
import { motion } from "framer-motion";

const SweetAlertPage = () => {
    return (
        <motion.div
            className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4"
            initial={{ y: window.innerHeight, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.3 }}
            viewport={{ once: true }}
        >
            <TerminalCard title="Basic Message">
                <SweetAlert variant={1}>
                    <div className="bg-lightGreen shadow hover:shadow-none shadow-lightGreen text-black px-4 w-fit font-bold mx-auto">
                        Show Alert
                    </div>
                </SweetAlert>
            </TerminalCard>
            <TerminalCard title="Success Message">
                <SweetAlert variant={2}>
                    <div className="bg-lightGray shadow hover:shadow-none shadow-lightGray text-black px-4 w-fit font-bold mx-auto">
                        Show Alert
                    </div>
                </SweetAlert>
            </TerminalCard>
            <TerminalCard title="Dynamic Queue">
                <SweetAlert variant={3}>
                    <div className="bg-lightPurple shadow hover:shadow-none shadow-lightPurple text-black px-4 w-fit font-bold mx-auto">
                        Show Alert
                    </div>
                </SweetAlert>
            </TerminalCard>
            <TerminalCard title="Chaining Modals">
                <SweetAlert variant={4}>
                    <div className="bg-lightRed shadow hover:shadow-none shadow-lightRed text-black px-4 w-fit font-bold mx-auto">
                        Show Alert
                    </div>
                </SweetAlert>
            </TerminalCard>
            <TerminalCard title="Custom Image">
                <SweetAlert variant={5}>
                    <div className="bg-lightYellow shadow hover:shadow-none shadow-lightYellow text-black px-4 w-fit font-bold mx-auto">
                        Show Alert
                    </div>
                </SweetAlert>
            </TerminalCard>
            <TerminalCard title="Delete Message">
                <SweetAlert variant={6}>
                    <div className="bg-lightBlue shadow hover:shadow-none shadow-lightBlue text-black px-4 w-fit font-bold mx-auto">
                        Show Alert
                    </div>
                </SweetAlert>
            </TerminalCard>
            <TerminalCard title="Delete Message V2">
                <SweetAlert variant={7}>
                    <div className="bg-lightGreen shadow hover:shadow-none shadow-lightGreen text-black px-4 w-fit font-bold mx-auto">
                        Show Alert
                    </div>
                </SweetAlert>
            </TerminalCard>
            <TerminalCard title="With Footer">
                <SweetAlert variant={8}>
                    <div className="bg-lightGray shadow hover:shadow-none shadow-lightGray text-black px-4 w-fit font-bold mx-auto">
                        Show Alert
                    </div>
                </SweetAlert>
            </TerminalCard>
            <TerminalCard title="Mixin">
                <SweetAlert variant={9}>
                    <div className="bg-lightPurple shadow hover:shadow-none shadow-lightPurple text-black px-4 w-fit font-bold mx-auto">
                        Show Alert
                    </div>
                </SweetAlert>
            </TerminalCard>
        </motion.div>
    )
}

export default SweetAlertPage