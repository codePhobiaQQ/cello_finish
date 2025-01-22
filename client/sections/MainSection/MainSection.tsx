import styles from "./MainSection.module.sass";

import bg from "../../public/assets/img/mainSection/bigMain.jpg";
import mediumPc from "../../public/assets/img/mainSection/mediumBg.jpg";
import bgIpad from "../../public/assets/img/mainSection/bgIpad.jpg";
import bgMob from "../../public/assets/img/mainSection/bgMob.jpg";
import ArrowDown from "../../components/ArrowDown/ArrowDown";
import VideoPlayer from "../../components/VideoPlayer/VideoPlayer";
import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import { backUrl } from "../../vars";
import Image from "next/image";
import useTypedSelector from "../../hooks/useTypedSelector";
import fetchQuery from "../../services/ssr";
import useWindowSize from "../../hooks/useWindowSize";

// ---- Animation ---
import { useRef } from "react";
import { gsap, TweenLite } from "gsap";
import { Controller, Scene } from "react-scrollmagic";

interface IMainSection {
  MainTitle: string;
  MainSubtitle: string;
  VideoText: string;
  Preview?: string;
  ConnectText: string;
  VideoLink?: string;
}

const MainSection = () => {
  const lang = useTypedSelector((state) => state.app.language);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [loadVideo, setLoadVideo] = useState<boolean>(false);
  const { width } = useWindowSize();

  const imgType = () => {
    switch (true) {
      case width > 1355:
        return bg.src;
      case width <= 1366 && width > 756:
        return mediumPc.src;
      case width <= 756:
        return bgIpad.src;
      default:
        return bgIpad.src;
    }
  };

  const [sectionData, setSectionData] = useState<IMainSection>({
    MainTitle: "Cellist Ivan Skanavi",
    MainSubtitle: "",
    ConnectText: "Write a message",
  } as IMainSection);

  const fetchData = useCallback(async () => {
    try {
      const response = await fetchQuery(
        `api/main-page-field?locale=${lang.toLowerCase()}&populate=*&populate=MainSection.PreviewImg`
      );
      setSectionData({
        ...response.data.attributes.MainSection,
        Preview:
          backUrl +
          response.data.attributes.MainSection?.PreviewImg?.data?.attributes
            ?.url,
      });
      setIsLoading(false);
    } catch (e) {
      console.log(e);
    }
  }, [lang]);

  useEffect(() => {
    fetchData();
  }, [lang]);

  // ---- Animations -----

  const sectionRef = useRef<HTMLElement>(null);
  const q = gsap.utils.selector(sectionRef);

  useEffect(() => {
    if (!isLoading) {
      TweenLite.fromTo(
        q(".content"),
        { y: -100, opacity: 0 },
        {
          y: 0,
          opacity: 1,
        }
      );
      setTimeout(() => {
        setLoadVideo(true);
      }, 1500);
    }
  }, [isLoading]);

  return (
    <section ref={sectionRef} className={styles.MainSection + " MainSection"}>
      <Controller>
        <Scene pin>
          <>
            <div className={styles.backgroundImg}>
              <Image
                src={imgType()}
                width={1920}
                height={1080}
                priority={true}
              />
            </div>

            <div className={styles.content + " content"}>
              <h1>{sectionData?.MainTitle}</h1>
              <span>{sectionData?.MainSubtitle}</span>
            </div>

            <div className={styles.connect + " connect"}>
              <Link legacyBehavior href="#FormSection">
                <a>
                  <span>{sectionData?.ConnectText}</span>
                </a>
              </Link>
            </div>

            {width > 756 ? (
              <VideoPlayer
                isLoading={isLoading}
                poster={sectionData.Preview}
                videoSrc={sectionData.VideoLink}
                label={sectionData.VideoText}
                classing={"MainSectionsVideo"}
                loadVideo={loadVideo}
              />
            ) : null}
            {width > 756 ? <ArrowDown /> : null}
          </>
        </Scene>
      </Controller>
    </section>
  );
};

export default MainSection;
