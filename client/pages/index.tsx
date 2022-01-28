import Header from "../hoc/Header/Header";
import MainSection from "../sections/MainSection/MainSection";
import BiographySection from "../sections/BiographySection/BiographySection";
import FormSection from "../sections/FormSection/FormSection";

const MainPage = () => {
  return (
    <Header>
      <MainSection />
      <BiographySection />
      <FormSection />
    </Header>
  );
};

export default MainPage;
