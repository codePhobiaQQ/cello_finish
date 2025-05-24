import React from "react";
import Footer from "../hoc/Footer/Footer";
import Header from "../hoc/Header/Header";
import ConcertsSection from "../sections/ConcertsSection/ConcertsSection";
import FormSection from "../sections/FormSection/FormSection";

const Concerts = () => {
    return (
        <>
            <Header/>
            <ConcertsSection/>
            <FormSection/>
            <Footer/>
        </>
    );
};

export default Concerts;
