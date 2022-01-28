import styles from "./Hamburger.module.sass";
import { Dispatch, SetStateAction, useState } from "react";

interface IHamburger {
  isMenuOpen: boolean;
  setMenuOpen: Dispatch<SetStateAction<boolean>>;
}

const Hamburger = ({ isMenuOpen, setMenuOpen }: IHamburger) => {
  const [isActive, setIsActive] = useState(false);

  const clickHandler = () => {
    setIsActive(!isActive);
    setMenuOpen(!isMenuOpen);
  };

  return (
    <div
      className={
        !isActive ? styles.wrapperMenu : styles.wrapperMenu + " " + styles.open
      }
      onClick={() => clickHandler()}
    >
      <div
        className={styles.lineMenu + " " + styles.half + " " + styles.start}
      ></div>
      <div className={styles.lineMenu}></div>
      <div
        className={styles.lineMenu + " " + styles.half + " " + styles.end}
      ></div>
    </div>
  );
};

export default Hamburger;
