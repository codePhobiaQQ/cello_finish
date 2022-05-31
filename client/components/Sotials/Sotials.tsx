import styles from "./Sotials.module.sass";
import Instagram from "../svg/instagram";
import Youtube from "../svg/youtube";
import Facebook from "../svg/facebook";
import useTypedSelector from "../../hooks/useTypedSelector";
import { useEffect, useState } from "react";
import fetchQuery from "../../services/ssr";
import { backUrl } from "../../vars";

const Sotials = () => {
  const lang = useTypedSelector((state) => state.app.language);
  const [data, setData] = useState<any>({});

  useEffect(() => {
    async function takeData() {
      const response = await fetchQuery(
        `api/footer-info?locale=${lang.toLowerCase()}&populate=*`
      );
      setData(response.data.attributes);
    }
    takeData();
  }, [lang]);

  return (
    <ul className={styles.sotialsInner}>
      <li>
        <a href={data.instagram} target="_blank">
          <Instagram />
        </a>
      </li>
      <li>
        <a href={data.youtube} target="_blank">
          <Youtube />
        </a>
      </li>
      <li>
        <a href={data.facebook} target="_blank">
          <Facebook />
        </a>
      </li>
    </ul>
  );
};

export default Sotials;
