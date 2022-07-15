import styles from "./VideoPlayer.module.sass";
import YouTube from "react-youtube";

interface IVideoPlayer {
  videoSrc?: string;
  poster?: string;
  label?: string;
  classing?: string;
}

const VideoPlayer = ({ videoSrc, poster, label, classing }: IVideoPlayer) => {
  return (
    <div className={styles.VideoPlayerWrapper + " VideoPlayerWrapper"}>
      {!!label && <span>{label}</span>}
      <YouTube className={classing} videoId={videoSrc} />
    </div>
  );
};

export default VideoPlayer;
