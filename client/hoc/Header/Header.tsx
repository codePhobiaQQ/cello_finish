import styles from "./Header.module.sass";
import Languages from "../../components/Languages/Languages";
import Hamburger from "../../components/Hamburger/Hamburger";
import logo from "../../public/assets/svg/Logo.svg";
import Menu from "../../components/Menu/Menu";
import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import Sotials from "../../components/Sotials/Sotials";
import Link from "next/link";
import Logo from "../../components/UI/Logo";

interface IHeader {
  children: React.ReactNode;
}

const Header = ({ children }: IHeader) => {
  const [isMenuOpen, setMenuOpen] = useState<boolean>(false);

  return (
    <>
      <Head>
        <title>Ivan Skanavi</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div
        className={`${styles.header} ${isMenuOpen ? styles.transparent : ""}`}
      >
        <div className={styles.logo} onClick={() => setMenuOpen(false)}>
          <Link legacyBehavior href="/">
            <a>
              <Logo />
            </a>
          </Link>
        </div>
        <div className={styles.rightElements}>
          <Languages />
          <Hamburger isMenuOpen={isMenuOpen} setMenuOpen={setMenuOpen} />
        </div>
      </div>
      {children}
      <Menu isMenuOpen={isMenuOpen} setMenuOpen={setMenuOpen} />
      <Sotials />
    </>
  );
};

export default Header;
