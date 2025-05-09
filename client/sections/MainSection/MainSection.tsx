import styles from "./MainSection.module.sass";

import bg from "../../public/assets/img/mainSection/bigMain.jpg";
import mediumPc from "../../public/assets/img/mainSection/mediumBg.jpg";
import bgIpad from "../../public/assets/img/mainSection/bgIpad.jpg";
// import bgMob from "../../public/assets/img/mainSection/bgMob.jpg";
import ArrowDown from "../../components/ArrowDown/ArrowDown";
import VideoPlayer from "../../components/VideoPlayer/VideoPlayer";
import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import useTypedSelector from "../../hooks/useTypedSelector";
import fetchQuery from "../../services/ssr";
import useWindowSize from "../../hooks/useWindowSize";

// ---- Animation ---
import { useRef } from "react";
import { gsap, TweenLite } from "gsap";
import { Controller, Scene } from "react-scrollmagic";

interface IMainSection {
  title: string;
  video_text: string;
  video_preview?: string;

  connect_text: string;

  video_link?: string;
  bg_image?: string
  bg_image_medium?: string
  bg_image_ipad?: string
  bg_image_mob?: string
}

const MainSection = () => {
  const lang = useTypedSelector((state) => state.app.language);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [loadVideo, setLoadVideo] = useState<boolean>(false);
  const { width } = useWindowSize();

  const [sectionData, setSectionData] = useState<IMainSection>({
    title: "Cellist Ivan Skanavi",
    connect_text: "Write a message",
  } as IMainSection);


  const imgType = () => {
    switch (true) {
      case width > 1355:
        return sectionData?.bg_image ?? bg.src;
      case width <= 1366 && width > 756:
        return sectionData?.bg_image_medium ?? mediumPc.src;
      case width <= 756:
        return sectionData?.bg_image_ipad ?? bgIpad.src;
      default:
        return sectionData?.bg_image_mob ?? bgIpad.src;
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetchQuery(
            `main-screen`, lang
        );
        const data = response?.[0]

        setSectionData({
          ...data?.acf
        });

        setIsLoading(false);
      } catch (e) {
        console.log(e);
      }
    }

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
                alt="main-screen-image"
                src={imgType()}
                width={1920}
                height={1080}
                priority={true}
              />
            </div>

            <div className={styles.content + " content"}>
              <h1>{sectionData?.title}</h1>
              <span>
                {/*{sectionData?.MainSubtitle}*/}
              </span>
            </div>

            <div className={styles.connect + " connect"}>
              <Link legacyBehavior href="#FormSection">
                <a>
                  <span>{sectionData?.connect_text}</span>
                </a>
              </Link>
            </div>

            {width > 756 ? (
              <VideoPlayer
                isLoading={isLoading}
                poster={sectionData.video_preview}
                videoSrc={sectionData.video_link}
                label={sectionData.video_text}
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
