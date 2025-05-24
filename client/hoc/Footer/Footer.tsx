import styles from "./Footer.module.sass";
import LogoFooter from "./../../public/assets/svg/LogoFixed.svg";
import SotialIconFooter, {
    ISotial,
} from "../../components/SotialIconFooter/SotialIconFooter";
import {v4 as uuidv4} from "uuid";
import Image from "next/image";
import spotify from "./../../public/assets/svg/sotials/Spotify.svg";
import spotifyActive from "./../../public/assets/svg/sotials/SpotifyActive.svg";
import appleMusic from "./../../public/assets/svg/sotials/appleMusic.svg";
import appleMusicActive from "./../../public/assets/svg/sotials/appleMusicActive.svg";
import insp from "./../../public/assets/svg/insp.svg";
import Link from "next/link";
import BtnSubscribe from "../../components/BtnSubscribe/BtnSubscribe";
import {useRouter} from "next/router";
import useTypedSelector from "../../hooks/useTypedSelector";
import PoliticPopup from "../../components/popups/PoliticPopup";
import {useEffect, useMemo, useState} from "react";
import ProtectPopup from "../../components/popups/ProtectPopup";
import ThanksPopup from "../../components/popups/ThanksPopup";
import {politic, protect} from "../../vars";
import {setThanks} from "../../redux/slices/AppSlice";
import axios from "axios";
import {useDispatch} from "react-redux";
import fetchQuery from "../../services/ssr";

export const sotials: ISotial[] = [
    {
        icon: spotify.src,
        active: spotifyActive.src,
        link: "https://open.spotify.com/artist/5rhCdpyzBYhdzxQL7OglWa?si=X9WS8XzXSzSSLhGsfPz9OA&utm_source=copy-link",
    },
    {
        icon: appleMusic.src,
        active: appleMusicActive.src,
        link: "https://music.apple.com/us/artist/ivan-skanavi/1608897706",
    },
];

export const footerMenu: any = [
    {
        title_ru: "Биография",
        title_en: "Biography",
        title_de: "Biographie",
        link: "/#BiographySection",
    },
    {
        title_ru: "Галерея",
        title_en: "Gallery",
        title_de: "Galerie",
        link: "/gallery",
    },
    {
        title_ru: "Видео",
        title_en: "Videos",
        title_de: "Videos",
        link: "/videos",
    },
    {
        title_ru: "Концерты",
        title_en: "Concerts",
        title_de: "Konzerte",
        link: "/concerts",
    },
    {
        title_ru: "Новости",
        title_en: "News",
        title_de: "Aktuell",
        link: "/news",
    },
    {
        title_ru: "Контакты",
        title_en: "Contacts",
        title_de: "Kontakte",
        link: "#Contacts",
    },
];

const Footer = () => {
    const lang = useTypedSelector((state) => state.app.language);
    const [data, setData] = useState<{
        "spotify_link"?: string
        "apple_music_link"?: string
        "email"?: string
        "instagram"?: string
        "facebook"?: string
        "youtube"?: string
        "politic"?: string
        "protect"?: string
        "pricol"?: number
        "inspiration_link"?: string
    }>({});
    const dispatch = useDispatch();

    useEffect(() => {
        async function takeData() {
            const response = await fetchQuery(
                `general-data`, lang
            );
            const data = response?.[0]
            setData({
                ...data?.acf,
            });
        }

        takeData();
    }, [lang]);

    const router = useRouter();
    const thanks = useTypedSelector((state) => state.app.thanks);
    const currentLink = router.asPath;

    const [isPoliticOpen, setPoliticOpen] = useState<boolean>(false);
    const closePoliticHandler = () => setPoliticOpen(false);

    const [isProtectOpen, setProtectOpen] = useState<boolean>(false);
    const closeProtectHandler = () => setProtectOpen(false);

    const [inputEmail, setInputEmail] = useState<string>("");
    const changeInputHandler = (e: any) => {
        setInputEmail(e.target.value);
    };

    const sendEmail = async () => {
        dispatch(setThanks(true));
        await axios.post("/api/sender", {
            email: inputEmail,
            lang,
        });
    };

    return useMemo(() => {
        return (
            <>
                <PoliticPopup
                    isPoliticOpen={isPoliticOpen}
                    setPoliticOpen={closePoliticHandler}
                    text={data.politic}
                />
                <ProtectPopup
                    isProtectOpen={isProtectOpen}
                    setProtectOpen={closeProtectHandler}
                    text={data.protect}
                />
                <ThanksPopup/>

                <div className="container" id={"Contacts"}>
                    <div className={styles.Footer + " Footer"}>
                        <div className={styles.leftSide}>
                            <Link legacyBehavior href="/">
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

                            <p className="littleNumber">{data?.pricol}</p>
                        </div>
                        <div className={styles.centerSide}>
                            <ul>
                                {footerMenu.map((link: any, index: number) => (
                                    <li key={uuidv4() + index}>
                                        <Link legacyBehavior href={link.link}>
                                            <a
                                                className={
                                                    currentLink == link.link ? styles.active : ""
                                                }
                                            >
                                                {link[`title${lang}`]}
                                            </a>
                                        </Link>
                                    </li>
                                ))}
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
                                <input
                                    value={inputEmail}
                                    onChange={changeInputHandler}
                                    type="email"
                                />
                                <BtnSubscribe
                                    clickHandler={sendEmail}
                                    customClass={"footerSubscribe"}
                                />
                            </div>

                            <div className={styles.whoMake}>
                                <span>Website development</span>
                                <a href={data.instagram}>
                                    <img src={insp.src} alt="insspiration"/>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }, [isPoliticOpen, isProtectOpen, thanks, lang, data, inputEmail]);
};

export default Footer;
