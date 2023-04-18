'use client'

import ClientOnly from "./components/ClientOnly"
import Container from "./components/Container"
import SlideContainer from "./components/slider/SlideContainer"

const images = [
  {
    src: '/images/slide1.jpg',
    alt: 'Image 1',
  },
  {
    src: '/images/slide2.jpg',
    alt: 'Image 2',
  },
  {
    src: '/images/slide1.jpg',
    alt: 'Image 3',
  },
];

export default function Home() {
  return (
    <ClientOnly>
      
      <SlideContainer  images={images} />
      
    </ClientOnly>
  )
}
