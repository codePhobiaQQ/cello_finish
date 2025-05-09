import styles from "./VideoPlayer.module.sass";
import YouTube from "react-youtube";

interface IVideoPlayer {
  videoSrc?: string;
  poster?: string;
  label?: string;
  classing?: string;
  isLoading?: boolean;
  loadVideo?: boolean;
}

function extractVideoId(url: string): string | null {
  const match = url.match(/(?:v=|\/)([0-9A-Za-z_-]{11})/);
  return match ? match[1] : null;
}

const VideoPlayer = ({
  videoSrc,
  poster,
  label,
  classing,
  isLoading = false,
  loadVideo = true,
}: IVideoPlayer) => {
  if (isLoading || !loadVideo) {
    return (
      <div className={styles.VideoPlayerWrapper + " VideoPlayerWrapper"}>
        Loading...
      </div>
    );
  }

  const videoId = videoSrc ? extractVideoId(videoSrc) : null;

  return (
    <div className={styles.VideoPlayerWrapper + " VideoPlayerWrapper"}>
      {Boolean(label) && <span>{label}</span>}

      {videoId ? (
          <YouTube className={classing} videoId={videoId} />
      ) : (
          <span>Invalid video URL</span>
      )}
    </div>
  );
};

export default VideoPlayer;
