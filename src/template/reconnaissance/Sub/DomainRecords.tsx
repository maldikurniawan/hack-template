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
                                        <Tables.Data>IPv4 Address</Tables.Data>
                                        <Tables.Data>
                                            {
                                                Array.isArray(whoisData.a)
                                                    ? whoisData.a.join(", ")
                                                    : whoisData.a ?? "N/A"
                                            }
                                        </Tables.Data>
                                    </Tables.Row>
                                    <Tables.Row>
                                        <Tables.Data>IPv6 Address</Tables.Data>
                                        <Tables.Data>
                                            {
                                                Array.isArray(whoisData.aaaa)
                                                    ? whoisData.aaaa.join(", ")
                                                    : whoisData.aaaa ?? "N/A"
                                            }
                                        </Tables.Data>
                                    </Tables.Row>
                                    <Tables.Row>
                                        <Tables.Data>Canonical Name</Tables.Data>
                                        <Tables.Data>
                                            {
                                                Array.isArray(whoisData.cname)
                                                    ? whoisData.cname.join(", ")
                                                    : whoisData.cname ?? "N/A"
                                            }
                                        </Tables.Data>
                                    </Tables.Row>
                                    <Tables.Row>
                                        <Tables.Data>Mail Exchange</Tables.Data>
                                        <Tables.Data>
                                            {
                                                Array.isArray(whoisData.mx)
                                                    ? whoisData.mx.join(", ")
                                                    : whoisData.mx ?? "N/A"
                                            }
                                        </Tables.Data>
                                    </Tables.Row>
                                    <Tables.Row>
                                        <Tables.Data>Server Name</Tables.Data>
                                        <Tables.Data>
                                            {
                                                Array.isArray(whoisData.ns)
                                                    ? whoisData.ns.join(", ")
                                                    : whoisData.ns ?? "N/A"
                                            }
                                        </Tables.Data>
                                    </Tables.Row>
                                    <Tables.Row>
                                        <Tables.Data>Pointer</Tables.Data>
                                        <Tables.Data>
                                            {
                                                Array.isArray(whoisData.ptr)
                                                    ? whoisData.ptr.join(", ")
                                                    : whoisData.ptr ?? "N/A"
                                            }
                                        </Tables.Data>
                                    </Tables.Row>
                                    <Tables.Row>
                                        <Tables.Data>Start of Authority</Tables.Data>
                                        <Tables.Data>
                                            {
                                                Array.isArray(whoisData.soa)
                                                    ? whoisData.soa.join(", ")
                                                    : whoisData.soa ?? "N/A"
                                            }
                                        </Tables.Data>
                                    </Tables.Row>
                                    <Tables.Row>
                                        <Tables.Data>Text</Tables.Data>
                                        <Tables.Data>
                                            {
                                                Array.isArray(whoisData.txt)
                                                    ? whoisData.txt.join(", ")
                                                    : whoisData.txs ?? "N/A"
                                            }
                                        </Tables.Data>
                                    </Tables.Row>
                                    <Tables.Row>
                                        <Tables.Data>Certification Authority Authorization</Tables.Data>
                                        <Tables.Data>
                                            {
                                                Array.isArray(whoisData.caa)
                                                    ? whoisData.caa.join(", ")
                                                    : whoisData.caa ?? "N/A"
                                            }
                                        </Tables.Data>
                                    </Tables.Row>
                                    <Tables.Row>
                                        <Tables.Data>Delegation Signer</Tables.Data>
                                        <Tables.Data>
                                            {
                                                Array.isArray(whoisData.ds)
                                                    ? whoisData.ds.join(", ")
                                                    : whoisData.ds ?? "N/A"
                                            }
                                        </Tables.Data>
                                    </Tables.Row>
                                    <Tables.Row>
                                        <Tables.Data>DNSSEC Key</Tables.Data>
                                        <Tables.Data>
                                            {
                                                Array.isArray(whoisData.dnskey)
                                                    ? whoisData.dnskey.join(", ")
                                                    : whoisData.dnskey ?? "N/A"
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
