import styles from "./BiographySection.module.sass";
import cello from "../../public/assets/bio/viol.png";
import Viol from "../../components/svg/viol";
import ReactMarkdown from "react-markdown";
import Image from "next/image";
import ArrowRight from "../../components/ArrowRight/ArrowRight";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { imageVariant, textVariant } from "../../motions/bioMotions";
import useTypedSelector from "../../hooks/useTypedSelector";
import { backUrl } from "../../vars";

interface IBiographySection {
  AboutSection: any;
}

const BiographySection = ({ AboutSection }: IBiographySection) => {
  const lang = useTypedSelector((state) => state.app.language);

  const [imageRef, imageInView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });
  const [imageMobRef, imageMobInView] = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });
  const [text1Ref, text1InView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  return (
    <section id={"BiographySection"} className={styles.Biography}>
      <div className={styles.accent}>
        <span>Biography</span>
      </div>
      <div className="container">
        <div className={styles.biographyWrapper}>
          <motion.div
            ref={imageRef}
            variants={imageVariant}
            animate={imageInView ? "visible" : "hidden"}
            className={styles.imageWrapper}
          >
            <Image
              width={270}
              height={400}
              src={
                backUrl +
                AboutSection[`AboutSection${lang}`].image_ivan.data.attributes
                  .url
              }
              alt="Ivan"
            />
          </motion.div>
          <div className={styles.textWrapper}>
            <motion.div
              ref={imageMobRef}
              variants={imageVariant}
              animate={imageMobInView ? "visible" : "hidden"}
              className={styles.imageWrapperMob}
            >
              <Image
                width={270}
                height={400}
                src={
                  backUrl +
                  AboutSection[`AboutSection${lang}`].image_ivan.data.attributes
                    .url
                }
                alt="Ivan"
              />
            </motion.div>
            <motion.div
              animate={text1InView ? "visible" : "hidden"}
              ref={text1Ref}
              variants={textVariant}
            >
              <div className={styles.imageWrapperCello}>
                <Image src={cello.src} objectFit={"contain"} layout={"fill"} />
              </div>
              <ReactMarkdown>
                {AboutSection[`AboutSection${lang}`].content}
              </ReactMarkdown>
            </motion.div>
            <Viol />
          </div>
        </div>
        <a
          href={
            backUrl +
            AboutSection[`AboutSection${lang}`].bio_file.data.attributes.url
          }
          download
          target="_blank"
          className={styles.dowloadButton}
        >
          <span>{AboutSection[`AboutSection${lang}`].button_text}</span>
          <ArrowRight />
        </a>
      </div>
    </section>
  );
};

export default BiographySection;
