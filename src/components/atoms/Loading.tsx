import { ThemeContext } from "@/context/ThemeContext";
import { useContext } from "react";
import { BeatLoader } from "react-spinners";

interface LoadingProps {
    size?: number;
    loading?: boolean;
    color?: "lightGreen" | "lightGray" | "lightPurple" | "lightYellow" | "lightRed" | "lightBlue" | string;
}

const Loading = ({ size = 20, loading = false, color = "lightGreen" }: LoadingProps) => {
    const { themeColor } = useContext(ThemeContext);

    const loadColors: Record<string, string> = {
        lightGreen: themeColor,
        lightGray: "#B0B0B0",
        lightPurple: "#B05CED",
        lightYellow: "#EDDB5C",
        lightRed: "#ED5C73",
        lightBlue: "#5CB0ED",
    };

    const loadColor = loadColors[color] || color;

    return (
        <div className="flex justify-center items-center">
            <BeatLoader color={loadColor} loading={loading} size={size} />
        </div>
    );
};

export default Loading;
