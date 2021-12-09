import styles from './MainSection.module.sass';
import bg from '../../../public/assets/img/FirstSection.jpg';
import {Container} from "reactstrap";
import {useInView} from "react-intersection-observer";
import {Parallax} from 'react-scroll-parallax';
import {motion} from 'framer-motion';



interface IMainSection {
  language: string;
  MainSection: {
    TitleRu?: string;
    TitleEn?: string;
    TitleGe?: string;
    SubtitleRu?: string;
    SubtitleEn?: string;
    SubtitleGe?: string;
    BackgroundImage: {
      url: string;
    };
  }
}

const MainSection = ({MainSection, language}: IMainSection) => {
  const [MainVisible, isMainVisible] = useInView({threshold: .95});

  const variantsMain = {
    hidden: {},
    visible: {
      transition: {
        delay: 1.5,
        staggerChildren: 0.5,
      }
    }
  };
  const textVariant = {
    hidden: {
      y: -30,
      opacity: 0
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      }
    }
  }

  return (
    <section
      ref={MainVisible}
      className={styles.MainSection}
      id={"home"}
    >
      <img src={"http://localhost:1337" + MainSection.BackgroundImage.url || bg.src} alt="bg"/>
      <Container>
        <div className={styles.contentTextWrapper}>
          <motion.div variants={variantsMain} initial="hidden" animate="visible">
            <motion.h1 variants={textVariant}>
              {MainSection[`TitleRu`]}
            </motion.h1>
            <motion.span variants={textVariant}>
              {MainSection[`SubtitleRu`]}
            </motion.span>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};

export default MainSection;