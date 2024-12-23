import React, { useState } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import { motion } from "framer-motion";

import "./Carousel.css";

export const Carousel = ({ data }) => {
  const [slide, setSlide] = useState(0);

  const nextSlide = () => {
    setSlide(slide === data.length - 1 ? 0 : slide + 1);
  };

  const prevSlide = () => {
    setSlide(slide === 0 ? data.length - 1 : slide - 1);
  };

  return (
    
    <>
      <BsArrowLeftCircleFill
        onClick={prevSlide}
        className="arrow left-1  lg:left-20"     />
      <div className="carousel mx-0 lg:w-[700px] lg:h-[548px] ">
        {data.map((item, idx) => {
          return (
            <div key={idx}>
              <motion.img
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 1 }}
                src={item.image}
                alt={item.title}
                width={450}
                height={450}
                className={slide === idx ? "slide" : "slide slide-hidden"}
              />
              <p
                className={
                  slide === idx
                    ? "slide pt-15 text-center content "
                    : "slide slide-hidden"
                }
              >
                {item.description}
              </p>
            </div>
          );
        })}
      </div>

      <BsArrowRightCircleFill
        onClick={nextSlide}
        className="arrow right-1  lg:right-20"
      />
      <div className="mt-5">
        <span className="indicators">
          {data.map((_, idx) => {
            return (
              <button
                key={idx}
                className={
                  slide === idx ? "indicator" : "indicator indicator-inactive"
                }
                onClick={() => setSlide(idx)}
              ></button>
            );
          })}
        </span>
      </div>
    </>
  );
};
export default Carousel;
