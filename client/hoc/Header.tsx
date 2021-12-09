import Link from "next/link";
import {Dispatch, SetStateAction} from "react";
import {Container} from "reactstrap";
import Arrow from "../components/svg/arrow";
import Language from "../components/Menu/Language/Language";

interface IHeader {
  isMenuOpen: boolean;
  setMenuOpen: Dispatch<SetStateAction<boolean>>;
  children: any;
}

const Header = ({ children, isMenuOpen, setMenuOpen }: IHeader) => {
  return (
    <>
      <div className={isMenuOpen ? "header active" : "header"}>
        <Container>
          <div className="logo">
            <Link href="/#home">
              <a>
                Logo
              </a>
            </Link>
          </div>
          <Language />
          <div className="hamburger">
            <div className="box">
              <div
                onClick={ () => setMenuOpen(!isMenuOpen) }
                className={ isMenuOpen ? "button active" : "button" }
              >
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
          </div>
        </Container>
      </div>
      {children}
    </>
  );
};

export default Header;