import styles from "./Header.module.sass";
import Languages from "../../components/Languages/Languages";
import Hamburger from "../../components/Hamburger/Hamburger";
import Menu from "../../components/Menu/Menu";
import Head from "next/head";
import { useState } from "react";
import Socials from "../../components/Sotials/Socials";
import Link from "next/link";
import {Logo} from "../../components/UI/Logo";

const Header = () => {
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

      <Menu isMenuOpen={isMenuOpen} setMenuOpen={setMenuOpen} />
      <Socials />
    </>
  );
};

export default Header;
