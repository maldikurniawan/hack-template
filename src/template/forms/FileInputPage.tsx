import { Card, FileInput, FileInputForm, TerminalCard } from "@/components";
import { ThemeContext } from "@/context/ThemeContext";
import { motion } from "framer-motion";
import { useContext, useState } from "react";

const FileInputPage = () => {
	const { themeColor } = useContext(ThemeContext);

	const [value, setValue] = useState([]);
	const [valueMultiple, setValueMultiple] = useState([]);

	const [valueForm, setValueForm] = useState([]);

	return (
		<motion.div
			className="grid grid-cols-1 gap-4"
			initial={{ y: window.innerHeight, opacity: 0 }}
			animate={{ y: 0, opacity: 1 }}
			transition={{ duration: 0.3 }}
			viewport={{ once: true }}
		>
			{/* Basic */}
			<TerminalCard title="Basic">
				<div className="text-sm mb-3">
					The <span style={{ color: themeColor }}>FileInput</span> component is
					used to upload files.
				</div>

				<div className="flex flex-wrap gap-2">
					<FileInput value={value} setValue={setValue} />
				</div>
			</TerminalCard>

			{/* Multiple */}
			<TerminalCard title="Multiple">
				<div className="text-sm mb-3">
					The <span style={{ color: themeColor }}>multiple</span> prop is used
					to allow multiple files to be uploaded.
				</div>

				<div className="flex flex-wrap gap-2">
					<FileInput
						value={valueMultiple}
						setValue={setValueMultiple}
						multiple
					/>
				</div>
			</TerminalCard>

			<Card variant="secondary">
				<FileInputForm value={valueForm} setValue={setValueForm} />
			</Card>
		</motion.div>
	);
};

export default FileInputPage;
