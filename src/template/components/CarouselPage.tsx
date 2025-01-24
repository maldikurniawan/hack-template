import { useState } from "react";
import { motion } from "framer-motion";
import { TerminalCard, Carousel } from "@/components";

const CarouselPage = () => {
    const [images] = useState([
        { url: "/images/cyber-people-1.jpeg", caption: "Caption 1" },
        { url: "/images/cyber-people-2.jpeg", caption: "Caption 2" },
        { url: "/images/cyber-people-3.jpeg", caption: "Caption 3" },
        { url: "/images/cyber-people-4.jpeg", caption: "Caption 4" },
        { url: "/images/cyber-people-5.jpeg", caption: "Caption 5" },
        { url: "/images/cyber-people-6.jpeg", caption: "Caption 6" },
    ]);

    return (
        <motion.div
            className="grid grid-cols-1 lg:grid-cols-2 gap-4"
            initial={{ y: window.innerHeight, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.3 }}
            viewport={{ once: true }}
        >
            <TerminalCard title="Basic">
                <Carousel
                    images={images}
                    variant="simple"
                    navigation={true}
                    pagination={true}
                />
            </TerminalCard>
            <TerminalCard title="Autoplay">
                <Carousel
                    images={images}
                    variant="caption"
                    autoplay={true}
                    navigation={true}
                />
            </TerminalCard>
            <TerminalCard title="Thumbnail">
                <Carousel
                    images={images}
                    variant="thumbnail"
                    autoplay={true}
                    loop={true}
                    navigation={true}
                    pagination={true}
                />
            </TerminalCard>
            <TerminalCard title="EffectCards">
                <Carousel
                    images={images}
                    variant="EffectCards"
                />
            </TerminalCard>
        </motion.div>
    )
}

export default CarouselPage