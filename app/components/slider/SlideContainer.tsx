'use client'
import { useEffect, useRef } from 'react';
import Swiper from 'swiper';
import Image from 'next/image'
import 'swiper/css';

interface SliderProps {
  images: {
    src: string;
    alt: string;
  }[];
}

const SliderContainer: React.FC<SliderProps> = ({ images }) => {
  const sliderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sliderRef.current) return;
    const slider = new Swiper(sliderRef.current, {
      loop: true,
      autoplay: {
        delay: 1000,
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
    });
    return () => slider.destroy();
  }, []);

  const firstImage = images[0];

  return (
    <div className="swiper-container" ref={sliderRef}>
      <div className="swiper-wrapper">
        {images.map((image, index) => (
          <div className="swiper-slide w-auto" key={index}>
            <Image src={image.src} alt={image.alt} width={'600'} height={400} />
          </div>
        ))}
        <div className="swiper-slide w-auto">
          <Image src={firstImage.src} alt={firstImage.alt} width={1800} height={500} />
        </div>
      </div>
      <div className="swiper-pagination"></div>
    </div>
  );
};

export default SliderContainer;
