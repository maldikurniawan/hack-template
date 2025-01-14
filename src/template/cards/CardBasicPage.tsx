import { Card } from "@/components";
import moment from "moment";
import { useState } from "react";

const CardBasicPage = () => {
	const [cardBasic] = useState([
		{
			title: "Primary",
			description:
				"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi asperiores corrupti.",
			variant: "primary",
			date: moment().format("ll"),
		},
		{
			title: "Base",
			description:
				"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi asperiores corrupti.",
			variant: "base",
			date: moment().format("ll"),
		},
		{
			title: "Success",
			description:
				"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi asperiores corrupti.",
			variant: "success",
			date: moment().format("ll"),
		},
		{
			title: "Warning",
			description:
				"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi asperiores corrupti.",
			variant: "warning",
			date: moment().format("ll"),
		},
		{
			title: "Danger",
			description:
				"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi asperiores corrupti.",
			variant: "danger",
			date: moment().format("ll"),
		},
		{
			title: "Info",
			description:
				"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi asperiores corrupti.",
			variant: "info",
			date: moment().format("ll"),
		},
	]);

	return (
		<div className="flex flex-col gap-4">
			<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
				{cardBasic.map((item, itemIdx) => (
					<Card key={itemIdx} variant={item.variant}>
						<div>
							<div className="text-sm font-bold mb-1">{item.title}</div>
							<div className="text-xs mb-4">{item.description}</div>
							<div className="text-[10px] flex justify-end items-end text-white/50">
								{item.date}
							</div>
						</div>
					</Card>
				))}
			</div>
		</div>
	);
};

export default CardBasicPage;
