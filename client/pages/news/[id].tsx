import {useState} from "react";
import Header from "../../hoc/Header";
import Menu from "../../components/Menu/Menu";

const NewsPage = () => {
  const [authVisible, setAuthVisible] = useState(false);
  const [isMenuOpen, setMenuOpen] = useState<boolean>(false);

  return (
    <Header
      isMenuOpen={isMenuOpen}
      setMenuOpen={setMenuOpen}
    >
      <Menu isMenuOpen={isMenuOpen} setMenuOpen={setMenuOpen} />
      <div className={isMenuOpen ? "sectionsWrapper active" : "sectionsWrapper"}>
        <section>
          <div className="container">
            <h2>News</h2>
          </div>
        </section>
      </div>
    </Header>
  );
};

export default NewsPage;