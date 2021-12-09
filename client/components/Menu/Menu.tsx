import Link from "next/link";
import {Dispatch, SetStateAction} from "react";
import { motion } from "framer-motion";
import LeftRightVariants from "../../variants/LeftRightVariants";

interface IMenu {
  isMenuOpen: boolean;
  setMenuOpen: Dispatch<SetStateAction<boolean>>;
}

const Menu = ({ isMenuOpen, setMenuOpen }: IMenu) => {
  const links = [
    {
      title: "Home",
      link: '/#home'
    },
    {
      title: "Biography",
      subtitle: "the alisa",
      link: '/#biography'
    },
    {
      title: "Gallery",
      subtitle: "hey rofl",
      link: '/gallery'
    },
    {
      title: "Videos",
      subtitle: "test shalun",
      link: '/videos'
    },
    {
      title: "Concerts",
      subtitle: "ham privet",
      link: '/concerts'
    },
    {
      title: "News",
      subtitle: "ham privet",
      link: '/news'
    },
    {
      title: "Contacts",
      link: '/contacts'
    },
  ]

  const variants = new LeftRightVariants(0.25, 0.25);
  const wrapperVariant = variants.wrapperVariant;
  const textVariantRight = variants.textVariantRight;

  return (
    <div className={isMenuOpen ? "Menu active" : "Menu"}>
      <motion.ul
        className="menu menu--adsila"
        variants={wrapperVariant}
        animate={isMenuOpen ? "visible" : ""}
        initial="hidden"
      >
        {links.map((link, index) => (
          <motion.li
            onClick={() => setMenuOpen(false)}
            variants={textVariantRight}
            key={"menu_item" + index}
          >
            <Link href={link.link}>
              <a className="menu__item">
                <span className="menu__item-name">{link.title}</span>
                { link.subtitle
                  ? <span className="menu__item-label">{link.subtitle}</span>
                  : null
                }
              </a>
            </Link>
          </motion.li>
          )
        )}
      </motion.ul>
    </div>
  );
};

export default Menu;