import React, { useCallback, useContext } from "react";
import { ThemeContext } from "@/context/ThemeContext";
import Particles from "react-particles";
import { loadSlim } from "tsparticles-slim";
import { Engine, IOptions, RecursivePartial } from "tsparticles-engine";

const Molecules: React.FC = () => {
    const { themeColor } = useContext(ThemeContext);

    const particlesInit = useCallback(async (engine: Engine) => {
        await loadSlim(engine);
    }, []);

    const optionparticles: RecursivePartial<IOptions> = {
        fullScreen: {
            enable: false,
            zIndex: 1,
        },
        fpsLimit: 120,
        interactivity: {
            events: {
                onHover: {
                    enable: true,
                    mode: "repulse",
                },
                resize: true,
            },
            modes: {
                repulse: {
                    distance: 100,
                    duration: 0.4,
                },
            },
        },
        particles: {
            color: {
                value: themeColor,
            },
            links: {
                color: themeColor,
                distance: 100,
                enable: true,
                opacity: 0.5,
                width: 1,
            },
            move: {
                direction: "none",
                enable: true,
                outModes: {
                    default: "bounce",
                },
                random: false,
                speed: 2,
                straight: false,
            },
            number: {
                density: {
                    enable: true,
                    area: 500,
                },
                value: 80,
            },
            opacity: {
                value: 0.5,
            },
            shape: {
                type: "circle",
            },
            size: {
                value: { min: 1, max: 2 },
            },
        },
    };

    return (
        <Particles
            className="absolute inset-0 z-10"
            id="tsparticles"
            init={particlesInit}
            options={optionparticles}
        />
    );
};

export default Molecules;
