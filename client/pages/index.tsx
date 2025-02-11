import { useEffect } from "react";
import Header from "../hoc/Header/Header";
import Footer from "../hoc/Footer/Footer";
// import MainSection from "../sections/MainSection/MainSection";
// import BiographySection from "../sections/BiographySection/BiographySection";
// import FormSection from "../sections/FormSection/FormSection";
import {Placeholder} from "../sections/Placeholder/Placeholder";

const MainPage = (props: any) => {
  useEffect(() => {
    history.pushState("", document.title, window.location.pathname);
  }, []);

  return (
    <Header>
      <Footer>

        <Placeholder />

        {/*<MainSection />*/}
        {/*<BiographySection />*/}
        {/*<FormSection />*/}
      </Footer>
    </Header>
  );
};

export default MainPage;
