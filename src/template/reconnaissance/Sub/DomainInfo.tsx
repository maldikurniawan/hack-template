import { useGetData } from "@/actions";
import { API_URL_domainInfo } from "@/constants";
import moment from "moment";
import { LoaderV2, Tables, TerminalCardV2 } from "@/components";

const DomainInfo = ({ domain }: { domain: string }) => {
    const getWhois = useGetData(
        domain ? API_URL_domainInfo : null,
        ["domainInfo", domain],
        true,
        { domain }
    );

    const whoisData = getWhois.data?.data || {};

    return (
        <div>
            <TerminalCardV2 title="Domain Info">
                <div>
                    {!domain ? (
                        <div>Please enter a domain</div>
                    ) : getWhois.isLoading ? (
                        <div className="px-4"><LoaderV2 /></div>
                    ) : getWhois.isError ? (
                        <div className="text-lightRed p-4">Error loading data</div>
                    ) : (
                        <div>
                            <Tables>
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
                                        <Tables.Data style={{ borderLeft: "1px solid #00FF00" }}>
                                            <p className="pl-1">Domain Name</p>
                                        </Tables.Data>
                                        <Tables.Data>{whoisData.domain_name ?? "N/A"}</Tables.Data>
                                    </Tables.Row>
                                    <Tables.Row>
                                        <Tables.Data>Registrar</Tables.Data>
                                        <Tables.Data>{whoisData.registrar ?? "N/A"}</Tables.Data>
                                        <Tables.Data style={{ borderLeft: "1px solid #00FF00" }}>
                                            <p className="pl-1">Registrar URL</p>
                                        </Tables.Data>
                                        <Tables.Data>
                                            {
                                                Array.isArray(whoisData.registrar_url)
                                                    ? whoisData.registrar_url.join(", ")
                                                    : whoisData.registrar_url ?? "N/A"
                                            }
                                        </Tables.Data>
                                    </Tables.Row>
                                    <Tables.Row>
                                        <Tables.Data>Updated</Tables.Data>
                                        <Tables.Data>
                                            {
                                                Array.isArray(whoisData.updated_date)
                                                    ? whoisData.updated_date.map((date: string) => moment(date).format("DD-MM-YYYY HH:mm:ss")).join(", ")
                                                    : moment(whoisData.updated_date).format("DD MMM YYYY HH:mm:ss")
                                            }
                                        </Tables.Data>
                                        <Tables.Data style={{ borderLeft: "1px solid #00FF00" }}>
                                            <p className="pl-1">Created</p>
                                        </Tables.Data>
                                        <Tables.Data>
                                            {
                                                Array.isArray(whoisData.creation_date)
                                                    ? whoisData.creation_date.map((date: string) => moment(date).format("DD-MM-YYYY HH:mm:ss")).join(", ")
                                                    : moment(whoisData.creation_date).format("DD MMM YYYY HH:mm:ss")
                                            }
                                        </Tables.Data>
                                    </Tables.Row>
                                    <Tables.Row>
                                        <Tables.Data>Expired</Tables.Data>
                                        <Tables.Data>
                                            {
                                                Array.isArray(whoisData.expiration_date)
                                                    ? whoisData.expiration_date.map((date: string) => moment(date).format("DD-MM-YYYY HH:mm:ss")).join(", ")
                                                    : moment(whoisData.expiration_date).format("DD MMM YYYY HH:mm:ss")
                                            }
                                        </Tables.Data>
                                        <Tables.Data style={{ borderLeft: "1px solid #00FF00" }}>
                                            <p className="pl-1">Name Servers</p>
                                        </Tables.Data>
                                        <Tables.Data>
                                            {
                                                Array.isArray(whoisData.name_servers)
                                                    ? whoisData.name_servers.join(", ")
                                                    : whoisData.name_servers ?? "N/A"
                                            }
                                        </Tables.Data>
                                    </Tables.Row>
                                    <Tables.Row>
                                        <Tables.Data>Status</Tables.Data>
                                        <Tables.Data>
                                            {
                                                Array.isArray(whoisData.status)
                                                    ? whoisData.status.join(", ")
                                                    : whoisData.status ?? "N/A"
                                            }
                                        </Tables.Data>
                                        <Tables.Data style={{ borderLeft: "1px solid #00FF00" }}>
                                            <p className="pl-1">Emails</p>
                                        </Tables.Data>
                                        <Tables.Data>
                                            {
                                                whoisData.emails ??
                                                whoisData.email ??
                                                whoisData.registrar_email ??
                                                whoisData.registrant_email ??
                                                "N/A"
                                            }
                                        </Tables.Data>
                                    </Tables.Row>
                                    <Tables.Row>
                                        <Tables.Data>Phone</Tables.Data>
                                        <Tables.Data>
                                            {
                                                whoisData.registrar_phone ??
                                                whoisData.registrant_phone ??
                                                "N/A"
                                            }
                                        </Tables.Data>
                                        <Tables.Data style={{ borderLeft: "1px solid #00FF00" }}>
                                            <p className="pl-1">DNSSEC</p>
                                        </Tables.Data>
                                        <Tables.Data>{whoisData.dnssec ?? "N/A"}</Tables.Data>
                                    </Tables.Row>
                                    <Tables.Row>
                                        <Tables.Data>Name</Tables.Data>
                                        <Tables.Data>
                                            {
                                                whoisData.name ??
                                                whoisData.registrant_name ??
                                                "N/A"
                                            }
                                        </Tables.Data>
                                        <Tables.Data style={{ borderLeft: "1px solid #00FF00" }}>
                                            <p className="pl-1">ORG</p>
                                        </Tables.Data>
                                        <Tables.Data>
                                            {
                                                whoisData.org ??
                                                whoisData.registrant_organization ??
                                                "N/A"
                                            }
                                        </Tables.Data>
                                    </Tables.Row>
                                    <Tables.Row>
                                        <Tables.Data>Address</Tables.Data>
                                        <Tables.Data>
                                            {
                                                Array.isArray(whoisData.address)
                                                    ? whoisData.address.join(", ")
                                                    : whoisData.address ?? "N/A"
                                            }
                                        </Tables.Data>
                                        <Tables.Data style={{ borderLeft: "1px solid #00FF00" }}>
                                            <p className="pl-1">City</p>
                                        </Tables.Data>
                                        <Tables.Data>
                                            {
                                                whoisData.city ??
                                                whoisData.registrar_city ??
                                                whoisData.registrant_city ?? "N/A"
                                            }
                                        </Tables.Data>
                                    </Tables.Row>
                                    <Tables.Row>
                                        <Tables.Data>State</Tables.Data>
                                        <Tables.Data>{whoisData.state ?? "N/A"}</Tables.Data>
                                        <Tables.Data style={{ borderLeft: "1px solid #00FF00" }}>
                                            <p className="pl-1">Postal Code</p>
                                        </Tables.Data>
                                        <Tables.Data>
                                            {
                                                whoisData.registrar_postal_code ??
                                                whoisData.registrant_postal_code ?? "N/A"
                                            }
                                        </Tables.Data>
                                    </Tables.Row>
                                    <Tables.Row>
                                        <Tables.Data>Country</Tables.Data>
                                        <Tables.Data>
                                            {
                                                whoisData.registrar_country ??
                                                whoisData.country ?? "N/A"
                                            }
                                        </Tables.Data>
                                        <Tables.Data style={{ borderLeft: "1px solid #00FF00" }}>
                                            <p className="pl-1">Whois Server</p>
                                        </Tables.Data>
                                        <Tables.Data>
                                            {
                                                whoisData.whois_server ?? "N/A"
                                            }
                                        </Tables.Data>
                                    </Tables.Row>
                                </Tables.Body>
                            </Tables>
                        </div>
                    )}
                </div>
            </TerminalCardV2>
        </div>
    );
};

export default DomainInfo;