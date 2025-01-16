import { Charts } from "@/components"

const Dashboard = () => {
    return (
        <div className="text-white flex gap-4 text-xs">
            <Charts variant="line" />
            <Charts variant="area" />
        </div>
    )
}

export default Dashboard