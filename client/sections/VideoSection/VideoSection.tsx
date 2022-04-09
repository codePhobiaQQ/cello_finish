import styles from "./VideoSection.module.sass";
import React, { useState } from "react";
import VideoPlayer from "../../components/VideoPlayer/VideoPlayer";
import MoreArrow from "../../components/MoreArrow/MoreArrow";
import useTypedSelector from "../../hooks/useTypedSelector";
import { backUrl, moreButton } from "../../vars";

interface VideoSection {
  VideoSection: any;
}

const VideoSection = ({ VideoSection }: VideoSection) => {
  const lang = useTypedSelector((state) => state.app.language);

  const [pagination, setCurrentPagination] = useState<number>(3);
  const [isMoreVisible, setMobVisible] = useState<boolean>(true);

  const slidesAmount = VideoSection.VideosEn.length;

  const clickMoreAction = () => {
    if (pagination + 3 > slidesAmount) {
      setCurrentPagination(slidesAmount);
      setMobVisible(false);
    } else {
      setCurrentPagination(pagination + 3);
    }
  };

  return (
    <div className={styles.videoSection}>
      <div className="container">
        {VideoSection[`Videos${lang}`]
          .slice(0, pagination)
          .map((slide: any, index: number) => (
            <div key={"videoelement" + index} className={styles.videoElem}>
              <VideoPlayer
                poster={backUrl + slide.attributes.image.data.attributes.url}
                videoSrc={backUrl + slide.attributes.video.data.attributes.url}
              />
              <div className={styles.contentWrapper}>
                <div className={styles.leftSide}>
                  <span>{slide.attributes.author}</span>
                  <span>{slide.attributes.composition}</span>
                </div>
                <div className={styles.rightSide}>
                  <div>
                    {slide.attributes.executors
                      .split("\\n")
                      .map((executor: string, indexing: number) => (
                        <span key={"videoelement" + indexing}>{executor}</span>
                      ))}
                  </div>
                  <span>{slide.attributes.duration}</span>
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
