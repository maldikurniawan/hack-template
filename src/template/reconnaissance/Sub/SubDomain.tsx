import { useState } from "react";
import { Tables, TerminalCardV2, Limit, Pagination, TextField } from "@/components";
import debounce from "lodash/debounce";

interface SubDomainProps {
    data: any;
}

const SubDomain: React.FC<SubDomainProps> = ({ data }) => {
    const [pageActive, setPageActive] = useState(1);
    const [limit, setLimit] = useState(10);
    const [searchTerm, setSearchTerm] = useState("");

    const domainData = data?.data ?? {};

    // Filter data based on search term
    const filteredData = domainData.filter((subDomain: string) =>
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
        <TerminalCardV2 title="Subdomain">
            <div className="p-4 flex flex-col sm:flex-row justify-center sm:justify-between items-center gap-4">
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
        </TerminalCardV2 >
    );
};

export default SubDomain;
