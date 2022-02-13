import styles from "./SotialIconFooter.module.sass";
import { motion } from "framer-motion";

export interface ISotial {
  icon: string;
  active: string;
}

const SotialIconFooter = ({ icon, active }: ISotial) => {
  return (
    <div className={styles.sotial}>
      <a href="#" target="_blank">
        <img src={icon} />
        <motion.img
          whileHover={{ opacity: 1, transition: { duration: 0.3 } }}
          src={active}
        />
      </a>
    </div>
  );
};

export default SotialIconFooter;
