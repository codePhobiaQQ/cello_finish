import styles from "./Footer.module.sass";
import LogoFooter from "./../../public/assets/svg/LogoFooter.svg";
import SotialIconFooter, {
  ISotial,
} from "../../components/SotialIconFooter/SotialIconFooter";
import { v4 as uuidv4 } from "uuid";
import spotify from "./../../public/assets/svg/sotials/Spotify.svg";
import spotifyActive from "./../../public/assets/svg/sotials/SpotifyActive.svg";
import telegram from "./../../public/assets/svg/sotials/Telegram.svg";
import insp from "./../../public/assets/svg/insp.svg";
import Link from "next/link";
import BtnSubscribe from "../../components/BtnSubscribe/BtnSubscribe";
import { useRouter } from "next/router";
import VideoPlayer from "../../components/VideoPlayer/VideoPlayer";

interface IFooter {
  children?: React.ReactNode;
}

interface IMenu {
  title: string;
  link: string;
}

const Footer = ({ children }: IFooter) => {
  const router = useRouter();
  const currentLink = router.asPath;

  console.log(currentLink);

  const footerMenu: IMenu[] = [
    {
      title: "Biography",
      link: "/biography",
    },
    {
      title: "Gallery",
      link: "/gallery",
    },
    {
      title: "Videos",
      link: "/videos",
    },
    {
      title: "Concerts",
      link: "/concerts",
    },
    {
      title: "News",
      link: "/news",
    },
    {
      title: "Contacts",
      link: "/contacts",
    },
  ];

  const sotials: ISotial[] = [
    {
      icon: spotify.src,
      active: spotifyActive.src,
    },
    {
      icon: spotify.src,
      active: spotifyActive.src,
    },
    {
      icon: spotify.src,
      active: spotifyActive.src,
    },
    {
      icon: spotify.src,
      active: spotifyActive.src,
    },
    {
      icon: spotify.src,
      active: spotifyActive.src,
    },
  ];

  return (
    <>
      {children}
      <div className="container">
        <div className={styles.Footer}>
          <div className={styles.leftSide}>
            <Link href="/">
              <a>
                <img src={LogoFooter.src} alt="LogoFooter" />
              </a>
            </Link>
            <span>Защита персональных данных</span>
            <span>Политика конфиденциальности</span>
          </div>
          <div className={styles.centerSide}>
            <ul>
              {footerMenu.map((link, index) => (
                <li key={uuidv4() + index}>
                  <Link href={link.link}>
                    <a
                      className={currentLink == link.link ? styles.active : ""}
                    >
                      {link.title}
                    </a>
                  </Link>
                </li>
              ))}
            </ul>
            <ul>
              <li>
                <VideoPlayer
                  styling={{
                    position: "relative",
                    right: "inherit",
                    bottom: "inherit",
                    top: "inherit",
                  }}
                />
              </li>
              <li>
                <a href="#" target="_blank">
                  Instagram
                </a>
              </li>
              <li>
                <a href="#" target="_blank">
                  YouTube
                </a>
              </li>
              <li>
                <a href="#" target="_blank">
                  Facebook
                </a>
              </li>
            </ul>
          </div>

          <div className={styles.rightSide}>
            <div className={styles.sotials}>
              {sotials.map((sotial, index) => (
                <SotialIconFooter
                  key={uuidv4() + index}
                  icon={sotial.icon}
                  active={sotial.active}
                />
              ))}
            </div>
            {/* <div className={styles.contact}>*/}
            {/*  <span className={styles.name}>Phone:</span>*/}
            {/*  <a href="#" className={styles.value}>*/}
            {/*    8-800-123-45-67*/}
            {/*  </a>*/}
            {/* </div>*/}
            <div className={styles.contact}>
              <span className={styles.name}>Email:</span>
              <a href="#" className={styles.value}>
                info@ivanskanavi.com
              </a>
            </div>
            <BtnSubscribe />
            <div className={styles.whoMake}>
              <span>Website development</span>
              <a href="#">
                <img src={insp.src} alt="insspiration" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
