import {useState} from "react";
import Header from "../../hoc/Header";
import Menu from "../../components/Menu/Menu";
import {Container} from "reactstrap";
import SliderNews from "../../components/sections/NewsSection/SliderNews";

const News = () => {
  const [authVisible, setAuthVisible] = useState(false);
  const [isMenuOpen, setMenuOpen] = useState<boolean>(false);

  return (
    <Header
      isMenuOpen={isMenuOpen}
      setMenuOpen={setMenuOpen}
    >
      <Menu isMenuOpen={isMenuOpen} setMenuOpen={setMenuOpen} />
      <div className={isMenuOpen ? "sectionsWrapper active" : "sectionsWrapper"}>
        <section className="newsSection">
          <Container>
            {/*<h2>News</h2>*/}
            <SliderNews />
          </Container>
        </section>
      </div>
    </Header>
  );
};

export default News;