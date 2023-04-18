'use client'
import { useEffect, useRef } from 'react';
import Swiper from 'swiper';
import Image from 'next/image'

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
        delay: 300,
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
    });
    return () => slider.destroy();
  }, []);

  return (
    <div className="swiper-container" ref={sliderRef}>
      <div className="swiper-wrapper">
        {images.map((image, index) => (
          <div className="swiper-slide w-auto" key={image.src}>
            <Image src={image.src} alt={image.alt}  width={600} height={400}/>
            <div>{index}</div>
          </div>
        ))}
      </div>
      <div className="swiper-pagination"></div>
    </div>
  );
};

export default SliderContainer;