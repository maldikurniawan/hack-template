import { useState } from "react";
import { useGetData } from "@/actions";
import { API_URL_subDomain } from "@/constants";
import { Loader, Tables, TerminalCardV2, Limit, Pagination } from "@/components";

const SubDomain = ({ domain }: { domain: string }) => {
    const [pageActive, setPageActive] = useState(1);
    const [limit, setLimit] = useState(10);

    const getWhois = useGetData(
        domain ? API_URL_subDomain : null,
        ["subDomain", domain],
        true,
        { domain }
    );

    const whoisData = getWhois.data?.data || [];

    // Pagination logic
    const totalEntries = whoisData.length;
    const paginatedData = whoisData.slice(
        (pageActive - 1) * limit,
        pageActive * limit
    );

    return (
        <div>
            <TerminalCardV2 title="Sub Domain">
                <div>
                    {!domain ? (
                        <div>Please enter a domain</div>
                    ) : getWhois.isLoading ? (
                        <div className="p-4"><Loader /></div>
                    ) : getWhois.isError ? (
                        <div className="text-lightRed">Error loading data</div>
                    ) : (
                        <div>
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
                                            <Tables.Data center>N/A</Tables.Data>
                                            <Tables.Data>N/A</Tables.Data>
                                        </Tables.Row>
                                    )}
                                </Tables.Body>
                            </Tables>

                            {/* Pagination Controls */}
                            {totalEntries > limit && (
                                <div className="mt-4 mb-4 flex flex-col justify-center sm:justify-between items-center gap-4">
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
            </TerminalCardV2>
        </div>
    );
};

export default SubDomain;
