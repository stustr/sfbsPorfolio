import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper";

export default function App() {
  return (
    <>
      <Swiper autoplay={{delay:4500, disableOnInteraction:false}} loop={true} speed={1000} pagination={true} modules={[Autoplay, Pagination]}>
        <SwiperSlide>
          <figure>
            <img
              src="/src/assets/img/Screenshot 2022-12-11 at 16.54.14.png"
              alt="country crammer app"
              className="w-1/2 mx-auto"
            />
            <figcaption className=" w-1/3 mx-auto text-center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet
              accusantium quaerat dolorem! Illum distinctio unde, odit commodi,
              accusamus debitis repellendus, autem tempora laborum perspiciatis
              sequi.
            </figcaption>
          </figure>
        </SwiperSlide>
        <SwiperSlide>
          <figure>
            <img
              src="/src/assets/img/Screenshot 2022-11-18 at 15.02.23.png"
              alt="corbett climber app"
              className="w-1/2 mx-auto"
            />
            <figcaption className=" w-1/3 mx-auto text-center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet
              accusantium quaerat dolorem! Illum distinctio unde, odit commodi,
              accusamus debitis repellendus, autem tempora laborum perspiciatis
              sequi.
            </figcaption>
          </figure>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
