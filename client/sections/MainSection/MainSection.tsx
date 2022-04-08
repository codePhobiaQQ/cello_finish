import styles from "./MainSection.module.sass";
import bg from "../../public/assets/img/mainSection/bgMain1.jpg";
import mediumPc from "../../public/assets/img/mainSection/mediumPc.jpg";
import bgIpad from "../../public/assets/img/mainSection/mainBgIpad.jpg";
import bgMob from "../../public/assets/img/mainSection/mainBgMob.jpg";
import { wrapperVariant, bgImageVariant } from "../../motions/motions";
import { contentVariant, connectVariant } from "../../motions/mainMotion";
import { motion, useTransform, useViewportScroll } from "framer-motion";
import ArrowDown from "../../components/ArrowDown/ArrowDown";
import VideoPlayer from "../../components/VideoPlayer/VideoPlayer";
import Link from "next/link";
import { useEffect, useState } from "react";
import useWindowWidth from "react-hook-use-window-width";
import { backUrl } from "../../vars";
import Image from "next/image";
import useTypedSelector from "../../hooks/useTypedSelector";

interface IMainSection {
  MainSection: any;
}

const MainSection = ({ MainSection }: IMainSection) => {
  const [bgImage, setBgImage] = useState<string>(bg.src);
  const lang = useTypedSelector((state) => state.app.language);

  const width = useWindowWidth();
  useEffect(() => {
    if (width > 1355) {
      setBgImage(bg.src);
    } else if (width <= 1366 && width > 992) {
      setBgImage(mediumPc.src);
    } else if (width <= 992 && width > 756) {
      setBgImage(bgIpad.src);
    } else if (width <= 756) {
      setBgImage(bgMob.src);
    }
  }, [width]);

  const { scrollY } = useViewportScroll();
  const y1 = useTransform(scrollY, [0, 400], [0, -100]);
  const x1 = useTransform(scrollY, [0, 400], [0, -100]);
  const y2 = useTransform(scrollY, [0, 800], [0, 250]);
  const opacity1 = useTransform(scrollY, [0, 400], [1, 0]);

  const mainWrapperVariant = wrapperVariant({ staggerChildren: 0.3 });
  const mainBgImageVariant = bgImageVariant({ delay: 0.5, duration: 1 });
  const mainContentVariant = contentVariant();
  const mainConnectVariant = connectVariant();

  return (
    <motion.section
      variants={mainWrapperVariant}
      initial="hidden"
      animate="visible"
      className={styles.MainSection + " MainSection"}
      style={{ backgroundImage: bg.src }}
    >
      <motion.div
        variants={mainBgImageVariant}
        className={styles.backgroundImg}
        style={{ translateY: y2 }}
      >
        <Image objectFit={"cover"} layout={"fill"} src={bgImage} alt="bg" />
      </motion.div>

      <motion.div
        variants={mainContentVariant}
        style={{ translateY: y1, opacity: opacity1 }}
        className={styles.content}
      >
        <h1>{MainSection[`MainSection${lang}`].title}</h1>
        <span>{MainSection[`MainSection${lang}`].subtitle}</span>
      </motion.div>

      <motion.div
        variants={mainConnectVariant}
        style={{ translateX: x1, opacity: opacity1 }}
        className={styles.connect}
      >
        <Link href="#FormSection">
          <a>
            <span>{MainSection[`MainSection${lang}`].connect}</span>
          </a>
        </Link>
      </motion.div>

      {width > 756 ? (
        <VideoPlayer
          poster={
            backUrl +
            MainSection[`MainSection${lang}`].video_preview.data.attributes.url
          }
          videoSrc={
            backUrl +
            MainSection[`MainSection${lang}`].video.data.attributes.url
          }
          label={MainSection[`MainSection${lang}`].video_name}
        />
      ) : null}
      {width > 756 ? <ArrowDown /> : null}
    </motion.section>
  );
};

export default MainSection;
