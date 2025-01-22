import { Button, TerminalCard, Tooltip } from "@/components";
import { ThemeContext } from "@/context/ThemeContext";
import { useContext } from "react";

const TooltipPage = () => {
	const { themeColor } = useContext(ThemeContext);
	return (
		<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
			{/* Placement */}
			<div className="col-span-full">
				<TerminalCard title="Placement">
					<div className="text-sm mb-3">
						The <span style={{ color: themeColor }}>placement</span> prop is
						used to set the position of the tooltip. The default value is top.
					</div>

					<div className="flex flex-wrap gap-2 overflow-auto">
						<Tooltip placement="top-start" tooltip="Top Start">
							<Button color="lightGreen">Top Start</Button>
						</Tooltip>
						<Tooltip placement="top" tooltip="Top">
							<Button color="lightGreen">Top</Button>
						</Tooltip>
						<Tooltip placement="top-end" tooltip="Top End">
							<Button color="lightGreen">Top End</Button>
						</Tooltip>
						<Tooltip placement="left-start" tooltip="Left Start">
							<Button color="lightGreen">Left Start</Button>
						</Tooltip>
						<Tooltip placement="left" tooltip="Left">
							<Button color="lightGreen">Left</Button>
						</Tooltip>
						<Tooltip placement="left-end" tooltip="Left End">
							<Button color="lightGreen">Left End</Button>
						</Tooltip>
						<Tooltip placement="right-start" tooltip="Right Start">
							<Button color="lightGreen">Right Start</Button>
						</Tooltip>
						<Tooltip placement="right" tooltip="Right">
							<Button color="lightGreen">Right</Button>
						</Tooltip>
						<Tooltip placement="right-end" tooltip="Right End">
							<Button color="lightGreen">Right End</Button>
						</Tooltip>
						<Tooltip placement="bottom-start" tooltip="Bottom Start">
							<Button color="lightGreen">Bottom Start</Button>
						</Tooltip>
						<Tooltip placement="bottom" tooltip="Bottom">
							<Button color="lightGreen">Bottom</Button>
						</Tooltip>
						<Tooltip placement="bottom-end" tooltip="Bottom End">
							<Button color="lightGreen">Bottom End</Button>
						</Tooltip>
					</div>
				</TerminalCard>
			</div>

			{/* Tooltip */}
			<TerminalCard title="Tooltip">
				<div className="text-sm mb-3">
					The <span style={{ color: themeColor }}>tooltip</span> prop is used to
					set the text of the tooltip.
				</div>

				<div className="flex flex-wrap gap-2">
					<Tooltip tooltip="Tooltip Text">
						<Button color="lightGreen">Tooltip Text</Button>
					</Tooltip>
				</div>
			</TerminalCard>

			{/* Spacing */}
			<TerminalCard title="Spacing">
				<div className="text-sm mb-3">
					The <span style={{ color: themeColor }}>spacing</span> prop is used to
					set the spacing between the tooltip and the reference element. The
					default value is 5.
				</div>

				<div className="flex flex-wrap gap-2">
					<Tooltip spacing={0} tooltip="Spacing 0">
						<Button color="lightGreen">Spacing 0</Button>
					</Tooltip>
					<Tooltip tooltip="Default">
						<Button color="lightGreen">Default</Button>
					</Tooltip>
					<Tooltip spacing={10} tooltip="Spacing 10">
						<Button color="lightGreen">Spacing 10</Button>
					</Tooltip>
					<Tooltip spacing={20} tooltip="Spacing 20">
						<Button color="lightGreen">Spacing 20</Button>
					</Tooltip>
				</div>
			</TerminalCard>

			{/* Fill */}
			<TerminalCard title="Fill">
				<div className="text-sm mb-3">
					The <span style={{ color: themeColor }}>fill</span> prop is used to
					set the minimum width of the tooltip to the width of the reference
					element.
				</div>

				<div className="flex flex-wrap gap-2">
					<Tooltip fill tooltip="Fill">
						<Button color="lightGreen">Tooltip Fill</Button>
					</Tooltip>
				</div>
			</TerminalCard>

			{/* Delay */}
			<TerminalCard title="Delay">
				<div className="text-sm mb-3">
					The <span style={{ color: themeColor }}>delay</span> prop is used to
					set the delay of the tooltip to open in milliseconds. The default
					value is 0.
				</div>

				<div className="flex flex-wrap gap-2">
					<Tooltip tooltip="No Delay">
						<Button color="lightGreen">Default</Button>
					</Tooltip>
					<Tooltip tooltip="Delay 500" delay={500}>
						<Button color="lightGreen">Delay 500</Button>
					</Tooltip>
					<Tooltip tooltip="Delay 1000" delay={1000}>
						<Button color="lightGreen">Delay 1000</Button>
					</Tooltip>
				</div>
			</TerminalCard>
		</div>
	);
};

export default TooltipPage;
