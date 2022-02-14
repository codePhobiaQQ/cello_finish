import styles from "./ArrowRight.module.sass";
import arrow from "../../public/assets/svg/ArrowRight.svg";
import arrowMob from "../../public/assets/svg/ArrowRightMob.svg";
import useWindowWidth from "react-hook-use-window-width";

const ArrowRight = () => {
  const width = useWindowWidth();

  return (
    <div className={styles.arrowWrapper}>
      <div className={styles.circle}></div>
      <img
        className={styles.arrow + " arrowRight"}
        src={width > 576 ? arrow.src : arrowMob.src}
        alt="arrow"
      />
    </div>
  );
};

export default ArrowRight;
