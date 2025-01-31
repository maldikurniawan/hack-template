import { useState, useEffect } from "react";
import { useGetData } from "@/actions";
import { API_URL_whois } from "@/constants";
import { Button, TextField } from "@/components";

const ReconnaissancePage = () => {
    const [domain, setDomain] = useState("");
    const [inputDomain, setInputDomain] = useState("");
    const [shouldFetch, setShouldFetch] = useState(false); // Add a flag to control API calls

    // Fetch data only when `shouldFetch` is true and `domain` is valid
    const getWhois = useGetData(
        shouldFetch ? API_URL_whois : null, // Only pass the API URL if `shouldFetch` is true
        ["whois", domain],
        true,
        { domain }
    );

    // Handle form submission
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (inputDomain.trim()) { // Ensure the input is not empty
            setDomain(inputDomain);
            setShouldFetch(true); // Enable API call
        }
    };

    // Reset the `shouldFetch` flag when `inputDomain` changes
    useEffect(() => {
        setShouldFetch(false);
    }, [inputDomain]);

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
                {/* Display loading, error, or data */}
                {!shouldFetch ? (
                    <p>Enter a domain and click Submit to fetch data.</p>
                ) : getWhois.isLoading ? (
                    <p>Loading...</p>
                ) : getWhois.isError ? (
                    <p>Error loading data</p>
                ) : (
                    <pre className="text-[#0F0]">{JSON.stringify(getWhois.data, null, 2)}</pre>
                )}
            </div>
        </div>
    );
};

export default ReconnaissancePage;