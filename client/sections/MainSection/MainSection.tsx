import styles from "./MainSection.module.sass";
import bg from "../../public/assets/img/mainSection/bgMain1.jpg";
import ArrowDown from "../../components/ArrowDown/ArrowDown";
import VideoPlayer from "../../components/VideoPlayer/VideoPlayer";
import bgIpad from "../../public/assets/img/mainSection/mainBgIpad.jpg";
import { useEffect, useState } from "react";
import useWindowWidth from "react-hook-use-window-width";

const MainSection = () => {
  const [bgImage, setBgImage] = useState<string>(bg.src);

  const width = useWindowWidth();
  useEffect(() => {
    if (width >= 1200) {
      setBgImage(bg.src);
    } else if (width < 1200 && width >= 992) {
      setBgImage(bgIpad.src);
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
      <VideoPlayer />
      <ArrowDown />
    </section>
  );
};

export default MainSection;
