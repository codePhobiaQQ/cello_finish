import styles from "./ArrowRight.module.sass";
import arrow from "../../public/assets/svg/ArrowRight.svg";
import arrowMob from "../../public/assets/svg/ArrowRightMob.svg";
import useWindowWidth from "react-hook-use-window-width";

const ArrowRight = () => {
  const width = useWindowWidth();

  return (
    <div className={styles.arrowWrapper}>
      <div className={styles.circle}>
        <img
          className={styles.arrow + " arrowRight"}
          src={width > 576 ? arrow : arrowMob}
          alt="arrow"
        />
      </div>
    </div>
  );
};

export default ArrowRight;
