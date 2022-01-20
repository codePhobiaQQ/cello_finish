import { motion} from "framer-motion";
import LeftRightVariants from "../../../variants/LeftRightVariants";
import {useInView} from "react-intersection-observer";
import { IConcert } from "../../../pages/concerts";
import { v4 as uuidv4 } from "uuid";
import {chooseLanguage} from "../../../functions/LanguageFunction";
import {useEffect} from "react";

interface IConcertInner {
  location: string | undefined;
  description: string | undefined;
  LinkMore: string;
  Time: string;
  Date: string;
}

const Concert = ({location, description, LinkMore, Time, Date} : IConcertInner) => {
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
      key={"concert" + uuidv4()}
    >
      <div className={"location"}>
        <span>Location:</span>
        <motion.span
          variants={textVariantRight}
        >
          {location}
        </motion.span>
      </div>
      <div className={"time"}>
        <span>Date:</span>
        <motion.span
          variants={textVariantRight}
        >
          {Date}
        </motion.span>
      </div>
      <div className={"time"}>
        <span>Time:</span>
        <motion.span
          variants={textVariantRight}
        >
          {Time}
        </motion.span>
      </div>
      <div className="description">
        <span>Description:</span>
        <motion.p
          variants={textVariantRight}
        >
          {description}
        </motion.p>
      </div>
      <a target="_blank" href={LinkMore} className="button-action">
        More Info
      </a>
    </motion.div>
  );
};

export default Concert;