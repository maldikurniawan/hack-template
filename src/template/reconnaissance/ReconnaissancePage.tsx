import { useState } from "react";
import { Button, TextField } from "@/components";
import DomainInfo from './Sub/DomainInfo'
import DomainRecords from './Sub/DomainRecords'
import SubDomain from './Sub/SubDomain'

const ReconnaissancePage = () => {
    const [inputDomain, setInputDomain] = useState("");
    const [domain, setDomain] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const trimmedDomain = inputDomain.trim();
        if (trimmedDomain) {
            setDomain(trimmedDomain);
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit} className="flex gap-4 mb-4">
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
            {domain ? (
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                    <DomainInfo domain={domain} />
                    <DomainRecords domain={domain} />
                    <SubDomain domain={domain} />
                </div>
            ) : (
                <div>Please enter a domain to proceed</div>
            )}
        </div>
    );
};

export default ReconnaissancePage;
