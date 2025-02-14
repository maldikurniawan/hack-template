import { useState } from "react";
import { Button, Limit, Modal, Pagination, Tables, TextField } from "@/components";
import DomainInfo from './Sub/DomainInfo'
import DomainRecords from './Sub/DomainRecords'
import SubDomain from './Sub/SubDomain'
import { MdHistory } from "react-icons/md";
import { useGetData } from "@/actions";
import { API_URL_allScan, API_URL_getDomain } from "@/constants";
import { debounce } from "lodash";

const ReconnaissancePage = () => {
    const [inputDomain, setInputDomain] = useState("");
    const [domain, setDomain] = useState("");
    const [limit, setLimit] = useState(10);
    const [searchTerm, setSearchTerm] = useState("");
    const [pageActive, setPageActive] = useState(1);
    const [historyModal, setHistoryModal] = useState<boolean>(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const trimmedDomain = inputDomain.trim();
        if (trimmedDomain) {
            setDomain(trimmedDomain);
        }
    };

    useGetData(
        domain ? API_URL_allScan : null,
        ["allDomain", domain],
        true,
        { domain }
    );

    const getDomain = useGetData(API_URL_getDomain, ["getDomain"], true);

    const domainData = getDomain.data || {};

    // console.log(domainData)

    const handleSearch = debounce((value) => {
        setSearchTerm(value);
        setPageActive(1);
    });

    return (
        <div>
            <form onSubmit={handleSubmit} className="flex gap-2 mb-4">
                <TextField
                    type="text"
                    variant="outline"
                    label="Enter Domain"
                    color="lightGreen"
                    value={inputDomain}
                    onChange={(e) => setInputDomain(e.target.value)}
                    placeholder="Enter Domain"
                />
                <Button type="submit">Submit</Button>
                <Button onClick={() => setHistoryModal(true)} size="40" className="px-1.5">
                    <MdHistory className="w-6 h-6" />
                </Button>
            </form>
            {domain ? (
                <div className="space-y-4">
                    <div>
                        <DomainInfo domain={domain} />
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                        <DomainRecords domain={domain} />
                        <SubDomain domain={domain} />
                    </div>
                </div>
            ) : (
                <div>Please enter a domain to proceed!</div>
            )}
            {/* Modal */}
            <Modal show={historyModal} setShow={setHistoryModal} width="lg" height="auto">
                <div className="text-lg font-normal p-5">
                    <div className="mb-2">History</div>
                    <div className="mb-4 flex flex-col sm:flex-row justify-center sm:justify-between items-center gap-4">
                        <div className="w-full sm:w-60">
                            <TextField
                                type="text"
                                placeholder="Search"
                                value={searchTerm}
                                onChange={(e) => handleSearch(e.target.value)}
                            />
                        </div>
                    </div>

                    {/* Tables */}
                    <Tables>
                        <Tables.Head>
                            <Tables.Row>
                                <Tables.Header>Domain ID</Tables.Header>
                                <Tables.Header>Domain Name</Tables.Header>
                            </Tables.Row>
                        </Tables.Head>
                        <Tables.Body>
                            {domainData.data?.map((item: any, idx: any) => (
                                    <Tables.Row
                                        expandable={<div className="p-2">{item.name}</div>}
                                        key={idx}
                                    >
                                        <Tables.Data>{item.domain_id}</Tables.Data>
                                        <Tables.Data>{item.domain_name}</Tables.Data>
                                    </Tables.Row>
                                ))}
                        </Tables.Body>
                    </Tables>

                    {/* Control Bottom */}
                    <div className="mt-4 flex flex-col sm:flex-row justify-center sm:justify-between items-center gap-4">
                        <div className="flex gap-2 items-baseline text-sm">
                            <Limit
                                limit={limit}
                                setLimit={setLimit}
                                onChange={() => setPageActive(1)}
                            />
                            {domainData.data.length} entries
                        </div>

                        <Pagination
                            totalCount={domainData.data.length}
                            onPageChange={(page) => {
                                setPageActive(page);
                            }}
                            currentPage={pageActive}
                            pageSize={limit}
                        />
                    </div>
                </div>
            </Modal>
        </div>
    );
};

export default ReconnaissancePage;
