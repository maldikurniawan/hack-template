import { createContext, useEffect, useState, ReactNode } from "react";
import { themeColors } from "@/constants/theme";

// Define types for the context values
interface ThemeContextType {
    themeColor: string;
    setThemeColor: (color: string) => void;
    themeBg: string;
    setThemeBg: (bg: string) => void;
    themeSkin: string;
    setThemeSkin: (skin: string) => void;
    colorMode: string;
    setColorMode: (mode: string) => void;
    navbarType: string;
    setNavbarType: (type: string) => void;
    footerType: string;
    setFooterType: (type: string) => void;
    contentType: string;
    setContentType: (type: string) => void;
}

// Create the ThemeContext with a default value
export const ThemeContext = createContext<ThemeContextType | any>(undefined);

// Define props for the ThemeProvider component
interface ThemeProviderProps {
    children: ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
    // Theme Color
    const themecolor = localStorage.getItem("theme-color");
    const [themeColor, setThemeColor] = useState<string>(themecolor || themeColors[0]);
    useEffect(() => {
        localStorage.setItem("theme-color", themeColor);
    }, [themeColor]);

    // Theme Background
    const themebg = localStorage.getItem("theme-bg");
    const [themeBg, setThemeBg] = useState<string>(themebg || "none");
    useEffect(() => {
        localStorage.setItem("theme-bg", themeBg);
    }, [themeBg]);

    // Theme Skin
    const themeskin = localStorage.getItem("theme-skin");
    const [themeSkin, setThemeSkin] = useState<string>(themeskin || "default");
    useEffect(() => {
        localStorage.setItem("theme-skin", themeSkin);
    }, [themeSkin]);

    // Color Mode
    const colormode = localStorage.getItem("theme-color-mode");
    const [colorMode, setColorMode] = useState<string>(colormode || "light");
    useEffect(() => {
        const className = "dark";
        const bodyClassList = document.body.classList;

        colorMode === "dark"
            ? bodyClassList.add(className)
            : bodyClassList.remove(className);

        localStorage.setItem("theme-color-mode", colorMode);
    }, [colorMode]);

    // Navbar Type
    const navbartype = localStorage.getItem("theme-navbar-type");
    const [navbarType, setNavbarType] = useState<string>(navbartype || "sticky");
    useEffect(() => {
        localStorage.setItem("theme-navbar-type", navbarType);
    }, [navbarType]);

    // Footer Type
    const footertype = localStorage.getItem("theme-footer-type");
    const [footerType, setFooterType] = useState<string>(footertype || "sticky");
    useEffect(() => {
        localStorage.setItem("theme-footer-type", footerType);
    }, [footerType]);

    // Content Type
    const contenttype = localStorage.getItem("theme-content-type");
    const [contentType, setContentType] = useState<string>(contenttype || "compact");
    useEffect(() => {
        localStorage.setItem("theme-content-type", contentType);
    }, [contentType]);

    return (
        <ThemeContext.Provider
            value={{
                themeColor,
                setThemeColor,
                themeBg,
                setThemeBg,
                themeSkin,
                setThemeSkin,
                colorMode,
                setColorMode,
                navbarType,
                setNavbarType,
                footerType,
                setFooterType,
                contentType,
                setContentType,
            }}
        >
            {children}
        </ThemeContext.Provider>
    );
};
