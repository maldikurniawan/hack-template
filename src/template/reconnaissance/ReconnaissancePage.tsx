import { useEffect, useState } from "react";
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

    const [step, setStep] = useState(0);
    const [currentReconId, setCurrentReconId] = useState(null);

    useEffect(() => {
        if (data.reconId && data.reconId !== currentReconId) {
            setCurrentReconId(data.reconId);
            setStep(1); // Reset ke step pertama untuk ID baru
        }
    }, [data.reconId]);

    const { data: domainInfoData, isLoading: isDomainInfoLoading, isError: isDomainInfoError } = useGetData(
        API_URL_domainInfo,
        ["domainInfo", currentReconId],
        true,
        { id: currentReconId },
        { enabled: step === 1 && !!currentReconId }
    );

    const { data: domainRecordsData, isLoading: isDomainRecordsLoading, isError: isDomainRecordsError } = useGetData(
        API_URL_domainRecords,
        ["domainRecords", currentReconId],
        true,
        { id: currentReconId },
        { enabled: step === 2 && !!currentReconId }
    );

    const { data: subdomainsData, isLoading: isSubdomainsLoading, isError: isSubdomainsError } = useGetData(
        API_URL_subDomain,
        ["subdomains", currentReconId],
        true,
        { id: currentReconId },
        { enabled: step === 3 && !!currentReconId }
    );

    // Update step berdasarkan data yang selesai dimuat
    useEffect(() => {
        if (step === 1 && domainInfoData) {
            setStep(2);
        }
    }, [step, domainInfoData]);

    useEffect(() => {
        if (step === 2 && domainRecordsData) {
            setStep(3);
        }
    }, [step, domainRecordsData]);


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

    // Fungsi untuk menangani klik pada tombol Actions
    const handleViewDetails = (id: string) => {
        // Set reconId ke state untuk memicu pengambilan data baru
        setData({
            ...data,
            reconId: id as any,
        });
        setHistoryModal(false);
    };

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
                    ) : isDomainInfoError ? (
                        <TerminalCardV2 title="Domain Info">
                            <div className="px-4 text-lightRed py-2">Error loading domain info</div>
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
                    ) : isDomainRecordsError ? (
                        <TerminalCardV2 title="Domain Records">
                            <div className="px-4 text-lightRed py-2">Error loading domain records</div>
                        </TerminalCardV2>
                    ) : (
                        domainRecordsData && <DomainRecords data={domainRecordsData} />
                    )}

                    {isSubdomainsLoading ? (
                        <TerminalCardV2 title="Subdomain">
                            <div className="px-4"><LoaderV2 /></div>
                        </TerminalCardV2>
                    ) : isSubdomainsError ? (
                        <TerminalCardV2 title="Subdomain">
                            <div className="px-4 text-lightRed py-2">Error loading subdomains</div>
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
                                            <div className="whitespace-nowrap">{item.id ?? "N/A"}</div>
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
                                                onClick={() => handleViewDetails(item.id)}
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