import styles from "./MainSection.module.sass";

import bg from "../../public/assets/img/mainSection/bgMain1.jpg";
import mediumPc from "../../public/assets/img/mainSection/mediumPc.jpg";
import bgIpad from "../../public/assets/img/mainSection/mainBgIpad.jpg";
import bgMob from "../../public/assets/img/mainSection/mainBgMob.jpg";

import ArrowDown from "../../components/ArrowDown/ArrowDown";
import VideoPlayer from "../../components/VideoPlayer/VideoPlayer";
import { useEffect, useState } from "react";
import useWindowWidth from "react-hook-use-window-width";

const MainSection = () => {
  const [bgImage, setBgImage] = useState<string>(bg.src);

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

  return (
    <section className={styles.MainSection} style={{ backgroundImage: bg.src }}>
      <img className={styles.backgroundImg} src={bgImage} alt="bg" />
      <div className={styles.content}>
        <h1>Cellist Ivan Skanavi</h1>
        <span>Concerts / Performances</span>
      </div>
      <div className={styles.connect}>Связаться с менеджером</div>
      {width > 756 ? <VideoPlayer /> : null}
      {width > 756 ? <ArrowDown /> : null}
    </section>
  );
};

export default MainSection;
