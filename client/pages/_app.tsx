import "bootstrap/dist/css/bootstrap-grid.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/main.sass";
import "../styles/hamburger.sass";
import "../styles/Menu.sass";
import "../styles/SliderNews.css";
import "../styles/FormSection.sass";
import "../styles/Concert.sass";
import "video-react/dist/video-react.css";

import type { AppProps } from "next/app";
import React, { FC, useEffect, useState } from "react";
import withRedux from "next-redux-wrapper";
import { makeStore } from "../redux/store";
import { ParallaxProvider } from "react-scroll-parallax";

const MyApp: FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <ParallaxProvider>
      <Component {...pageProps} />
    </ParallaxProvider>
  );
};

export default withRedux(makeStore)(MyApp);
