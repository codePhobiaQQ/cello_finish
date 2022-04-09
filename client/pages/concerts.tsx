import React from "react";
import Footer from "../hoc/Footer/Footer";
import Header from "../hoc/Header/Header";
import ConcertsSection from "../sections/ConcertsSection/ConcertsSection";
import { fetchQuery } from "../services/ssr";

const Concerts = (props: any) => {
  return (
    <Header>
      <ConcertsSection />
      <Footer
        FooterSection={{
          FooterSectionRu: props.FooterSectionRu,
          FooterSectionEn: props.FooterSectionEn,
          FooterSectionDe: props.FooterSectionDe,
        }}
      ></Footer>
    </Header>
  );
};

export default Concerts;

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

    const ConcertsRu = await fetchQuery("api/concerts?locale=ru");
    const ConcertsEn = await fetchQuery("api/concerts?locale=en");
    const ConcertsDe = await fetchQuery("api/concerts?locale=de");

    return {
      props: {
        FooterSectionRu: FooterSectionRu.data.attributes.FooterSection,
        FooterSectionEn: FooterSectionEn.data.attributes.FooterSection,
        FooterSectionDe: FooterSectionDe.data.attributes.FooterSection,

        ConcertsRu: ConcertsRu.data,
        ConcertsEn: ConcertsEn.data,
        ConcertsDe: ConcertsDe.data,
      },
    };
  } catch (e) {
    return {
      props: {},
    };
  }
}
