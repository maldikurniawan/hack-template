import { useState } from "react";
import { Button, Limit, Modal, Pagination, Tables, TextField } from "@/components";
import DomainInfo from './Sub/DomainInfo'
import DomainRecords from './Sub/DomainRecords'
import SubDomain from './Sub/SubDomain'
import { MdHistory } from "react-icons/md";
import { useGetData } from "@/actions";
import moment from "moment";
import { API_URL_allScan, API_URL_getDomain } from "@/constants";
import { debounce } from "lodash";
import { FaLink } from "react-icons/fa";

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
    const domainPaginate = getDomain.data?.data || [];

    // Filter data based on search term
    const filteredData = domainPaginate.filter((item: any) =>
        (item.domain_name?.toString().toLowerCase() || "").includes(searchTerm.toLowerCase())
    );

    // Pagination logic
    const totalEntries = filteredData.length;
    const paginatedData = filteredData.slice(
        (pageActive - 1) * limit,
        pageActive * limit
    );


    // console.log(paginatedData)

    const handleSearch = debounce((value) => {
        setSearchTerm(value);
        setPageActive(1);
    });

    return (
        <div>
            <form onSubmit={handleSubmit} id="domainForm" className="flex gap-2 mb-4">
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
                    <div className="mb-2">Domain History</div>
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
                                <Tables.Header>ID</Tables.Header>
                                <Tables.Header>Name</Tables.Header>
                                <Tables.Header>Created At</Tables.Header>
                                <Tables.Header center>Actions</Tables.Header>
                            </Tables.Row>
                        </Tables.Head>
                        <Tables.Body>
                            {paginatedData.length > 0 ? (
                                paginatedData.map((item: any, idx: any) => (
                                    <Tables.Row key={idx}>
                                        <Tables.Data>
                                            <div className="whitespace-nowrap">{item.domain_id ?? "N/A"}</div>
                                        </Tables.Data>
                                        <Tables.Data>
                                            <div className="whitespace-nowrap">{item.domain_name ?? "N/A"}</div>
                                        </Tables.Data>
                                        <Tables.Data>
                                            <div className="whitespace-nowrap">{moment(item.created_at).format("D MMM YYYY")}</div>
                                        </Tables.Data>
                                        <Tables.Data center>
                                            <Button
                                                size="40"
                                                className="p-1.5"
                                                onClick={() => {
                                                    setInputDomain(item.domain_name ?? "");
                                                    setHistoryModal(false);
                                                    setTimeout(() => {
                                                        const form = document.getElementById("domainForm") as HTMLFormElement;
                                                        if (form) form.requestSubmit();
                                                    }, 100);
                                                }}
                                            >
                                                <FaLink className="w-4 h-4" />
                                            </Button>
                                        </Tables.Data>
                                    </Tables.Row>
                                ))
                            ) : (
                                <Tables.Row>
                                    <Tables.Data>No Data</Tables.Data>
                                </Tables.Row>
                            )}
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
                            {totalEntries} entries
                        </div>

                        <Pagination
                            totalCount={totalEntries}
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
