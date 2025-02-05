import { useGetData } from "@/actions";
import { API_URL_domainRecords } from "@/constants";
import { Loader, Tables, TerminalCard } from "@/components";

const DomainRecords = ({ domain }: { domain: string }) => {
    const getWhois = useGetData(
        domain ? API_URL_domainRecords : null,
        ["domainRecords", domain],
        true,
        { domain }
    );

    const whoisData = getWhois.data?.data || {};
    
    console.log(getWhois.data)

    return (
        <div>
            <TerminalCard title="Domain Records">
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
                                        <Tables.Header>Field</Tables.Header>
                                        <Tables.Header>Value</Tables.Header>
                                    </Tables.Row>
                                </Tables.Head>
                                <Tables.Body>
                                    <Tables.Row>
                                        <Tables.Data>Domain ID</Tables.Data>
                                        <Tables.Data>
                                            {
                                                whoisData.domain_id ??
                                                whoisData.domain__id ??
                                                "N/A"
                                            }
                                        </Tables.Data>
                                    </Tables.Row>
                                </Tables.Body>
                            </Tables>
                        </div>
                    )}
                </div>
            </TerminalCard>
        </div>
    );
};

export default DomainRecords;
