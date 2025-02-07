import { useGetData } from "@/actions";
import { API_URL_subDomain } from "@/constants";
import { Loader, Tables, TerminalCard } from "@/components";

const SubDomain = ({ domain }: { domain: string }) => {
    const getWhois = useGetData(
        domain ? API_URL_subDomain : null,
        ["subDomain", domain],
        true,
        { domain }
    );

    const whoisData = getWhois.data?.data || [];

    return (
        <div>
            <TerminalCard title="Sub Domain">
                <div>
                    {!domain ? (
                        <div>Please enter a domain</div>
                    ) : getWhois.isLoading ? (
                        <div><Loader /></div>
                    ) : getWhois.isError ? (
                        <div className="text-lightRed">Error loading data</div>
                    ) : (
                        <div className="mt-4">
                            <Tables>
                                <Tables.Head>
                                    <Tables.Row>
                                        <Tables.Header>No</Tables.Header>
                                        <Tables.Header>Sub Domain</Tables.Header>
                                    </Tables.Row>
                                </Tables.Head>
                                <Tables.Body>
                                    {Array.isArray(whoisData) && whoisData.length > 0 ? (
                                        whoisData.map((subDomain, index) => (
                                            <Tables.Row key={index}>
                                                <Tables.Data>{index + 1}</Tables.Data>
                                                <Tables.Data>{subDomain}</Tables.Data>
                                            </Tables.Row>
                                        ))
                                    ) : (
                                        <Tables.Row>
                                            <Tables.Data>N/A</Tables.Data>
                                            <Tables.Data>N/A</Tables.Data>
                                        </Tables.Row>
                                    )}
                                </Tables.Body>
                            </Tables>
                        </div>
                    )}
                </div>
            </TerminalCard>
        </div>
    );
};

export default SubDomain;
