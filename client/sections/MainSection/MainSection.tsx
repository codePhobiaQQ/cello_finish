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
// @ts-ignore
import FontFaceObserver from "fontfaceobserver";
import { useRef } from "react";

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
  const [isFontLoaded, setIsFontLoaded] = useState<boolean>(false);
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

  // const { scrollY } = useViewportScroll();
  // const y1 = useTransform(scrollY, [0, 400], [0, -100]);
  // const x1 = useTransform(scrollY, [0, 400], [0, -100]);
  // const y2 = useTransform(scrollY, [0, 800], [0, 250]);
  // const opacity1 = useTransform(scrollY, [0, 400], [1, 0]);

  const sectionRef = useRef<HTMLElement>(null);
  const x1 = useRef<number>(0);
  const y1 = useRef<number>(0);
  const y2 = useRef<number>(0);
  const opacity1 = useRef<number>(1);

  const scrollHandler = () => {
    const top = document.documentElement.scrollTop;
    if (top < 400) {
      x1.current = (top / 400) * -100;
      y1.current = (top / 400) * -100;
      opacity1.current = 1 - top / 400;
    }
    if (top < 800) {
      y2.current = (top / 800) * 250;
    }
    sectionRef.current
      ?.querySelector("img")
      ?.setAttribute("style", `transform: translateY(${y2.current}px)`);
    sectionRef.current
      ?.querySelector(".connect")
      ?.setAttribute(
        "style",
        `transform: translateX(${x1.current}px); opacity: ${opacity1.current}`
      );
    sectionRef.current
      ?.querySelector(".content")
      ?.setAttribute(
        "style",
        `transform: translateY(${y1.current}px); opacity: ${opacity1.current}`
      );
  };

  useEffect(() => {
    window.addEventListener("scroll", scrollHandler);
    return () => {
      window.removeEventListener("scroll", scrollHandler);
    };
  }, []);

  const mainWrapperVariant = wrapperVariant({ staggerChildren: 0.3 });
  const mainBgImageVariant = bgImageVariant({ delay: 0.5, duration: 1 });

  const [sectionData, setSectionData] = useState<IMainSection>(
    {} as IMainSection
  );

  useEffect(() => {
    const font = new FontFaceObserver("Big");

    font.load().then(function () {
      setIsFontLoaded(true);
    });
  }, []);

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
      animate={isFontLoaded ? "visible" : "hidden"}
      className={styles.MainSection + " MainSection"}
      style={{ backgroundImage: bg.src }}
      ref={sectionRef}
    >
      <motion.div
        variants={mainBgImageVariant}
        className={styles.backgroundImg}
      >
        <Image
          objectFit={"cover"}
          layout={"fill"}
          src={bgImage}
          priority={true}
          alt="bg"
        />
      </motion.div>

      <motion.div
        variants={contentVariant}
        // style={{ translateY: `${y1}px` }}
        className={styles.content + " content"}
      >
        <h1>{sectionData?.MainTitle}</h1>
        <span>{sectionData?.MainSubtitle}</span>
      </motion.div>

      <motion.div
        variants={connectVariant}
        // style={{ translateX: x1, opacity: opacity1 }}
        className={styles.connect + " connect"}
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
