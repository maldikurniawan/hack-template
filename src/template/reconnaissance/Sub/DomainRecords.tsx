import { useState } from "react";
import { useGetData } from "@/actions";
import { API_URL_domainRecords } from "@/constants";
import { Button, Loader, Tables, TerminalCard, TextField } from "@/components";

const DomainRecords = () => {
    const [domain, setDomain] = useState("");
    const [inputDomain, setInputDomain] = useState("");
    const [shouldFetch, setShouldFetch] = useState(false);

    const getWhois = useGetData(
        shouldFetch ? API_URL_domainRecords : null,
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
            <TerminalCard title="Domain Records">
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