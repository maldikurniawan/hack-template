import { TerminalCard, MonthPicker } from "@/components";
import { ThemeContext } from "@/context/ThemeContext";
import { useContext, useState } from "react";
import { TbCalendar, TbDownload, TbRecordMail } from "react-icons/tb";

const MonthPickerPage = () => {
	const { themeColor } = useContext(ThemeContext);

	const [value, setValue] = useState("");

	const [colorMonthPicker, setColorMonthPicker] = useState([
		{
			color: "lightGreen",
			label: "Primary",
			value: "",
		},
		{
			color: "lightGray",
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

	const [roundedMonthPicker, setRoundedMonthPicker] = useState([
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

	const [variantMonthPicker, setVariantMonthPicker] = useState([
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

	const [densityMonthPicker, setDensityMonthPicker] = useState([
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
		<div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-20">
			{/* Color */}
			<TerminalCard title="Color">
				<div className="text-sm mb-3">
					The <span style={{ color: themeColor }}>color</span> prop is used to
					set the color of the Select.
				</div>

				<div className="grid grid-cols-2 gap-2">
					{colorMonthPicker.map((item, index) => (
						<MonthPicker
							key={index}
							color={item.color}
							value={item.value}
							label={item.label}
							placeholder={item.label}
							variant="outline"
							onChange={(value: any) => {
								let newColorMonthPicker = [...colorMonthPicker];
								newColorMonthPicker[index].value = value;
								setColorMonthPicker(newColorMonthPicker);
							}}
						/>
					))}
				</div>
			</TerminalCard>

			{/* Density */}
			<TerminalCard title="Density">
				<div className="text-sm mb-3">
					The <span style={{ color: themeColor }}>density</span> prop is used to
					set the density of the MonthPicker.
				</div>

				<div className="flex flex-col gap-2">
					{densityMonthPicker.map((item, itemIdx) => (
						<MonthPicker
							key={itemIdx}
							placeholder={item.label}
							label={item.label}
							value={item.value}
							density={item.density}
							variant="outline"
							onChange={(value: any) => {
								const newItems = [...densityMonthPicker];
								newItems[itemIdx].value = value;
								setDensityMonthPicker(newItems);
							}}
						/>
					))}
				</div>
			</TerminalCard>

			{/* Rounded */}
			<TerminalCard title="Rounded">
				<div className="text-sm mb-3">
					The <span style={{ color: themeColor }}>rounded</span> prop is used to
					set the rounded of the MonthPicker.
				</div>

				<div className="grid grid-cols-2 gap-2">
					{roundedMonthPicker.map((item, index) => (
						<MonthPicker
							key={index}
							placeholder={item.label}
							label={item.label}
							variant="outline"
							value={item.value}
							rounded={item.rounded}
							onChange={(e: any) => {
								const newRoundedMonthPicker = [...roundedMonthPicker];
								newRoundedMonthPicker[index].value = e;
								setRoundedMonthPicker(newRoundedMonthPicker);
							}}
						/>
					))}
				</div>
			</TerminalCard>

			{/* Variant */}
			<TerminalCard title="Variant">
				<div className="text-sm mb-3">
					The <span style={{ color: themeColor }}>variant</span> prop is used to
					set the variant of the MonthPicker.
				</div>

				<div className="flex flex-col gap-2">
					{variantMonthPicker.map((item, index) => (
						<MonthPicker
							key={index}
							placeholder={item.label}
							label={item.label}
							variant={item.variant}
							value={item.value}
							onChange={(e: any) => {
								const newVariantMonthPicker = [...variantMonthPicker];
								newVariantMonthPicker[index].value = e;
								setVariantMonthPicker(newVariantMonthPicker);
							}}
						/>
					))}
				</div>
			</TerminalCard>

			{/* Disabled */}
			<TerminalCard title="Disabled">
				<div className="text-sm mb-3">
					The <span style={{ color: themeColor }}>disabled</span> prop is used
					to disable the MonthPicker.
				</div>

				<div className="flex flex-col gap-2">
					<MonthPicker
						placeholder="Disabled"
						label="Disabled"
						variant="basic"
						disabled
					/>
					<MonthPicker
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
					set the note of the MonthPicker.
					<br />
					The <span style={{ color: themeColor }}>error</span> prop is used to
					set the error of the MonthPicker.
				</div>

				<div className="grid grid-cols-2 gap-2">
					<MonthPicker
						placeholder="Note"
						label="Note"
						note="This is a note"
						value={value}
						onChange={(value: any) => setValue(value)}
					/>
					<MonthPicker
						placeholder="Error"
						label="Error"
						error="This is an error"
						value={value}
						onChange={(value: any) => setValue(value)}
					/>
				</div>
			</TerminalCard>

			{/* Prefix & Suffix */}
			<TerminalCard title="Prefix & Suffix">
				<div className="text-sm mb-3">
					The <span style={{ color: themeColor }}>prefix</span> prop is used to
					set the prefix of the MonthPicker.
					<br />
					The <span style={{ color: themeColor }}>suffix</span> prop is used to
					set the suffix of the MonthPicker.
				</div>

				<div className="flex flex-col gap-2">
					<MonthPicker
						prefix={<TbCalendar />}
						placeholder="Prefix"
						label="Prefix"
						value={value}
						onChange={(value: any) => setValue(value)}
					/>
					<MonthPicker
						suffix={<TbCalendar />}
						placeholder="Suffix"
						label="Suffix"
						setValue={setValue}
						value={value}
						onChange={(value: any) => setValue(value)}
					/>
				</div>
			</TerminalCard>

			{/* Prepend & Append */}
			<TerminalCard title="Prepend & Append">
				<div className="text-sm mb-3">
					The <span style={{ color: themeColor }}>prepend</span> prop is used to
					set the prepend of the MonthPicker.
					<br />
					The <span style={{ color: themeColor }}>append</span> prop is used to
					set the append of the MonthPicker.
				</div>

				<div className="flex flex-col gap-2">
					<MonthPicker
						prepend={<TbRecordMail />}
						placeholder="Prepend"
						label="Prepend"
						value={value}
						onChange={(value: any) => setValue(value)}
					/>
					<MonthPicker
						append={<TbDownload />}
						placeholder="Append"
						label="Append"
						value={value}
						onChange={(value: any) => setValue(value)}
					/>
				</div>
			</TerminalCard>
		</div>
	);
};

export default MonthPickerPage;
