import "./../styles/main.sass";
import "./../styles/popups/PoliticPopup.sass";
import "./../styles/popups/ThanksPopup.sass";
import "./../styles/Menu.sass";
import type { AppProps } from "next/app";
import React, {FC, useEffect} from "react";
import withRedux from "next-redux-wrapper";
import { makeStore } from "../redux/store";
import "video-react/dist/video-react.css";
import {Lang} from "../types/types";
import {useDispatch} from "react-redux";
import {setLanguage} from "../redux/slices/AppSlice";

const MyApp: FC<AppProps> = ({ Component, pageProps }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    const lang = (localStorage.getItem("lang") as Lang) ?? "en";
    dispatch(setLanguage(lang));
  }, []);

  return <Component {...pageProps} />;
};

export default withRedux(makeStore)(MyApp);
