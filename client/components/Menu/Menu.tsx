import Link from "next/link";
import {Dispatch, SetStateAction, useState} from "react";
import { motion } from "framer-motion";
import useTypedSelector from "../../hooks/useTypedSelector";
import IVariantClass from "../../variants/VariantClass";

interface IMenu {
  isMenuOpen: boolean;
  setMenuOpen: Dispatch<SetStateAction<boolean>>;
}

const Menu = ({ isMenuOpen, setMenuOpen }: IMenu) => {
  const [menuItems, setMenuItems] = useState<any>(null);
  const language = useTypedSelector(state => state.app.language);

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

  const wrapperVariant: IVariantClass = { visible: { transition: { staggerChildren: .15 }}};
  const menuRightVariant: IVariantClass = {
      hidden: { opacity: 0, x: 25 },
      visible: { opacity: 1, x: 0, transition: { duration: .2 }}
  };

  // @ts-ignore
  return (
    <div className={isMenuOpen ? "Menu active" : "Menu"}>
      <motion.ul
        className="menu menu--adsila"
        variants={wrapperVariant}
        animate={isMenuOpen ? "visible" : "hidden"}
      >
        {links.map((link, index) => (
          <motion.li
            onClick={() => setMenuOpen(false)}
            variants={menuRightVariant}
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