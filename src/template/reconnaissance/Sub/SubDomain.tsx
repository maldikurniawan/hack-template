import { useState } from "react";
import { useGetData } from "@/actions";
import { API_URL_subDomain } from "@/constants";
import moment from "moment";
import { Button, Loader, Tables, TerminalCard, TextField } from "@/components";

const SubDomain = () => {
    const [domain, setDomain] = useState("");
    const [inputDomain, setInputDomain] = useState("");
    const [shouldFetch, setShouldFetch] = useState(false);

    const getWhois = useGetData(
        shouldFetch ? API_URL_subDomain : null,
        ["whois", domain],
        true,
        { domain }
    );

    const whoisData = getWhois.data?.data || {};

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        const trimmedDomain = inputDomain.trim();
        if (!trimmedDomain) {
            return;
        }

        setDomain(trimmedDomain);
        setShouldFetch(true);
    };

    return (
        <div>
            <TerminalCard title="Sub Domain">
                <form onSubmit={handleSubmit} className="flex gap-2">
                    <TextField
                        type="text"
                        variant="outline"
                        label="Enter Domain"
                        color="lightGreen"
                        value={inputDomain}
                        onChange={(e) => setInputDomain(e.target.value)}
                        placeholder="Enter Domain"
                    />
                    <Button type="submit">Submit</Button>
                </form>
                <div>
                    {!shouldFetch ? (
                        <div></div>
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
                                    <Tables.Row>
                                        <Tables.Data>Domain Name</Tables.Data>
                                        <Tables.Data>{whoisData.domain_name ?? "N/A"}</Tables.Data>
                                    </Tables.Row>
                                    <Tables.Row>
                                        <Tables.Data>Registrar</Tables.Data>
                                        <Tables.Data>{whoisData.registrar ?? "N/A"}</Tables.Data>
                                    </Tables.Row>
                                    <Tables.Row>
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
                                        <Tables.Data>DNSSEC</Tables.Data>
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
                                    </Tables.Row>
                                    <Tables.Row>
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
                                        <Tables.Data>State</Tables.Data>
                                        <Tables.Data>{whoisData.state ?? "N/A"}</Tables.Data>
                                    </Tables.Row>
                                    <Tables.Row>
                                        <Tables.Data>Postal Code</Tables.Data>
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