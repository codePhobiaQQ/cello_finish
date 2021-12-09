import {useEffect, useState} from "react";
import MainSection from "../components/sections/MainSection/MainSection";
import AboutSection from "../components/sections/AboutSection/AboutSection";
import Menu from "../components/Menu/Menu";
import Header from "../hoc/Header";
import photo1 from "./../public/assets/img/AboutSection/about1.jpg"
import photo2 from "./../public/assets/img/AboutSection/about2.jpeg"
import photo3 from "./../public/assets/img/AboutSection/about3.jpeg"
import useTypedSelector from "../hooks/useTypedSelector";
import languageFunction from "../functions/LanguageFunction";
import FormSection from "../components/sections/FormSection/FormSection";

export default function Home(props: any) {
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
                      photo={"http://localhost:1337" + props.data.AboutSection.FirstImg.url}
                      header={props.data.AboutSection[`SectionTitleRu`]}
                      text={props.data.AboutSection[`FirstTextRu`]}
        />
        <AboutSection
                      photo={"http://localhost:1337" + props.data.AboutSection.SecondImg.url}
                      text={props.data.AboutSection[`SecondTextRu`]}
        />
        <AboutSection leftPositionText={true}
                      photo={"http://localhost:1337" + props.data.AboutSection.ThirdImg.url}
                      text={props.data.AboutSection[`ThirdTextRu`]}
        />
        <FormSection />
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
