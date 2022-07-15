import styles from "./VideoPlayer.module.sass";
import YouTube from "react-youtube";

interface IVideoPlayer {
  videoSrc?: string;
  poster?: string;
  label?: string;
  classing?: string;
}

const VideoPlayer = ({ videoSrc, poster, label, classing }: IVideoPlayer) => {
  console.log(videoSrc?.split("/")[3]);
  return (
    <div className={styles.VideoPlayerWrapper + " VideoPlayerWrapper"}>
      {!!label ? (
        <span>{label}</span>
      ) : (
        <span style={{ opacity: 0 }}>test</span>
      )}
      <YouTube className={classing} videoId={videoSrc?.split("/")[3]} />
    </div>
  );
};

export default VideoPlayer;
