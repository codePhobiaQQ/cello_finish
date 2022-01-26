import styles from "./Hamburger.module.sass";
import { useState } from "react";

const Hamburger = () => {
  const [isActive, setIsActive] = useState(false);

  const clickHandler = () => {
    setIsActive(!isActive);
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
