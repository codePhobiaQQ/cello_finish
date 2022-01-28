import styles from "./VideoPlayer.module.sass";
// @ts-ignore
import { Player } from "video-react";

const VideoPlayer = () => {
  return (
    <div className={styles.VideoPlayerWrapper}>
      <Player
        playsInline
        // poster={}
        // width={200}
        // height={120}
        src={"https://www.youtube.com/watch?v=W4ihwcIf3uU"}
      />
    </div>
  );
};

export default VideoPlayer;
