import { IVideo } from "../../pages/videos";
// @ts-ignore
import { Player } from "video-react";
import {useInView} from "react-intersection-observer";
import LeftRightVariants from "../../variants/LeftRightVariants";
import { motion } from "framer-motion";
import {useEffect} from "react";

interface ICustomVideo {
  index: number;
  video: IVideo;
}

const CustomVideo = ({ index, video }: ICustomVideo) => {
  useEffect(() => {
    // window.innerWidth > 576 ? threshold = 0.7 : threshold = 0.5
  }, [])

  const { ref, inView, entry } = useInView({
    threshold: 0.7,
    triggerOnce: true,
  });
  const variants = new LeftRightVariants(0.7, 0.7);
  const fadeInBottom = variants.fadeInBottom;

  return (
    <div
      key={"video" + index}
      className="video gradient-border boxVideo"
    >
      <motion.div
        ref={ref}
        className="videoWrapper"
        variants={fadeInBottom}
        initial="hidden"
        animate={inView ? "visible" : ""}
      >
        <h3>{video.TitleRu}</h3>
        <Player
          playsInline
          poster={"http://localhost:1337" + video.preview.url}
          src={"http://localhost:1337" + video.src.url}
        />
        <div className="location">
          <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zM7 9c0-2.76 2.24-5 5-5s5 2.24 5 5c0 2.88-2.88 7.19-5 9.88C9.92 16.21 7 11.85 7 9z"/><circle cx="12" cy="9" r="2.5"/></svg>
          <span>{video.locationRu}</span>
        </div>
        <p>{video.descriptionRu}</p>
      </motion.div>
    </div>
  );
};

export default CustomVideo;