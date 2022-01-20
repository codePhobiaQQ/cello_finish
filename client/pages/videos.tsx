import { useState } from "react";
import Header from "../hoc/Header";
import Menu from "../components/Menu/Menu";
import {Container} from "reactstrap";
import CustomVideo from "../components/videoplayer/CustomVideo";
// @ts-ignore
import Tilt from "react-parallax-tilt";
import useTypedSelector from "../hooks/useTypedSelector";
import languageFunction, {chooseLanguage} from "../functions/LanguageFunction";

interface IVideos {
  data: {
    TitleRu: string;
    TitleEn: string;
    TitleGe: string;
    VideoComponent: IVideo[];
  }
}

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

const Videos = ({data}: IVideos) => {
  const [authVisible, setAuthVisible] = useState(false);
  const [isMenuOpen, setMenuOpen] = useState<boolean>(false);
  const languageStart = useTypedSelector(state => state.app.language);
  const language = languageFunction(languageStart);

  console.log(data);

  const videos: IVideo[] = data.VideoComponent;

  return (
    <Header
      isMenuOpen={isMenuOpen}
      setMenuOpen={setMenuOpen}
    >
      <Menu isMenuOpen={isMenuOpen} setMenuOpen={setMenuOpen} />
      <div className={isMenuOpen ? "sectionsWrapper active" : "sectionsWrapper"}>
        <section className="videoSection">
          <Container>
            <h2>{chooseLanguage(
              language,
              data.TitleRu,
              data.TitleEn,
              data.TitleGe,
            )}</h2>
            <div className="videos">
              {videos.map((video, index) => (
                <CustomVideo
                  language={language}
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
