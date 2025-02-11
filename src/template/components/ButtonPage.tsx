import { Button, ButtonLogin, TerminalCard } from "@/components";
import { ThemeContext } from "@/context/ThemeContext";
import { motion } from "framer-motion";
import { useContext } from "react";

const ButtonPage = () => {
	const { themeColor } = useContext(ThemeContext);
	return (
		<motion.div
			className="grid grid-cols-1 gap-4"
			initial={{ y: window.innerHeight, opacity: 0 }}
			animate={{ y: 0, opacity: 1 }}
			transition={{ duration: 0.3 }}
			viewport={{ once: true }}
		>
			{/* Color */}
			<TerminalCard title="Color">
				<div className="text-sm mb-3">
					The <span style={{ color: themeColor }}>color</span> prop is used to
					change the background color of the button.
				</div>

				<div className="flex flex-wrap gap-2">
					<Button color="lightGreen">Light Green</Button>
					<Button color="lightGray">Light Gray</Button>
					<Button color="lightPurple">Light Purple</Button>
					<Button color="lightYellow">Light Yellow</Button>
					<Button color="lightRed">Light Red</Button>
					<Button color="lightBlue">Light Blue</Button>
				</div>
			</TerminalCard>

			{/* Variant */}
			<TerminalCard title="Variant">
				<div className="text-sm mb-3">
					The <span style={{ color: themeColor }}>variant</span> prop is used to
					change the variant of the button.
				</div>

				<div className="text-sm mb-2 mt-4">Solid</div>
				<div className="flex flex-wrap gap-2">
					<Button variant="solid" color="lightGreen">
						Light Green
					</Button>
					<Button variant="solid" color="lightGray">
						Light Gray
					</Button>
					<Button variant="solid" color="lightPurple">
						Light Purple
					</Button>
					<Button variant="solid" color="lightYellow">
						Light Yellow
					</Button>
					<Button variant="solid" color="lightRed">
						Light Red
					</Button>
					<Button variant="solid" color="lightBlue">
						Light Blue
					</Button>
				</div>

				<div className="text-sm mb-2 mt-4">Outline</div>
				<div className="flex flex-wrap gap-2">
					<Button variant="outline" color="lightGreen">
						Light Green
					</Button>
					<Button variant="outline" color="lightGray">
						Light Gray
					</Button>
					<Button variant="outline" color="lightPurple">
						Light Purple
					</Button>
					<Button variant="outline" color="lightYellow">
						Light Yellow
					</Button>
					<Button variant="outline" color="lightRed">
						Light Red
					</Button>
					<Button variant="outline" color="lightBlue">
						Light Blue
					</Button>
				</div>

				<div className="text-sm mb-2 mt-4">Text</div>
				<div className="flex flex-wrap gap-2">
					<Button variant="text" color="lightGreen">
						Light Green
					</Button>
					<Button variant="text" color="lightGray">
						Light Gray
					</Button>
					<Button variant="text" color="lightPurple">
						Light Purple
					</Button>
					<Button variant="text" color="lightYellow">
						Light Yellow
					</Button>
					<Button variant="text" color="lightRed">
						Light Red
					</Button>
					<Button variant="text" color="lightBlue">
						Light Blue
					</Button>
				</div>

				<div className="text-sm mb-2 mt-4">Tonal</div>
				<div className="flex flex-wrap gap-2">
					<Button variant="tonal" color="lightGreen">
						Light Green
					</Button>
					<Button variant="tonal" color="lightGray">
						Light Gray
					</Button>
					<Button variant="tonal" color="lightPurple">
						Light Purple
					</Button>
					<Button variant="tonal" color="lightYellow">
						Light Yellow
					</Button>
					<Button variant="tonal" color="lightRed">
						Light Red
					</Button>
					<Button variant="tonal" color="lightBlue">
						Light Blue
					</Button>
				</div>
			</TerminalCard>

			{/* Size */}
			<TerminalCard title="Size">
				<div className="text-sm mb-3">
					The <span style={{ color: themeColor }}>size</span> prop is used to
					set the size of the button.
				</div>

				<div className="flex flex-wrap items-end gap-2">
					<Button size="xl" color="lightGreen">
						XL
					</Button>
					<Button size="lg" color="lightGray">
						LG
					</Button>
					<Button size="md" color="lightPurple">
						MD
					</Button>
					<Button size="sm" color="lightYellow">
						SM
					</Button>
					<Button size="xs" color="lightRed">
						XS
					</Button>
					<Button size="40" color="lightBlue">
						<span className="text-xs">40</span>
					</Button>
				</div>
			</TerminalCard>

			{/* Rounded */}
			<TerminalCard title="Rounded">
				<div className="text-sm mb-3">
					The <span style={{ color: themeColor }}>rounded</span> prop is used to
					set the rounded of the button.
				</div>

				<div className="flex flex-wrap gap-2">
					<Button rounded="none" color="lightGreen">
						None
					</Button>
					<Button rounded="sm" color="lightGray">
						SM
					</Button>
					<Button rounded="md" color="lightPurple">
						MD
					</Button>
					<Button rounded="lg" color="lightYellow">
						LG
					</Button>
					<Button rounded="xl" color="lightRed">
						XL
					</Button>
					<Button rounded="full" color="lightBlue">
						Full
					</Button>
				</div>
			</TerminalCard>

			{/* Animated */}
			<TerminalCard title="Animation">
				<div className="text-sm mb-3">
					The <span style={{ color: themeColor }}>animation</span> prop is used to
					set the animation of the button.
				</div>

				<div className="flex flex-wrap gap-2">
					<ButtonLogin>
						<div className="px-10">
							Animation
						</div>
					</ButtonLogin>
				</div>
			</TerminalCard>
		</motion.div>
	);
};

export default ButtonPage;
