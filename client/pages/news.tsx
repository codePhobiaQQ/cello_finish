import React from "react";
import Footer from "../hoc/Footer/Footer";
import Header from "../hoc/Header/Header";
// import FormSection from "../sections/FormSection/FormSection";
// import NewsSection from "../sections/NewsSection/NewsSection";
import {Placeholder} from "../sections/Placeholder/Placeholder";

const News = (props: any) => {
  return (
    <Header>
      {/*<NewsSection />*/}
      <Footer>
        <Placeholder/>
        {/*<FormSection />*/}
      </Footer>
    </Header>
  );
};

export default News;
