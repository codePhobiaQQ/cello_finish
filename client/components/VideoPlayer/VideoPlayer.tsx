import styles from "./VideoPlayer.module.sass";
import poster from "../../public/assets/img/videoImg.jpg";
// @ts-ignore
import { Player } from "video-react";

const VideoPlayer = () => {
  return (
    <div className={styles.VideoPlayerWrapper}>
      <span>S. Rachmaninov - Sonata for cello and piano...</span>
      <Player
        // playsInline
        poster={poster.src}
        width={200}
        height={120}
        src={"https://media.w3.org/2010/05/sintel/trailer_hd.mp4"}
      />
    </div>
  );
};

export default VideoPlayer;
