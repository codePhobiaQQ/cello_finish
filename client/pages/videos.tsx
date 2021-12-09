import { useState } from "react";
import Header from "../hoc/Header";
import Menu from "../components/Menu/Menu";
import {Container} from "reactstrap";
import CustomVideo from "../components/videoplayer/CustomVideo";
// @ts-ignore
import Tilt from "react-parallax-tilt";

export interface IVideo {
  src: {
    url: string;
  };
  preview: {
    url: string;
  };
  locationRu: string;
  locationEn: string;
  locationGe: string;
  TitleRu: string;
  TitleEn: string;
  TitleGe: string;
  descriptionRu?: string;
  descriptionEn?: string;
  descriptionGe?: string;
}

const Videos = (props: any) => {
  const [authVisible, setAuthVisible] = useState(false);
  const [isMenuOpen, setMenuOpen] = useState<boolean>(false);

  console.log(props.data.VideoComponent[0]);

  const videos: IVideo[] = props.data.VideoComponent;

  return (
    <Header
      isMenuOpen={isMenuOpen}
      setMenuOpen={setMenuOpen}
    >
      <Menu isMenuOpen={isMenuOpen} setMenuOpen={setMenuOpen} />
      <div className={isMenuOpen ? "sectionsWrapper active" : "sectionsWrapper"}>
        <section className="videoSection">
          <Container>
            <h2>Videos</h2>
            <div className="videos">
              {videos.map((video, index) => (
                <CustomVideo
                  index={index}
                  video={video}
                  key={"video" + index}
                />
              ))}
            </div>
          </Container>
        </section>
      </div>
    </Header>
  );
};

export default Videos;

export const getStaticProps: any = async (context: any) => {
  try {
    const data = await fetch('http://localhost:1337/video-page-fields').then((data) => {
      return data.json();
    });
    return {
      props: {
        data
      }
    }
  } catch (error) {
    console.log(error.message)
    return {data: {}};
  }
}
