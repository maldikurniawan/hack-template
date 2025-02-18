import moment from "moment";
import { Tables, TerminalCardV2 } from "@/components";

interface DomainInfoProps {
    data: any;
}

const DomainInfo: React.FC<DomainInfoProps> = ({ data }) => {
    const domainData = data?.data?.data ?? {};

    return (
        <TerminalCardV2 title="Domain Info">
            <Tables>
                <Tables.Body>
                    <Tables.Row>
                        <Tables.Data>Domain ID</Tables.Data>
                        <Tables.Data>
                            {
                                domainData.domain_id ??
                                domainData.domain__id ??
                                "N/A"
                            }
                        </Tables.Data>
                        <Tables.Data style={{ borderLeft: "1px solid #00FF00" }}>
                            <p className="pl-1">Domain Name</p>
                        </Tables.Data>
                        <Tables.Data>{domainData.domain_name ?? "N/A"}</Tables.Data>
                    </Tables.Row>
                    <Tables.Row>
                        <Tables.Data>Registrar</Tables.Data>
                        <Tables.Data>{domainData.registrar ?? "N/A"}</Tables.Data>
                        <Tables.Data style={{ borderLeft: "1px solid #00FF00" }}>
                            <p className="pl-1">Registrar URL</p>
                        </Tables.Data>
                        <Tables.Data>
                            {
                                Array.isArray(domainData.registrar_url)
                                    ? domainData.registrar_url.join(", ")
                                    : domainData.registrar_url ?? "N/A"
                            }
                        </Tables.Data>
                    </Tables.Row>
                    <Tables.Row>
                        <Tables.Data>Updated</Tables.Data>
                        <Tables.Data>
                            {
                                Array.isArray(domainData.updated_date)
                                    ? domainData.updated_date.map((date: string) => moment(date).format("DD-MM-YYYY HH:mm:ss")).join(", ")
                                    : moment(domainData.updated_date).format("DD MMM YYYY HH:mm:ss")
                            }
                        </Tables.Data>
                        <Tables.Data style={{ borderLeft: "1px solid #00FF00" }}>
                            <p className="pl-1">Created</p>
                        </Tables.Data>
                        <Tables.Data>
                            {
                                Array.isArray(domainData.creation_date)
                                    ? domainData.creation_date.map((date: string) => moment(date).format("DD-MM-YYYY HH:mm:ss")).join(", ")
                                    : moment(domainData.creation_date).format("DD MMM YYYY HH:mm:ss")
                            }
                        </Tables.Data>
                    </Tables.Row>
                    <Tables.Row>
                        <Tables.Data>Expired</Tables.Data>
                        <Tables.Data>
                            {
                                Array.isArray(domainData.expiration_date)
                                    ? domainData.expiration_date.map((date: string) => moment(date).format("DD-MM-YYYY HH:mm:ss")).join(", ")
                                    : moment(domainData.expiration_date).format("DD MMM YYYY HH:mm:ss")
                            }
                        </Tables.Data>
                        <Tables.Data style={{ borderLeft: "1px solid #00FF00" }}>
                            <p className="pl-1">Name Servers</p>
                        </Tables.Data>
                        <Tables.Data>
                            {
                                Array.isArray(domainData.name_servers)
                                    ? domainData.name_servers.join(", ")
                                    : domainData.name_servers ?? "N/A"
                            }
                        </Tables.Data>
                    </Tables.Row>
                    <Tables.Row>
                        <Tables.Data>Status</Tables.Data>
                        <Tables.Data>
                            {
                                Array.isArray(domainData.status)
                                    ? domainData.status.join(", ")
                                    : domainData.status ?? "N/A"
                            }
                        </Tables.Data>
                        <Tables.Data style={{ borderLeft: "1px solid #00FF00" }}>
                            <p className="pl-1">Emails</p>
                        </Tables.Data>
                        <Tables.Data>
                            {
                                domainData.emails ??
                                domainData.email ??
                                domainData.registrar_email ??
                                domainData.registrant_email ??
                                "N/A"
                            }
                        </Tables.Data>
                    </Tables.Row>
                    <Tables.Row>
                        <Tables.Data>Phone</Tables.Data>
                        <Tables.Data>
                            {
                                domainData.registrar_phone ??
                                domainData.registrant_phone ??
                                "N/A"
                            }
                        </Tables.Data>
                        <Tables.Data style={{ borderLeft: "1px solid #00FF00" }}>
                            <p className="pl-1">DNSSEC</p>
                        </Tables.Data>
                        <Tables.Data>{domainData.dnssec ?? "N/A"}</Tables.Data>
                    </Tables.Row>
                    <Tables.Row>
                        <Tables.Data>Name</Tables.Data>
                        <Tables.Data>
                            {
                                domainData.name ??
                                domainData.registrant_name ??
                                "N/A"
                            }
                        </Tables.Data>
                        <Tables.Data style={{ borderLeft: "1px solid #00FF00" }}>
                            <p className="pl-1">ORG</p>
                        </Tables.Data>
                        <Tables.Data>
                            {
                                domainData.org ??
                                domainData.registrant_organization ??
                                "N/A"
                            }
                        </Tables.Data>
                    </Tables.Row>
                    <Tables.Row>
                        <Tables.Data>Address</Tables.Data>
                        <Tables.Data>
                            {
                                Array.isArray(domainData.address)
                                    ? domainData.address.join(", ")
                                    : domainData.address ?? "N/A"
                            }
                        </Tables.Data>
                        <Tables.Data style={{ borderLeft: "1px solid #00FF00" }}>
                            <p className="pl-1">City</p>
                        </Tables.Data>
                        <Tables.Data>
                            {
                                domainData.city ??
                                domainData.registrar_city ??
                                domainData.registrant_city ?? "N/A"
                            }
                        </Tables.Data>
                    </Tables.Row>
                    <Tables.Row>
                        <Tables.Data>State</Tables.Data>
                        <Tables.Data>{domainData.state ?? "N/A"}</Tables.Data>
                        <Tables.Data style={{ borderLeft: "1px solid #00FF00" }}>
                            <p className="pl-1">Postal Code</p>
                        </Tables.Data>
                        <Tables.Data>
                            {
                                domainData.registrar_postal_code ??
                                domainData.registrant_postal_code ?? "N/A"
                            }
                        </Tables.Data>
                    </Tables.Row>
                    <Tables.Row>
                        <Tables.Data>Country</Tables.Data>
                        <Tables.Data>
                            {
                                domainData.registrar_country ??
                                domainData.country ?? "N/A"
                            }
                        </Tables.Data>
                        <Tables.Data style={{ borderLeft: "1px solid #00FF00" }}>
                            <p className="pl-1">Whois Server</p>
                        </Tables.Data>
                        <Tables.Data>
                            {
                                domainData.whois_server ?? "N/A"
                            }
                        </Tables.Data>
                    </Tables.Row>
                </Tables.Body>
            </Tables>
        </TerminalCardV2>
    );
};

export default DomainInfo;