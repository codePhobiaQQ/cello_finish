import styles from "./MainSection.module.sass";

import bg from "../../public/assets/img/mainSection/mainBg.jpg";
import mediumPc from "../../public/assets/img/mainSection/bgPc.jpg";
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
// @ts-ignore
import FontFaceObserver from "fontfaceobserver";
import { useRef } from "react";

interface IMainSection {
  MainTitle: string;
  MainSubtitle: string;
  VideoText: string;
  // Video: string;
  Preview?: string;
  ConnectText: string;
  VideoLink?: string;
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
    } catch (e) {
      console.log(e);
    }
  }, [lang]);

  useEffect(() => {
    fetchData();
  }, [lang]);

  // ---- Animations -----

  const sectionRef = useRef<HTMLElement>(null);

  return (
    <section ref={sectionRef} className={styles.MainSection + " MainSection"}>
      <Image src={bgImage} layout={"fill"} priority={true} />

      <div className={styles.content + " content"}>
        <h1>{sectionData?.MainTitle}</h1>
        <span>{sectionData?.MainSubtitle}</span>
      </div>

      <div className={styles.connect + " connect"}>
        <Link href="#FormSection">
          <a>
            <span>{sectionData?.ConnectText}</span>
          </a>
        </Link>
      </div>

      {width > 756 ? (
        <VideoPlayer
          poster={sectionData.Preview}
          videoSrc={sectionData.VideoLink}
          label={sectionData.VideoText}
          classing={"MainSectionsVideo"}
        />
      ) : null}
      {width > 756 ? <ArrowDown /> : null}
    </section>
  );
};

export default MainSection;
