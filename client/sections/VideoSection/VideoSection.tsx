import styles from "./VideoSection.module.sass";
import React, { useRef } from "react";
import { v4 as uuidv4 } from "uuid";

// @ts-ignore
import Slider from "react-slick";

import ArrowSlider from "../../components/ArrowSlider/ArrowSlider";
import slide1 from "../../public/assets/compositionSlides/composition.jpg";

interface ISlide {
  image: string;
  video: string;
  author: string;
  executors: string[];
  composition: string;
  duration: string;
}

const VideoSection = () => {
  const settings = {
    // dots: true,
    arrows: false,
    vertical: true,
    infinite: true,
    lazyLoad: true,
    speed: 500,
    centerMode: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  const sliderRef = useRef(null);

  const slides: ISlide[] = [
    {
      image: slide1.src,
      video: "https://media.w3.org/2010/05/sintel/trailer_hd.mp4",
      author: "Pyotr Ilyich Tchaikovsky",
      executors: ["Ivan Skanavi - cello", "Nikolai Diomkin - piano"],
      composition: "Pezzo capriccioso",
      duration: "06:50",
    },
    {
      image: slide1.src,
      video: "https://media.w3.org/2010/05/sintel/trailer_hd.mp4",
      author: "Pyotr Ilyich Tchaikovsky",
      executors: ["Ivan Skanavi - cello", "Nikolai Diomkin - piano"],
      composition: "Pezzo capriccioso",
      duration: "06:50",
    },
    {
      image: slide1.src,
      video: "https://media.w3.org/2010/05/sintel/trailer_hd.mp4",
      author: "Pyotr Ilyich Tchaikovsky",
      executors: ["Ivan Skanavi - cello", "Nikolai Diomkin - piano"],
      composition: "Pezzo capriccioso",
      duration: "06:50",
    },
    {
      image: slide1.src,
      video: "https://media.w3.org/2010/05/sintel/trailer_hd.mp4",
      author: "Pyotr Ilyich Tchaikovsky",
      executors: ["Ivan Skanavi - cello", "Nikolai Diomkin - piano"],
      composition: "Pezzo capriccioso",
      duration: "06:50",
    },
    {
      image: slide1.src,
      video: "https://media.w3.org/2010/05/sintel/trailer_hd.mp4",
      author: "Pyotr Ilyich Tchaikovsky",
      executors: ["Ivan Skanavi - cello", "Nikolai Diomkin - piano"],
      composition: "Pezzo capriccioso",
      duration: "06:50",
    },
  ];

  const clickNextArrow = () => {
    // @ts-ignore
    sliderRef.current?.slickNext();
  };

  const clickPrevArrow = () => {
    // @ts-ignore
    sliderRef.current?.slickPrev();
    console.log("clicked");
  };

  return (
    <div className={styles.videoSection}>
      <div className="container">
        <Slider ref={sliderRef} {...settings}>
          {slides.map((slide, index) => (
            <div className={"videoSlide"} key={uuidv4() + index}>
              hello
            </div>
          ))}
        </Slider>
        <div className={styles.arrowsWrapper}>
          <ArrowSlider onClick={clickPrevArrow} left={true} />
          <ArrowSlider onClick={clickNextArrow} />
        </div>
      </div>
    </div>
  );
};

export default VideoSection;
