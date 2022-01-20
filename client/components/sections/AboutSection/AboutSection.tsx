import styles from './AboutSection.module.sass';
import {Container} from "reactstrap";
import { useInView } from 'react-intersection-observer';
import {useEffect, useState} from "react";
import {motion, useAnimation} from "framer-motion";
import {Parallax} from "react-scroll-parallax/cjs";
import IVariantClass from "../../../variants/VariantClass";

interface IAboutSection {
  header?: string;
  text?: string;
  leftPositionText?: boolean;
  photo?: any;
}

const AboutSection = ({ header, text, leftPositionText, photo }: IAboutSection) => {
  const [isMobile, setIsMobile] = useState<boolean>(false);
  useEffect(() => {
    setIsMobile(true);
  }, [])

  const { ref, inView } = useInView({
    threshold: 0.7,
    triggerOnce: true,
  });

  const wrapperVariant: IVariantClass =
    { visible: { transition: { staggerChildren: .3 }}};
  const textVariantLeft: IVariantClass = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0, transition: { duration: .7 }}};
  const textVariantRight: IVariantClass = {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0, transition: { duration: .7 }}};
  const photoVariant: IVariantClass = {
    hidden: { opacity: 0, scale: .95 },
    visible: { opacity: 1, scale: 1, transition: { duration: .7 }}};

  return (
    <section id="biography" ref={ref} className={styles.AboutSection}>
      <Container className={styles.container}>
        {header ? <h2>{header}</h2> : null}
        <motion.div
          className={styles.contentWrapper}
          variants={wrapperVariant}
          animate={inView ? "visible" : "hidden"}
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