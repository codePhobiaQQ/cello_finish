import styles from "./Header.module.sass";
import Languages from "../../components/Languages/Languages";
import Hamburger from "../../components/Hamburger/Hamburger";
import logo from "../../public/assets/svg/Logo.svg";
import Sotials from "../../components/Sotials/Sotials";

interface IHeader {
  children: React.ReactNode;
}

const Header = ({ children }: IHeader) => {
  return (
    <>
      <div className={styles.header}>
        <div className={styles.logo}>
          <img src={logo.src} alt="Logo" />
          <span>
            Ivan <br />
            Skanavi
          </span>
        </div>
        <div className={styles.rightElements}>
          <Languages />
          <Hamburger />
        </div>
      </div>
      {children}
      {/* <Sotials />*/}
    </>
  );
};

export default Header;
