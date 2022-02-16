import styles from "./VideoSection.module.sass";
import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import slide1 from "../../public/assets/compositionSlides/composition.jpg";
import VideoPlayer from "../../components/VideoPlayer/VideoPlayer";
import MoreArrow from "../../components/MoreArrow/MoreArrow";

interface ISlide {
  image: string;
  video: string;
  author: string;
  executors: string[];
  composition: string;
  duration: string;
}

const VideoSection = () => {
  const slides: ISlide[] = [
    {
      image: slide1.src,
      video: "https://media.w3.org/2010/05/sintel/trailer_hd.mp4",
      author: "Pyotr Ilyich Tchaikovsky",
      executors: ["Ivan Skanavi - cello", "Nikolai Diomkin - piano"],
      composition: "Pezzo capriccioso",
      duration: "06:50",
    },
    {
      image: slide1.src,
      video: "https://media.w3.org/2010/05/sintel/trailer_hd.mp4",
      author: "Pyotr Ilyich Tchaikovsky",
      executors: ["Ivan Skanavi - cello", "Nikolai Diomkin - piano"],
      composition: "Pezzo capriccioso",
      duration: "06:50",
    },
    {
      image: slide1.src,
      video: "https://media.w3.org/2010/05/sintel/trailer_hd.mp4",
      author: "Pyotr Ilyich Tchaikovsky",
      executors: ["Ivan Skanavi - cello", "Nikolai Diomkin - piano"],
      composition: "Pezzo capriccioso",
      duration: "06:50",
    },
    {
      image: slide1.src,
      video: "https://media.w3.org/2010/05/sintel/trailer_hd.mp4",
      author: "Pyotr Ilyich Tchaikovsky",
      executors: ["Ivan Skanavi - cello", "Nikolai Diomkin - piano"],
      composition: "Pezzo capriccioso",
      duration: "06:50",
    },
    {
      image: slide1.src,
      video: "https://media.w3.org/2010/05/sintel/trailer_hd.mp4",
      author: "Pyotr Ilyich Tchaikovsky",
      executors: ["Ivan Skanavi - cello", "Nikolai Diomkin - piano"],
      composition: "Pezzo capriccioso",
      duration: "06:50",
    },
  ];

  const [paging, setCurrentPage] = useState<number>(1);

  const [showSlides, setShowSlides] = useState<ISlide[]>(
    slides.slice(0, paging * 3)
  );
  // let mayShowOnPage = 3;

  const clickMoreAction = () => {
    setCurrentPage(paging + 1);
    setShowSlides(slides.slice(0, paging * 3));
  };

  return (
    <div className={styles.videoSection}>
      <div className="container">
        {showSlides.map((slide, index) => (
          <div key={uuidv4() + index} className={styles.videoElem}>
            <VideoPlayer
              styling={{
                position: "relative",
                right: "inherit",
                bottom: "inherit",
              }}
              poster={slide.image}
              videoSrc={slide.video}
            />
            <div className={styles.contentWrapper}>
              <div className={styles.leftSide}>
                <span>Pyotr Ilyich Tchaikovsky</span>
                <span>Pezzo capriccioso</span>
              </div>
              <div className={styles.rightSide}>
                <div>
                  {slide.executors.map((executor, indexing) => (
                    <span key={uuidv4() + indexing}>{executor}</span>
                  ))}
                </div>
                <span>06:50</span>
              </div>
            </div>
          </div>
        ))}
        <div onClick={clickMoreAction} className="moreWrap">
          <MoreArrow />
          <span>Показать еще</span>
        </div>
      </div>
    </div>
  );
};

export default VideoSection;