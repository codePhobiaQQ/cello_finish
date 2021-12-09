import styles from './AboutSection.module.sass';
import {Container} from "reactstrap";
import { useInView } from 'react-intersection-observer';
import {useEffect, useState} from "react";
import {motion, useAnimation} from "framer-motion";
import LeftRightVariants from "../../../variants/LeftRightVariants";
import {Parallax} from "react-scroll-parallax/cjs";

interface IAboutSection {
  header?: string;
  text?: string;
  leftPositionText?: boolean;
  photo?: any;
}

const AboutSection = ({ header, text, leftPositionText, photo }: IAboutSection) => {
  let threshold;
  const [isMobile, setIsMobile] = useState<boolean>(false);
  useEffect(() => {
    setIsMobile(true);
  }, [])

  const { ref, inView } = useInView({
    threshold: 0.7,
    triggerOnce: true,
  });

  const variants = new LeftRightVariants(0.7, 0.7);
  const wrapperVariant = variants.wrapperVariant;
  const textVariantLeft = variants.textVariantLeft;
  const textVariantRight = variants.textVariantRight;
  const photoVariant = variants.photoVariant;

  return (
    <section id="biography" ref={ref} className={styles.AboutSection}>
      <Container className={styles.container}>
        {header ? <h2>{header}</h2> : null}
        <motion.div
          className={styles.contentWrapper}
          variants={wrapperVariant}
          initial="hidden"
          animate={inView ? "visible" : ""}
        >
          <motion.div
            style={{ order: leftPositionText ? 0 : 1 }}
            className={styles.contentText}
            variants={leftPositionText ? textVariantLeft : textVariantRight }
          >

            { !isMobile
              ? <Parallax y={[-20, 20]} tagOuter="figure">
                  {text ? <p>{text}</p> : null}
                </Parallax>
              : <>{text ? <p>{text}</p> : null}</>
            }
          </motion.div>

          <motion.div
            className={styles.imageContent}
            variants={photoVariant}
            style={{
              margin: !leftPositionText ? "0 auto 0 0" : "",
            }}
          >
              {photo ? <img src={photo} alt="photo"/> : null}
          </motion.div>

        </motion.div>
      </Container>
    </section>
  );
};

export default AboutSection;