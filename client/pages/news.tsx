import React from "react";
import Footer from "../hoc/Footer/Footer";
import Header from "../hoc/Header/Header";
import NewsSection from "../sections/NewsSection/NewsSection";
import { fetchQuery } from "../services/ssr";

const News = (props: any) => {
  return (
    <Header>
      <NewsSection
        NewsSection={{
          NewsRu: props.NewsRu,
          NewsEn: props.NewsEn,
          NewsDe: props.NewsDe,
        }}
      />
      <Footer></Footer>
    </Header>
  );
};

export default News;

export async function getServerSideProps(context: any) {
  try {
    const NewsRu = await fetchQuery("api/news?locale=ru&populate=littleImg");
    const NewsEn = await fetchQuery("api/news?locale=en&populate=littleImg");
    const NewsDe = await fetchQuery("api/news?locale=de&populate=littleImg");

    return {
      props: {
        NewsRu: NewsRu.data,
        NewsEn: NewsEn.data,
        NewsDe: NewsDe.data,
      },
    };
  } catch (e) {
    return {
      props: {},
    };
  }
}
