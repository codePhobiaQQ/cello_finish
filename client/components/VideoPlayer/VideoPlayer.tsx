import styles from "./VideoPlayer.module.sass";
import postering from "../../public/assets/img/videoImg.jpg";
// @ts-ignore
import { Player } from "video-react";

interface IVideoPlayer {
  videoSrc?: string;
  poster?: string;
  label?: string;
}

const VideoPlayer = ({ videoSrc, poster, label }: IVideoPlayer) => {
  return (
    <div className={styles.VideoPlayerWrapper + " VideoPlayerWrapper"}>
      {!!label ? (
        <span>{label}</span>
      ) : (
        <span style={{ opacity: 0 }}>test</span>
      )}
      <Player
        poster={poster ? poster : postering.src}
        // fluid={false}
        // preload={"none"}
        // src={
        //   videoSrc
        //     ? videoSrc
        //     : "https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
        // }
      >
        <source src={videoSrc} />
      </Player>
    </div>
  );
};

export default VideoPlayer;
