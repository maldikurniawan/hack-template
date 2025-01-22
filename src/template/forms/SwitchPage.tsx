import { TerminalCard, Switch, SwitchTheme } from "@/components";
import { ThemeContext } from "@/context/ThemeContext";
import { useContext, useState } from "react";

const SwitchPage = () => {
	const { colorMode, setColorMode, themeColor } = useContext(ThemeContext);
	const toggleColorMode = () => {
		setColorMode((prevMode: any) => (prevMode === "light" ? "dark" : "light"));
	};

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
			<TerminalCard title="Color">
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
			</TerminalCard>

			{/* Size */}
			<TerminalCard title="Size">
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
			</TerminalCard>

			{/* Label */}
			<TerminalCard title="Label">
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
			</TerminalCard>

			{/* Disabled */}
			<TerminalCard title="Disabled">
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
			</TerminalCard>

			<TerminalCard title="Theme">
				<div className="text-sm mb-3">
					The <span style={{ color: themeColor }}>theme</span> prop is used
					to switch theme.
				</div>
				<SwitchTheme toggleColorMode={toggleColorMode} colorMode={colorMode} />
			</TerminalCard>
		</div>
	);
};

export default SwitchPage;
