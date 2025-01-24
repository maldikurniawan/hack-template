import { Avatar, TerminalCard } from "@/components";
import { ThemeContext } from "@/context/ThemeContext";
import { motion } from "framer-motion";
import { useContext } from "react";
import {
	TbCalendar,
	TbCheck,
	TbCloudExclamation,
	TbExclamationMark,
	TbInfoCircle,
	TbSmartHome,
} from "react-icons/tb";

const AvatarPage = () => {
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
			<TerminalCard title="Color">
				<div className="text-sm mb-3">
					The <span style={{ color: themeColor }}>color</span> prop is used to
					set the color of the avatar.
				</div>

				<div className="flex flex-wrap gap-2">
					<Avatar color="lightGreen">PR</Avatar>
					<Avatar color="lightGray">BA</Avatar>
					<Avatar color="lightPurple">SU</Avatar>
					<Avatar color="lightYellow">WA</Avatar>
					<Avatar color="lightRed">DA</Avatar>
					<Avatar color="lightBlue">IN</Avatar>
				</div>
			</TerminalCard>

			{/* Variant */}
			<TerminalCard title="Variant">
				<div className="text-sm mb-3">
					The <span style={{ color: themeColor }}>variant</span> prop is used to
					set the variant of the avatar. Variant can be solid or tonal.
				</div>

				<div className="flex flex-wrap gap-2">
					<Avatar variant="tonal" color="lightGreen">
						PR
					</Avatar>
					<Avatar variant="tonal" color="lightGray">
						BA
					</Avatar>
					<Avatar variant="tonal" color="lightPurple">
						SU
					</Avatar>
					<Avatar variant="tonal" color="lightYellow">
						WA
					</Avatar>
					<Avatar variant="tonal" color="lightRed">
						DA
					</Avatar>
					<Avatar variant="tonal" color="lightBlue">
						IN
					</Avatar>
				</div>
			</TerminalCard>

			{/* Rounded */}
			<TerminalCard title="Rounded">
				<div className="text-sm mb-3">
					The <span style={{ color: themeColor }}>rounded</span> prop is used to
					set the rounded of the avatar.
				</div>

				<div className="flex flex-wrap gap-2">
					<Avatar rounded="none" color="lightGreen">
						NO
					</Avatar>
					<Avatar rounded="sm" color="lightGray">
						SM
					</Avatar>
					<Avatar rounded="md" color="lightPurple">
						MD
					</Avatar>
					<Avatar rounded="lg" color="lightYellow">
						LG
					</Avatar>
					<Avatar rounded="xl" color="lightRed">
						XL
					</Avatar>
					<Avatar rounded="full" color="lightBlue">
						FU
					</Avatar>
				</div>
			</TerminalCard>

			{/* Size */}
			<TerminalCard title="Size">
				<div className="text-sm mb-3">
					The <span style={{ color: themeColor }}>size</span> prop is used to
					set the size of the avatar.
				</div>

				<div className="flex items-center flex-wrap gap-2">
					<Avatar size="xs" color="lightGreen">
						XS
					</Avatar>
					<Avatar size="sm" color="lightGray">
						SM
					</Avatar>
					<Avatar size="md" color="lightPurple">
						MD
					</Avatar>
					<Avatar size="lg" color="lightYellow">
						LG
					</Avatar>
					<Avatar size="xl" color="lightRed">
						XL
					</Avatar>
					<Avatar size="70" color="lightBlue">
						70
					</Avatar>
				</div>
			</TerminalCard>

			{/* Icon */}
			<TerminalCard title="Icon">
				<div className="text-sm mb-3">
					You can use icon as avatar. Just put the icon inside the avatar.
				</div>

				<div className="flex items-center flex-wrap gap-2">
					<Avatar color="lightGreen">
						<TbSmartHome className="text-lg" />
					</Avatar>
					<Avatar color="lightGray">
						<TbCalendar className="text-lg" />
					</Avatar>
					<Avatar color="lightPurple">
						<TbCheck className="text-lg" />
					</Avatar>
					<Avatar color="lightYellow">
						<TbExclamationMark className="text-lg" />
					</Avatar>
					<Avatar color="lightRed">
						<TbCloudExclamation className="text-lg" />
					</Avatar>
					<Avatar color="lightBlue">
						<TbInfoCircle className="text-lg" />
					</Avatar>
				</div>
			</TerminalCard>

			{/* Image */}
			<TerminalCard title="Image">
				<div className="text-sm mb-3">
					You can use image as avatar. Just put the image inside the avatar.
				</div>

				<div className="flex items-center flex-wrap gap-2">
					<Avatar>
						<img src="https://i.pravatar.cc/100" alt="avatar" />
					</Avatar>
					<Avatar>
						<img src="https://i.pravatar.cc/200" alt="avatar" />
					</Avatar>
					<Avatar>
						<img src="https://i.pravatar.cc/300" alt="avatar" />
					</Avatar>
					<Avatar>
						<img src="https://i.pravatar.cc/400" alt="avatar" />
					</Avatar>
					<Avatar>
						<img src="https://i.pravatar.cc/500" alt="avatar" />
					</Avatar>
				</div>
			</TerminalCard>
		</motion.div>
	);
};

export default AvatarPage;
