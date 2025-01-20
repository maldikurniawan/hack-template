import { useState } from "react";
import { Card, Carousel } from "@/components";

const CarouselPage = () => {
    const [images] = useState([
        { url: "/images/cyber-people-1.png", caption: "Caption 1" },
        { url: "/images/cyber-people-2.png", caption: "Caption 2" },
        { url: "/images/cyber-people-3.png", caption: "Caption 3" },
        { url: "/images/cyber-people-4.png", caption: "Caption 4" },
        { url: "/images/cyber-people-5.png", caption: "Caption 5" },
        { url: "/images/cyber-people-6.png", caption: "Caption 6" },
    ]);

    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <Card>
                <div className="text-lg font-normal mb-4">Basic</div>
                <div>
                    <Carousel
                        images={images}
                        variant="simple"
                        navigation={true}
                        pagination={true}
                    />
                </div>
            </Card>
            <Card>
                <div className="text-lg font-normal mb-4">Autopaly</div>
                <div>
                    <Carousel
                        images={images}
                        variant="caption"
                        autoplay={true}
                        navigation={true}
                    />
                </div>
            </Card>
            <Card>
                <div className="text-lg font-normal mb-4">Thumbnail</div>
                <div>
                    <Carousel
                        images={images}
                        variant="thumbnail"
                        autoplay={true}
                        loop={true}
                        navigation={true}
                        pagination={true}
                    />
                </div>
            </Card>
            <Card>
                <div className="text-lg font-normal mb-4">EffectCards</div>
                <div>
                    <Carousel
                        images={images}
                        variant="EffectCards"
                    />
                </div>
            </Card>
        </div>
    )
}

export default CarouselPage