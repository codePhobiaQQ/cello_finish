import styles from "./ArrowRight.module.sass";
import arrow from "../../public/assets/svg/ArrowRight.svg";
import arrowMob from "../../public/assets/svg/ArrowRightMob.svg";
import useWindowWidth from "react-hook-use-window-width";
import { useEffect, useState } from "react";

const ArrowRight = () => {
  const [whatArrow, setWhatArrow] = useState<number>(0);
  const width = useWindowWidth();

  useEffect(() => {
    if (width > 765) {
      setWhatArrow(1);
    } else {
      setWhatArrow(0);
    }
  }, [width]);

  return (
    <div className={styles.arrowWrapper}>
      <div className={styles.circle}>
        <img
          className={styles.arrow + " arrowRight"}
          src={whatArrow ? arrow.src : arrowMob.src}
          alt="arrow"
        />
      </div>
    </div>
  );
};

export default ArrowRight;
