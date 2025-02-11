import { useState } from "react";
import { useGetData } from "@/actions";
import { API_URL_subDomain } from "@/constants";
import { Loader, Tables, TerminalCard, Limit, Pagination, TextField } from "@/components";
import debounce from "lodash/debounce";

const SubDomain = ({ domain }: { domain: string }) => {
    const [pageActive, setPageActive] = useState(1);
    const [limit, setLimit] = useState(10);
    const [searchTerm, setSearchTerm] = useState("");

    const getWhois = useGetData(
        domain ? API_URL_subDomain : null,
        ["subDomain", domain],
        true,
        { domain }
    );

    const whoisData = getWhois.data?.data || [];

    // Filter data based on search term
    const filteredData = whoisData.filter((subDomain: string) =>
        subDomain.toLowerCase().includes(searchTerm.toLowerCase())
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

    return (
        <div>
            <TerminalCard title="Sub Domain">
                <div>
                    {!domain ? (
                        <div>Please enter a domain</div>
                    ) : getWhois.isLoading ? (
                        <div className="p-4"><Loader /></div>
                    ) : getWhois.isError ? (
                        <div className="text-lightRed">Error loading data</div>
                    ) : (
                        <div>
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
                            <Tables>
                                <Tables.Body>
                                    {paginatedData.length > 0 ? (
                                        paginatedData.map((subDomain: any, index: any) => (
                                            <Tables.Row key={index}>
                                                <Tables.Data center>{(pageActive - 1) * limit + index + 1}</Tables.Data>
                                                <Tables.Data>{subDomain}</Tables.Data>
                                            </Tables.Row>
                                        ))
                                    ) : (
                                        <Tables.Row>
                                            <Tables.Data>No Data</Tables.Data>
                                        </Tables.Row>
                                    )}
                                </Tables.Body>
                            </Tables>

                            {/* Pagination Controls */}
                            {totalEntries > limit && (
                                <div className="my-4 flex flex-col justify-center sm:justify-between items-center gap-4">
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
                                        onPageChange={(page) => setPageActive(page)}
                                        currentPage={pageActive}
                                        pageSize={limit}
                                    />
                                </div>
                            )}
                        </div>
                    )}
                </div>
            </TerminalCard>
        </div>
    );
};

export default SubDomain;
