import { motion} from "framer-motion";
import {useInView} from "react-intersection-observer";
import { v4 as uuidv4 } from "uuid";
import IVariantClass from "../../../variants/VariantClass";

interface IConcertInner {
  location: string | undefined;
  description: string | undefined;
  LinkMore: string;
  Time: string;
  Date: string;
}

const Concert = ({location, description, LinkMore, Time, Date} : IConcertInner) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
  });

  const fadeInBottom: IVariantClass = {
    hidden: { opacity: 0, scale: .97, y: 10 },
    visible: { opacity: 1, scale: 1, y: 0, transition: { duration: .7, staggerChildren: .3 }}};

  const textVariantRight: IVariantClass = {
    hidden: { opacity: 0, x: 10 },
    visible: { opacity: 1, x: 0, transition: { duration: .7 }}};

  return (
    <div
      className={"concertsWrapper"}
    >
      <motion.div
        initial={"hidden"}
        animate={inView ? "visible" : ""}
        variants={fadeInBottom}
        ref={ref}
      >
        <div className={"location"}>
          <span>Location:</span>
          <motion.span
            // variants={textVariantRight}
          >
            {location}
          </motion.span>
        </div>
        <div className={"time"}>
          <span>Date:</span>
          <motion.span
            // variants={textVariantRight}
          >
            {Date}
          </motion.span>
        </div>
        <div className={"time"}>
          <span>Time:</span>
          <motion.span
            // variants={textVariantRight}
          >
            {Time}
          </motion.span>
        </div>
        <div className="description">
          <span>Description:</span>
          <motion.p
            // variants={textVariantRight}
          >
            {description}
          </motion.p>
        </div>
        <a target="_blank" href={LinkMore} className="button-action">
          More Info
        </a>
      </motion.div>
    </div>
  );
};

export default Concert;