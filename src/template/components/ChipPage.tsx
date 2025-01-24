import { Chip, TerminalCard } from "@/components";
import { ThemeContext } from "@/context/ThemeContext";
import { motion } from "framer-motion";
import { useContext } from "react";

const ChipPage = () => {
	const { themeColor } = useContext(ThemeContext);
	return (
		<motion.div
			className="grid grid-cols-1 sm:grid-cols-2 gap-4"
			initial={{ y: window.innerHeight, opacity: 0 }}
			animate={{ y: 0, opacity: 1 }}
			transition={{ duration: 0.3 }}
			viewport={{ once: true }}
		>
			{/* Color */}
			<div className="col-span-full">
				<TerminalCard title="Color">
					<div className="text-sm mb-3">
						The <span style={{ color: themeColor }}>color</span> prop is used to
						change the background color of the chip.
					</div>

					<div className="flex flex-wrap items-end gap-4">
						<Chip color="lightGreen">Light Green</Chip>
						<Chip color="lightGray">Light Gray</Chip>
						<Chip color="lightPurple">Light Purple</Chip>
						<Chip color="lightYellow">Light Yellow</Chip>
						<Chip color="lightRed">Light Red</Chip>
						<Chip color="lightBlue">Light Blue</Chip>
					</div>
				</TerminalCard>
			</div>

			{/* Variant */}
			<div className="row-span-2">
				<TerminalCard title="Variant">
					<div className="text-sm mb-3">
						The <span style={{ color: themeColor }}>variant</span> prop is used
						to change the variant of the chip.
					</div>

					<div className="text-sm mb-2 mt-4">Solid</div>
					<div className="flex flex-wrap items-end gap-4">
						<Chip variant="solid" color="lightGreen">
							Light Green
						</Chip>
						<Chip variant="solid" color="lightGray">
							Light Gray
						</Chip>
						<Chip variant="solid" color="lightPurple">
							Light Purple
						</Chip>
						<Chip variant="solid" color="lightYellow">
							Light Yellow
						</Chip>
						<Chip variant="solid" color="lightRed">
							Light Red
						</Chip>
						<Chip variant="solid" color="lightBlue">
							Light Blue
						</Chip>
					</div>

					<div className="text-sm mb-2 mt-4">Outline</div>
					<div className="flex flex-wrap items-end gap-4">
						<Chip variant="outline" color="lightGreen">
							Light Green
						</Chip>
						<Chip variant="outline" color="lightGray">
							Light Gray
						</Chip>
						<Chip variant="outline" color="lightPurple">
							Light Purple
						</Chip>
						<Chip variant="outline" color="lightYellow">
							Light Yellow
						</Chip>
						<Chip variant="outline" color="lightRed">
							Light Red
						</Chip>
						<Chip variant="outline" color="lightBlue">
							Light Blue
						</Chip>
					</div>

					<div className="text-sm mb-2 mt-4">Tonal</div>
					<div className="flex flex-wrap items-end gap-4">
						<Chip variant="tonal" color="lightGreen">
							Light Green
						</Chip>
						<Chip variant="tonal" color="lightGray">
							Light Gray
						</Chip>
						<Chip variant="tonal" color="lightPurple">
							Light Purple
						</Chip>
						<Chip variant="tonal" color="lightYellow">
							Light Yellow
						</Chip>
						<Chip variant="tonal" color="lightRed">
							Light Red
						</Chip>
						<Chip variant="tonal" color="lightBlue">
							Light Blue
						</Chip>
					</div>
				</TerminalCard>
			</div>

			{/* Size */}
			<TerminalCard title="Size">
				<div className="text-sm mb-3">
					The <span style={{ color: themeColor }}>size</span> prop is used to
					set the size of the chip.
				</div>

				<div className="flex flex-wrap items-end gap-2">
					<Chip size="xl" color="lightGreen">
						X-Large
					</Chip>
					<Chip size="lg" color="lightGray">
						Large
					</Chip>
					<Chip size="md" color="lightPurple">
						Medium
					</Chip>
					<Chip size="sm" color="lightYellow">
						Small
					</Chip>
					<Chip size="xs" color="lightRed">
						X-Small
					</Chip>
				</div>
			</TerminalCard>

			{/* Rounded */}
			<TerminalCard title="Rounded">
				<div className="text-sm mb-3">
					The <span style={{ color: themeColor }}>rounded</span> prop is used to
					set the rounded of the chip.
				</div>

				<div className="flex flex-wrap gap-2">
					<Chip rounded="none" color="lightGreen">
						None
					</Chip>
					<Chip rounded="sm" color="lightGray">
						SM
					</Chip>
					<Chip rounded="md" color="lightPurple">
						MD
					</Chip>
					<Chip rounded="lg" color="lightYellow">
						LG
					</Chip>
					<Chip rounded="xl" color="lightRed">
						XL
					</Chip>
					<Chip rounded="full" color="lightBlue">
						Full
					</Chip>
				</div>
			</TerminalCard>
		</motion.div>
	);
};

export default ChipPage;
