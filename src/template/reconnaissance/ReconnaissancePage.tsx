import { useState } from "react";
import { Button, Limit, LoaderV2, Modal, Pagination, Tables, TerminalCardV2, TextField } from "@/components";
import { MdHistory } from "react-icons/md";
import { useGetData, usePostData } from "@/actions";
import moment from "moment";
import {
    API_URL_reconnaissance,
    API_URL_domainInfo,
    API_URL_domainRecords,
    API_URL_subDomain,
    API_URL_getDomain,
} from "@/constants";
import { debounce } from "lodash";
import { FaLink } from "react-icons/fa";
import DomainInfo from "./Sub/DomainInfo";
import DomainRecords from "./Sub/DomainRecords";
import SubDomain from "./Sub/SubDomain";

const ReconnaissancePage = () => {
    const [limit, setLimit] = useState(10);
    const [searchTerm, setSearchTerm] = useState("");
    const [pageActive, setPageActive] = useState(1);
    const [historyModal, setHistoryModal] = useState<boolean>(false);
    const [domain, setDomain] = useState("");
    const [data, setData] = useState({
        domainInfo: null,
        domainRecords: null,
        subdomains: null,
        reconId: null,
    });

    const createReconMutation = usePostData(API_URL_reconnaissance, true);

    const { data: domainInfoData, isLoading: isDomainInfoLoading } = useGetData(
        API_URL_domainInfo,
        ["domainInfo", data.reconId],
        true,
        { id: data.reconId },
        { enabled: !!data.reconId }
    );

    const { data: domainRecordsData, isLoading: isDomainRecordsLoading } = useGetData(
        API_URL_domainRecords,
        ["domainRecords", data.reconId],
        true,
        { id: data.reconId },
        { enabled: !!data.reconId }
    );

    const { data: subdomainsData, isLoading: isSubdomainsLoading } = useGetData(
        API_URL_subDomain,
        ["subdomains", data.reconId],
        true,
        { id: data.reconId },
        { enabled: !!data.reconId }
    );

    // Fungsi untuk menangani submit form dan trigger createRecon
    const handleSubmit = async (e: any) => {
        e.preventDefault();

        createReconMutation.mutate(
            { domain_name: domain } as any,
            {
                onSuccess: (response) => {
                    setData({
                        ...data,
                        reconId: response.data.id,
                    });
                },
                onError: (error) => {
                    console.error("Error:", error);
                },
            }
        );
    };

    // Get Domain
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

    const handleSearch = debounce((value) => {
        setSearchTerm(value);
        setPageActive(1);
    });

    console.log(paginatedData)

    return (
        <div>
            <form onSubmit={handleSubmit} id="domainForm" className="flex gap-2 mb-4">
                <TextField
                    type="text"
                    variant="outline"
                    label="Enter Domain"
                    color="lightGreen"
                    value={domain}
                    onChange={(e) => setDomain(e.target.value)}
                    placeholder="Enter Domain"
                />
                <Button type="submit">Submit</Button>
                <Button onClick={() => setHistoryModal(true)} size="40" className="px-1.5">
                    <MdHistory className="w-6 h-6" />
                </Button>
            </form>
            <div className="space-y-4">
                <div>
                    {isDomainInfoLoading ? (
                        <TerminalCardV2 title="Domain Info">
                            <div className="px-4"><LoaderV2 /></div>
                        </TerminalCardV2>
                    ) : (
                        domainInfoData && <DomainInfo data={domainInfoData} />
                    )}
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                    {isDomainRecordsLoading ? (
                        <TerminalCardV2 title="Domain Records">
                            <div className="px-4"><LoaderV2 /></div>
                        </TerminalCardV2>
                    ) : (
                        domainRecordsData && <DomainRecords data={domainRecordsData} />
                    )}

                    {isSubdomainsLoading ? (
                        <TerminalCardV2 title="Sub Domain">
                            <div className="px-4"><LoaderV2 /></div>
                        </TerminalCardV2>
                    ) : (
                        subdomainsData && <SubDomain data={subdomainsData} />
                    )}
                </div>
            </div>
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
                                            >
                                                <FaLink className="w-4 h-4" />
                                            </Button>
                                        </Tables.Data>
                                    </Tables.Row>
                                ))
                            ) : (
                                <Tables.Row>
                                    <Tables.Data colspan={4} center>No Data</Tables.Data>
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
