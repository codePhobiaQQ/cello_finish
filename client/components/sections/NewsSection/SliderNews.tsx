import {useEffect, useRef} from "react";
import person from "../../../public/assets/img/AboutSection/about1.jpg";
import Link from "next/link";
import { motion } from "framer-motion";
import {useInView} from "react-intersection-observer";
import LeftRightVariants from "../../../variants/LeftRightVariants";

interface ISlide {
  previewImage: {
    url: string;
  }
}

interface ISliderNews {
  news: ISlide[]
}

const SliderNews = ({ news }: ISliderNews) => {
  const slides: ISlide[] = news

  console.log(news)

  const { ref, inView } = useInView({
    triggerOnce: true,
  });
  const variants = new LeftRightVariants(0.7, 0.7);
  const fadeIn = variants.fadeIn;

  return (
    <motion.div
      className="news"
      ref={ref}
      variants={fadeIn}
      initial="hidden"
      animate={inView ? "visible" : ""}
    >
      <div className="wrap">
        <div className="girl">
          <img src={person.src} alt="person"/>
        </div>
        <div className="list">
          {slides.map((el, index) => (
            <Link key={"news" + index} href={`/news/${index}`}>
              <a>
                <div className="item">
                  <div className="img" style={{backgroundImage: `url("http://localhost:1337${el.previewImage.url}")`}}></div>
                </div>
              </a>
            </Link>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default SliderNews;