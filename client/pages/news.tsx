import React from "react";
import Footer from "../hoc/Footer/Footer";
import Header from "../hoc/Header/Header";
import NewsSection from "../sections/NewsSection/NewsSection";
import { fetchQuery } from "../services/ssr";

const News = (props: any) => {
  return (
    <Header>
      <NewsSection />
      <Footer
        FooterSection={{
          FormSectionRu: props.FormSectionRu,
          FormSectionEn: props.FormSectionEn,
          FormSectionDe: props.FormSectionDe,
        }}
      ></Footer>
    </Header>
  );
};

export default News;

export async function getServerSideProps(context: any) {
  try {
    const FooterSectionRu = await fetchQuery(
      "api/footer-section?populate=*&locale=ru"
    );
    const FooterSectionEn = await fetchQuery(
      "api/footer-section?populate=*&locale=en"
    );
    const FooterSectionDe = await fetchQuery(
      "api/footer-section?populate=*&locale=de"
    );

    return {
      props: {
        FooterSectionRu: FooterSectionRu.data.attributes.FooterSection,
        FooterSectionEn: FooterSectionEn.data.attributes.FooterSection,
        FooterSectionDe: FooterSectionDe.data.attributes.FooterSection,
      },
    };
  } catch (e) {
    return {
      props: {},
    };
  }
}
