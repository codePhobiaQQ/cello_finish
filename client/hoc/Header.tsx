import Link from "next/link";
import {Dispatch, SetStateAction} from "react";
import {Container} from "reactstrap";
import Logo from "../public/assets/img/Logo.svg";
import Head from 'next/head'

interface IHeader {
  isMenuOpen: boolean;
  setMenuOpen: Dispatch<SetStateAction<boolean>>;
  children: any;
}

const Header = ({ children, isMenuOpen, setMenuOpen }: IHeader) => {
  return (
    <>
      <Head>
        <title>Ivan Skanavi</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className={isMenuOpen ? "header active" : "header"}>
        <Container>
          <div className="logo">
            <Link href="/#home">
              <a>
                <img style={{ height: "100px" }} src={Logo.src} alt="Logo"/>
              </a>
            </Link>
          </div>
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