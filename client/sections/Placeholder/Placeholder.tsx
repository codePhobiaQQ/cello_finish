import cls from './Placeholder.module.sass'
import useTypedSelector from "../../hooks/useTypedSelector";
import {langType} from "../../redux/slices/AppSlice";

const text: Record<langType, string> = {
  'Ru': 'На сайте ведутся технические работы.',
  'De': 'Die Website wird gewartet.',
  'En': 'The website is under maintenance.'
};

export const Placeholder = () => {
  const lang = useTypedSelector((state) => state.app.language);

  return (
    <section className={cls.Placeholder}>
      <p className={cls.Text}>{text[lang] || 'The website is under maintenance.'}</p>
    </section>
  );
};