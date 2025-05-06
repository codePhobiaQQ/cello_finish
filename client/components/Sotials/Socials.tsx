import styles from "./Sotials.module.sass";
import Instagram from "../svg/instagram";
import Youtube from "../svg/youtube";
import Facebook from "../svg/facebook";
import {useEffect, useState, memo} from "react";
import fetchQuery from "../../services/ssr";
import useTypedSelector from "../../hooks/useTypedSelector";

const Socials = memo(() => {
    const [data, setData] = useState<{ instagram?: string, youtube?: string, facebook?: string }>({});
    const lang = useTypedSelector((state) => state.app.language);

    useEffect(() => {
        async function takeData() {
            const response = await fetchQuery(`general-data`, lang);
            setData(response?.[0]?.acf);
        }
        takeData();
    }, [lang]);

    return (
        <ul className={styles.sotialsInner}>
            <li>
                <a href={data?.instagram} target="_blank">
                    <Instagram/>
                </a>
            </li>
            <li>
                <a href={data?.youtube} target="_blank">
                    <Youtube/>
                </a>
            </li>
            <li>
                <a href={data?.facebook} target="_blank">
                    <Facebook/>
                </a>
            </li>
        </ul>
    );
});

export default Socials;
