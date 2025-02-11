import React from "react";
import Footer from "../hoc/Footer/Footer";
import Header from "../hoc/Header/Header";
// import ConcertsSection from "../sections/ConcertsSection/ConcertsSection";
// import FormSection from "../sections/FormSection/FormSection";
import {Placeholder} from "../sections/Placeholder/Placeholder";

const Concerts = (props: any) => {
  return (
    <Header>
      {/*<ConcertsSection />*/}
      <Footer>
        <Placeholder />
        {/*<FormSection />*/}
      </Footer>
    </Header>
  );
};

export default Concerts;
