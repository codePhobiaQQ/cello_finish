import { motion} from "framer-motion";
import LeftRightVariants from "../../../variants/LeftRightVariants";
import {useInView} from "react-intersection-observer";

interface IConcert {
  description: string;
  date: string;
  location: string;
  time: string;
  link?: string;
  index: number
}

const Concert = (concert : IConcert) => {
  const { ref, inView } = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });

  const variants = new LeftRightVariants(0.7, 0.5);
  const fadeInBottom = variants.fadeInBottom;
  const textVariantRight = variants.textVariantRight;

  return (
    <motion.div
      className={"concertsWrapper"}
      variants={fadeInBottom}
      initial="hidden"
      animate={inView ? "visible" : ""}
      ref={ref}
      key={"concert" + concert.index}
    >
      <div className={"location"}>
        <span>Location:</span>
        <motion.span
          variants={textVariantRight}
        >
          {concert.location}
        </motion.span>
      </div>
      <div className={"time"}>
        <span>Time:</span>
        <motion.span
          variants={textVariantRight}
        >
          {concert.time}
        </motion.span>
      </div>
      <div className="description">
        <span>Description:</span>
        <motion.p
          variants={textVariantRight}
        >
          {concert.description}
        </motion.p>
      </div>
      <a href={concert.link} className="button-action">
        More Info
      </a>
    </motion.div>
  );
};

export default Concert;