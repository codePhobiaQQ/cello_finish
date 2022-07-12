import styles from "./FormSection.module.sass";
import { Form, Formik, Field } from "formik";
import * as Yup from "yup";
import BtnSubscribe from "../../components/BtnSubscribe/BtnSubscribe";
import formImg from "../../public/assets/img/formImg.png";
import Image from "next/image";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { formVariant, inputVariant } from "../../motions/formMotions";
import { imageVariant } from "../../motions/bioMotions";
import useTypedSelector from "../../hooks/useTypedSelector";
import axios from "axios";
import { setThanks } from "../../redux/slices/AppSlice";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import fetchQuery from "../../services/ssr";
import { backUrl } from "../../vars";

interface IValues {
  name?: string;
  email?: string;
}

const SignupSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
});

interface IFormSection {
  ButtonText: string;
  EmailField: string;
  EmailPlaceholder: string;
  MessagePlaceholder: string;
  NameField: string;
  NamePlaceholder: string;
  email: string;
}

const FormSection = () => {
  const dispatch = useDispatch();
  const lang = useTypedSelector((state) => state.app.language);

  const [formRef, formInView] = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });

  const [sectionData, setSectionData] = useState<IFormSection>(
    {} as IFormSection
  );

  useEffect(() => {
    async function fetchData() {
      const response = await fetchQuery(
        `api/main-page-field?locale=${lang.toLowerCase()}&populate=*`
      );
      const response1 = await fetchQuery(
        `api/footer-info?locale=${lang.toLowerCase()}&populate=*`
      );
      setSectionData({
        ...response.data.attributes.FormSection,
        email: response1.data.attributes.email,
      });
    }
    fetchData();
  }, [lang]);

  return (
    <section id="FormSection" className={styles.FormSection}>
      <div className="container">
        <motion.div
          className={styles.formSectionWrapper}
          ref={formRef}
          variants={formVariant}
          animate={formInView ? "visible" : "hidden"}
        >
          <Formik
            initialValues={{
              name: "",
              email: "",
              message: "",
            }}
            validationSchema={SignupSchema}
            onSubmit={async (values: any) => {
              dispatch(setThanks(true));
              const response = await axios.post("/api/email", {
                values: values,
                lang,
              });
            }}
          >
            {({ errors, touched }) => (
              <Form className={styles.formSectionVertical}>
                <motion.div
                  variants={inputVariant}
                  className={styles.inputWrapper}
                >
                  <label htmlFor="name">{sectionData.NameField}</label>
                  <Field
                    id="name"
                    name="name"
                    autoComplete="off"
                    placeholder={sectionData.NamePlaceholder}
                    className={errors.name && touched.name ? "errorInput" : ""}
                    type="string"
                  />
                  <span>select</span>
                </motion.div>

                <motion.div
                  variants={inputVariant}
                  className={styles.inputWrapper}
                >
                  <label htmlFor="email">{sectionData.EmailField}</label>
                  <Field
                    id="email"
                    name="email"
                    autoComplete="off"
                    placeholder={sectionData.EmailPlaceholder}
                    className={
                      errors.email && touched.email ? "errorInput" : ""
                    }
                    type="text"
                  />
                </motion.div>

                <motion.label variants={inputVariant} htmlFor="name">
                  {sectionData.MessagePlaceholder}
                </motion.label>
                <motion.div
                  variants={inputVariant}
                  className={styles.submitWrapper}
                >
                  <Field
                    // className={styles.submitWrapper}
                    as={"textarea"}
                    id="message"
                    autoComplete="off"
                    name="message"
                  />
                  <BtnSubscribe
                    text={""}
                    customClass={styles.btn}
                    type={true}
                  />
                </motion.div>
              </Form>
            )}
          </Formik>

          <div className={styles.formSectionHorizontal}>
            <div className={styles.imageWrap}>
              <Image height={400} width={800} src={formImg.src} alt="formImg" />
            </div>

            <div className={styles.emailWrapper}>
              <span>Email:</span>
              <a href={`mailto:${sectionData.email}`}>{sectionData.email}</a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FormSection;
