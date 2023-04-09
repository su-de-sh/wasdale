import React from "react";
import "./Carousel.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

const CarouselComponent = ({ slides }) => {
  return (
    <Carousel
      autoPlay={true}
      interval={3000}
      infiniteLoop={true}
      transitionTime={1000}
      stopOnHover={false}
    >
      {slides.map((slide) => {
        return <div key={slide.id}>{slide.content}</div>;
      })}
    </Carousel>
  );
};

export default CarouselComponent;
