import styles from "./VideoSection.module.sass";
import React, { useEffect, useState } from "react";
import VideoPlayer from "../../components/VideoPlayer/VideoPlayer";
import MoreArrow from "../../components/MoreArrow/MoreArrow";
import useTypedSelector from "../../hooks/useTypedSelector";
import { backUrl, moreButton } from "../../vars";
import fetchQuery from "../../services/ssr";

interface VideoSection {
  Executors: string;
  Author: string;
  PreviewImg: string;
  // Video?: string;
  Name: string;
  Time: string;
  VideoLink?: string;
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
        `api/videos?locale=${lang.toLowerCase()}&populate=*`
      );
      setSectionData(
        response.data.map((video: any) => ({
          ...video.attributes,
          Time:
            video.attributes?.Time?.split(":")[0] +
            ":" +
            video.attributes?.Time?.split(":")[1],
        }))
      );
      setSlidesAmount(response.data.length);
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
              videoSrc={slide.VideoLink}
            />
            <div className={styles.contentWrapper}>
              <div className={styles.leftSide}>
                <span>{slide.Author}</span>
                <span>{slide.Name}</span>
              </div>
              <div className={styles.rightSide}>
                <div>
                  {console.log(slide.Executors)}
                  {slide.Executors.split("/").map(
                    (executor: string, indexing: number) => (
                      <span key={"videoelement" + indexing}>{executor}</span>
                    )
                  )}
                </div>
                <span>{slide.Time}</span>
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
