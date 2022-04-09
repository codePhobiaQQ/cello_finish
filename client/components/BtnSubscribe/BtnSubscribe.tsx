import styles from "./BtnSubscribe.module.sass";
import telegram from "../../public/assets/svg/sotials/Telegram.svg";

interface IBtnSubscribe {
  type?: boolean;
  customClass?: string;
  text?: string;
  clickHandler?: any;
}

const BtnSubscribe = ({
  type,
  customClass,
  text,
  clickHandler,
}: IBtnSubscribe) => {
  return (
    <div className={customClass ? customClass : ""}>
      <button
        onClick={clickHandler}
        type={type ? "submit" : undefined}
        className={styles.subscribe}
      >
        <div className={styles.subBtn}>
          <img src={telegram.src} alt="telegram" />
          <span>{text || "Subscribe"}</span>
        </div>
      </button>
    </div>
  );
};

export default BtnSubscribe;
