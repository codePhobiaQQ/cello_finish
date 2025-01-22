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
      <a className={styles.sotialLink} href={link} target="_blank">
        <div className={styles.imageWrapper}>
          <Image alt={link} width={20} height={20} src={icon} />
        </div>

        <motion.img
          className={styles.colorImg}
          whileHover={{ opacity: 1, transition: { duration: 0.3 } }}
          src={active}
        />
      </a>
    </div>
  );
};

export default SotialIconFooter;
