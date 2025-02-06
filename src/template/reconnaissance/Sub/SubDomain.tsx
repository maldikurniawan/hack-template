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

    const whoisData = getWhois.data?.data || {};

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
                                        <Tables.Header>Field</Tables.Header>
                                        <Tables.Header>Value</Tables.Header>
                                    </Tables.Row>
                                </Tables.Head>
                                <Tables.Body>
                                    <Tables.Row>
                                        <Tables.Data>Sub Domain</Tables.Data>
                                        <Tables.Data>
                                            {
                                                Array.isArray(whoisData)
                                                    ? whoisData.join(", ")
                                                    : whoisData ?? "N/A"
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

export default SubDomain;
