import { TerminalCard, TextArea } from "@/components";
import { ThemeContext } from "@/context/ThemeContext";
import { useContext, useState } from "react";
import { motion } from "framer-motion";
import { TbDownload, TbRecordMail } from "react-icons/tb";

const TextAreaPage = () => {
	const { themeColor } = useContext(ThemeContext);

	const [value, setValue] = useState("");

	const [colorTextArea, setColorTextArea] = useState([
		{
			color: "lightGreen",
			label: "Primary",
			value: "",
		},
		{
			color: "lightGrey",
			label: "Base",
			value: "",
		},
		{
			color: "lightPurple",
			label: "Success",
			value: "",
		},
		{
			color: "lightYellow",
			label: "Warning",
			value: "",
		},
		{
			color: "lightRed",
			label: "Danger",
			value: "",
		},
		{
			color: "lightBlue",
			label: "Info",
			value: "",
		},
	]);

	const [roundedTextArea, setRoundedTextArea] = useState([
		{
			rounded: "none",
			label: "None",
			value: "",
		},
		{
			rounded: "sm",
			label: "sm",
			value: "",
		},
		{
			rounded: "md",
			label: "md",
			value: "",
		},
		{
			rounded: "lg",
			label: "lg",
			value: "",
		},
		{
			rounded: "xl",
			label: "xl",
			value: "",
		},
		{
			rounded: "2xl",
			label: "2xl",
			value: "",
		},
		{
			rounded: "3xl",
			label: "3xl",
			value: "",
		},
		{
			rounded: "4xl",
			label: "4xl",
			value: "",
		},
	]);

	const [sizeTextArea, setSizeTextArea] = useState([
		{
			size: "sm",
			label: "sm",
			value: "",
		},
		{
			size: "md",
			label: "md",
			value: "",
		},
		{
			size: "lg",
			label: "lg",
			value: "",
		},
		{
			size: "xl",
			label: "xl",
			value: "",
		},
	]);

	const [variantTextArea, setVariantTextArea] = useState([
		{
			variant: "basic",
			label: "Basic",
			value: "",
		},
		{
			variant: "outline",
			label: "Outline",
			value: "",
		},
		{
			variant: "filled",
			label: "Filled",
			value: "",
		},
		{
			variant: "underlined",
			label: "Underlined",
			value: "",
		},
	]);

	const [densityTextArea, setDensityTextArea] = useState([
		{
			density: "tight",
			label: "Tight",
			value: "",
		},
		{
			density: "normal",
			label: "Normal",
			value: "",
		},
		{
			density: "loose",
			label: "Loose",
			value: "",
		},
	]);

	return (
		<motion.div
			className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-20"
			initial={{ y: window.innerHeight, opacity: 0 }}
			animate={{ y: 0, opacity: 1 }}
			transition={{ duration: 0.3 }}
			viewport={{ once: true }}
		>
			{/* Color */}
			<TerminalCard title="Color">
				<div className="text-sm mb-3">
					The <span style={{ color: themeColor }}>color</span> prop is used to
					set the color of the TextArea.
				</div>

				<div className="grid grid-cols-2 gap-2">
					{colorTextArea.map((item, itemIdx) => (
						<TextArea
							key={itemIdx}
							color={item.color}
							variant="outline"
							label={item.label}
							value={item.value}
							onChange={(e) => {
								const newColorTextArea = [...colorTextArea];
								newColorTextArea[itemIdx].value = e.target.value;
								setColorTextArea(newColorTextArea);
							}}
						/>
					))}
				</div>
			</TerminalCard>

			{/* Density */}
			<TerminalCard title="Density">
				<div className="text-sm mb-3">
					The <span style={{ color: themeColor }}>density</span> prop is used to
					set the density of the TextArea.
				</div>

				<div className="flex flex-col gap-2">
					{densityTextArea.map((item, itemIdx) => (
						<TextArea
							key={itemIdx}
							variant="outline"
							density={item.density}
							label={item.label}
							value={item.value}
							onChange={(e) => {
								const newDensityTextArea = [...densityTextArea];
								newDensityTextArea[itemIdx].value = e.target.value;
								setDensityTextArea(newDensityTextArea);
							}}
						/>
					))}
				</div>
			</TerminalCard>

			{/* Rounded */}
			<TerminalCard title="Rounded">
				<div className="text-sm mb-3">
					The <span style={{ color: themeColor }}>rounded</span> prop is used to
					set the rounded of the TextArea.
				</div>

				<div className="grid grid-cols-2 gap-2">
					{roundedTextArea.map((item, itemIdx) => (
						<TextArea
							key={itemIdx}
							variant="outline"
							rounded={item.rounded}
							label={item.label}
							value={item.value}
							onChange={(e) => {
								const newRoundedTextArea = [...roundedTextArea];
								newRoundedTextArea[itemIdx].value = e.target.value;
								setRoundedTextArea(newRoundedTextArea);
							}}
						/>
					))}
				</div>
			</TerminalCard>

			{/* Size */}
			<TerminalCard title="Size">
				<div className="text-sm mb-3">
					The <span style={{ color: themeColor }}>size</span> prop is used to
					set the size of the TextArea.
				</div>

				<div className="flex flex-col gap-2">
					{sizeTextArea.map((item, itemIdx) => (
						<TextArea
							key={itemIdx}
							variant="outline"
							size={item.size}
							label={item.label}
							value={item.value}
							onChange={(e) => {
								const newSizeTextArea = [...sizeTextArea];
								newSizeTextArea[itemIdx].value = e.target.value;
								setSizeTextArea(newSizeTextArea);
							}}
						/>
					))}
				</div>
			</TerminalCard>

			{/* Variant */}
			<div className="col-span-full">
				<TerminalCard title="Variant">
					<div className="text-sm mb-3">
						The <span style={{ color: themeColor }}>variant</span> prop is used
						to set the variant of the TextArea.
					</div>

					<div className="flex flex-col gap-2">
						{variantTextArea.map((item, itemIdx) => (
							<TextArea
								key={itemIdx}
								variant={item.variant}
								placeholder={item.label}
								label={item.label}
								value={item.value}
								onChange={(e) => {
									const newVariantTextArea = [...variantTextArea];
									newVariantTextArea[itemIdx].value = e.target.value;
									setVariantTextArea(newVariantTextArea);
								}}
							/>
						))}
					</div>
				</TerminalCard>
			</div>

			{/* Disabled & Readonly */}
			<TerminalCard title="Disabled & Readonly">
				<div className="text-sm mb-3">
					The <span style={{ color: themeColor }}>disabled</span> prop is used
					to disable the TextArea.
					<br />
					The <span style={{ color: themeColor }}>readonly</span> prop is used
					to set the TextArea to readonly.
				</div>

				<div className="grid grid-cols-2 gap-2">
					<TextArea placeholder="Disabled" label="Disabled" disabled />
					<TextArea
						placeholder="Readonly"
						label="Readonly"
						readOnly
						value="Readonly"
					/>
				</div>
			</TerminalCard>

			{/* Note & Error */}
			<TerminalCard title="Note & Error">
				<div className="text-sm mb-3">
					The <span style={{ color: themeColor }}>note</span> prop is used to
					set the note of the TextArea.
					<br />
					The <span style={{ color: themeColor }}>error</span> prop is used to
					set the error of the TextArea.
				</div>

				<div className="grid grid-cols-2 gap-2">
					<TextArea
						placeholder="Note"
						label="Note"
						note="This is a note"
						value={value}
						onChange={(e) => setValue(e.target.value)}
					/>
					<TextArea
						placeholder="Error"
						label="Error"
						error="This is an error"
						value={value}
						onChange={(e) => setValue(e.target.value)}
					/>
				</div>
			</TerminalCard>

			{/* Prefix & Suffix */}
			<TerminalCard title="Prefix & Suffix">
				<div className="text-sm mb-3">
					The <span style={{ color: themeColor }}>prefix</span> prop is used to
					set the prefix of the TextArea.
					<br />
					The <span style={{ color: themeColor }}>suffix</span> prop is used to
					set the suffix of the TextArea.
				</div>

				<div className="flex flex-col gap-2">
					<TextArea
						prefix="https://"
						placeholder="Prefix"
						label="Prefix"
						value={value}
						onChange={(e) => setValue(e.target.value)}
					/>
					<TextArea
						suffix=".com"
						placeholder="Suffix"
						label="Suffix"
						value={value}
						onChange={(e) => setValue(e.target.value)}
					/>
				</div>
			</TerminalCard>

			{/* Prepend & Append */}
			<TerminalCard title="Prepend & Append">
				<div className="text-sm mb-3">
					The <span style={{ color: themeColor }}>prepend</span> prop is used to
					set the prepend of the TextArea.
					<br />
					The <span style={{ color: themeColor }}>append</span> prop is used to
					set the append of the TextArea.
				</div>

				<div className="flex flex-col gap-2">
					<TextArea
						prepend={<TbRecordMail />}
						placeholder="Prepend"
						label="Prepend"
						value={value}
						onChange={(e) => setValue(e.target.value)}
					/>
					<TextArea
						append={<TbDownload />}
						placeholder="Append"
						label="Append"
						value={value}
						onChange={(e) => setValue(e.target.value)}
					/>
				</div>
			</TerminalCard>
		</motion.div>
	);
};

export default TextAreaPage;
