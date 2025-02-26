import { Collapsible, TerminalCard } from "@/components";
import { ThemeContext } from "@/context/ThemeContext";
import { useContext } from "react";
import { motion } from "framer-motion";
import { BiCheck } from "react-icons/bi";
import {
	HiOutlineExclamation,
	HiOutlineExclamationCircle,
} from "react-icons/hi";

const CollapsiblePage = () => {
	const { themeColor } = useContext(ThemeContext);
	return (
		<motion.div className="grid grid-cols-1 sm:grid-cols-2 gap-4"
			initial={{ y: window.innerHeight, opacity: 0 }}
			animate={{ y: 0, opacity: 1 }}
			transition={{ duration: 0.3 }}
			viewport={{ once: true }}
		>
			{/* Collapsible */}
			<TerminalCard title="Collapsible">
				<div className="text-sm mb-3">
					Collapsible or known as Accordion is a component that can be used to
					hide or show content.
				</div>

				<div className="flex flex-wrap gap-2">
					<Collapsible>
						{["Item 1", "Item 2", "Item 3"].map((item, index) => (
							<Collapsible.Item key={index} header={item}>
								Lorem ipsum dolor sit amet consectetur adipisicing elit.
								Quisquam, voluptatum.
							</Collapsible.Item>
						))}
					</Collapsible>
				</div>
			</TerminalCard>

			{/* Multiple */}
			<TerminalCard title="Multiple">
				<div className="text-sm mb-3">
					The <span style={{ color: themeColor }}>multiple</span> prop is used
					to allow multiple items to be opened at the same time.
				</div>

				<div className="flex flex-wrap gap-2">
					<Collapsible multiple>
						{["Item 1", "Item 2", "Item 3"].map((item, index) => (
							<Collapsible.Item key={index} header={item}>
								Lorem ipsum dolor sit amet consectetur adipisicing elit.
								Quisquam, voluptatum.
							</Collapsible.Item>
						))}
					</Collapsible>
				</div>
			</TerminalCard>

			{/* Header */}
			<TerminalCard title="Header">
				<div className="text-sm mb-3">
					The <span style={{ color: themeColor }}>header</span> prop is used to
					set the header of the collapsible item.
				</div>

				<div className="flex flex-wrap gap-2">
					<Collapsible>
						<Collapsible.Item header={"Header Text"}>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
							voluptatum.
						</Collapsible.Item>
						<Collapsible.Item
							header={<div className="text-green-500">Change Color</div>}
						>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
							voluptatum.
						</Collapsible.Item>
						<Collapsible.Item
							header={<div className="font-semibold">Font Weight</div>}
						>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
							voluptatum.
						</Collapsible.Item>
					</Collapsible>
				</div>
			</TerminalCard>

			{/* Icon */}
			<TerminalCard title="Icon">
				<div className="text-sm mb-3">
					The <span style={{ color: themeColor }}>icon</span> prop is used to
					custom icon of the collapsible item.
				</div>

				<div className="flex flex-wrap gap-2">
					<Collapsible>
						<Collapsible.Item
							header={"Submited Report"}
							icon={<BiCheck className="text-green-500" />}
						>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
							voluptatum.
						</Collapsible.Item>
						<Collapsible.Item
							header={"Server Down"}
							icon={<HiOutlineExclamationCircle className="text-red-500" />}
						>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
							voluptatum.
						</Collapsible.Item>
						<Collapsible.Item
							header={"Warning System"}
							icon={<HiOutlineExclamation className="text-yellow-500" />}
						>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
							voluptatum.
						</Collapsible.Item>
					</Collapsible>
				</div>
			</TerminalCard>

			{/* Initial Expanded */}
			<TerminalCard title="Initial Expanded">
				<div className="text-sm mb-3">
					The <span style={{ color: themeColor }}>initialexpanded</span> prop is
					used to make the collapsible item open by default. It can be used in a
					Collapsible or Collapsible.Item component.
				</div>

				<div className="flex flex-wrap gap-2">
					<Collapsible>
						<Collapsible.Item initialExpanded header={"Item 1"}>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
							voluptatum.
						</Collapsible.Item>
						<Collapsible.Item header={"Item 2"}>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
							voluptatum.
						</Collapsible.Item>
						<Collapsible.Item header={"Item 3"}>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
							voluptatum.
						</Collapsible.Item>
					</Collapsible>
				</div>
			</TerminalCard>

			{/* Disabled */}
			<TerminalCard title="Disabled">
				<div className="text-sm mb-3">
					The <span style={{ color: themeColor }}>disabled</span> prop is used
					to make the collapsible item disabled.
				</div>

				<div className="flex flex-wrap gap-2">
					<Collapsible>
						<Collapsible.Item disabled initialExpanded header={"Disabled Open"}>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
							voluptatum.
						</Collapsible.Item>
						<Collapsible.Item disabled header={"Disabled"}>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
							voluptatum.
						</Collapsible.Item>
					</Collapsible>
				</div>
			</TerminalCard>
		</motion.div>
	);
};

export default CollapsiblePage;
