import styles from "./FormSection.module.sass";
import { useFormik } from "formik";
import BtnSubscribe from "../../components/BtnSubscribe/BtnSubscribe";
import formImg from "../../public/assets/img/formImg.png";

interface IValues {
  name?: string;
  email?: string;
  message?: string;
}

const validate = (values: IValues) => {
  const errors: IValues = {};
  if (!values.name) {
    errors.name = "Required";
  } else if (values.name.length > 15) {
    errors.name = "Must be 15 characters or less";
  }

  if (!values.email) {
    errors.email = "Required";
  } else if (values.email.length > 20) {
    errors.email = "Must be 20 characters or less";
  }
  if (!values.email) {
    errors.email = "Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }

  return errors;
};

const FormSection = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      message: "",
    },
    validate,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <section className={styles.FormSection}>
      <div className="container">
        <div className={styles.formSectionWrapper}>
          <form
            className={styles.formSectionVertical}
            onSubmit={formik.handleSubmit}
          >
            <div className={styles.inputWrapper}>
              <label htmlFor="name">Ваше Имя*</label>
              <input
                id="name"
                name="name"
                className={formik.errors.name ? "errorInput" : ""}
                type="string"
                onChange={formik.handleChange}
                value={formik.values.name}
              />
              <span>select</span>
            </div>

            <div className={styles.inputWrapper}>
              <label htmlFor="email">Ваш E-mail*</label>
              <input
                id="email"
                name="email"
                className={formik.errors.email ? "errorInput" : ""}
                type="text"
                onChange={formik.handleChange}
                value={formik.values.email}
              />
            </div>

            <label htmlFor="name">Ваше сообщение</label>
            <div className={styles.submitWrapper}>
              <textarea
                id="message"
                name="message"
                onChange={formik.handleChange}
                value={formik.values.message}
              />
              <BtnSubscribe customClass={styles.btn} type={true} />
            </div>
          </form>

          <div className={styles.formSectionHorizontal}>
            <img src={formImg.src} alt="formImg" />
            <div className={styles.emailWrapper}>
              <span>Email:</span>
              <a href="mailto:info@ivanskanavi.com">info@ivanskanavi.com</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FormSection;
