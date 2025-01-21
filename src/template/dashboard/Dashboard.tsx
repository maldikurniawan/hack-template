import { Card, Charts } from "@/components"
import { useState } from "react";

const Dashboard = () => {
    const [text] = useState(
        "CSchWvQGpczbDUcVSpZLXvrPlvGTqyuzYGsMEHxQRg7riiwWGL2Zk1fWPEr0ctlq6Gy3kXSc3B9ExQFjviETJZEY6Rm1HWCZCffCjo2VyVJrG5CtAv9UTdei4pfBVHZLsYbQB6MtPrB7GBaSYvRcsWyYqLhr1fjD8AdhJ5MYJjoSPdjKTkWlCKI6Bkz7492hWsyRxchVLezPSPCV7OT75HFoDLX1ppkcrMEdah3KVVRPboOrC16fVqDRG3i2LYPG0q9gvu3oqV36dcAgPivOwVetp6ACjfYcRLBidqDfMuby0AoKx16yAsmuHq2daKp5BgKGilULqjzbuPo2HDwXVjL5o7cwvG5bGxxcgWdKdXf1pa8UwwmxD9OWyLBs9YWXkO33a0lcCVUJamb14u2RLgOPIYOqIQGQerr9MBgk1hQgVM6PcV0qeS2Xs7ZKf7o03OssqZwyZgcMgoa8yaHYbTqFa0a3cdASLXOl3gSp62Oeu8dc4EZW9iOtM1rPgdQuCSchWvQGpczbDUcVSpZLXvrPlvGTqyuzYGsMEHxQRg7riiwWGL2Zk1fWPEr0ctlq6Gy3kXSc3B9ExQFjviETJZEY6Rm1HWCZCffCjo2VyVJrG5CtAv9UTdei4pfBVHZLsYbQB6MtPrB7GBaSYvRcsWyYqLhr1fjD8AdhJ5MYJjoSPdjKTkWlCKI6Bkz7492hWsyRxchVLezPSPCV7OT75HFoDLX1ppkcrMEdah3KVVRPboOrC16fVqDRG3i2LYPG0q9gvu3oqV36dcAgPivOwVetp6ACjfYcRLBidqDfMuby0AoKx16yAsmuHq2daKp5BgKGilULqjzbuPo2HDwXVjL5o7cwvG5bGxxcgWdKdXf1pa8UwwmxD9OWyLBs9YWXkO33a0lcCVUJamb14u2RLgOPIYOqIQGQerr9MBgk1hQgVM6PcV0qeS2Xs7ZKf7o03OssqZwyZgcMgoa8yaHYbTqFa0a3cdASLXOl3gSp62Oeu8dc4EZW9iOtM1rPgdQu"
    );
    return (
        <div className="text-white gap-4 grid grid-cols-1 lg:grid-cols-3">
            {[...Array(6)].map((_, index) => (
                <Card>
                    <div key={index} className="w-full h-[320px] p-4 flex flex-col">
                        <div className="font-bold mb-4 truncate">Scanning</div>
                        <div className="flex-1 overflow-hidden scroll-hidden text-ellipsis relative">
                            <div className="absolute animate-scroll break-words ">
                                {text}
                            </div>
                        </div>
                    </div>
                </Card>
            ))}
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