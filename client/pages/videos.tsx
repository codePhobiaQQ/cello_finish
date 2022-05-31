import React from "react";
import Footer from "../hoc/Footer/Footer";
import Header from "../hoc/Header/Header";
import VideoSection from "../sections/VideoSection/VideoSection";

const Videos = (props: any) => {
  return (
    <Header>
      <VideoSection />
      <Footer></Footer>
    </Header>
  );
};

export default Videos;
