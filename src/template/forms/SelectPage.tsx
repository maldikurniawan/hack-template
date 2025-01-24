import { TerminalCard, Select } from "@/components";
import { ThemeContext } from "@/context/ThemeContext";
import { motion } from "framer-motion";
import { useContext, useState } from "react";
import { TbDownload, TbRecordMail } from "react-icons/tb";

const SelectPage = () => {
	const { themeColor } = useContext(ThemeContext);

	const options = [
		{ value: "genshin", label: "Genshin Impact" },
		{ value: "botw", label: "Breath of the Wild" },
		{ value: "gta5", label: "Grand Theft Auto V" },
		{ value: "starrail", label: "Honkai: Star Rail" },
	];

	const [value, setValue] = useState("");
	const [multiValue, setMultiValue] = useState("");

	const [colorSelect, setColorSelect] = useState([
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

	const [roundedSelect, setRoundedSelect] = useState([
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

	const [sizeSelect, setSizeSelect] = useState([
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

	const [variantSelect, setVariantSelect] = useState([
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
	]);

	const [densitySelect, setDensitySelect] = useState([
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
					set the color of the Select.
				</div>

				<div className="grid grid-cols-2 gap-2">
					{colorSelect.map((item, index) => (
						<Select
							key={index}
							options={options}
							placeholder={item.label}
							label={item.label}
							variant="outline"
							value={item.value}
							color={item.color}
							onChange={(e: any) => {
								const newColorSelect = [...colorSelect];
								newColorSelect[index].value = e;
								setColorSelect(newColorSelect);
							}}
						/>
					))}
				</div>
			</TerminalCard>

			{/* Density */}
			<TerminalCard title="Density">
				<div className="text-sm mb-3">
					The <span style={{ color: themeColor }}>density</span> prop is used to
					set the density of the Select.
				</div>

				<div className="flex flex-col gap-2">
					{densitySelect.map((item, index) => (
						<Select
							key={index}
							options={options}
							placeholder={item.label}
							label={item.label}
							variant="outline"
							value={item.value}
							density={item.density}
							onChange={(e: any) => {
								const newDensitySelect = [...densitySelect];
								newDensitySelect[index].value = e;
								setDensitySelect(newDensitySelect);
							}}
						/>
					))}
				</div>
			</TerminalCard>

			{/* Rounded */}
			<TerminalCard title="Rounded">
				<div className="text-sm mb-3">
					The <span style={{ color: themeColor }}>rounded</span> prop is used to
					set the rounded of the Select.
				</div>

				<div className="grid grid-cols-2 gap-2">
					{roundedSelect.map((item, index) => (
						<Select
							key={index}
							options={options}
							placeholder={item.label}
							label={item.label}
							variant="outline"
							value={item.value}
							rounded={item.rounded}
							onChange={(e: any) => {
								const newRoundedSelect = [...roundedSelect];
								newRoundedSelect[index].value = e;
								setRoundedSelect(newRoundedSelect);
							}}
						/>
					))}
				</div>
			</TerminalCard>

			{/* Size */}
			<TerminalCard title="Size">
				<div className="text-sm mb-3">
					The <span style={{ color: themeColor }}>size</span> prop is used to
					set the size of the Select.
				</div>

				<div className="flex flex-col gap-2">
					{sizeSelect.map((item, index) => (
						<Select
							key={index}
							options={options}
							placeholder={item.label}
							label={item.label}
							variant="outline"
							value={item.value}
							size={item.size}
							onChange={(e: any) => {
								const newSizeSelect = [...sizeSelect];
								newSizeSelect[index].value = e;
								setSizeSelect(newSizeSelect);
							}}
						/>
					))}
				</div>
			</TerminalCard>

			{/* Variant */}
			<TerminalCard title="Variant">
				<div className="text-sm mb-3">
					The <span style={{ color: themeColor }}>variant</span> prop is used to
					set the variant of the Select.
				</div>

				<div className="flex flex-col gap-2">
					{variantSelect.map((item, index) => (
						<Select
							key={index}
							options={options}
							placeholder={item.label}
							label={item.label}
							variant={item.variant}
							value={item.value}
							onChange={(e: any) => {
								const newVariantSelect = [...variantSelect];
								newVariantSelect[index].value = e;
								setVariantSelect(newVariantSelect);
							}}
						/>
					))}
				</div>
			</TerminalCard>

			{/* Disabled */}
			<TerminalCard title="Disabled">
				<div className="text-sm mb-3">
					The <span style={{ color: themeColor }}>disabled</span> prop is used
					to disable the Select.
				</div>

				<div className="flex flex-col gap-2">
					<Select
						options={options}
						placeholder="Disabled"
						label="Disabled"
						variant="basic"
						disabled
					/>
					<Select
						options={options}
						placeholder="Disabled"
						label="Disabled"
						variant="outline"
						disabled
					/>
				</div>
			</TerminalCard>

			{/* Note & Error */}
			<TerminalCard title="Note & Error">
				<div className="text-sm mb-3">
					The <span style={{ color: themeColor }}>note</span> prop is used to
					set the note of the Select.
					<br />
					The <span style={{ color: themeColor }}>append</span> prop is used to
					set the error of the Select.
				</div>

				<div className="grid grid-cols-2 gap-2">
					<Select
						options={options}
						placeholder={"Note"}
						label={"Note"}
						note={"This is a note"}
						variant={"outline"}
						value={value}
						onChange={(e) => setValue(e)}
					/>
					<Select
						options={options}
						placeholder={"Error"}
						label={"Error"}
						error={"This is an error"}
						variant={"outline"}
						value={value}
						onChange={(e) => setValue(e)}
					/>
				</div>
			</TerminalCard>

			{/* Prepend & Append */}
			<TerminalCard title="Prepend & Append">
				<div className="text-sm mb-3">
					The <span style={{ color: themeColor }}>prepend</span> prop is used to
					set the prepend of the Select.
					<br />
					The <span style={{ color: themeColor }}>append</span> prop is used to
					set the append of the Select.
				</div>

				<div className="flex flex-col gap-2">
					<Select
						options={options}
						placeholder={"Prepend"}
						label={"Prepend"}
						variant={"outline"}
						value={value}
						onChange={(e) => setValue(e)}
						prepend={<TbDownload />}
					/>
					<Select
						options={options}
						placeholder={"Append"}
						label={"Append"}
						variant={"outline"}
						value={value}
						onChange={(e) => setValue(e)}
						append={<TbRecordMail />}
					/>
				</div>
			</TerminalCard>

			{/* Multi */}
			<TerminalCard title="Multi">
				<div className="text-sm mb-3">
					The <span style={{ color: themeColor }}>multi</span> prop is used to
					set multiple values of the Select.
				</div>

				<Select
					multi
					options={options}
					placeholder={"Multi"}
					label={"Multi"}
					variant={"outline"}
					value={multiValue}
					onChange={(e) => setMultiValue(e)}
				/>
			</TerminalCard>

			{/* Creatable */}
			<TerminalCard title="Creatable">
				<div className="text-sm mb-3">
					The <span style={{ color: themeColor }}>creatable</span> prop is used
					to set the creatable of the Select.
				</div>

				<Select
					creatable
					multi
					options={options}
					placeholder={"Creatable"}
					label={"Creatable"}
					variant={"outline"}
					value={multiValue}
					onChange={(e) => setMultiValue(e)}
				/>
			</TerminalCard>

			{/* Clearable */}
			<TerminalCard title="Clearable">
				<div className="text-sm mb-3">
					The <span style={{ color: themeColor }}>clearable</span> prop is used
					to set the clearable of the Select.
				</div>

				<Select
					clearable
					options={options}
					placeholder={"Clearable"}
					label={"Clearable"}
					variant={"outline"}
					value={value}
					onChange={(e) => setValue(e)}
				/>
			</TerminalCard>

			{/* Searchable */}
			<TerminalCard title="Searchable">
				<div className="text-sm mb-3">
					The <span style={{ color: themeColor }}>searchable</span> prop is used
					to set the searchable of the Select.
				</div>

				<Select
					searchable
					options={options}
					placeholder={"Searchable"}
					label={"Searchable"}
					variant={"outline"}
					value={value}
					onChange={(e) => setValue(e)}
				/>
			</TerminalCard>
		</motion.div>
	);
};

export default SelectPage;
