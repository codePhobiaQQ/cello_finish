import styles from "./GallerySection.module.sass";
import React, { useEffect, useRef, useState } from "react";
import { backUrl } from "../../vars";
// @ts-ignore
import Slider from "react-slick";
import { v4 as uuidv4 } from "uuid";
import ArrowSlider from "../../components/ArrowSlider/ArrowSlider";
import Image from "next/image";
import fetchQuery from "../../services/ssr";

interface ISlide {
  image: any;
}

interface IGallerySection {
  GalleryImages: any[];
}

const GallerySection = () => {
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
  const [slides, setSlides] = useState<string[]>([] as string[]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetchQuery(`api/galleries?&populate=Image`);
      setSlides(
        response.data.map(
          (img: any) => backUrl + img.attributes.Image.data.attributes.url
        )
      );
    }
    fetchData();
  }, []);

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
              <Image width={400} height={600} src={slide} alt={"slide"} />
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
