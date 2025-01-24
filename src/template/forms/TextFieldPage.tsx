import { TerminalCard, TextField } from "@/components";
import { ThemeContext } from "@/context/ThemeContext";
import { useContext, useState } from "react";
import { motion } from "framer-motion";
import { TbDownload, TbRecordMail } from "react-icons/tb";

import "cleave.js/dist/addons/cleave-phone.id";

const TextFieldPage = () => {
	const { themeColor } = useContext(ThemeContext);

	const [value, setValue] = useState("");

	const [colorTextField, setColorTextField] = useState([
		{
			color: "lightGreen",
			label: "lightGreen",
			value: "",
		},
		{
			color: "lightGrey",
			label: "lightGrey",
			value: "",
		},
		{
			color: "lightPurple",
			label: "lightPurple",
			value: "",
		},
		{
			color: "lightYellow",
			label: "lightYellow",
			value: "",
		},
		{
			color: "lightRed",
			label: "lightRed",
			value: "",
		},
		{
			color: "lightBlue",
			label: "lightBlue",
			value: "",
		},
	]);

	const [roundedTextField, setRoundedTextField] = useState([
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

	const [sizeTextField, setSizeTextField] = useState([
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

	const [variantTextField, setVariantTextField] = useState([
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

	const [densityTextField, setDensityTextField] = useState([
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

	const [typeTextField, setTypeTextField] = useState([
		{
			type: "text",
			label: "Text",
			value: "",
		},
		{
			type: "number",
			label: "Number",
			value: "",
		},
		{
			type: "password",
			label: "Password",
			value: "",
		},
		{
			type: "date",
			label: "Date",
			value: "",
		},
		{
			type: "time",
			label: "Time",
			value: "",
		},
		{
			type: "datetime-local",
			label: "Datetime-local",
			value: "",
		},
		{
			type: "month",
			label: "Month",
			value: "",
		},
		{
			type: "week",
			label: "Week",
			value: "",
		},
	]);

	const [cleaveTextField, setCleaveTextField] = useState([
		{
			cleaveOptions: {
				date: true,
				datePattern: ["Y", "m", "d"],
			},
			label: "Date",
			placeholder: "YYYY-MM-DD",
			value: "",
		},
		{
			cleaveOptions: {
				time: true,
				timePattern: ["h", "m"],
			},
			label: "Time",
			placeholder: "HH:MM",
			value: "",
		},
		{
			cleaveOptions: {
				numeral: true,
				numeralThousandsGroupStyle: "thousand",
			},
			label: "Numeral",
			placeholder: "1,000,000",
			value: "",
		},
		{
			cleaveOptions: {
				numeral: true,
				prefix: "Rp ",
				numeralThousandsGroupStyle: "thousand",
				rawValueTrimPrefix: true,
			},
			label: "Numeral with Trim Prefix",
			placeholder: "Rp 1,000,000",
			value: "",
		},
		{
			cleaveOptions: {
				blocks: [3, 3, 4],
			},
			label: "Blocks",
			placeholder: "123 456 7890",
			value: "",
		},
		{
			cleaveOptions: {
				blocks: [3, 3, 4],
				delimiter: "-",
			},
			label: "Blocks with Delimiter",
			placeholder: "123-456-7890",
			value: "",
		},
		{
			cleaveOptions: {
				blocks: [2, 3, 2, 4],
				delimiters: [".", ".", "-"],
			},
			label: "Blocks with Delimiters",
			placeholder: "12.345.67-890",
			value: "",
		},
		{
			cleaveOptions: {
				numericOnly: true,
			},
			label: "Numeric Only",
			placeholder: "1234567890",
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
					set the color of the TextField.
				</div>

				<div className="grid grid-cols-2 gap-2">
					{colorTextField.map((item, itemIdx) => (
						<TextField
							key={itemIdx}
							color={item.color}
							variant="outline"
							label={item.label}
							value={item.value}
							onChange={(e) => {
								const newColorTextField = [...colorTextField];
								newColorTextField[itemIdx].value = e.target.value;
								setColorTextField(newColorTextField);
							}}
						/>
					))}
				</div>
			</TerminalCard>

			{/* Density */}
			<TerminalCard title="Density">
				<div className="text-sm mb-3">
					The <span style={{ color: themeColor }}>density</span> prop is used to
					set the density of the TextField.
				</div>

				<div className="flex flex-col gap-2">
					{densityTextField.map((item, itemIdx) => (
						<TextField
							key={itemIdx}
							variant="outline"
							density={item.density}
							label={item.label}
							value={item.value}
							onChange={(e) => {
								const newDensityTextField = [...densityTextField];
								newDensityTextField[itemIdx].value = e.target.value;
								setDensityTextField(newDensityTextField);
							}}
						/>
					))}
				</div>
			</TerminalCard>

			{/* Rounded */}
			<TerminalCard title="Rounded">
				<div className="text-sm mb-3">
					The <span style={{ color: themeColor }}>rounded</span> prop is used to
					set the rounded of the TextField.
				</div>

				<div className="grid grid-cols-2 gap-2">
					{roundedTextField.map((item, itemIdx) => (
						<TextField
							key={itemIdx}
							variant="outline"
							rounded={item.rounded}
							label={item.label}
							value={item.value}
							onChange={(e) => {
								const newRoundedTextField = [...roundedTextField];
								newRoundedTextField[itemIdx].value = e.target.value;
								setRoundedTextField(newRoundedTextField);
							}}
						/>
					))}
				</div>
			</TerminalCard>

			{/* Size */}
			<TerminalCard title="Size">
				<div className="text-sm mb-3">
					The <span style={{ color: themeColor }}>size</span> prop is used to
					set the size of the TextField.
				</div>

				<div className="flex flex-col gap-2">
					{sizeTextField.map((item, itemIdx) => (
						<TextField
							key={itemIdx}
							variant="outline"
							size={item.size}
							label={item.label}
							value={item.value}
							onChange={(e) => {
								const newSizeTextField = [...sizeTextField];
								newSizeTextField[itemIdx].value = e.target.value;
								setSizeTextField(newSizeTextField);
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
						to set the variant of the TextField.
					</div>

					<div className="flex flex-col gap-2">
						{variantTextField.map((item, itemIdx) => (
							<TextField
								key={itemIdx}
								variant={item.variant}
								placeholder={item.label}
								label={item.label}
								value={item.value}
								onChange={(e) => {
									const newVariantTextField = [...variantTextField];
									newVariantTextField[itemIdx].value = e.target.value;
									setVariantTextField(newVariantTextField);
								}}
							/>
						))}
					</div>
				</TerminalCard>
			</div>

			{/* Cleave JS */}
			<TerminalCard title="Cleave JS">
				<div className="text-sm mb-3">
					Cleave JS is a library that allows you to format your input. use{" "}
					<span style={{ color: themeColor }}>cleaveOptions</span> prop to set
					the options of the cleave js. You can see the options of the cleave js{" "}
					<a
						style={{
							color: themeColor,
						}}
						className="underline"
						href="https://github.com/nosir/cleave.js/blob/master/doc/options.md"
						target="_blank"
						rel="noreferrer"
					>
						here
					</a>
					.
				</div>

				<div className="grid grid-cols-2 gap-2">
					{cleaveTextField.map((item, itemIdx) => (
						<TextField
							key={itemIdx}
							cleaveOptions={item.cleaveOptions}
							label={item.label}
							placeholder={item.placeholder}
							value={item.value}
							onChange={(e) => {
								const newCleaveTextField = [...cleaveTextField];
								newCleaveTextField[itemIdx].value = e.target.value;
								setCleaveTextField(newCleaveTextField);
							}}
						/>
					))}
				</div>
			</TerminalCard>

			{/* Type */}
			<TerminalCard title="Type">
				<div className="text-sm mb-3">
					The <span style={{ color: themeColor }}>type</span> prop is used to
					set the type of the TextField.
				</div>

				<div className="grid grid-cols-2 gap-2">
					{typeTextField.map((item, itemIdx) => (
						<TextField
							key={itemIdx}
							type={item.type}
							label={item.label}
							placeholder={item.label}
							value={item.value}
							onChange={(e) => {
								const newTypeTextField = [...typeTextField];
								newTypeTextField[itemIdx].value = e.target.value;
								setTypeTextField(newTypeTextField);
							}}
						/>
					))}
				</div>
			</TerminalCard>

			{/* Disabled & Readonly */}
			<TerminalCard title="Disabled & Readonly">
				<div className="text-sm mb-3">
					The <span style={{ color: themeColor }}>disabled</span> prop is used
					to disable the TextField.
					<br />
					The <span style={{ color: themeColor }}>readonly</span> prop is used
					to set the TextField to readonly.
				</div>

				<div className="grid grid-cols-2 gap-2">
					<TextField placeholder="Disabled" label="Disabled" disabled />
					<TextField
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
					set the note of the TextField.
					<br />
					The <span style={{ color: themeColor }}>error</span> prop is used to
					set the error of the TextField.
				</div>

				<div className="grid grid-cols-2 gap-2">
					<TextField
						placeholder="Note"
						label="Note"
						note="This is a note"
						value={value}
						onChange={(e) => setValue(e.target.value)}
					/>
					<TextField
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
					set the prefix of the TextField.
					<br />
					The <span style={{ color: themeColor }}>suffix</span> prop is used to
					set the suffix of the TextField.
				</div>

				<div className="flex flex-col gap-2">
					<TextField
						prefix="https://"
						placeholder="Prefix"
						label="Prefix"
						value={value}
						onChange={(e) => setValue(e.target.value)}
					/>
					<TextField
						suffix=".com"
						placeholder="Suffix"
						label="Suffix"
						setValue={setValue}
						value={value}
						onChange={(e) => setValue(e.target.value)}
					/>
				</div>
			</TerminalCard>

			{/* Prepend & Append */}
			<TerminalCard title="Prepend & Append">
				<div className="text-sm mb-3">
					The <span style={{ color: themeColor }}>prepend</span> prop is used to
					set the prepend of the TextField.
					<br />
					The <span style={{ color: themeColor }}>append</span> prop is used to
					set the append of the TextField.
				</div>

				<div className="flex flex-col gap-2">
					<TextField
						prepend={<TbRecordMail />}
						placeholder="Prepend"
						label="Prepend"
						value={value}
						onChange={(e) => setValue(e.target.value)}
					/>
					<TextField
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

export default TextFieldPage;
