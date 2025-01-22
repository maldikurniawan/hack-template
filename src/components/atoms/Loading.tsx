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
        lightGray: "#CCCCCC",
        lightPurple: "#8000FF",
        lightYellow: "#CCFF00",
        lightBlue: "#00FFFF",
        lightRed: "#FF0F0F",
    };

    const loadColor = loadColors[color] || color;

    return (
        <div className="flex justify-center items-center">
            <BeatLoader color={loadColor} loading={loading} size={size} />
        </div>
    );
};

export default Loading;
