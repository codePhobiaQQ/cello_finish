import { useEffect } from "react";
import Header from "../hoc/Header/Header";
import Footer from "../hoc/Footer/Footer";
import MainSection from "../sections/MainSection/MainSection";
import BiographySection from "../sections/BiographySection/BiographySection";
import FormSection from "../sections/FormSection/FormSection";

const MainPage = () => {
  useEffect(() => {
    history.pushState("", document.title, window.location.pathname);
  }, []);

  return (
    <Header>
      <Footer>
        <MainSection />
        <BiographySection />
        <FormSection />
      </Footer>
    </Header>
  );
};

export default MainPage;
