import styles from "./Menu.module.sass";
import menuBg from "../../public/assets/img/menuBg.jpg";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

interface IMenu {
  isMenuOpen: boolean;
}

const Menu = ({ isMenuOpen }: IMenu) => {
  const fadeIn = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
    exit: {
      opacity: 0.5,
    },
  };
  const scale = {
    hidden: {
      scale: 1,
    },
    visible: {
      scale: 1.05,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <>
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            // variants={fadeIn}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            // exit={{ opacity: 1 }}
            className={styles.Menu}
          >
            <motion.img
              variants={scale}
              className={styles.bgImage}
              src={menuBg.src}
              alt="menuBg"
            />
            <ul className={styles.menuItems}>
              <li className={styles.menuItem}>
                <Link href="#">
                  <a>Главная</a>
                </Link>
              </li>
              <li className={styles.menuItem}>
                <Link href="#">
                  <a>Биография</a>
                </Link>
              </li>
              <li className={styles.menuItem}>
                <Link href="#">
                  <a>Галерея</a>
                </Link>
              </li>
              <li className={styles.menuItem}>
                <Link href="#">
                  <a>Концерты</a>
                </Link>
              </li>
              <li className={styles.menuItem}>
                <Link href="#">
                  <a>Новости</a>
                </Link>
              </li>
              <li className={styles.menuItem}>
                <Link href="#">
                  <a>Контакты</a>
                </Link>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Menu;
