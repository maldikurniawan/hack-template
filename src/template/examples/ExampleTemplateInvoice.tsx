import { ThemeContext } from "@/context/ThemeContext";
import { useContext, useRef, useState } from "react";
import { useReactToPrint } from "react-to-print";
// @ts-ignore
import angkaTerbilang from '@develoka/angka-terbilang-js';

interface Item {
	id: number;
	name: string;
	description: string;
	code: string;
	qty: number;
	price: number;
}

const ExampleTemplateInvoice: React.FC = () => {
	const { themeColor } = useContext(ThemeContext);
	const invRef1 = useRef<HTMLDivElement | null>(null);

	const handlePrint1 = useReactToPrint({
		contentRef: invRef1,
		documentTitle: "Invoice #1",
	});

	const convertToRupiah = (value: number): string => {
		return value.toLocaleString("id-ID", {
			style: "currency",
			currency: "IDR",
			maximumFractionDigits: 0,
		});
	};

	const [items] = useState<Item[]>([
		{
			id: 1,
			name: "Internet Access Lite Download 10Mbps",
			description: "Periode 20 November 2023",
			code: "UpTo10",
			qty: 1,
			price: 185000,
		},
		{
			id: 2,
			name: "Internet Access Lite Download 10Mbps",
			description: "Periode 20 November 2023",
			code: "UpTo10",
			qty: 2,
			price: 185000,
		},
	]);
	const [discount] = useState<number>(20000);
	const [tax] = useState<number>(3000);

	const handleClick = () => {
		handlePrint1();
	};

	return (
		<div>
			<div onClick={handleClick} className="mb-2 cursor-pointer w-fit">
				Print Here
			</div>
			<div className="shadow-white shadow bg-[#001e00] dark:bg-base-600">
				<div ref={invRef1} className="p-10">
					<div className="flex justify-between items-start gap-20 mb-8">
						<div>
							<div
								style={{
									color: themeColor,
								}}
								className="font-bold text-3xl"
							>
								ERP
							</div>
							<div className="text-sm mt-4">
								<div className="uppercase font-semibold">
									PT. Queen Network Nusantara
								</div>
								<div className="text-xs">
									Jl. Alam Gaya No. 42 BTN II Way Halim Permai
									<br />
									Bandar Lampung, Lampung 35135
								</div>
							</div>
						</div>
						<div className="w-fit text-right">
							<div className="font-bold text-4xl tracking-wider">INVOICE</div>
							<div className="text-sm font-medium">47/ADM-INV/11/23</div>
						</div>
					</div>

					<div className="flex gap-20 mb-8">
						<div className="text-sm">
							<div className="mb-1 font-semibold">Invoice To:</div>
							<div>Ayu Fitriani</div>
							<div>Jl. Pulau Legundi gg family no 56</div>
							<div>08123456789</div>
						</div>
						<div className="text-sm">
							<div className="mb-1 font-semibold">INVOICE</div>
							<div>Cust. ID: 47</div>
							<div>Date: 20 November 2023</div>
							<div>Due Date: 5 Desember 2023</div>
						</div>
					</div>

					<div className="text-sm mb-8">
						<table className="w-full">
							<thead className="border-y dark:border-base-400">
								<tr>
									<th className="p-2 text-left">Description</th>
									<th className="p-2 text-left">Code</th>
									<th className="p-2 text-left">Quantity</th>
									<th className="p-2 text-left">Price</th>
									<th className="p-2 text-right">Sub Total</th>
								</tr>
							</thead>
							<tbody>
								{items.map((item, itemIdx) => (
									<tr key={itemIdx}>
										<td className="p-2">
											<div className="font-medium">{item.name}</div>
											<div className="text-xs">{item.description}</div>
										</td>
										<td className="p-2">{item.code}</td>
										<td className="p-2">{item.qty}</td>
										<td className="p-2">{convertToRupiah(item.price)}</td>
										<td className="p-2 text-right">
											{convertToRupiah(item.price * item.qty)}
										</td>
									</tr>
								))}

								<tr className="border-t dark:border-base-400">
									<td colSpan={4} className="pt-2 px-2 text-right">
										Sub Total
									</td>
									<td className="pt-2 px-2 text-right">
										{convertToRupiah(
											items.reduce(
												(acc, item) => acc + item.price * item.qty,
												0
											)
										)}
									</td>
								</tr>

								<tr>
									<td colSpan={4} className="px-2 text-right">
										Discount
									</td>
									<td className="px-2 text-right">
										{convertToRupiah(discount)}
									</td>
								</tr>

								<tr>
									<td colSpan={4} className="pb-2 px-2 text-right">
										Tax
									</td>
									<td className="pb-2 px-2 text-right">
										{convertToRupiah(tax)}
									</td>
								</tr>

								<tr className="border-t dark:border-base-400">
									<td colSpan={4} className="p-2 text-right">
										TOTAL
									</td>
									<td className="px-2 text-right font-semibold">
										{convertToRupiah(
											items.reduce(
												(acc, item) => acc + item.price * item.qty,
												0
											) -
											discount +
											tax
										)}
									</td>
								</tr>
							</tbody>
						</table>

						<div className="capitalize mt-2">
							<div className="font-medium italic">
								*
								{angkaTerbilang(
									items.reduce((acc, item) => acc + item.price * item.qty, 0) -
									discount +
									tax
								)}
							</div>
						</div>
					</div>

					<div className="mb-4">
						<div className="text-sm">
							<div className="mb-1 font-semibold">Our Bank Account:</div>
							<div>Bank BCA</div>
							<div>0202924555</div>
							<div>a/n PT. Queen Network Nusantara</div>
						</div>
					</div>

					<div className="text-right text-sm relative mb-8">
						<div className="mb-12">Bandar Lampung, 20 November 2023</div>
						<div>Finance</div>

						<div className="absolute top-1/2 -mt-4 right-0">
							<div
								style={{
									color: themeColor,
								}}
								className="font-bold text-3xl"
							>
								ERP
							</div>
						</div>
					</div>

					<div className="text-xs">
						*Catatan: Untuk Menghindari Pemutusan Akses Internet, Mohon
						Melakukan Pembayaran Sebelum Tanggal Jatuh Tempo
					</div>
				</div>
			</div>
		</div>
	);
};

export default ExampleTemplateInvoice;
