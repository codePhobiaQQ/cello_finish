import {Container} from "reactstrap";
import {useInView} from "react-intersection-observer";
import {ImageType} from "../../../types/types";
import {chooseLanguage} from "../../../functions/LanguageFunction";
import {motion} from "framer-motion";
import IVariantClass from "../../../variants/VariantClass";

interface IFormSection {
  language: string;
  data: {
    ButtonTextEn: string;
    ButtonTextRu: string;
    ButtonTextGe: string;
    Image: ImageType;
    TextEn: string;
    TextRu: string;
    TextGe: string;
    TitleRu: string;
    TitleEn: string;
    TitleGe: string;
    email: string;
    placeholderEn: string;
    placeholderRu: string;
    placeholderGe: string;
  }
}

const FormSection = (props: IFormSection) => {
  const { ref, inView } = useInView({
    threshold: 0.7,
    triggerOnce: true,
  });

  const wrapperVariant: IVariantClass = { visible: { transition: { staggerChildren: .4 }}};
  const photoVariant: IVariantClass = {
    hidden: { opacity: 0, scale: .95 },
    visible: { opacity: 1, scale: 1, transition: { duration: .7 }}
  };

  return (
    <section className="FormSection">
      <Container>
        <motion.div
          ref={ref}
          variants={wrapperVariant}
          className="containerForm"
          animate={inView ? "visible" : "hidden"}
        >

          <motion.div variants={photoVariant} className="containerFormCircle"></motion.div>

          <motion.div
            className="formIntro"
            variants={photoVariant}
          >
            <img
              src={"http://localhost:1337" + props.data.Image.url}
              alt="image"
            />
            <div className="container-text">
              <h2>
                {chooseLanguage(
                  props.language,
                  props.data.TitleRu,
                  props.data.TitleEn,
                  props.data.TitleGe,
                )}
              </h2>
              <p>{chooseLanguage(
                props.language,
                props.data.TextRu,
                props.data.TextEn,
                props.data.TextGe,
              )}</p>
              <input
                type="email"
                placeholder={chooseLanguage(
                  props.language,
                  props.data.placeholderRu,
                  props.data.placeholderEn,
                  props.data.placeholderGe,
                )}
              />
                <button type="submit">
                  {chooseLanguage(
                    props.language,
                    props.data.ButtonTextRu,
                    props.data.ButtonTextEn,
                    props.data.ButtonTextGe,
                  )}
                </button>
              </div>
            </motion.div>
        </motion.div>
      </Container>
    </section>
  );
};

export default FormSection;