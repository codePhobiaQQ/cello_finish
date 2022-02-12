// import { useState } from "react";
import styles from "./SotialIconFooter.module.sass";
import { motion } from "framer-motion";

export interface ISotial {
  icon: string;
  active: string;
}

const SotialIconFooter = ({ icon, active }: ISotial) => {
  // const [isHover, setIsHover] = useState<boolean>(false);

  return (
    <div
      // onMouseEnter={() => setIsHover(true)}
      // onMouseLeave={() => setIsHover(false)}
      className={styles.sotial}
    >
      <a href="#" target="_blank">
        <img src={icon} />
        {/* <motion.div className={styles.hoverImg}>*/}
        <motion.img
          whileHover={{ opacity: 1, transition: { duration: 0.3 } }}
          src={active}
        />
        {/* </motion.div>*/}
      </a>
    </div>
  );
};

export default SotialIconFooter;
