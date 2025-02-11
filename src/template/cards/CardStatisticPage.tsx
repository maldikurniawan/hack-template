import { Card, CardStatistic } from "@/components";
import { motion } from "framer-motion";
import { TbAdCircle, TbAddressBook, TbCrown, TbSettings } from "react-icons/tb";

const CardStatisticPage = () => {
	return (
		<motion.div
			className="flex flex-col gap-4"
			initial={{ y: window.innerHeight, opacity: 0 }}
			animate={{ y: 0, opacity: 1 }}
			transition={{ duration: 0.3 }}
			viewport={{ once: true }}
		>
			<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
				<CardStatistic
					value={99}
					title="Harga Bulan Ini"
					description="Bulan ini Naik 20%"
					icon={<TbAddressBook />}
				/>
				<CardStatistic
					value={200}
					color="lightRed"
					title="Harga Bulan Ini"
					description="Bulan ini Naik 20%"
					icon={<TbAdCircle />}
				/>
				<CardStatistic
					value={99}
					color="lightBlue"
					title="Harga Bulan Ini"
					description="Bulan ini Naik 20%"
					icon={<TbSettings />}
				/>
				<CardStatistic
					value={99}
					color="lightYellow"
					title="Harga Bulan Ini"
					description="Bulan ini Naik 20%"
					icon={<TbCrown />}
				/>

				<div className="col-span-full">
					<Card variant="secondary">
						<div className="text-white">
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, at repudiandae ab pariatur et amet quia quam? Veniam repudiandae praesentium, eos laboriosam veritatis consectetur ipsum sunt magni ipsam maiores fugit?
						</div>
					</Card>
				</div>
			</div>
		</motion.div>
	);
};

export default CardStatisticPage;
