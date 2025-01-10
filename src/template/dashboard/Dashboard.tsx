import { Card } from "@/components"

const Dashboard = () => {
    return (
        <div className="text-white flex gap-4 text-xs sm:text-base">
            <Card>
                <div className="font-bold uppercase">
                    Hello World
                </div>
            </Card>
            <Card>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum pariatur perferendis nesciunt mollitia fugit doloribus ducimus id accusantium atque esse ad aspernatur, quas iusto distinctio hic? Perferendis eligendi doloribus nulla!</Card>
        </div>
    )
}

export default Dashboard