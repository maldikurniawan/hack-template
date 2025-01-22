import { TerminalCard, Radio } from "@/components";
import { ThemeContext } from "@/context/ThemeContext";
import { useContext, useState } from "react";

const RadioPage = () => {
	const { themeColor } = useContext(ThemeContext);

	const [selectedColor, setSelectedColor] = useState("#5CED73");
	const [selectedInline, setSelectedInline] = useState<boolean>(true);

	return (
		<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
			{/* Color */}
			<TerminalCard title="Color">
				<div className="text-sm mb-3">
					The <span style={{ color: themeColor }}>color</span> prop is used to
					set the color of the radio.
				</div>

				<Radio
					color={selectedColor}
					value={selectedColor}
					onChange={setSelectedColor}
					options={[
						{
							label: "Primary",
							value: "lightGreen",
						},
						{
							label: "Base",
							value: "lightGray",
						},
						{
							label: "Success",
							value: "lightPurple",
						},
						{
							label: "Warning",
							value: "lightYellow",
						},
						{
							label: "Danger",
							value: "lightRed",
						},
						{
							label: "Info",
							value: "lightBlue",
						},
					]}
				/>
			</TerminalCard>

			{/* Inline */}
			<TerminalCard title="Inline">
				<div className="text-sm mb-3">
					The <span style={{ color: themeColor }}>inline</span> prop is used to
					set the radio to be inline. Default is true.
				</div>

				<div className="flex gap-6">
					<Radio
						color={themeColor}
						value={selectedInline}
						onChange={setSelectedInline}
						inline={false}
						options={[
							{
								label: "True",
								value: true,
							},
							{
								label: "False",
								value: false,
							},
						]}
					/>
				</div>
			</TerminalCard>

			{/* Size */}
			<TerminalCard title="Size">
				<div className="text-sm mb-3">
					The <span style={{ color: themeColor }}>size</span> prop is used to
					set the size of the radio.
				</div>

				<div>
					<Radio
						color={themeColor}
						size="sm"
						options={[
							{
								label: "True",
								value: true,
							},
							{
								label: "False",
								value: false,
							},
						]}
					/>
					<Radio
						color={themeColor}
						size="md"
						options={[
							{
								label: "True",
								value: true,
							},
							{
								label: "False",
								value: false,
							},
						]}
					/>
					<Radio
						color={themeColor}
						size="lg"
						options={[
							{
								label: "True",
								value: true,
							},
							{
								label: "False",
								value: false,
							},
						]}
					/>
					<Radio
						color={themeColor}
						size="xl"
						options={[
							{
								label: "True",
								value: true,
							},
							{
								label: "False",
								value: false,
							},
						]}
					/>
				</div>
			</TerminalCard>
		</div>
	);
};

export default RadioPage;
