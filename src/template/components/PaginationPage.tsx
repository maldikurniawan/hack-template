import { TerminalCard, Pagination } from "@/components";
import { ThemeContext } from "@/context/ThemeContext";
import { motion } from "framer-motion";
import { useContext, useState } from "react";

const PaginationPage = () => {
	const { themeColor } = useContext(ThemeContext);

	const [colorPagination, setColorPagination] = useState([
		{
			color: "lightGreen",
			value: 1,
		},
		{
			color: "lightGray",
			value: 1,
		},
		{
			color: "lightPurple",
			value: 1,
		},
		{
			color: "lightYellow",
			value: 1,
		},
		{
			color: "lightRed",
			value: 1,
		},
		{
			color: "lightBlue",
			value: 1,
		},
	]);

	const [sizePagination, setSizePagination] = useState([
		{
			size: "xs",
			value: 1,
		},
		{
			size: "sm",
			value: 1,
		},
		{
			size: "md",
			value: 1,
		},
		{
			size: "lg",
			value: 1,
		},
		{
			size: "xl",
			value: 1,
		},
	]);

	const [roundedPagination, setRoundedPagination] = useState([
		{
			rounded: "none",
			value: 1,
		},
		{
			rounded: "sm",
			value: 1,
		},
		{
			rounded: "md",
			value: 1,
		},
		{
			rounded: "lg",
			value: 1,
		},
		{
			rounded: "xl",
			value: 1,
		},
		{
			rounded: "2xl",
			value: 1,
		},
		{
			rounded: "3xl",
			value: 1,
		},
		{
			rounded: "full",
			value: 1,
		},
	]);

	const [variantPagination, setVariantPagination] = useState([
		{
			variant: "solid",
			value: 1,
		},
		{
			variant: "flat",
			value: 1,
		},
	]);

	return (
		<motion.div
			className="grid grid-cols-1 sm:grid-cols-2 gap-4"
			initial={{ y: window.innerHeight, opacity: 0 }}
			animate={{ y: 0, opacity: 1 }}
			transition={{ duration: 0.3 }}
			viewport={{ once: true }}
		>
			{/* Active Color */}
			<TerminalCard title="Active Color">
				<div className="text-sm mb-3">
					The <span style={{ color: themeColor }}>activeColor</span> prop is
					used to set the color of the active page.
				</div>

				<div className="flex flex-col gap-3">
					{colorPagination.map((item, itemIdx) => (
						<Pagination
							key={itemIdx}
							currentPage={item.value}
							activeColor={item.color}
							totalCount={10}
							pageSize={1}
							onPageChange={(page) => {
								const newColorPagination = [...colorPagination];
								newColorPagination[itemIdx].value = page;
								setColorPagination(newColorPagination);
							}}
						/>
					))}
				</div>
			</TerminalCard>

			{/* Size */}
			<TerminalCard title="Size">
				<div className="text-sm mb-3">
					The <span style={{ color: themeColor }}>size</span> prop is used to
					set the size of the pagination.
				</div>

				<div className="flex flex-col gap-3">
					{sizePagination.map((item, itemIdx) => (
						<Pagination
							key={itemIdx}
							currentPage={item.value}
							totalCount={10}
							pageSize={1}
							onPageChange={(page) => {
								const newSizePagination = [...sizePagination];
								newSizePagination[itemIdx].value = page;
								setSizePagination(newSizePagination);
							}}
							size={item.size}
						/>
					))}
				</div>
			</TerminalCard>

			{/* Rounded */}
			<TerminalCard title="Rounded">
				<div className="text-sm mb-3">
					The <span style={{ color: themeColor }}>rounded</span> prop is used to
					set the rounded of the pagination.
				</div>

				<div className="flex flex-col gap-3">
					{roundedPagination.map((item, itemIdx) => (
						<Pagination
							key={itemIdx}
							currentPage={item.value}
							totalCount={10}
							pageSize={1}
							onPageChange={(page) => {
								const newRoundedPagination = [...roundedPagination];
								newRoundedPagination[itemIdx].value = page;
								setRoundedPagination(newRoundedPagination);
							}}
							rounded={item.rounded}
						/>
					))}
				</div>
			</TerminalCard>

			{/* Variant */}
			<TerminalCard title="Variant">
				<div className="text-sm mb-3">
					The <span style={{ color: themeColor }}>variant</span> prop is used to
					set the variant of the pagination.
				</div>

				<div className="flex flex-col gap-3">
					{variantPagination.map((item, itemIdx) => (
						<Pagination
							key={itemIdx}
							currentPage={item.value}
							totalCount={10}
							pageSize={1}
							onPageChange={(page) => {
								const newVariantPagination = [...variantPagination];
								newVariantPagination[itemIdx].value = page;
								setVariantPagination(newVariantPagination);
							}}
							variant={item.variant}
						/>
					))}
				</div>
			</TerminalCard>
		</motion.div>
	);
};

export default PaginationPage;
