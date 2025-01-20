import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, Thumbs } from 'swiper/modules';
import { useState } from 'react';
// @ts-ignore
import 'swiper/css';
// @ts-ignore
import 'swiper/css/navigation';
// @ts-ignore
import 'swiper/css/pagination';

interface ImageItem {
    url: string; // Image URL
    caption?: string; // Optional caption for captions variant
}

interface CarouselProps {
    images: ImageItem[]; // Array of images
    autoplay?: boolean; // Enable or disable autoplay
    navigation?: boolean; // Enable or disable navigation
    pagination?: boolean; // Enable or disable pagination
    loop?: boolean; // Enable or disable infinite looping
    slidesPerView?: number; // Number of slides visible at a time
    spaceBetween?: number; // Space between slides
    variant?: 'simple' | 'with-caption' | 'thumbnail' | 'fullscreen' | 'stacked'; // Carousel variant
}

const Carousel: React.FC<CarouselProps> = ({
    images,
    autoplay = false,
    navigation = false,
    pagination = false,
    loop = false,
    slidesPerView = 1,
    spaceBetween = 10,
    variant = 'simple',
}) => {
    const [thumbsSwiper, setThumbsSwiper] = useState<any>(null);

    return (
        <>
            {/* Different implementations for each variant */}
            {variant === 'simple' && (
                <Swiper
                    modules={[Navigation, Pagination, Autoplay]}
                    autoplay={autoplay ? { delay: 3000, disableOnInteraction: false } : false}
                    navigation={navigation}
                    pagination={pagination ? { clickable: true } : false}
                    loop={loop}
                    slidesPerView={slidesPerView}
                    spaceBetween={spaceBetween}
                >
                    {images.map((image, index) => (
                        <SwiperSlide key={index}>
                            <img
                                src={image.url}
                                alt={`Slide ${index + 1}`}
                                style={{ width: '100%', height: 'auto', objectFit: 'cover' }}
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>
            )}

            {variant === 'with-caption' && (
                <Swiper
                    modules={[Navigation, Pagination, Autoplay]}
                    autoplay={autoplay ? { delay: 3000, disableOnInteraction: false } : false}
                    navigation={navigation}
                    pagination={pagination ? { clickable: true } : false}
                    loop={loop}
                    slidesPerView={slidesPerView}
                    spaceBetween={spaceBetween}
                >
                    {images.map((image, index) => (
                        <SwiperSlide key={index}>
                            <div style={{ position: 'relative' }}>
                                <img
                                    src={image.url}
                                    alt={`Slide ${index + 1}`}
                                    style={{ width: '100%', height: 'auto', objectFit: 'cover' }}
                                />
                                {image.caption && (
                                    <div
                                        style={{
                                            position: 'absolute',
                                            bottom: 0,
                                            left: 0,
                                            width: '100%',
                                            backgroundColor: 'rgba(0, 0, 0, 0.5)',
                                            color: '#fff',
                                            textAlign: 'center',
                                            padding: '10px',
                                            fontSize: '14px',
                                        }}
                                    >
                                        {image.caption}
                                    </div>
                                )}
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            )}

            {variant === 'thumbnail' && (
                <>
                    <Swiper
                        modules={[Navigation, Pagination, Thumbs]}
                        onSwiper={setThumbsSwiper}
                        slidesPerView={4}
                        spaceBetween={10}
                        watchSlidesProgress
                    >
                        {images.map((image, index) => (
                            <SwiperSlide key={index}>
                                <img
                                    src={image.url}
                                    alt={`Thumbnail ${index + 1}`}
                                    style={{
                                        width: '100%',
                                        height: 'auto',
                                        objectFit: 'cover',
                                        cursor: 'pointer',
                                    }}
                                />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                    <Swiper
                        modules={[Navigation, Pagination, Thumbs]}
                        thumbs={{ swiper: thumbsSwiper }}
                        autoplay={autoplay ? { delay: 3000, disableOnInteraction: false } : false}
                        navigation={navigation}
                        pagination={pagination ? { clickable: true } : false}
                        loop={loop}
                        slidesPerView={slidesPerView}
                        spaceBetween={spaceBetween}
                    >
                        {images.map((image, index) => (
                            <SwiperSlide key={index}>
                                <img
                                    src={image.url}
                                    alt={`Slide ${index + 1}`}
                                    style={{ width: '100%', height: 'auto', objectFit: 'cover' }}
                                />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </>
            )}

            {variant === 'fullscreen' && (
                <Swiper
                    modules={[Navigation, Pagination, Autoplay]}
                    autoplay={autoplay ? { delay: 3000, disableOnInteraction: false } : false}
                    navigation={navigation}
                    pagination={pagination ? { clickable: true } : false}
                    loop={loop}
                    slidesPerView={1}
                    style={{
                        height: '100vh',
                        width: '100%',
                    }}
                >
                    {images.map((image, index) => (
                        <SwiperSlide key={index}>
                            <img
                                src={image.url}
                                alt={`Slide ${index + 1}`}
                                style={{
                                    width: '100%',
                                    height: '100%',
                                    objectFit: 'cover',
                                }}
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>
            )}

            {variant === 'stacked' && (
                <Swiper
                    modules={[Navigation, Pagination, Autoplay]}
                    autoplay={autoplay ? { delay: 3000, disableOnInteraction: false } : false}
                    navigation={navigation}
                    pagination={pagination ? { clickable: true } : false}
                    loop={loop}
                    slidesPerView={1.5}
                    spaceBetween={-30}
                    centeredSlides
                >
                    {images.map((image, index) => (
                        <SwiperSlide key={index}>
                            <img
                                src={image.url}
                                alt={`Slide ${index + 1}`}
                                style={{
                                    width: '100%',
                                    height: 'auto',
                                    objectFit: 'cover',
                                    borderRadius: '10px',
                                    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                                }}
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>
            )}
        </>
    );
};

export default Carousel;