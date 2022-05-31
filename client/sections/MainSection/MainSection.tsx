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
import { backUrl } from "../../vars";
import Image from "next/image";
import useTypedSelector from "../../hooks/useTypedSelector";
import fetchQuery from "../../services/ssr";
import useWindowSize from "../../hooks/useWindowSize";

interface IMainSection {
  MainTitle: string;
  MainSubtitle: string;
  VideoText: string;
  Video: string;
  ConnectText: string;
}

const MainSection = () => {
  const [bgImage, setBgImage] = useState<string>(bg.src);
  const lang = useTypedSelector((state) => state.app.language);

  const { width } = useWindowSize();

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

  const [sectionData, setSectionData] = useState<IMainSection>(
    {} as IMainSection
  );

  useEffect(() => {
    async function fetchData() {
      const response = await fetchQuery(
        `api/main-page-field?locale=${lang.toLowerCase()}&populate=*&populate=MainSection.Video`
      );
      setSectionData({
        ...response.data.attributes.MainSection,
        Video:
          backUrl +
          response.data.attributes.MainSection.Video.data.attributes.url,
      });
    }
    fetchData();
  }, [lang]);

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
        <h1>{sectionData?.MainTitle}</h1>
        <span>{sectionData?.MainSubtitle}</span>
      </motion.div>

      <motion.div
        variants={mainConnectVariant}
        style={{ translateX: x1, opacity: opacity1 }}
        className={styles.connect}
      >
        <Link href="#FormSection">
          <a>
            <span>{sectionData?.ConnectText}</span>
          </a>
        </Link>
      </motion.div>

      {width > 756 ? (
        <VideoPlayer
          // poster={
          //   backUrl +
          //   MainSection[`MainSection${lang}`].video_preview.data.attributes.url
          // }
          videoSrc={sectionData.Video}
          label={sectionData.VideoText}
        />
      ) : null}
      {width > 756 ? <ArrowDown /> : null}
    </motion.section>
  );
};

export default MainSection;
