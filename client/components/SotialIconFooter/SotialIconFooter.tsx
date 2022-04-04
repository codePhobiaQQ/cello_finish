import styles from "./SotialIconFooter.module.sass";
import { motion } from "framer-motion";
import Image from "next/image";

export interface ISotial {
  icon: string;
  active: string;
  link: string;
}

const SotialIconFooter = ({ icon, active, link }: ISotial) => {
  return (
    <div className={styles.sotial}>
      <a href={link} target="_blank">
        <div className={styles.imageWrapper}>
          <Image width={20} height={20} src={icon} />
        </div>

        <motion.img
          whileHover={{ opacity: 1, transition: { duration: 0.3 } }}
          src={active}
        />
      </a>
    </div>
  );
};

export default SotialIconFooter;
