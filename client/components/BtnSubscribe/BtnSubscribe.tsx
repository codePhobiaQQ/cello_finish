import styles from "./BtnSubscribe.module.sass";
import telegram from "../../public/assets/svg/sotials/Telegram.svg";
import useTypedSelector from "../../hooks/useTypedSelector";
import { useCallback } from "react";

interface IBtnSubscribe {
  type?: boolean;
  customClass?: string;
  clickHandler?: any;
}

const BtnSubscribe = ({ type, customClass, clickHandler }: IBtnSubscribe) => {
  const lang = useTypedSelector((state) => state.app.language);

  const showBtnText = useCallback(() => {
    switch (lang) {
      case "Ru":
        return "Отправить";
      case "En":
        return "Send";
      case "De":
        return "Senden";
    }
  }, [lang]);

  return (
    <div className={customClass ? customClass : ""}>
      <button
        onClick={clickHandler}
        type={type ? "submit" : undefined}
        className={styles.subscribe}
      >
        <div className={styles.subBtn}>
          <img src={telegram.src} alt="telegram" />
          <span>{showBtnText()}</span>
        </div>
      </button>
    </div>
  );
};

export default BtnSubscribe;
