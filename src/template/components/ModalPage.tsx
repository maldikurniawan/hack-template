import { Button, TerminalCard, Modal } from "@/components";
import { ThemeContext } from "@/context/ThemeContext";
import { motion } from "framer-motion";
import { useContext, useState } from "react";

const ModalPage = () => {
	const { themeColor } = useContext(ThemeContext);
	const [basicModal, setBasicModal] = useState<boolean>(false);
	const [persistentModal, setPersistentModal] = useState<boolean>(false);
	const [sizeModal, setSizeModal] = useState<boolean>(false);
	const [btnCloseModal, setBtnCloseModal] = useState<boolean>(false);

	return (
		<>
			<motion.div
				className="grid grid-cols-1 sm:grid-cols-2 gap-4"
				initial={{ y: window.innerHeight, opacity: 0 }}
				animate={{ y: 0, opacity: 1 }}
				transition={{ duration: 0.3 }}
				viewport={{ once: true }}
			>
				<TerminalCard title="Basic">
					<div className="text-sm mb-3">
						Basic modal with close button and backdrop click to close. Use{" "}
						<span style={{ color: themeColor }}>show</span> and{" "}
						<span style={{ color: themeColor }}>setShow</span> props to control
						the modal.
					</div>

					<div className="flex flex-wrap gap-2">
						<Button onClick={() => setBasicModal(true)} color="lightGreen">
							Basic
						</Button>
					</div>
				</TerminalCard>

				<TerminalCard title="Persistent">
					<div className="text-sm mb-3">
						The <span style={{ color: themeColor }}>persistent</span> prop is
						used to make the modal cant be closed by backdrop click.
					</div>

					<div className="flex flex-wrap gap-2">
						<Button onClick={() => setPersistentModal(true)} color="lightGreen">
							Persistent
						</Button>
					</div>
				</TerminalCard>

				<TerminalCard title="Width & Height">
					<div className="text-sm mb-3">
						The <span style={{ color: themeColor }}>width</span> and{" "}
						<span style={{ color: themeColor }}>height</span> props are used to
						set the modal size. If not set, the modal will be auto sized based
						on the content.
					</div>

					<div className="flex flex-wrap gap-2">
						<Button
							onClick={() => setSizeModal(true)}
							color="lightGreen"
							className="whitespace-nowrap"
						>
							Open Modal
						</Button>
					</div>
				</TerminalCard>

				<TerminalCard title="Button Close">
					<div className="text-sm mb-3">
						The <span style={{ color: themeColor }}>btnClose</span> prop is used
						to show the close button. Default is true.
					</div>

					<div className="flex flex-wrap gap-2">
						<Button
							onClick={() => setBtnCloseModal(true)}
							color="lightGreen"
							className="whitespace-nowrap"
						>
							Button Close False
						</Button>
					</div>
				</TerminalCard>
			</motion.div>

			{/* Basic */}
			<Modal show={basicModal} setShow={setBasicModal} width="sm" height="auto">
				<div className="text-lg font-normal p-5">
					<div className="mb-3">Basic Modal</div>
					<div className="text-sm mb-3">
						Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur
						quae officia doloribus in alias laudantium odio delectus nostrum
						iure! Ipsa eos harum tenetur distinctio! Eligendi ab dignissimos
						laboriosam ipsa velit.
					</div>
					<div className="text-sm flex justify-end">
						<Button onClick={() => setBasicModal(false)} color="lightGreen">
							Close
						</Button>
					</div>
				</div>
			</Modal>

			{/* Persistent */}
			<Modal
				height="auto"
				show={persistentModal}
				setShow={setPersistentModal}
				width="sm"
				persistent
			>
				<div className="text-lg font-normal p-5">
					<div className="mb-3">Persistent Modal</div>
					<div className="text-sm mb-3">
						Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur
						quae officia doloribus in alias laudantium odio delectus nostrum
						iure! Ipsa eos harum tenetur distinctio! Eligendi ab dignissimos
						laboriosam ipsa velit.
					</div>
					<div className="text-sm flex justify-end gap-2">
						<Button
							onClick={() => setPersistentModal(false)}
							variant="tonal"
							color="lightRed"
						>
							Cancel
						</Button>
						<Button
							onClick={() => setPersistentModal(false)}
							variant="flat"
							color="lightGreen"
						>
							Accept
						</Button>
					</div>
				</div>
			</Modal>

			{/* Size */}
			<Modal show={sizeModal} setShow={setSizeModal} width="lg" height="auto">
				<div className="text-lg font-normal p-5">
					<div className="mb-3">Width & Height</div>
					<div className="text-sm mb-3">
						Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur
						quae officia doloribus in alias laudantium odio delectus nostrum
						iure! Ipsa eos harum tenetur distinctio! Eligendi ab dignissimos
						laboriosam ipsa velit.
					</div>
					<div className="text-sm flex justify-end gap-2">
						<Button
							onClick={() => setSizeModal(false)}
							variant="tonal"
							color="lightRed"
						>
							Cancel
						</Button>
						<Button
							onClick={() => setSizeModal(false)}
							variant="flat"
							color="lightGreen"
						>
							Accept
						</Button>
					</div>
				</div>
			</Modal>

			{/* Button Close */}
			<Modal
				height="auto"
				show={btnCloseModal}
				setShow={setBtnCloseModal}
				width="sm"
				btnClose={false}
			>
				<div className="text-lg font-normal p-5">
					<div className="mb-3">Button Close</div>
					<div className="text-sm mb-3">
						Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur
						quae officia doloribus in alias laudantium odio delectus nostrum
						iure! Ipsa eos harum tenetur distinctio! Eligendi ab dignissimos
						laboriosam ipsa velit.
					</div>
					<div className="text-sm flex justify-end gap-2">
						<Button
							onClick={() => setBtnCloseModal(false)}
							variant="tonal"
							color="lightRed"
						>
							Cancel
						</Button>
						<Button
							onClick={() => setBtnCloseModal(false)}
							variant="flat"
							color="lightGreen"
						>
							Accept
						</Button>
					</div>
				</div>
			</Modal>
		</>
	);
};

export default ModalPage;
