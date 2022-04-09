import { useEffect } from "react";
import Header from "../hoc/Header/Header";
import MainSection from "../sections/MainSection/MainSection";
import BiographySection from "../sections/BiographySection/BiographySection";
import FormSection from "../sections/FormSection/FormSection";
import Footer from "../hoc/Footer/Footer";
import { fetchQuery } from "../services/ssr";

const MainPage = (props: any) => {
  useEffect(() => {
    console.log(props.MainSectionRu);
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
        <FormSection
          FormiSection={{
            FormSectionRu: props.FormSectionRu,
            FormSectionEn: props.FormSectionEn,
            FormSectionDe: props.FormSectionDe,
          }}
        />
      </Footer>
    </Header>
  );
};

export default MainPage;

export async function getServerSideProps(context: any) {
  try {
    const bigRequestRu = await fetchQuery(
      "api/main-page?populate=*&locale=ru&populate=MainSection.video_preview&populate=MainSection.video&populate=about_section.image_ivan&populate=about_section.bio_file&populate=FormSection"
    );
    const bigRequestEn = await fetchQuery(
      "api/main-page?populate=*&locale=en&populate=MainSection.video_preview&populate=MainSection.video&populate=about_section.image_ivan&populate=about_section.bio_file&populate=FormSection"
    );
    const bigRequestDe = await fetchQuery(
      "api/main-page?populate=*&locale=de&populate=MainSection.video_preview&populate=MainSection.video&populate=about_section.image_ivan&populate=about_section.bio_file&populate=FormSection"
    );

    console.log(bigRequestRu.data.attributes.MainSection);

    return {
      props: {
        MainSectionRu: bigRequestRu.data.attributes.MainSection,
        MainSectionEn: bigRequestEn.data.attributes.MainSection,
        MainSectionDe: bigRequestDe.data.attributes.MainSection,

        AboutSectionRu: bigRequestRu.data.attributes.about_section,
        AboutSectionEn: bigRequestEn.data.attributes.about_section,
        AboutSectionDe: bigRequestDe.data.attributes.about_section,

        FormSectionRu: bigRequestRu.data.attributes.FormSection,
        FormSectionEn: bigRequestEn.data.attributes.FormSection,
        FormSectionDe: bigRequestDe.data.attributes.FormSection,
      },
    };
  } catch (e) {
    return {
      props: {},
    };
  }
}
