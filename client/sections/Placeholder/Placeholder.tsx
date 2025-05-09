import cls from './Placeholder.module.sass'
import useTypedSelector from "../../hooks/useTypedSelector";
import {Lang} from "../../types/types";

const text: Record<Lang, string> = {
  'de': 'Die Website wird gewartet.',
  'en': 'The website is under maintenance.'
};

export const Placeholder = () => {
  const lang = useTypedSelector((state) => state.app.language);

  return (
    <section className={cls.Placeholder}>
      <p className={cls.Text}>{text[lang] || 'The website is under maintenance.'}</p>
    </section>
  );
};