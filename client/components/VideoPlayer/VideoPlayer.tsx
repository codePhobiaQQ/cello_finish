import styles from "./VideoPlayer.module.sass";
import YouTube from "react-youtube";

interface IVideoPlayer {
  videoSrc?: string;
  poster?: string;
  label?: string;
  classing?: string;
  isLoading?: boolean;
}

const VideoPlayer = ({
  videoSrc,
  poster,
  label,
  classing,
  isLoading = false,
}: IVideoPlayer) => {
  if (isLoading) {
    return (
      <div className={styles.VideoPlayerWrapper + " VideoPlayerWrapper"}>
        Loading...
      </div>
    );
  }

  return (
    <div className={styles.VideoPlayerWrapper + " VideoPlayerWrapper"}>
      {!!label && <span>{label}</span>}
      <YouTube className={classing} videoId={videoSrc} />
    </div>
  );
};

export default VideoPlayer;
