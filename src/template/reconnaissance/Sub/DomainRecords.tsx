import { Tables, TerminalCardV2 } from "@/components";

interface DomainRecordsProps {
    data: any;
}

const DomainRecords: React.FC<DomainRecordsProps> = ({ data }) => {
    const domainData = data?.data ?? {};
    console.log(domainData)

    return (
        <TerminalCardV2 title="Domain Records">
            <Tables>
                <Tables.Body>
                    <Tables.Row>
                        <Tables.Data>IPv4 Address</Tables.Data>
                        <Tables.Data>
                            {
                                Array.isArray(domainData.a)
                                    ? domainData.a.join(", ")
                                    : domainData.a ?? "N/A"
                            }
                        </Tables.Data>
                    </Tables.Row>
                    <Tables.Row>
                        <Tables.Data>IPv6 Address</Tables.Data>
                        <Tables.Data>
                            {
                                Array.isArray(domainData.aaaa)
                                    ? domainData.aaaa.join(", ")
                                    : domainData.aaaa ?? "N/A"
                            }
                        </Tables.Data>
                    </Tables.Row>
                    <Tables.Row>
                        <Tables.Data>Canonical Name</Tables.Data>
                        <Tables.Data>
                            {
                                Array.isArray(domainData.cname)
                                    ? domainData.cname.join(", ")
                                    : domainData.cname ?? "N/A"
                            }
                        </Tables.Data>
                    </Tables.Row>
                    <Tables.Row>
                        <Tables.Data>Mail Exchange</Tables.Data>
                        <Tables.Data>
                            {
                                Array.isArray(domainData.mx)
                                    ? domainData.mx.join(", ")
                                    : domainData.mx ?? "N/A"
                            }
                        </Tables.Data>
                    </Tables.Row>
                    <Tables.Row>
                        <Tables.Data>Server Name</Tables.Data>
                        <Tables.Data>
                            {
                                Array.isArray(domainData.ns)
                                    ? domainData.ns.join(", ")
                                    : domainData.ns ?? "N/A"
                            }
                        </Tables.Data>
                    </Tables.Row>
                    <Tables.Row>
                        <Tables.Data>Pointer</Tables.Data>
                        <Tables.Data>
                            {
                                Array.isArray(domainData.ptr)
                                    ? domainData.ptr.join(", ")
                                    : domainData.ptr ?? "N/A"
                            }
                        </Tables.Data>
                    </Tables.Row>
                    <Tables.Row>
                        <Tables.Data>Start of Authority</Tables.Data>
                        <Tables.Data>
                            {
                                Array.isArray(domainData.soa)
                                    ? domainData.soa.join(", ")
                                    : domainData.soa ?? "N/A"
                            }
                        </Tables.Data>
                    </Tables.Row>
                    <Tables.Row>
                        <Tables.Data>Text</Tables.Data>
                        <Tables.Data>
                            {
                                Array.isArray(domainData.txt)
                                    ? domainData.txt.join(", ")
                                    : domainData.txs ?? "N/A"
                            }
                        </Tables.Data>
                    </Tables.Row>
                    <Tables.Row>
                        <Tables.Data>Certification Authority Authorization</Tables.Data>
                        <Tables.Data>
                            {
                                Array.isArray(domainData.caa)
                                    ? domainData.caa.join(", ")
                                    : domainData.caa ?? "N/A"
                            }
                        </Tables.Data>
                    </Tables.Row>
                    <Tables.Row>
                        <Tables.Data>Delegation Signer</Tables.Data>
                        <Tables.Data>
                            {
                                Array.isArray(domainData.ds)
                                    ? domainData.ds.join(", ")
                                    : domainData.ds ?? "N/A"
                            }
                        </Tables.Data>
                    </Tables.Row>
                    <Tables.Row>
                        <Tables.Data>DNSSEC Key</Tables.Data>
                        <Tables.Data>
                            {
                                Array.isArray(domainData.dnskey)
                                    ? domainData.dnskey.join(", ")
                                    : domainData.dnskey ?? "N/A"
                            }
                        </Tables.Data>
                    </Tables.Row>
                </Tables.Body>
            </Tables>
        </TerminalCardV2>
    );
};

export default DomainRecords;
