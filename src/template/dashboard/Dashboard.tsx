import { Card } from "@/components"

const Dashboard = () => {
    return (
        <div className="text-white flex gap-4 text-xs sm:text-base">
            <Card>
                <div className="font-bold uppercase">
                    Hello World
                </div>
            </Card>
            <Card>Halo Dunia</Card>
        </div>
    )
}

export default Dashboard