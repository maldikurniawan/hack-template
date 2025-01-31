import { useState } from "react";
import { useGetData } from "@/actions";
import { API_URL_whois } from "@/constants";
import { Button, TextField } from "@/components";

const ReconnaissancePage = () => {
    const [domain, setDomain] = useState("");
    const [inputDomain, setInputDomain] = useState("");
    const [shouldFetch, setShouldFetch] = useState(false);
    const [limit, setLimit] = useState(10);
	const [pageActive, setPageActive] = useState(1);

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
                    <p>Loading...</p>
                ) : getWhois.isError ? (
                    <p>Error loading data</p>
                ) : (
                    <div className="mt-4">
                        <h2 className="text-lg font-bold mb-2">Whois data for {domain}</h2>
                        <table className="min-w-full bg-black border">
                            <thead>
                                <tr className="bg-black">
                                    <th className="py-2 px-4 border text-left">Field</th>
                                    <th className="py-2 px-4 border text-left">Value</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="py-2 px-4 border">Domain Name</td>
                                    <td className="py-2 px-4 border">{getWhois.data?.domain_name || "N/A"}</td>
                                </tr>
                                <tr>
                                    <td className="py-2 px-4 border">Registrar</td>
                                    <td className="py-2 px-4 border">{getWhois.data?.registrar || "N/A"}</td>
                                </tr>
                                <tr>
                                    <td className="py-2 px-4 border">Registrar URL</td>
                                    <td className="py-2 px-4 border">{getWhois.data?.registrar_url || "N/A"}</td>
                                </tr>
                                <tr>
                                    <td className="py-2 px-4 border">WHOIS Server</td>
                                    <td className="py-2 px-4 border">{getWhois.data?.whois_server || "N/A"}</td>
                                </tr>
                                <tr>
                                    <td className="py-2 px-4 border">Updated Date</td>
                                    <td className="py-2 px-4 border">{formatDate(getWhois.data?.updated_date)}</td>
                                </tr>
                                <tr>
                                    <td className="py-2 px-4 border">Creation Date</td>
                                    <td className="py-2 px-4 border">{formatDate(getWhois.data?.creation_date)}</td>
                                </tr>
                                <tr>
                                    <td className="py-2 px-4 border">Expiration Date</td>
                                    <td className="py-2 px-4 border">{formatDate(getWhois.data?.expiration_date)}</td>
                                </tr>
                                <tr>
                                    <td className="py-2 px-4 border">Name Servers</td>
                                    <td className="py-2 px-4 border">
                                        {Array.isArray(getWhois.data?.name_servers)
                                            ? getWhois.data.name_servers.join(", ")
                                            : getWhois.data?.name_servers || "N/A"
                                        }
                                    </td>
                                </tr>
                                <tr>
                                    <td className="py-2 px-4 border">Emails</td>
                                    <td className="py-2 px-4 border">
                                        {Array.isArray(getWhois.data?.emails)
                                            ? getWhois.data.emails.join(", ")
                                            : getWhois.data?.emails || "N/A"
                                        }
                                    </td>
                                </tr>
                                <tr>
                                    <td className="py-2 px-4 border">DNSSEC</td>
                                    <td className="py-2 px-4 border">{getWhois.data?.dnssec || "N/A"}</td>
                                </tr>
                                <tr>
                                    <td className="py-2 px-4 border">ORG</td>
                                    <td className="py-2 px-4 border">{getWhois.data?.org || "N/A"}</td>
                                </tr>
                                <tr>
                                    <td className="py-2 px-4 border">State</td>
                                    <td className="py-2 px-4 border">{getWhois.data?.state || "N/A"}</td>
                                </tr>
                                <tr>
                                    <td className="py-2 px-4 border">Country</td>
                                    <td className="py-2 px-4 border">{getWhois.data?.country || "N/A"}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ReconnaissancePage;