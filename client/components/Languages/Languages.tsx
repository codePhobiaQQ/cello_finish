import styles from "./Languages.module.sass";
import useTypedSelector from "../../hooks/useTypedSelector";
import { useDispatch } from "react-redux";
import { setLanguage } from "./../../redux/slices/AppSlice";
import {Lang} from "../../types/types";

const Languages = () => {
  const dispatch = useDispatch();
  const currentLanguage = useTypedSelector((state) => state.app.language);

  const clickLanguageHandler = (lang: Lang) => {
    dispatch(setLanguage(lang));
  };

  return (
    <ul className={styles.languages}>
      <li
        onClick={() => clickLanguageHandler("ru")}
        className={currentLanguage == "ru" ? `${styles.active}` : ""}
      >
        Ru
      </li>
      <li
        onClick={() => clickLanguageHandler("en")}
        className={currentLanguage == "en" ? styles.active : ""}
      >
        En
      </li>
      <li
        onClick={() => clickLanguageHandler("de")}
        className={currentLanguage == "de" ? styles.active : ""}
      >
        De
      </li>
    </ul>
  );
};

export default Languages;
