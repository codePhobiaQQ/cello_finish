import {useEffect, useRef} from "react";
import person from "../../../public/assets/img/AboutSection/about1.jpg";
import Link from "next/link";
import { motion } from "framer-motion";
import {useInView} from "react-intersection-observer";
import LeftRightVariants from "../../../variants/LeftRightVariants";

interface ISlide {
  src: string;
  alt?: string;
}

const SliderNews = () => {
  const slides: ISlide[] = [
    {
      src: "https://images.unsplash.com/photo-1495462911434-be47104d70fa?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=675&q=80",
      alt: "test"
    },
    {
      src: "https://images.unsplash.com/photo-1537886079430-486164575c54?ixlib=rb-0.3.5&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;s=4c747db3353a34b312d05786f47930d3&amp;auto=format&amp;fit=crop&amp;w=600&amp;q=60",
      alt: "test"
    },
    {
      src: "https://images.unsplash.com/photo-1537886079430-486164575c54?ixlib=rb-0.3.5&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;s=4c747db3353a34b312d05786f47930d3&amp;auto=format&amp;fit=crop&amp;w=600&amp;q=60",
      alt: "test"
    },
    {
      src: "https://images.unsplash.com/photo-1537886079430-486164575c54?ixlib=rb-0.3.5&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;s=4c747db3353a34b312d05786f47930d3&amp;auto=format&amp;fit=crop&amp;w=600&amp;q=60",
      alt: "test"
    },
    {
      src: "https://images.unsplash.com/photo-1537886079430-486164575c54?ixlib=rb-0.3.5&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;s=4c747db3353a34b312d05786f47930d3&amp;auto=format&amp;fit=crop&amp;w=600&amp;q=60",
      alt: "test"
    },
    {
      src: "https://images.unsplash.com/photo-1537886079430-486164575c54?ixlib=rb-0.3.5&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;s=4c747db3353a34b312d05786f47930d3&amp;auto=format&amp;fit=crop&amp;w=600&amp;q=60",
      alt: "test"
    },

    {
      src: "https://images.unsplash.com/photo-1537886079430-486164575c54?ixlib=rb-0.3.5&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;s=4c747db3353a34b312d05786f47930d3&amp;auto=format&amp;fit=crop&amp;w=600&amp;q=60",
      alt: "test"
    },
    {
      src: "https://images.unsplash.com/photo-1537886079430-486164575c54?ixlib=rb-0.3.5&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;s=4c747db3353a34b312d05786f47930d3&amp;auto=format&amp;fit=crop&amp;w=600&amp;q=60",
      alt: "test"
    },
  ]

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
            <>
              <Link key={"news" + index} href={`/news/${index}`}>
                <a>
                  <div className="item">
                    <div
                      className="img"
                      style={{backgroundImage: `url("${el.src}")`}}></div>
                  </div>
                </a>
              </Link>
            </>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default SliderNews;