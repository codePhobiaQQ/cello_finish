import React from "react";
import Footer from "../hoc/Footer/Footer";
import Header from "../hoc/Header/Header";
import ConcertsSection from "../sections/ConcertsSection/ConcertsSection";
import { fetchQuery } from "../services/ssr";

const Concerts = (props: any) => {
  return (
    <Header>
      <ConcertsSection
        ConcertSection={{
          ConcertsRu: props.ConcertsRu,
          ConcertsEn: props.ConcertsEn,
          ConcertsDe: props.ConcertsDe,
        }}
      />
      <Footer></Footer>
    </Header>
  );
};

export default Concerts;

export async function getServerSideProps(context: any) {
  try {
    const ConcertsRu = await fetchQuery("api/concerts?locale=ru");
    const ConcertsEn = await fetchQuery("api/concerts?locale=en");
    const ConcertsDe = await fetchQuery("api/concerts?locale=de");

    return {
      props: {
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
