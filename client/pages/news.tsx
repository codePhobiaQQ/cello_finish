import React from "react";
import Footer from "../hoc/Footer/Footer";
import Header from "../hoc/Header/Header";
import FormSection from "../sections/FormSection/FormSection";
import NewsSection from "../sections/NewsSection/NewsSection";

const News = () => {
    return (
        <>
            <Header/>
            <NewsSection/>
            <FormSection/>
            <Footer/>
        </>
    );
};

export default News;
