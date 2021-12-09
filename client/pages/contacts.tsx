import {useState} from "react";
import Header from "../hoc/Header";
import Menu from "../components/Menu/Menu";

const Contacts = () => {
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
          Contacts
        </section>
      </div>
    </Header>
  );
};

export default Contacts;