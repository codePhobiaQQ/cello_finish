import styles from "./GallerySection.module.sass";
import React, { useRef } from "react";
import { backUrl } from "../../vars";
// @ts-ignore
import Slider from "react-slick";
import { v4 as uuidv4 } from "uuid";
import ArrowSlider from "../../components/ArrowSlider/ArrowSlider";
import Image from "next/image";

interface ISlide {
  image: any;
}

interface IGallerySection {
  GalleryImages: any[];
}

const GallerySection = ({ GalleryImages }: IGallerySection) => {
  const settings = {
    arrows: false,
    infinite: true,
    lazyLoad: true,
    speed: 300,
    centerMode: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  const sliderRef = useRef(null);
  const slides: ISlide[] = GalleryImages.map((el) => {
    return { image: backUrl + el.attributes.image.data.attributes.url };
  });

  const clickNextArrow = () => {
    // @ts-ignore
    sliderRef.current?.slickNext();
  };

  const clickPrevArrow = () => {
    // @ts-ignore
    sliderRef.current?.slickPrev();
  };

  return (
    <div className={styles.gallerySection}>
      <div className="container">
        <Slider ref={sliderRef} {...settings}>
          {slides.map((slide, index) => (
            <div key={uuidv4() + index}>
              <Image width={400} height={600} src={slide.image} alt={"slide"} />
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

export default GallerySection;
