import { useGetData } from "@/actions";
import { API_URL_domainInfo } from "@/constants";
import moment from "moment";
import { Loader, Tables, TerminalCard } from "@/components";

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
            <TerminalCard title="Domain Info">
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
                                        <Tables.Header center>No</Tables.Header>
                                        <Tables.Header>Field</Tables.Header>
                                        <Tables.Header>Value</Tables.Header>
                                    </Tables.Row>
                                </Tables.Head>
                                <Tables.Body>
                                    <Tables.Row>
                                        <Tables.Data center>1</Tables.Data>
                                        <Tables.Data>Domain ID</Tables.Data>
                                        <Tables.Data>
                                            {
                                                whoisData.domain_id ??
                                                whoisData.domain__id ??
                                                "N/A"
                                            }
                                        </Tables.Data>
                                    </Tables.Row>
                                    <Tables.Row>
                                        <Tables.Data center>2</Tables.Data>
                                        <Tables.Data>Domain Name</Tables.Data>
                                        <Tables.Data>{whoisData.domain_name ?? "N/A"}</Tables.Data>
                                    </Tables.Row>
                                    <Tables.Row>
                                        <Tables.Data center>3</Tables.Data>
                                        <Tables.Data>Registrar</Tables.Data>
                                        <Tables.Data>{whoisData.registrar ?? "N/A"}</Tables.Data>
                                    </Tables.Row>
                                    <Tables.Row>
                                        <Tables.Data center>4</Tables.Data>
                                        <Tables.Data>Registrar URL</Tables.Data>
                                        <Tables.Data>
                                            {
                                                Array.isArray(whoisData.registrar_url)
                                                    ? whoisData.registrar_url.join(", ")
                                                    : whoisData.registrar_url ?? "N/A"
                                            }
                                        </Tables.Data>
                                    </Tables.Row>
                                    <Tables.Row>
                                        <Tables.Data center>5</Tables.Data>
                                        <Tables.Data>Updated</Tables.Data>
                                        <Tables.Data>
                                            {
                                                Array.isArray(whoisData.updated_date)
                                                    ? whoisData.updated_date.map((date: string) => moment(date).format("DD-MM-YYYY HH:mm:ss")).join(", ")
                                                    : moment(whoisData.updated_date).format("DD-MM-YYYY HH:mm:ss")
                                            }
                                        </Tables.Data>
                                    </Tables.Row>
                                    <Tables.Row>
                                        <Tables.Data center>6</Tables.Data>
                                        <Tables.Data>Created</Tables.Data>
                                        <Tables.Data>
                                            {
                                                Array.isArray(whoisData.creation_date)
                                                    ? whoisData.creation_date.map((date: string) => moment(date).format("DD-MM-YYYY HH:mm:ss")).join(", ")
                                                    : moment(whoisData.creation_date).format("DD-MM-YYYY HH:mm:ss")
                                            }
                                        </Tables.Data>
                                    </Tables.Row>
                                    <Tables.Row>
                                        <Tables.Data center>7</Tables.Data>
                                        <Tables.Data>Expired</Tables.Data>
                                        <Tables.Data>
                                            {
                                                Array.isArray(whoisData.expiration_date)
                                                    ? whoisData.expiration_date.map((date: string) => moment(date).format("DD-MM-YYYY HH:mm:ss")).join(", ")
                                                    : moment(whoisData.expiration_date).format("DD-MM-YYYY HH:mm:ss")
                                            }
                                        </Tables.Data>
                                    </Tables.Row>
                                    <Tables.Row>
                                        <Tables.Data center>8</Tables.Data>
                                        <Tables.Data>Name Servers</Tables.Data>
                                        <Tables.Data>
                                            {
                                                Array.isArray(whoisData.name_servers)
                                                    ? whoisData.name_servers.join(", ")
                                                    : whoisData.name_servers ?? "N/A"
                                            }
                                        </Tables.Data>
                                    </Tables.Row>
                                    <Tables.Row>
                                        <Tables.Data center>9</Tables.Data>
                                        <Tables.Data>Status</Tables.Data>
                                        <Tables.Data>
                                            {
                                                Array.isArray(whoisData.status)
                                                    ? whoisData.status.join(", ")
                                                    : whoisData.status ?? "N/A"
                                            }
                                        </Tables.Data>
                                    </Tables.Row>
                                    <Tables.Row>
                                        <Tables.Data center>10</Tables.Data>
                                        <Tables.Data>Emails</Tables.Data>
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
                                        <Tables.Data center>11</Tables.Data>
                                        <Tables.Data>Phone</Tables.Data>
                                        <Tables.Data>
                                            {
                                                whoisData.registrar_phone ??
                                                whoisData.registrant_phone ??
                                                "N/A"
                                            }
                                        </Tables.Data>
                                    </Tables.Row>
                                    <Tables.Row>
                                        <Tables.Data center>12</Tables.Data>
                                        <Tables.Data>DNSSEC</Tables.Data>
                                        <Tables.Data>{whoisData.dnssec ?? "N/A"}</Tables.Data>
                                    </Tables.Row>
                                    <Tables.Row>
                                        <Tables.Data center>13</Tables.Data>
                                        <Tables.Data>Name</Tables.Data>
                                        <Tables.Data>
                                            {
                                                whoisData.name ??
                                                whoisData.registrant_name ??
                                                "N/A"
                                            }
                                        </Tables.Data>
                                    </Tables.Row>
                                    <Tables.Row>
                                        <Tables.Data center>14</Tables.Data>
                                        <Tables.Data>ORG</Tables.Data>
                                        <Tables.Data>
                                            {
                                                whoisData.org ??
                                                whoisData.registrant_organization ??
                                                "N/A"
                                            }
                                        </Tables.Data>
                                    </Tables.Row>
                                    <Tables.Row>
                                        <Tables.Data center>15</Tables.Data>
                                        <Tables.Data>Address</Tables.Data>
                                        <Tables.Data>
                                            {
                                                Array.isArray(whoisData.address)
                                                    ? whoisData.address.join(", ")
                                                    : whoisData.address ?? "N/A"
                                            }
                                        </Tables.Data>
                                    </Tables.Row>
                                    <Tables.Row>
                                        <Tables.Data center>16</Tables.Data>
                                        <Tables.Data>City</Tables.Data>
                                        <Tables.Data>
                                            {
                                                whoisData.city ??
                                                whoisData.registrar_city ??
                                                whoisData.registrant_city ?? "N/A"
                                            }
                                        </Tables.Data>
                                    </Tables.Row>
                                    <Tables.Row>
                                        <Tables.Data center>17</Tables.Data>
                                        <Tables.Data>State</Tables.Data>
                                        <Tables.Data>{whoisData.state ?? "N/A"}</Tables.Data>
                                    </Tables.Row>
                                    <Tables.Row>
                                        <Tables.Data center>18</Tables.Data>
                                        <Tables.Data>Postal Code</Tables.Data>
                                        <Tables.Data>
                                            {
                                                whoisData.registrar_postal_code ??
                                                whoisData.registrant_postal_code ?? "N/A"
                                            }
                                        </Tables.Data>
                                    </Tables.Row>
                                    <Tables.Row>
                                        <Tables.Data center>19</Tables.Data>
                                        <Tables.Data>Country</Tables.Data>
                                        <Tables.Data>
                                            {
                                                whoisData.registrar_country ??
                                                whoisData.country ?? "N/A"
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

export default DomainInfo;