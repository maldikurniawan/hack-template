import { useState } from "react";
import { Carousel } from "@/components";

const CarouselPage = () => {
    const [images] = useState([
        { url: "/images/cyber-people-1.png", caption: "Caption 1" },
        { url: "/images/cyber-people-2.png", caption: "Caption 2" },
        { url: "/images/cyber-people-3.png", caption: "Caption 3" },
    ]);

    return (
        <div className="w-[200px]">
            <Carousel
                images={images}
                variant="simple"
                autoplay={true}
            />
            <Carousel
                images={images}
                variant="with-caption"
            />
            <Carousel
                images={images}
                variant="thumbnail"
            />
            <Carousel
                images={images}
                variant="fullscreen"
                loop={true}
            />
            <Carousel
                images={images}
                variant="stacked"
            />
        </div>
    )
}

export default CarouselPage