import { Card, Charts } from "@/components"

const Dashboard = () => {
    return (
        <div className="text-white gap-4 grid grid-cols-1 lg:grid-cols-2">
            <Card>
                <div className="font-bold px-4 w-fit mt-2">Monthly Visitors</div>
                <Charts variant="line" />
            </Card>
            <Card>
                <div className="font-bold px-4 w-fit mt-2">Area Chart</div>
                <Charts variant="area" />

            </Card>
            <Card>
                <div className="font-bold px-4 w-fit mt-2">Column Chart</div>
                <Charts variant="bar" />
            </Card>
            <Card>
                <div className="font-bold px-4 w-fit mt-2">Pie Chart</div>
                <div className="flex justify-center items-center text-center">
                    <Charts variant="pie" />
                </div>
            </Card>
            <Card>
                <div className="font-bold px-4 w-fit mt-2">Donut Chart</div>
                <div className="flex justify-center items-center text-center">
                    <Charts variant="donut" />
                </div>
            </Card>
            <Card>
                <div className="font-bold px-4 w-fit mt-2">Radial Bar Chart</div>
                <Charts variant="radialBar" />
            </Card>
            <Card>
                <div className="font-bold px-4 w-fit mt-2">Polar Area Chart</div>
                <div className="flex justify-center items-center text-center">
                    <Charts variant="polarArea" />
                </div>
            </Card>
            <Card>
                <div className="font-bold px-4 w-fit mt-2">Radar Chart</div>
                <Charts variant="radar" />
            </Card>
        </div >
    )
}

export default Dashboard