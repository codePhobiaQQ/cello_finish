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
      <div className={styles.header}>
        <div className={styles.logo} onClick={() => setMenuOpen(false)}>
          <Link href="/">
            <a>
              <Image
                src={logo.src}
                width={34}
                height={80}
                objectFit={"contain"}
              />
              <span>
                Ivan <br />
                Skanavi
              </span>
            </a>
          </Link>
        </div>
        <div className={styles.rightElements}>
          <Languages />
          <Hamburger isMenuOpen={isMenuOpen} setMenuOpen={setMenuOpen} />
        </div>
      </div>
      {children}
      {isMenuOpen && <Menu isMenuOpen={isMenuOpen} setMenuOpen={setMenuOpen} />}
      <Sotials />
    </>
  );
};

export default Header;
