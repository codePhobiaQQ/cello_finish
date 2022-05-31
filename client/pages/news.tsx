import React from "react";
import Footer from "../hoc/Footer/Footer";
import Header from "../hoc/Header/Header";
import NewsSection from "../sections/NewsSection/NewsSection";

const News = (props: any) => {
  return (
    <Header>
      <NewsSection />
      <Footer></Footer>
    </Header>
  );
};

export default News;
