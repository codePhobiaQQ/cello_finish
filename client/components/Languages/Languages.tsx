import styles from "./Languages.module.sass";
import useTypedSelector from "../../hooks/useTypedSelector";
import { useDispatch } from "react-redux";
import { setLanguage } from "./../../redux/slices/AppSlice";

const Languages = () => {
  const dispatch = useDispatch();
  const currentLanguage = useTypedSelector((state) => state.app.language);

  const clickLanguageHandler = (lang: string) => {
    dispatch(setLanguage(lang));
  };

  return (
    <ul className={styles.languages}>
      <li
        onClick={() => clickLanguageHandler("Ru")}
        className={currentLanguage == "Ru" ? `${styles.active}` : ""}
      >
        Ru
      </li>
      <li
        onClick={() => clickLanguageHandler("En")}
        className={currentLanguage == "En" ? styles.active : ""}
      >
        En
      </li>
      <li
        onClick={() => clickLanguageHandler("De")}
        className={currentLanguage == "De" ? styles.active : ""}
      >
        De
      </li>
    </ul>
  );
};

export default Languages;
