import { useContext, useState } from "react";
import { ThemeContext } from "@/context/ThemeContext";
import { Card, Alert, Button } from "@/components"
import { PiCheck, PiExclamationMark, PiHouseLine, PiX } from "react-icons/pi";

const AlertPage = () => {
	const { themeColor } = useContext(ThemeContext);
	const [show, setShow] = useState<boolean>(true);

	return (
		<div className="flex flex-col gap-4 overflow-y-auto scroll-hidden">
			{/* Color */}
			<Card>
				<div className="text-lg font-normal mb-4">Color</div>
				<div className="text-sm mb-3">
					The <span style={{ color: themeColor }}>color</span> prop is used to
					set the background color of the alert.
				</div>

				<div className="flex flex-wrap gap-3">
					<Alert color="lightGreen">
						Good morning! You have successfully logged in.
					</Alert>
					<Alert color="lightGray">
						Good morning! You have successfully logged in.
					</Alert>
					<Alert color="lightPurple">
						Good morning! You have successfully logged in.
					</Alert>
					<Alert color="lightYellow">
						Good morning! You have successfully logged in.
					</Alert>
					<Alert color="lightRed">
						Good morning! You have successfully logged in.
					</Alert>
					<Alert color="lightBlue">
						Good morning! You have successfully logged in.
					</Alert>
				</div>
			</Card>

			{/* Icon */}
			<Card>
				<div className="text-lg font-normal mb-4">Icon</div>
				<div className="text-sm mb-3">
					The <span style={{ color: themeColor }}>icon</span> prop is used to
					set the icon of the alert.
				</div>

				<div className="flex flex-wrap gap-3">
					<Alert icon={<PiHouseLine />} color="lightGreen">
						Good morning! You have successfully logged in.
					</Alert>
					<Alert icon={<PiCheck />} color="lightPurple">
						Good morning! You have successfully logged in.
					</Alert>
					<Alert icon={<PiExclamationMark />} color="lightYellow">
						Good morning! You have successfully logged in.
					</Alert>
					<Alert icon={<PiX />} color="lightRed">
						Good morning! You have successfully logged in.
					</Alert>
				</div>
			</Card>

			{/* Closable */}
			<Card>
				<div className="text-lg font-normal mb-4">Closable</div>
				<div className="text-sm mb-3">
					The <span style={{ color: themeColor }}>closable</span> prop is used
					to set the alert closable.
				</div>

				<div className="flex flex-wrap gap-3">
					{show ? (
						<Alert
							show={show}
							setShow={setShow}
							closable
							icon={<PiHouseLine />}
							color="lightGreen"
						>
							Good morning! You have successfully logged in.
						</Alert>
					) : (
						<Button color="lightGreen" onClick={() => setShow(true)}>
							Reset
						</Button>
					)}
				</div>
			</Card>

			{/* Variant */}
			<Card>
				<div className="text-lg font-normal mb-4">Variant</div>
				<div className="text-sm mb-3">
					The <span style={{ color: themeColor }}>variant</span> prop is used to
					set the icon of the alert.
				</div>

				<div className="text-sm mb-2 mt-4">Solid</div>
				<div className="flex flex-wrap gap-2">
					<Alert variant={"solid"} color="lightGreen">
						Good morning! You have successfully logged in.
					</Alert>
					<Alert variant={"solid"} color="lightGray">
						Good morning! You have successfully logged in.
					</Alert>
				</div>

				<div className="text-sm mb-2 mt-4">Tonal</div>
				<div className="flex flex-wrap gap-2">
					<Alert variant={"tonal"} color="lightPurple">
						Good morning! You have successfully logged in.
					</Alert>
					<Alert variant={"tonal"} color="lightYellow">
						Good morning! You have successfully logged in.
					</Alert>
				</div>

				<div className="text-sm mb-2 mt-4">Outline</div>
				<div className="flex flex-wrap gap-2">
					<Alert variant={"outline"} color="lightRed">
						Good morning! You have successfully logged in.
					</Alert>
					<Alert variant={"outline"} color="lightBlue">
						Good morning! You have successfully logged in.
					</Alert>
				</div>
			</Card>

			{/* Density */}
			<Card>
				<div className="text-lg font-normal mb-4">Density</div>
				<div className="text-sm mb-3">
					The <span style={{ color: themeColor }}>density</span> prop is used to
					set the padding of the alert.
				</div>

				<div className="flex flex-wrap gap-2">
					<Alert density="tight" color="lightGreen">
						Good morning! You have successfully logged in.
					</Alert>
					<Alert density="normal" color="lightPurple">
						Good morning! You have successfully logged in.
					</Alert>
					<Alert density="loose" color="lightYellow">
						Good morning! You have successfully logged in.
					</Alert>
				</div>
			</Card>
		</div>
	);
};

export default AlertPage;
