import { useState } from "react";
import { useGetData } from "@/actions";
import { API_URL_whois } from "@/constants";
import { Button, Loader, Tables, TerminalCard, TextField } from "@/components";

const ReconnaissancePage = () => {
    const [domain, setDomain] = useState("");
    const [inputDomain, setInputDomain] = useState("");
    const [shouldFetch, setShouldFetch] = useState(false);

    // Fetch data only when `shouldFetch` is true
    const getWhois = useGetData(
        shouldFetch ? API_URL_whois : null,
        ["whois", domain],
        true,
        { domain }
    );

    // Handle form submission
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (inputDomain.trim()) {
            setDomain(inputDomain);
            setShouldFetch(true);
        }
    };

    // Function to format dates (handles both single values and arrays)
    const formatDate = (date: number | number[] | undefined) => {
        if (!date) return "N/A";

        // If the date is an array, format all dates in the array
        if (Array.isArray(date)) {
            return date.map((timestamp) => new Date(timestamp * 1000).toLocaleString()).join(", ");
        }

        // If the date is a single value, format it
        return new Date(date * 1000).toLocaleString();
    };

    return (
        <div>
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
                    <p>Enter a domain and click Submit to fetch data.</p>
                ) : getWhois.isLoading ? (
                    <p><Loader /></p>
                ) : getWhois.isError ? (
                    <p className="text-lightRed">Error loading data</p>
                ) : (
                    <div className="mt-4">
                        <h2 className="text-lg font-bold mb-2">Whois data for {domain}</h2>
                        <div className="grid grid-cols-1 xl:grid-cols-2 gap-4">
                            <TerminalCard title="Domain Information">
                                {/* Tables */}
                                <Tables>
                                    <Tables.Head>
                                        <Tables.Row>
                                            <Tables.Header>Field</Tables.Header>
                                            <Tables.Header>Value</Tables.Header>
                                        </Tables.Row>
                                    </Tables.Head>
                                    <Tables.Body>
                                        <Tables.Row>
                                            <Tables.Data>Domain Name</Tables.Data>
                                            <Tables.Data>{getWhois.data?.domain_name ?? "N/A"}</Tables.Data>
                                        </Tables.Row>
                                        <Tables.Row>
                                            <Tables.Data>Registrar</Tables.Data>
                                            <Tables.Data>{getWhois.data?.registrar ?? "N/A"}</Tables.Data>
                                        </Tables.Row>
                                        <Tables.Row>
                                            <Tables.Data>Registrar URL</Tables.Data>
                                            <Tables.Data>{getWhois.data?.registrar_url ?? "N/A"}</Tables.Data>
                                        </Tables.Row>
                                        <Tables.Row>
                                            <Tables.Data>WHOIS Server</Tables.Data>
                                            <Tables.Data>{getWhois.data?.whois_server ?? "N/A"}</Tables.Data>
                                        </Tables.Row>
                                        <Tables.Row>
                                            <Tables.Data>Created</Tables.Data>
                                            <Tables.Data>{formatDate(getWhois.data?.creation_date)}</Tables.Data>
                                        </Tables.Row>
                                        <Tables.Row>
                                            <Tables.Data>Updated</Tables.Data>
                                            <Tables.Data>{formatDate(getWhois.data?.updated_date)}</Tables.Data>
                                        </Tables.Row>
                                        <Tables.Row>
                                            <Tables.Data>Expired</Tables.Data>
                                            <Tables.Data>{formatDate(getWhois.data?.expiration_date)}</Tables.Data>
                                        </Tables.Row>
                                    </Tables.Body>
                                </Tables>
                            </TerminalCard>
                            <TerminalCard title="Technical Information">
                                {/* Tables */}
                                <Tables>
                                    <Tables.Head>
                                        <Tables.Row>
                                            <Tables.Header>Field</Tables.Header>
                                            <Tables.Header>Value</Tables.Header>
                                        </Tables.Row>
                                    </Tables.Head>
                                    <Tables.Body>
                                        <Tables.Row>
                                            <Tables.Data>Server Name</Tables.Data>
                                            <Tables.Data>
                                                {Array.isArray(getWhois.data?.name_servers)
                                                    ? getWhois.data.name_servers.join(", ")
                                                    : getWhois.data?.name_servers ?? "N/A"}
                                            </Tables.Data>
                                        </Tables.Row>
                                        <Tables.Row>
                                            <Tables.Data>Emails</Tables.Data>
                                            <Tables.Data>
                                                {Array.isArray(getWhois.data?.emails)
                                                    ? getWhois.data.emails.join(", ")
                                                    : getWhois.data?.emails || "N/A"
                                                }
                                            </Tables.Data>
                                        </Tables.Row>
                                        <Tables.Row>
                                            <Tables.Data>DNSSEC</Tables.Data>
                                            <Tables.Data>{getWhois.data?.dnssec ?? "N/A"}</Tables.Data>
                                        </Tables.Row>
                                        <Tables.Row>
                                            <Tables.Data>ORG</Tables.Data>
                                            <Tables.Data>{getWhois.data?.org ?? "N/A"}</Tables.Data>
                                        </Tables.Row>
                                        <Tables.Row>
                                            <Tables.Data>State</Tables.Data>
                                            <Tables.Data>{getWhois.data?.state ?? "N/A"}</Tables.Data>
                                        </Tables.Row>
                                        <Tables.Row>
                                            <Tables.Data>Country</Tables.Data>
                                            <Tables.Data>{getWhois.data?.country ?? "N/A"}</Tables.Data>
                                        </Tables.Row>
                                    </Tables.Body>
                                </Tables>
                            </TerminalCard>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ReconnaissancePage;