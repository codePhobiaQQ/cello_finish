import styles from "./FormSection.module.sass";
import {Form, Formik, Field} from "formik";
import * as Yup from "yup";
import BtnSubscribe from "../../components/BtnSubscribe/BtnSubscribe";
import formImg from "../../public/assets/img/formImg.png";
import Image from "next/image";
import {useInView} from "react-intersection-observer";
import useTypedSelector from "../../hooks/useTypedSelector";
import axios from "axios";
import {setThanks} from "../../redux/slices/AppSlice";
import {useDispatch} from "react-redux";
import {useEffect, useState} from "react";
import fetchQuery from "../../services/ssr";
import {Lang} from "../../types/types";

interface IValues {
    name?: string;
    email?: string;
}

const formPlaceholders: Record<Lang, IValues> = {
    de: {
        email: 'Email',
        name: 'Name'
    },
    en: {
        email: 'Email',
        name: 'Name'
    }
}

const SignupSchema = Yup.object().shape({
    name: Yup.string()
        .min(2, "Too Short!")
        .max(50, "Too Long!")
        .required("Required"),
    email: Yup.string().required("Required"),
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

    const [formRef] = useInView({
        threshold: 0.5,
        triggerOnce: true,
    });

    const [sectionData, setSectionData] = useState<IFormSection>(
        {} as IFormSection
    );

    useEffect(() => {
        async function fetchData() {
            const response = await fetchQuery('general-data', lang);
            const data = response?.[0]

            setSectionData({
                ...data?.acf,
                email: data?.acf?.email,
            });
        }

        fetchData();
    }, [lang]);

    return (
        <section id="FormSection" className={styles.FormSection}>
            <div className="container">
                <div className={styles.formSectionWrapper} ref={formRef}>
                    <Formik
                        initialValues={{
                            name: "",
                            email: "",
                            message: "",
                        }}
                        validationSchema={SignupSchema}
                        onSubmit={async (values: any) => {
                            dispatch(setThanks(true));
                            await axios.post("/api/email", {
                                values: values,
                                lang,
                            });
                        }}
                    >
                        {({errors, touched}) => (
                            <Form className={styles.formSectionVertical}>
                                <div className={styles.inputWrapper}>
                                    <label htmlFor="name">{sectionData.NameField}</label>
                                    <Field
                                        id="name"
                                        name="name"
                                        autoComplete="off"
                                        placeholder={formPlaceholders[lang].name}
                                        className={errors.name && touched.name ? "errorInput" : ""}
                                        type="string"
                                    />
                                    <span>select</span>
                                </div>

                                <div className={styles.inputWrapper}>
                                    <label htmlFor="email">{sectionData.EmailField}</label>
                                    <Field
                                        id="email"
                                        name="email"
                                        autoComplete="off"
                                        placeholder={formPlaceholders[lang].email}
                                        className={
                                            errors.email && touched.email ? "errorInput" : ""
                                        }
                                        type="text"
                                    />
                                </div>

                                <label htmlFor="name">{sectionData.MessagePlaceholder}</label>
                                <div className={styles.submitWrapper}>
                                    <Field
                                        placeholder="Message"
                                        // className={styles.submitWrapper}
                                        as="textarea"
                                        // pa
                                        id="message"
                                        autoComplete="off"
                                        name="message"
                                    />
                                    <BtnSubscribe
                                        // text={""}
                                        customClass={styles.btn}
                                        type={true}
                                    />
                                </div>
                            </Form>
                        )}
                    </Formik>

                    <div className={styles.formSectionHorizontal}>
                        <div className={styles.imageWrap}>
                            <Image height={400} width={800} src={formImg.src} alt="formImg"/>
                        </div>

                        <div className={styles.emailWrapper}>
                            <span>Email:</span>
                            <a href={`mailto:${sectionData.email}`}>{sectionData.email}</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FormSection;
