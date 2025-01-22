import { Checkbox, TerminalCard } from "@/components";
import { ThemeContext } from "@/context/ThemeContext";
import { useContext, useState } from "react";

const CheckboxPage = () => {
	const { themeColor } = useContext(ThemeContext);

	const [checkedColor, setColor] = useState([
		{
			color: "lightGreen",
			checked: true,
		},
		{
			color: "lightGray",
			checked: true,
		},
		{
			color: "lightPurple",
			checked: true,
		},
		{
			color: "lightYellow",
			checked: true,
		},
		{
			color: "lightRed",
			checked: true,
		},
		{
			color: "lightBlue",
			checked: true,
		},
	]);

	const [checked, setChecked] = useState(false);

	const [checkedSize, setCheckedSize] = useState([
		{
			size: "sm",
			checked: false,
		},
		{
			size: "md",
			checked: false,
		},
		{
			size: "lg",
			checked: false,
		},
		{
			size: "xl",
			checked: false,
		},
	]);

	return (
		<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
			{/* Color */}
			<TerminalCard title="Color">
				<div className="text-sm mb-3">
					The <span style={{ color: themeColor }}>color</span> prop is used to
					set the color of the checkbox.
				</div>

				<div className="flex flex-wrap gap-2">
					{checkedColor.map((item, itemIdx) => (
						<Checkbox
							key={itemIdx}
							color={item.color}
							id={itemIdx + item.color}
							label={item.color}
							checked={item.checked}
							onChange={() => {
								let temp = [...checkedColor];
								temp[itemIdx].checked = !temp[itemIdx].checked;
								setColor(temp);
							}}
						/>
					))}
				</div>
			</TerminalCard>

			{/* Label */}
			<TerminalCard title="Label">
				<div className="text-sm mb-3">
					The <span style={{ color: themeColor }}>label</span> prop is used to
					set the label of the checkbox.
				</div>

				<div className="flex flex-wrap gap-2">
					<Checkbox
						label={`Label ${checked ? "True" : "False"}`}
						id="checkbox"
						checked={checked}
						onChange={() => setChecked(!checked)}
					/>
				</div>
			</TerminalCard>

			{/* Disabled */}
			<TerminalCard title="Disabled">
				<div className="text-sm mb-3">
					The <span style={{ color: themeColor }}>disabled</span> prop is used
					to disable the checkbox.
				</div>

				<div className="flex flex-wrap gap-2 items-end">
					<Checkbox
						label={checked ? "True" : "False"}
						id="checkbox"
						checked={checked}
						onChange={() => setChecked(!checked)}
					/>
					<Checkbox
						disabled
						label={"Disabled"}
						id="checkbox"
						checked={checked}
						onChange={() => setChecked(!checked)}
					/>
				</div>
			</TerminalCard>

			{/* Size */}
			<TerminalCard title="Size">
				<div className="text-sm mb-3">
					The <span style={{ color: themeColor }}>size</span> prop is used to
					set the size of the checkbox.
				</div>

				<div className="flex flex-wrap gap-2 items-end">
					{checkedSize.map((item, itemIdx) => (
						<Checkbox
							key={itemIdx}
							size={item.size}
							label={item.size}
							id={itemIdx + item.size}
							checked={item.checked}
							onChange={() => {
								let temp = [...checkedSize];
								temp[itemIdx].checked = !temp[itemIdx].checked;
								setCheckedSize(temp);
							}}
						/>
					))}
				</div>
			</TerminalCard>
		</div>
	);
};

export default CheckboxPage;
