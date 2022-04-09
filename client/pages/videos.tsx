import React from "react";
import Footer from "../hoc/Footer/Footer";
import Header from "../hoc/Header/Header";
import VideoSection from "../sections/VideoSection/VideoSection";
import { fetchQuery } from "../services/ssr";

const Videos = (props: any) => {
  return (
    <Header>
      <VideoSection
        VideoSection={{
          VideosRu: props.VideosRu,
          VideosEn: props.VideosEn,
          VideosDe: props.VideosDe,
        }}
      />
      <Footer></Footer>
    </Header>
  );
};

export default Videos;

export async function getServerSideProps(context: any) {
  try {
    const VideosRu = await fetchQuery(
      "api/videos?locale=ru&populate=video&populate=image"
    );
    const VideosEn = await fetchQuery(
      "api/videos?locale=en&populate=video&populate=image"
    );
    const VideosDe = await fetchQuery(
      "api/videos?locale=de&populate=video&populate=image"
    );

    return {
      props: {
        VideosRu: VideosRu.data,
        VideosEn: VideosEn.data,
        VideosDe: VideosDe.data,
      },
    };
  } catch (e) {
    return {
      props: {},
    };
  }
}
