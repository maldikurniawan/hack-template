import { Button, Kuitansi, Select } from "@/components";
import { useRef, useState } from "react";
import { useReactToPrint } from "react-to-print";

// Define types for Select options and data
interface TemplateOption {
    value: 1 | 2 | 3;
    label: string;
}

interface Data {
    noInvoice: string;
    telahTerimaDari: string;
    uangSejumlah: number;
    untukPembayaran: string;
    metodePembayaran: string;
    penerima: string;
    datetime: string;
}

const ExampleTemplateKuitansi = () => {
    const [template] = useState<TemplateOption[]>([
        { value: 1, label: "Kuitansi #1" },
        { value: 2, label: "Kuitansi #2" },
        { value: 3, label: "Kuitansi #3" },
    ]);

    const [selectedTemplate, setSelectedTemplate] = useState<TemplateOption>({
        value: 1,
        label: "Kuitansi #1",
    });

    const ref = useRef<HTMLDivElement | null>(null);

    const handlePrint = useReactToPrint({
        contentRef: ref,
        documentTitle: selectedTemplate.label,
    });

    const [data] = useState<Data>({
        noInvoice: "47/ADM-INV/11/23",
        telahTerimaDari: "Asep Sutisna",
        uangSejumlah: 200000,
        untukPembayaran: "Layanan Internet Paket 15Mbps - Asep Sutisna",
        metodePembayaran: "Tunai",
        penerima: "Talitha",
        datetime: "23/11/2021",
    });

    return (
        <div>
            <div className="flex items-start justify-between mb-3">
                <div>{selectedTemplate.label}</div>

                <div className="flex gap-2">
                    <Button onClick={handlePrint}>Print</Button>
                    <div className="w-32">
                        <Select
                            options={template}
                            placeholder="Select Template"
                            value={selectedTemplate}
                            onChange={(e) => {
                                setSelectedTemplate(e as TemplateOption); // Ensure type safety
                            }}
                        />
                    </div>
                </div>
            </div>
            <div className="bg-[#1A1A1A] overflow-hidden">
                <Kuitansi ref={ref} type={selectedTemplate.value} data={data} />
            </div>
        </div>
    );
};

export default ExampleTemplateKuitansi;
