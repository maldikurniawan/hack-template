import { Card, Switch, SwitchTheme } from "@/components";
import { ThemeContext } from "@/context/ThemeContext";
import { useContext, useState } from "react";

const SwitchPage = () => {
	const { themeColor } = useContext(ThemeContext);

	const [switchColor, setSwitchColor] = useState([
		{
			color: "lightGreen",
			value: true,
		},
		{
			color: "lightPurple",
			value: true,
		},
		{
			color: "lightYellow",
			value: true,
		},
		{
			color: "lightRed",
			value: true,
		},
		{
			color: "lightBlue",
			value: true,
		},
	]);

	const [switchSize, setSwitchSize] = useState([
		{
			size: "sm",
			value: true,
		},
		{
			size: "md",
			value: true,
		},
		{
			size: "lg",
			value: true,
		},
		{
			size: "xl",
			value: true,
		},
	]);

	const [switchLabel, setSwitchLabel] = useState(true);

	return (
		<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
			{/* Color */}
			<Card>
				<div className="text-lg font-normal mb-4">Color</div>
				<div className="text-sm mb-3">
					The <span style={{ color: themeColor }}>color</span> prop is used to
					set the color of the switch.
				</div>
				<div className="flex gap-2 items-center">
					{switchColor.map((item, itemIdx) => (
						<Switch
							color={item.color}
							key={itemIdx}
							value={item.value}
							onChange={() => {
								const newSwitchColor = [...switchColor];
								newSwitchColor[itemIdx].value = !newSwitchColor[itemIdx].value;
								setSwitchColor(newSwitchColor);
							}}
						/>
					))}
				</div>
			</Card>

			{/* Size */}
			<Card>
				<div className="text-lg font-normal mb-4">Size</div>
				<div className="text-sm mb-3">
					The <span style={{ color: themeColor }}>size</span> prop is used to
					set the size of the switch.
				</div>
				<div className="flex gap-2 items-center">
					{switchSize.map((item, itemIdx) => (
						<Switch
							size={item.size}
							key={itemIdx}
							value={item.value}
							onChange={() => {
								const newSwitchSize = [...switchSize];
								newSwitchSize[itemIdx].value = !newSwitchSize[itemIdx].value;
								setSwitchSize(newSwitchSize);
							}}
						/>
					))}
				</div>
			</Card>

			{/* Label */}
			<Card>
				<div className="text-lg font-normal mb-4">Label</div>
				<div className="text-sm mb-3">
					The <span style={{ color: themeColor }}>label</span> prop is used to
					set the label of the switch.
				</div>
				<Switch
					id="switch_label"
					label={switchLabel ? "On" : "Off"}
					value={switchLabel}
					onChange={() => setSwitchLabel(!switchLabel)}
				/>
			</Card>

			{/* Disabled */}
			<Card>
				<div className="text-lg font-normal mb-4">Disabled</div>
				<div className="text-sm mb-3">
					The <span style={{ color: themeColor }}>disabled</span> prop is used
					to disable the switch.
				</div>
				<Switch
					label={switchLabel ? "On" : "Off"}
					value={switchLabel}
					onChange={() => setSwitchLabel(!switchLabel)}
					disabled
				/>
			</Card>

			<Card>
				<SwitchTheme />
			</Card>
		</div>
	);
};

export default SwitchPage;
