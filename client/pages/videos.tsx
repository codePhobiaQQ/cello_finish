import React from "react";
import Footer from "../hoc/Footer/Footer";
import Header from "../hoc/Header/Header";
import FormSection from "../sections/FormSection/FormSection";
import VideoSection from "../sections/VideoSection/VideoSection";

const Videos = () => {
  return (
    <Header>
      <VideoSection />
      <Footer>
        <FormSection />
      </Footer>
    </Header>
  );
};

export default Videos;
