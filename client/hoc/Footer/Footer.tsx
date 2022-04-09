import styles from "./Footer.module.sass";
import LogoFooter from "./../../public/assets/svg/LogoFooter.svg";
import SotialIconFooter, {
  ISotial,
} from "../../components/SotialIconFooter/SotialIconFooter";
import { v4 as uuidv4 } from "uuid";

import Image from "next/image";

import spotify from "./../../public/assets/svg/sotials/Spotify.svg";
import spotifyActive from "./../../public/assets/svg/sotials/SpotifyActive.svg";

import sber from "./../../public/assets/svg/sotials/sber.svg";
import sberActive from "./../../public/assets/svg/sotials/sberActive.svg";

import appleMusic from "./../../public/assets/svg/sotials/appleMusic.svg";
import appleMusicActive from "./../../public/assets/svg/sotials/appleMusicActive.svg";

import yandexMusic from "./../../public/assets/svg/sotials/yandexMusic.svg";
import yandexMusicActive from "./../../public/assets/svg/sotials/yandexMusicActive.svg";

import vkMusic from "./../../public/assets/svg/sotials/vkMusic.svg";
import vkMusicActive from "./../../public/assets/svg/sotials/vkMusicActive.svg";

import insp from "./../../public/assets/svg/insp.svg";
import Link from "next/link";
import BtnSubscribe from "../../components/BtnSubscribe/BtnSubscribe";
import { useRouter } from "next/router";
import VideoPlayer from "../../components/VideoPlayer/VideoPlayer";
import useTypedSelector from "../../hooks/useTypedSelector";
import PoliticPopup from "../../components/popups/PoliticPopup";
import { useEffect, useMemo, useState } from "react";
import ProtectPopup from "../../components/popups/ProtectPopup";
import ThanksPopup from "../../components/popups/ThanksPopup";
import { fetchQuery } from "../../services/ssr";
import { log } from "util";
import { politic, protect } from "../../vars";

interface IFooter {
  children?: React.ReactNode;
}

interface IMenu {
  title: string;
  link: string;
}

export const sotials: ISotial[] = [
  {
    icon: spotify.src,
    active: spotifyActive.src,
    link: "#",
  },
  {
    icon: vkMusic.src,
    active: vkMusicActive.src,
    link: "#",
  },
  {
    icon: yandexMusic.src,
    active: yandexMusicActive.src,
    link: "#",
  },
  {
    icon: appleMusic.src,
    active: appleMusicActive.src,
    link: "#",
  },
  {
    icon: sber.src,
    active: sberActive.src,
    link: "#",
  },
];

export const footerMenu: IMenu[] = [
  {
    title: "Biography",
    link: "/#BiographySection",
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
    link: "#Contacts",
  },
];

const Footer = ({ children }: IFooter) => {
  const [data, setData] = useState<any>({});

  useEffect(() => {
    async function takeData() {
      const response = await fetchQuery(
        "api/footer-section?populate=*&locale=en"
      );
      return response;
    }
    takeData().then((result) => {
      console.log(result.data.attributes.FooterSection);
      setData(result.data.attributes.FooterSection);
    });
  }, []);

  console.log("render");

  const router = useRouter();
  const thanks = useTypedSelector((state) => state.app.thanks);
  const currentLink = router.asPath;
  const lang = useTypedSelector((state) => state.app.language);

  const [isPoliticOpen, setPoliticOpen] = useState<boolean>(false);
  const closePoliticHandler = () => setPoliticOpen(false);

  const [isProtectOpen, setProtectOpen] = useState<boolean>(false);
  const closeProtectHandler = () => setProtectOpen(false);

  return useMemo(() => {
    return (
      <>
        <PoliticPopup
          isPoliticOpen={isPoliticOpen}
          setPoliticOpen={closePoliticHandler}
        />
        <ProtectPopup
          isProtectOpen={isProtectOpen}
          setProtectOpen={closeProtectHandler}
        />
        <ThanksPopup />
        {children}
        <div className="container" id={"Contacts"}>
          <div className={styles.Footer}>
            <div className={styles.leftSide}>
              <Link href="/">
                <a>
                  <div className={styles.imageWrapper}>
                    <Image
                      width={232}
                      height={232}
                      src={LogoFooter.src}
                      alt="LogoFooter"
                    />
                  </div>
                </a>
              </Link>
              <span onClick={() => setProtectOpen(true)}>{protect[lang]}</span>
              <span onClick={() => setPoliticOpen(true)}>{politic[lang]}</span>
            </div>
            <div className={styles.centerSide}>
              <ul>
                {footerMenu.map((link, index) => (
                  <li key={uuidv4() + index}>
                    <Link href={link.link}>
                      <a
                        className={
                          currentLink == link.link ? styles.active : ""
                        }
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
                    label={"S. Rachmaninov - Sonata for cello and piano.."}
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
                    link={sotial.link}
                    key={uuidv4() + index}
                    icon={sotial.icon}
                    active={sotial.active}
                  />
                ))}
              </div>
              <div className={styles.mobSocials}>
                <li>
                  <a href={data.instagram} target="_blank">
                    Instagram
                  </a>
                </li>
                <li>
                  <a href={data.youtube} target="_blank">
                    Youtube
                  </a>
                </li>
                <li>
                  <a href={data.facebook} target="_blank">
                    Facebook
                  </a>
                </li>
              </div>
              <div className={styles.contact}>
                <span className={styles.name}>Email:</span>
                <a href={`mailto:${data.email}`} className={styles.value}>
                  {data.email}
                </a>
              </div>
              <div className={styles.subscribeWrapper}>
                <input type="email" />
                <BtnSubscribe customClass={"footerSubscribe"} />
              </div>
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
  }, [isPoliticOpen, isProtectOpen, thanks, lang, data]);
};

export default Footer;
