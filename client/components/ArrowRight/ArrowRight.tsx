import styles from "./ArrowRight.module.sass";
import arrow from "../../public/assets/svg/ArrowRight.svg";

const ArrowRight = () => {
  return (
    <div className={styles.arrowWrapper}>
      <div className={styles.circle}></div>
      <img
        className={styles.arrow + " arrowRight"}
        src={arrow.src}
        alt="arrow"
      />
    </div>
  );
};

export default ArrowRight;
