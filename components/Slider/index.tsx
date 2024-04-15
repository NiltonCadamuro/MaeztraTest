"use client";

import Swiper from "swiper";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { SliderProps } from "./types";

import { useLayoutEffect } from "react";
import Image from "next/image";

const Slider = ({
  children,
  spaceBetween,
  slidesPerView,
  dots,
  sliderName,
  breakpoints,
  arrow,
}: SliderProps) => {
  useLayoutEffect(() => {
    const swiper = new Swiper(`.slider-${sliderName}`, {
      modules: [Navigation, Pagination],
      slidesPerView: slidesPerView,
      loop: true,
      spaceBetween: spaceBetween,
      navigation: {
        nextEl: `.swiper-button-next-${sliderName}`,
        prevEl: `.swiper-button-prev-${sliderName}`,
      },
      pagination: dots
        ? {
            el: `.dots-${sliderName}`,
            clickable: true,
          }
        : false,
      breakpoints: breakpoints ? breakpoints : {},
    });

    swiper.on("slideChange", () => {
      const dots = document.querySelectorAll(
        `.dots-${sliderName} .swiper-pagination-bullet`,
      );
      const activeSlideIndex = swiper.realIndex;

      dots.forEach((dot, index) => {
        if (index === activeSlideIndex) {
          dot.classList.add("swiper-pagination-bullet-active");
        } else {
          dot.classList.remove("swiper-pagination-bullet-active");
        }
      });
    });
  }, [spaceBetween, slidesPerView, dots, sliderName, breakpoints, arrow]);

  return (
    <div className="w-full relative">
      <div className={`swiper slider-${sliderName} !pb-0`}>
        <div className="swiper-wrapper">
          {children.map((item, index) => (
            <div key={index} className="swiper-slide !flex justify-center">
              {item}
            </div>
          ))}
        </div>
        {dots && <div className={`swiper-pagination dots-${sliderName}`}></div>}
      </div>
      {arrow && (
        <div
          className={`${sliderName === "shelf" ? "px-0 !hidden lg:!flex" : "px-7 !flex"} container absolute top-0 left-0 right-0  h-full items-center justify-between`}
        >
          <div
            className={`swiper-button-prev swiper-button-prev-${sliderName} !static`}
          >
            <Image
              src="/arrow-left.svg"
              alt="flecha para esquerda"
              width={20}
              height={32}
            />
          </div>
          <div
            className={`swiper-button-next swiper-button-next-${sliderName} !static`}
          >
            <Image
              src="/arrow-right.svg"
              alt="flecha para dirteita"
              width={20}
              height={32}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Slider;
