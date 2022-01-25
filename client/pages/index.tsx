import {useEffect, useState} from "react";
import MainSection from "../components/sections/MainSection/MainSection";
import AboutSection from "../components/sections/AboutSection/AboutSection";
import Menu from "../components/Menu/Menu";
import Header from "../hoc/Header";
import about1 from "../public/assets/img/AboutSection/about2.jpeg"
import useTypedSelector from "../hooks/useTypedSelector";
import languageFunction, {chooseLanguage} from "../functions/LanguageFunction";
import FormSection from "../components/sections/FormSection/FormSection";
import { ImageType } from "../types/types";

interface IHomeInterface {
  data: {
    MainSection: {
      BackgroundImage: ImageType;
      SubtitleEn: string;
      SubtitleRu: string;
      SubtitleGe: string;
      TitleEn: string;
      TitleRu: string;
      TitleGe: string;
    }
    AboutSection: {
      FirstImg: ImageType;
      FirstTextEn: string;
      FirstTextRu: string;
      FirstTextGe: string;
      SecondImg: ImageType;
      SecondTextEn: string;
      SecondTextRu: string;
      SecondTextGe: string;
      SectionTitleRu: string;
      SectionTitleEn: string;
      SectionTitleGe: string;
      ThirdImg: ImageType;
      ThirdTextEn: string;
      ThirdTextRu: string;
      ThirdTextGe: string;
    }
    FormSection: {
      ButtonTextEn: string;
      ButtonTextRu: string;
      ButtonTextGe: string;
      Image: ImageType;
      TextEn: string;
      TextRu: string;
      TextGe: string;
      TitleRu: string;
      TitleEn: string;
      TitleGe: string;
      email: string;
      placeholderEn: string;
      placeholderRu: string;
      placeholderGe: string;
    }
  }
}

export default function Home(props: IHomeInterface) {
  const [isMenuOpen, setMenuOpen] = useState<boolean>(false);
  const languageStart = useTypedSelector(state => state.app.language);
  const language = languageFunction(languageStart);

  return (
    <Header
      isMenuOpen={isMenuOpen}
      setMenuOpen={setMenuOpen}
    >
      <Menu isMenuOpen={isMenuOpen} setMenuOpen={setMenuOpen} />
      <div className={isMenuOpen ? "sectionsWrapper active" : "sectionsWrapper"}>
        <MainSection MainSection={props.data.MainSection} language={language} />
        <AboutSection leftPositionText={true}
                      photo={props.data.AboutSection.FirstImg.url ? "http://localhost:1337" + props.data.AboutSection.FirstImg.url : about1.src}
                      header={chooseLanguage(
                        language,
                        props.data.AboutSection.SectionTitleRu,
                        props.data.AboutSection.SectionTitleEn,
                        props.data.AboutSection.SectionTitleGe,
                      )}
                      text={chooseLanguage(
                        language,
                        props.data.AboutSection.FirstTextRu,
                        props.data.AboutSection.FirstTextEn,
                        props.data.AboutSection.FirstTextGe,
                      )}
        />
        <AboutSection
                      photo={props.data.AboutSection.SecondImg.url ? "http://localhost:1337" + props.data.AboutSection.SecondImg.url : about1.src}
                      text={chooseLanguage(
                        language,
                        props.data.AboutSection.SecondTextRu,
                        props.data.AboutSection.SecondTextEn,
                        props.data.AboutSection.SecondTextGe,
                      )}
        />
        <AboutSection leftPositionText={true}
                      photo={props.data.AboutSection.ThirdImg.url ? "http://localhost:1337" + props.data.AboutSection.ThirdImg.url : about1.src}
                      text={chooseLanguage(
                        language,
                        props.data.AboutSection.ThirdTextRu,
                        props.data.AboutSection.ThirdTextEn,
                        props.data.AboutSection.ThirdTextGe,
                      )}
        />
        <FormSection language={language} data={props.data.FormSection} />
      </div>
    </Header>
  );
}

export const getStaticProps: any = async (context: any) => {
  try {
    const data = await fetch('http://localhost:1337/main-page-fields').then((data) => {
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
