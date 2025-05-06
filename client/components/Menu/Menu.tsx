import styles from "./Menu.module.sass";
import Image from "next/image";
import menuBg from "../../public/assets/img/Menu/menuBg1.jpg";
import menuBgIpad from "../../public/assets/img/Menu/ipadMenuBg.jpg";
import menuBgMob from "../../public/assets/img/Menu/menuBgMob.jpg";
import menuBgPc from "../../public/assets/img/Menu/menuBgPC.jpg";
import Link from "next/link";
import SotialIconFooter from "../SotialIconFooter/SotialIconFooter";
import { v4 as uuidv4 } from "uuid";
import { footerMenu, sotials } from "../../hoc/Footer/Footer";
import useWindowWidth from "react-hook-use-window-width";
import useTypedSelector from "../../hooks/useTypedSelector";
import {useMemo} from "react";
// import bg from "../../public/assets/img/mainSection/bigMain.jpg";
// import mediumPc from "../../public/assets/img/mainSection/mediumBg.jpg";
// import bgIpad from "../../public/assets/img/mainSection/bgIpad.jpg";

interface IMenu {
  isMenuOpen: boolean;
  setMenuOpen: any;
}

const Menu = ({ isMenuOpen, setMenuOpen }: IMenu) => {
  const lang = useTypedSelector((state) => state.app.language);
  const width = useWindowWidth();

  const imgType = useMemo(() => {
    if (typeof window === 'undefined' || !width) {
      return menuBg.src;
    }

    if (width > 1355) {
      return menuBg.src;
    } else if (width <= 1355 && width > 1200) {
      return menuBgPc.src;
    } else if (width <= 1200 && width > 576) {
      return menuBgIpad.src;
    } else if (width <= 576) {
      return menuBgMob.src;
    } else {
      return menuBg.src;
    }
  }, [width])

  const clickMenuHandler = () => {
    setMenuOpen(false);
  };

  return (
    <div
      className={`${styles.Menu} ${lang} Menu ${isMenuOpen ? "active" : ""}`}
    >
      <div className={styles.bgImage}>
        <Image src={imgType ?? menuBgMob.src} alt="menuBg" layout={"fill"} />
      </div>

      <ul className={styles.menuItems}>
        {footerMenu.map((menuItem: any, index: number) => (
          <li
            onClick={clickMenuHandler}
            key={"menuItems " + index}
            className={`${styles.menuItem} ${
              lang == "ru" ? styles.RuItem : ""
            }`}
          >
            <Link legacyBehavior href={menuItem.link}>
              <a>{menuItem[`title_${lang}`]}</a>
            </Link>
          </li>
        ))}
      </ul>
      <div className="container">
        <div className={styles.socials}>
          {sotials.map((sotial, index) => (
            <SotialIconFooter
              link={sotial.link}
              key={uuidv4() + index}
              icon={sotial.icon}
              active={sotial.active}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Menu;
