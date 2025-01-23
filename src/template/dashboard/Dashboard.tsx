import {
    Charts,
    FingerPrint,
    HackLoader,
    HexaLoader,
    MoeCounter,
    Molecules,
    TerminalCard,
    SearchLoader
} from "@/components"
import { GoCommandPalette } from "react-icons/go";
import { useState } from "react";
import {
    FaChartArea,
    FaChartBar,
    FaChartLine,
    FaChartPie,
    FaDownload,
    FaFingerprint
} from "react-icons/fa";
import { SiMoleculer } from "react-icons/si";
import { RiDonutChartFill } from "react-icons/ri";
import { GrRadialSelected } from "react-icons/gr";
import { BsSoundwave } from "react-icons/bs";
import { GiNestedHexagons, GiSamuraiHelmet } from "react-icons/gi";
import { PiChartPolar } from "react-icons/pi";
import { TbChartRadar } from "react-icons/tb";

const Dashboard = () => {
    const [text] = useState(
        "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"
    );
    return (
        <div className="text-white gap-4 grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
            <TerminalCard icon={<GoCommandPalette />} title="Encrypting">
                <div className="w-full h-[315px] p-4 flex flex-col">
                    <div className="flex-1 overflow-hidden scroll-hidden text-ellipsis relative">
                        <div className="absolute animate-scroll break-words ">
                            {text}
                        </div>
                    </div>
                </div>
            </TerminalCard>
            <TerminalCard icon={<FaChartLine />} title="Monthly Visitors">
                <Charts variant="line" />
            </TerminalCard>
            <TerminalCard icon={<FaFingerprint />} title="Finger Print">
                <FingerPrint />
            </TerminalCard>
            <TerminalCard icon={<FaChartArea />} title="Area Chart">
                <Charts variant="area" />
            </TerminalCard>
            <TerminalCard icon={<FaDownload />} title="Downloading">
                <div className="flex justify-center items-center">
                    <HackLoader />
                </div>
            </TerminalCard>
            <TerminalCard icon={<FaChartBar />} title="Bar Chart">
                <Charts variant="bar" />
            </TerminalCard>
            <TerminalCard icon={<SiMoleculer />} title="Molecules">
                <div className="h-[300px]">
                    <Molecules />
                </div>
            </TerminalCard>
            <TerminalCard icon={<FaChartPie />} title="Pie Chart">
                <div className="flex justify-center items-center text-center">
                    <Charts variant="pie" />
                </div>
            </TerminalCard>
            <TerminalCard icon={<GiSamuraiHelmet />} title="Counter">
                <div className="flex justify-center items-center text-center h-[300px]">
                    <MoeCounter />
                </div>
            </TerminalCard>
            <TerminalCard icon={<GiNestedHexagons />} title="Hexa Loader">
                <div className="flex justify-center items-center text-center h-[300px]">
                    <HexaLoader />
                </div>
            </TerminalCard>
            <TerminalCard icon={<RiDonutChartFill />} title="Donut Chart">
                <div className="flex justify-center items-center text-center">
                    <Charts variant="donut" />
                </div>
            </TerminalCard>
            <TerminalCard icon={<BsSoundwave />} title="Searching">
                <div className="flex justify-center items-center text-center h-[300px]">
                    <SearchLoader />
                </div>
            </TerminalCard>
            <TerminalCard icon={<GrRadialSelected />} title="Radial Bar Chart">
                <div className="h-[315px]">
                    <Charts variant="radialBar" />
                </div>
            </TerminalCard>
            <TerminalCard icon={<PiChartPolar />} title="Polar Area Chart">
                <div className="flex justify-center items-center text-center h-[315px]">
                    <Charts variant="polarArea" />
                </div>
            </TerminalCard>
            <TerminalCard icon={<TbChartRadar />} title="Radar Chart">
                <Charts variant="radar" />
            </TerminalCard>
        </div >
    )
}

export default Dashboard