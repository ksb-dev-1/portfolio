/* eslint-disable @typescript-eslint/no-explicit-any */
import { forwardRef, useRef } from "react";
import Image from "next/image";

import { IoMdClose } from "react-icons/io";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Keyboard, Pagination, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

interface CarouselProps {
  isCarouselOpen: boolean;
  closeCarousel: () => void;
}

const Carousel = forwardRef<HTMLDivElement, CarouselProps>(
  ({ isCarouselOpen, closeCarousel }, ref) => {
    // Create a ref to control the Swiper instance
    const swiperRef = useRef<any>(null);

    // Modified closeCarousel function to reset swiper
    const handleCloseCarousel = () => {
      if (swiperRef.current) {
        swiperRef.current.slideTo(0); // Reset to first slide
      }
      closeCarousel();
    };

    return (
      <div
        ref={ref}
        className={`fixed top-0 left-0 right-0 bottom-0 z-10 backdrop-blur-2xl flex items-center justify-center ${
          isCarouselOpen ? "opacity-1 z-[40]" : "opacity-0 z-[-10]"
        } transition duration-500`}
      >
        <span
          className="text-white absolute top-6 right-4 z-[80] cursor-pointer"
          onClick={handleCloseCarousel}
        >
          <IoMdClose className="text-4xl hover:text-primary" />
        </span>
        <div className="relative h-[calc(100vh-20vh)] max-w-5xl w-full rounded-xl overflow-hidden">
          <Images swiperRef={swiperRef} />
        </div>
      </div>
    );
  }
);

Carousel.displayName = "Carousel";
export default Carousel;

interface ImagesProps {
  swiperRef: React.MutableRefObject<any>;
}

function Images({ swiperRef }: ImagesProps) {
  return (
    <Swiper
      onSwiper={(swiper) => (swiperRef.current = swiper)} // Set swiper instance to swiperRef
      slidesPerView={1}
      spaceBetween={30}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      }}
      keyboard={{
        enabled: true,
      }}
      pagination={{
        clickable: true,
      }}
      navigation
      modules={[Autoplay, Keyboard, Pagination, Navigation]}
      className="mySwiper"
    >
      <SwiperSlide>
        <Image
          src="/assets/codify/codify-1.PNG"
          alt="codify"
          fill
          className="object-cover"
        />
      </SwiperSlide>
      <SwiperSlide>
        <Image
          src="/assets/codify/codify-2.PNG"
          alt="codify"
          fill
          className="object-cover"
        />
      </SwiperSlide>
      <SwiperSlide>
        <Image
          src="/assets/codify/codify-3.PNG"
          alt="codify"
          fill
          className="object-cover"
        />
      </SwiperSlide>
      <SwiperSlide>
        <Image
          src="/assets/codify/codify-4.PNG"
          alt="codify"
          fill
          className="object-cover"
        />
      </SwiperSlide>
      <SwiperSlide>
        <Image
          src="/assets/codify/codify-5.PNG"
          alt="codify"
          fill
          className="object-cover"
        />
      </SwiperSlide>
      <SwiperSlide>
        <Image
          src="/assets/codify/codify-6.PNG"
          alt="codify"
          fill
          className="object-cover"
        />
      </SwiperSlide>
      <SwiperSlide>
        <Image
          src="/assets/codify/codify-7.PNG"
          alt="codify"
          fill
          className="object-cover"
        />
      </SwiperSlide>
      <SwiperSlide>
        <Image
          src="/assets/codify/codify-8.PNG"
          alt="codify"
          fill
          className="object-cover"
        />
      </SwiperSlide>
    </Swiper>
  );
}
