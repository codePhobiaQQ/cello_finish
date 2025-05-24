import styles from "./VideoSection.module.sass";
import React, { useEffect, useState } from "react";
import VideoPlayer from "../../components/VideoPlayer/VideoPlayer";
import MoreArrow from "../../components/MoreArrow/MoreArrow";
import useTypedSelector from "../../hooks/useTypedSelector";
import { moreButton } from "../../vars";
import fetchQuery from "../../services/ssr";

interface VideoSection {
  executors: string;
  author: string;
  preview: string;
  name: string;
  time: string;
  link?: string;
}

const VideoSection = () => {
  const lang = useTypedSelector((state) => state.app.language);
  const [pagination, setCurrentPagination] = useState<number>(3);
  const [isMoreVisible, setMobVisible] = useState<boolean>(true);
  const [slidesAmount, setSlidesAmount] = useState<number>(3);

  const clickMoreAction = () => {
    if (pagination + 3 > slidesAmount) {
      setCurrentPagination(slidesAmount);
      setMobVisible(false);
    } else {
      setCurrentPagination(pagination + 3);
    }
  };

  const [sectionData, setSectionData] = useState<VideoSection[]>(
    [] as VideoSection[]
  );

  useEffect(() => {
    async function fetchData() {
      const response = await fetchQuery(
        'videos', lang
      );
      console.log('response', response)

      setSectionData(
        response?.map((video: any) => ({
          executors: video.acf.executors,
          author: video.acf.author,
          preview: video.acf.preview,
          name: video.acf.title,
          link: video.acf.link,
          time:
            video.acf?.duration?.split(":")[0] +
            ":" +
            video.acf?.duration?.split(":")[1],
        }))
      );
      setSlidesAmount(response.length);
    }
    fetchData();
  }, [lang]);

  return (
    <div className={styles.videoSection + " VideoSection"}>
      <div className="container">
        {sectionData.slice(0, pagination).map((slide: any, index: number) => (
          <div key={"videoelement" + index} className={styles.videoElem}>
            <VideoPlayer
              classing={"VideoSectionVideo"}
              videoSrc={slide.link}
              poster={slide.preview}
            />
            <div className={styles.contentWrapper}>
              <div className={styles.leftSide}>
                <span>{slide.authors}</span>
                <span>{slide.name}</span>
              </div>
              <div className={styles.rightSide}>
                <div>
                  {slide?.executors?.split("/").map(
                    (executor: string, indexing: number) => (
                      <span key={"videoelement" + indexing}>{executor}</span>
                    )
                  )}
                </div>
                <span>{slide.time}</span>
              </div>
            </div>
          </div>
        ))}
        {isMoreVisible && (
          <div onClick={clickMoreAction} className="moreWrap">
            <MoreArrow />
            <span>{moreButton[lang]}</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default VideoSection;
