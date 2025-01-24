import { ColorPicker, TerminalCard } from "@/components";
import { ThemeContext } from "@/context/ThemeContext";
import { motion } from "framer-motion";
import { useContext, useState } from "react";

const ColorPickerPage = () => {
    const { themeColor } = useContext(ThemeContext);

    const [value, setValue] = useState("");

    return (
        <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-20"
            initial={{ y: window.innerHeight, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.3 }}
            viewport={{ once: true }}
        >
            {/* Color */}
            <TerminalCard title="Color Picker">
                <div className="text-sm mb-3">
                    You can use the{" "}
                    <span style={{ color: themeColor }}>color picker</span> to select a
                    color.
                </div>

                <div className="grid grid-cols-2 gap-2">
                    <ColorPicker
                        label="Color"
                        required
                        value={value}
                        setValue={setValue}
                    />
                </div>
            </TerminalCard>
        </motion.div>
    );
};

export default ColorPickerPage;
