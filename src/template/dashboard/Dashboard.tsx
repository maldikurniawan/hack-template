import { Charts } from "@/components"

const Dashboard = () => {
    return (
        <div className="text-white gap-4 grid grid-cols-1 lg:grid-cols-2">
            <div className="bg-green-900/20">
            <div className="font-bold px-4 w-fit mt-2">Line Chart</div>
                <Charts variant="line" />
            </div>
            <div className="bg-green-900/20">
                <div className="font-bold px-4 w-fit mt-2">Area Chart</div>
                <div>
                    <Charts variant="area" />
                </div>
            </div>
            <div className="bg-green-900/20">
                <div className="font-bold px-4 w-fit mt-2">Column Chart</div>
                <div>
                    <Charts variant="bar" />
                </div>
            </div>
            <div className="bg-green-900/20">
                <div className="font-bold px-4 w-fit mt-2">Pie Chart</div>
                <div>
                    <Charts variant="pie" />
                </div>
            </div>
            <div className="bg-green-900/20">
                <div className="font-bold px-4 w-fit mt-2">Donut Chart</div>
                <div>
                    <Charts variant="donut" />
                </div>
            </div>
            <div className="bg-green-900/20">
                <div className="font-bold px-4 w-fit mt-2">Radial Bar Chart</div>
                <div>
                    <Charts variant="radialBar" />
                </div>
            </div>
        </div>
    )
}

export default Dashboard