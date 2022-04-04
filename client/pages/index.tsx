import { useEffect } from "react";
import Header from "../hoc/Header/Header";
import MainSection from "../sections/MainSection/MainSection";
import BiographySection from "../sections/BiographySection/BiographySection";
import FormSection from "../sections/FormSection/FormSection";
import Footer from "../hoc/Footer/Footer";
import { fetchQuery } from "../services/ssr";

const MainPage = (props: any) => {
  console.log(props.AboutSectionRu);

  useEffect(() => {
    history.pushState("", document.title, window.location.pathname);
  }, []);

  return (
    <Header>
      <Footer>
        <MainSection
          MainSection={{
            MainSectionRu: props.MainSectionRu,
            MainSectionEn: props.MainSectionEn,
            MainSectionDe: props.MainSectionDe,
          }}
        />
        <BiographySection
          AboutSection={{
            AboutSectionRu: props.AboutSectionRu,
            AboutSectionEn: props.AboutSectionEn,
            AboutSectionDe: props.AboutSectionDe,
          }}
        />
        <FormSection />
      </Footer>
    </Header>
  );
};

export default MainPage;

export async function getServerSideProps(context: any) {
  try {
    const MainSectionRu = await fetchQuery(
      "api/main-page?populate=*&locale=ru&populate=MainSection.video_preview&populate=MainSection.video"
    );
    const MainSectionEn = await fetchQuery(
      "api/main-page?populate=*&locale=en&populate=MainSection.video_preview&populate=MainSection.video"
    );
    const MainSectionDe = await fetchQuery(
      "api/main-page?populate=*&locale=de&populate=MainSection.video_preview&populate=MainSection.video"
    );

    const AboutSectionRu = await fetchQuery(
      "api/main-page?populate=*&locale=ru&populate=about_section.image_ivan&populate=about_section.bio_file"
    );
    const AboutSectionEn = await fetchQuery(
      "api/main-page?populate=*&locale=en&populate=about_section.image_ivan&populate=about_section.bio_file"
    );
    const AboutSectionDe = await fetchQuery(
      "api/main-page?populate=*&locale=de&populate=about_section.image_ivan&populate=about_section.bio_file"
    );

    return {
      props: {
        MainSectionRu: MainSectionRu.data.attributes.MainSection,
        MainSectionEn: MainSectionEn.data.attributes.MainSection,
        MainSectionDe: MainSectionDe.data.attributes.MainSection,

        AboutSectionRu: AboutSectionRu.data.attributes.about_section,
        AboutSectionEn: AboutSectionEn.data.attributes.about_section,
        AboutSectionDe: AboutSectionDe.data.attributes.about_section,
      },
    };
  } catch (e) {
    return {
      props: {},
    };
  }
}
