import { Avatar, Badge, Button, Card } from "@/components";
import { ThemeContext } from "@/context/ThemeContext";
import { useContext } from "react";
import { TbExclamationCircle } from "react-icons/tb";

const BadgePage = () => {
	const { themeColor } = useContext(ThemeContext);
	return (
		<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
			{/* Placement */}
			<Card>
				<div className="text-lg font-normal mb-4">Placement</div>
				<div className="text-sm mb-3">
					The <span style={{ color: themeColor }}>placement</span> prop is used
					to change the placement of the badge.
				</div>

				<div className="flex flex-wrap gap-2 gap-x-6">
					<Badge placement="left-start" color="lightGreen">
						<Avatar>
							<img src="https://i.pravatar.cc/100" alt="avatar" />
						</Avatar>
					</Badge>
					<Badge placement="left" color="lightGreen">
						<Avatar>
							<img src="https://i.pravatar.cc/100" alt="avatar" />
						</Avatar>
					</Badge>
					<Badge placement="left-end" color="lightGreen">
						<Avatar>
							<img src="https://i.pravatar.cc/100" alt="avatar" />
						</Avatar>
					</Badge>
					<Badge placement="top-start" color="lightGreen">
						<Avatar>
							<img src="https://i.pravatar.cc/100" alt="avatar" />
						</Avatar>
					</Badge>
					<Badge placement="top" color="lightGreen">
						<Avatar>
							<img src="https://i.pravatar.cc/100" alt="avatar" />
						</Avatar>
					</Badge>
					<Badge placement="top-end" color="lightGreen">
						<Avatar>
							<img src="https://i.pravatar.cc/100" alt="avatar" />
						</Avatar>
					</Badge>
					<Badge placement="right-start" color="lightGreen">
						<Avatar>
							<img src="https://i.pravatar.cc/100" alt="avatar" />
						</Avatar>
					</Badge>
					<Badge placement="right" color="lightGreen">
						<Avatar>
							<img src="https://i.pravatar.cc/100" alt="avatar" />
						</Avatar>
					</Badge>
					<Badge placement="right-end" color="lightGreen">
						<Avatar>
							<img src="https://i.pravatar.cc/100" alt="avatar" />
						</Avatar>
					</Badge>
					<Badge placement="bottom-start" color="lightGreen">
						<Avatar>
							<img src="https://i.pravatar.cc/100" alt="avatar" />
						</Avatar>
					</Badge>
					<Badge placement="bottom" color="lightGreen">
						<Avatar>
							<img src="https://i.pravatar.cc/100" alt="avatar" />
						</Avatar>
					</Badge>
					<Badge placement="bottom-end" color="lightGreen">
						<Avatar>
							<img src="https://i.pravatar.cc/100" alt="avatar" />
						</Avatar>
					</Badge>
				</div>
			</Card>

			{/* Color */}
			<Card>
				<div className="text-lg font-normal mb-4">Color</div>
				<div className="text-sm mb-3">
					The <span style={{ color: themeColor }}>color</span> prop is used to
					change the color of the badge.
				</div>

				<div className="flex flex-wrap gap-2">
					<Badge color="lightGreen">
						<Avatar>
							<img src="https://i.pravatar.cc/100" alt="avatar" />
						</Avatar>
					</Badge>
					<Badge color="lightGray">
						<Avatar>
							<img src="https://i.pravatar.cc/100" alt="avatar" />
						</Avatar>
					</Badge>
					<Badge color="lightPurple">
						<Avatar>
							<img src="https://i.pravatar.cc/100" alt="avatar" />
						</Avatar>
					</Badge>
					<Badge color="lightYellow">
						<Avatar>
							<img src="https://i.pravatar.cc/100" alt="avatar" />
						</Avatar>
					</Badge>
					<Badge color="lightRed">
						<Avatar>
							<img src="https://i.pravatar.cc/100" alt="avatar" />
						</Avatar>
					</Badge>
					<Badge color="lightBlue">
						<Avatar>
							<img src="https://i.pravatar.cc/100" alt="avatar" />
						</Avatar>
					</Badge>
				</div>
			</Card>

			{/* Size */}
			<Card>
				<div className="text-lg font-normal mb-4">Size</div>
				<div className="text-sm mb-3">
					The <span style={{ color: themeColor }}>size</span> prop is used to
					change the size of the badge.
				</div>

				<div className="flex flex-wrap gap-2">
					<Badge size="xs" color="lightGreen">
						<Avatar>
							<img src="https://i.pravatar.cc/100" alt="avatar" />
						</Avatar>
					</Badge>
					<Badge size="sm" color="lightGreen">
						<Avatar>
							<img src="https://i.pravatar.cc/100" alt="avatar" />
						</Avatar>
					</Badge>
					<Badge size="md" color="lightGreen">
						<Avatar>
							<img src="https://i.pravatar.cc/100" alt="avatar" />
						</Avatar>
					</Badge>
					<Badge size="lg" color="lightGreen">
						<Avatar>
							<img src="https://i.pravatar.cc/100" alt="avatar" />
						</Avatar>
					</Badge>
					<Badge size="xl" color="lightGreen">
						<Avatar>
							<img src="https://i.pravatar.cc/100" alt="avatar" />
						</Avatar>
					</Badge>
				</div>
			</Card>

			{/* Rounded */}
			<Card>
				<div className="text-lg font-normal mb-4">Rounded</div>
				<div className="text-sm mb-3">
					The <span style={{ color: themeColor }}>rounded</span> prop is used to
					change the rounded of the badge.
				</div>

				<div className="flex flex-wrap gap-2">
					<Badge rounded="none" color="lightGreen">
						<Avatar>
							<img src="https://i.pravatar.cc/100" alt="avatar" />
						</Avatar>
					</Badge>
					<Badge rounded="sm" color="lightGreen">
						<Avatar>
							<img src="https://i.pravatar.cc/100" alt="avatar" />
						</Avatar>
					</Badge>
					<Badge rounded="md" color="lightGreen">
						<Avatar>
							<img src="https://i.pravatar.cc/100" alt="avatar" />
						</Avatar>
					</Badge>
					<Badge rounded="lg" color="lightGreen">
						<Avatar>
							<img src="https://i.pravatar.cc/100" alt="avatar" />
						</Avatar>
					</Badge>
				</div>
			</Card>

			{/* Value */}
			<Card>
				<div className="text-lg font-normal mb-4">Value</div>
				<div className="text-sm mb-3">
					The <span style={{ color: themeColor }}>value</span> prop is used to
					set the value of the badge.
				</div>

				<div className="flex flex-wrap gap-4">
					<Badge value="99" color="lightGreen">
						<Avatar>
							<img src="https://i.pravatar.cc/100" alt="avatar" />
						</Avatar>
					</Badge>
					<Badge value="Name" placement="bottom" color="lightGreen">
						<Avatar>
							<img src="https://i.pravatar.cc/100" alt="avatar" />
						</Avatar>
					</Badge>
					<Badge
						value={<TbExclamationCircle className="text-xs" />}
						size="xl"
						placement="bottom-end"
						color="lightRed"
					>
						<Avatar>
							<img src="https://i.pravatar.cc/100" alt="avatar" />
						</Avatar>
					</Badge>
					<Badge size="xl" value="2" color="lightPurple">
						<Button color="lightGreen">Notifikasi</Button>
					</Badge>
				</div>
			</Card>

			{/* Spacing & Skidding */}
			<Card>
				<div className="text-lg font-normal mb-4">Spacing & Skidding</div>
				<div className="text-sm mb-3">
					The <span style={{ color: themeColor }}>spacing</span> prop is used to
					set the spacing of the badge. Default value is -12px.
					<br />
					The <span style={{ color: themeColor }}>skidding</span> prop is used
					to set the skidding of the badge. Default value is 0px.
				</div>

				<div className="flex flex-wrap gap-2">
					<Badge color="lightPurple">
						<Button color="lightGreen">Default</Button>
					</Badge>
					<Badge spacing={-10} skidding={-4} color="lightYellow">
						<Button color="lightGreen">-10px & -4px</Button>
					</Badge>
				</div>
			</Card>
		</div>
	);
};

export default BadgePage;
