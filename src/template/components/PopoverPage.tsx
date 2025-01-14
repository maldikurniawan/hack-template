import { Button, Card, Popover } from "@/components";
import { ThemeContext } from "@/context/ThemeContext";
import { useContext } from "react";

const PopoverPage = () => {
	const { themeColor } = useContext(ThemeContext);

	return (
		<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
			{/* Placement */}
			<div className="col-span-full">
				<Card>
					<div className="text-lg font-normal mb-4">Placement</div>
					<div className="text-sm mb-3">
						The <span style={{ color: themeColor }}>placement</span> prop is
						used to set the position of the popover.
					</div>

					<div className="flex flex-wrap gap-2">
						<Popover
							placement="top-start"
							button={<Button color="lightGreen">Top Start</Button>}
						>
							<div className="rounded text-sm shadow-lg">
								<div className="p-4 py-2">Menu 1</div>
								<div className="p-4 py-2">Menu 2</div>
								<div className="p-4 py-2">Menu 3</div>
							</div>
						</Popover>
						<Popover
							placement="top"
							button={<Button color="lightGreen">Top</Button>}
						>
							<div className="rounded text-sm shadow-lg">
								<div className="p-4 py-2">Menu 1</div>
								<div className="p-4 py-2">Menu 2</div>
								<div className="p-4 py-2">Menu 3</div>
							</div>
						</Popover>
						<Popover
							placement="top-end"
							button={<Button color="lightGreen">Top End</Button>}
						>
							<div className="rounded text-sm shadow-lg">
								<div className="p-4 py-2">Menu 1</div>
								<div className="p-4 py-2">Menu 2</div>
								<div className="p-4 py-2">Menu 3</div>
							</div>
						</Popover>
						<Popover button={<Button color="lightGreen">Right Start</Button>}>
							<div className="rounded text-sm shadow-lg">
								<div className="p-4 py-2">Menu 1</div>
								<div className="p-4 py-2">Menu 2</div>
								<div className="p-4 py-2">Menu 3</div>
							</div>
						</Popover>
						<Popover
							placement="right"
							button={<Button color="lightGreen">Right</Button>}
						>
							<div className="rounded text-sm shadow-lg">
								<div className="p-4 py-2">Menu 1</div>
								<div className="p-4 py-2">Menu 2</div>
								<div className="p-4 py-2">Menu 3</div>
							</div>
						</Popover>
						<Popover
							placement="right-end"
							button={<Button color="lightGreen">Right End</Button>}
						>
							<div className="rounded text-sm shadow-lg">
								<div className="p-4 py-2">Menu 1</div>
								<div className="p-4 py-2">Menu 2</div>
								<div className="p-4 py-2">Menu 3</div>
							</div>
						</Popover>
						<Popover
							placement="left-start"
							button={<Button color="lightGreen">Left Start</Button>}
						>
							<div className="rounded text-sm shadow-lg">
								<div className="p-4 py-2">Menu 1</div>
								<div className="p-4 py-2">Menu 2</div>
								<div className="p-4 py-2">Menu 3</div>
							</div>
						</Popover>
						<Popover
							placement="left"
							button={<Button color="lightGreen">Left</Button>}
						>
							<div className="rounded text-sm shadow-lg">
								<div className="p-4 py-2">Menu 1</div>
								<div className="p-4 py-2">Menu 2</div>
								<div className="p-4 py-2">Menu 3</div>
							</div>
						</Popover>
						<Popover
							placement="left-end"
							button={<Button color="lightGreen">Left End</Button>}
						>
							<div className="rounded text-sm shadow-lg">
								<div className="p-4 py-2">Menu 1</div>
								<div className="p-4 py-2">Menu 2</div>
								<div className="p-4 py-2">Menu 3</div>
							</div>
						</Popover>
						<Popover
							placement="bottom-start"
							button={<Button color="lightGreen">Bottom Start</Button>}
						>
							<div className="rounded text-sm shadow-lg">
								<div className="p-4 py-2">Menu 1</div>
								<div className="p-4 py-2">Menu 2</div>
								<div className="p-4 py-2">Menu 3</div>
							</div>
						</Popover>
						<Popover
							placement="bottom"
							button={<Button color="lightGreen">Bottom</Button>}
						>
							<div className="rounded text-sm shadow-lg">
								<div className="p-4 py-2">Menu 1</div>
								<div className="p-4 py-2">Menu 2</div>
								<div className="p-4 py-2">Menu 3</div>
							</div>
						</Popover>
						<Popover
							placement="bottom-end"
							button={<Button color="lightGreen">Bottom End</Button>}
						>
							<div className="rounded text-sm shadow-lg">
								<div className="p-4 py-2">Menu 1</div>
								<div className="p-4 py-2">Menu 2</div>
								<div className="p-4 py-2">Menu 3</div>
							</div>
						</Popover>
					</div>
				</Card>
			</div>

			{/* Spacing */}
			<Card>
				<div className="text-lg font-normal mb-4">Spacing</div>
				<div className="text-sm mb-3">
					The <span style={{ color: themeColor }}>spacing</span> prop is used to
					set the distance between the popover and the button. The default value
					is 5.
				</div>

				<div className="flex flex-wrap gap-2">
					<Popover
						spacing={0}
						button={<Button color="lightGreen">Spacing 0</Button>}
					>
						<div className="rounded text-sm shadow-lg">
							<div className="p-4 py-2">Menu 1</div>
							<div className="p-4 py-2">Menu 2</div>
							<div className="p-4 py-2">Menu 3</div>
						</div>
					</Popover>
					<Popover button={<Button color="lightGreen">Default</Button>}>
						<div className="rounded text-sm shadow-lg">
							<div className="p-4 py-2">Menu 1</div>
							<div className="p-4 py-2">Menu 2</div>
							<div className="p-4 py-2">Menu 3</div>
						</div>
					</Popover>
					<Popover
						spacing={10}
						button={<Button color="lightGreen">Spacing 10</Button>}
					>
						<div className="rounded text-sm shadow-lg">
							<div className="p-4 py-2">Menu 1</div>
							<div className="p-4 py-2">Menu 2</div>
							<div className="p-4 py-2">Menu 3</div>
						</div>
					</Popover>
					<Popover
						spacing={20}
						button={<Button color="lightGreen">Spacing 20</Button>}
					>
						<div className="rounded text-sm shadow-lg">
							<div className="p-4 py-2">Menu 1</div>
							<div className="p-4 py-2">Menu 2</div>
							<div className="p-4 py-2">Menu 3</div>
						</div>
					</Popover>
				</div>
			</Card>

			{/* Fill */}
			<Card>
				<div className="text-lg font-normal mb-4">Fill</div>
				<div className="text-sm mb-3">
					The <span style={{ color: themeColor }}>fill</span> prop is used to
					set the minimum width of the popover to the width of the button.
				</div>

				<div className="flex flex-wrap gap-2">
					<Popover
						fill
						button={<Button color="lightGreen">With Fill Props</Button>}
					>
						<div className="rounded text-sm shadow-lg">
							<div className="p-4 py-2">Menu 1</div>
							<div className="p-4 py-2">Menu 2</div>
							<div className="p-4 py-2">Menu 3</div>
						</div>
					</Popover>
					<Popover button={<Button color="lightGreen">Without Fill Props</Button>}>
						<div className="rounded text-sm shadow-lg">
							<div className="p-4 py-2">Menu 1</div>
							<div className="p-4 py-2">Menu 2</div>
							<div className="p-4 py-2">Menu 3</div>
						</div>
					</Popover>
				</div>
			</Card>

			{/* Shift & Flip */}
			<div className="col-span-full">
				<Card>
					<div className="text-lg font-normal mb-4">Shift & Flip</div>
					<div className="text-sm mb-3">
						The <span style={{ color: themeColor }}>isShift</span> prop is used
						to shift the popover if the popover is out of the screen. Default is
						true.
						<br />
						The <span style={{ color: themeColor }}>isFlip</span> prop is used
						to flip the popover if the popover is out of the screen. Default is
						true.
					</div>

					<div className="flex flex-wrap gap-2">
						<Popover button={<Button color="lightGreen">Shift & Flip</Button>}>
							<div className="rounded text-sm shadow-lg">
								<div className="p-4 py-2">Menu 1</div>
								<div className="p-4 py-2">Menu 2</div>
								<div className="p-4 py-2">Menu 3</div>
							</div>
						</Popover>
					</div>
				</Card>
			</div>
		</div>
	);
};

export default PopoverPage;
