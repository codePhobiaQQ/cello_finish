import styles from "./ArrowDown.module.sass";
import arrow from "./../../public/assets/svg/Arrow.svg";
import circle from "./../../public/assets/svg/Circle.svg";

const ArrowDown = () => {
  return (
    <div className={styles.arrowWrapper}>
      <img className={styles.circle} src={circle.src} alt="circle" />
      <img className={styles.arrow} src={arrow.src} alt="arrow" />
    </div>
  );
};

export default ArrowDown;
