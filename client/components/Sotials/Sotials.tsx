import styles from "./Sotials.module.sass";
import Instagram from "../svg/instagram";
import Youtube from "../svg/youtube";
import Facebook from "../svg/facebook";
import { useEffect, useState, memo } from "react";
import fetchQuery from "../../services/ssr";

const Sotials = memo(() => {
  const [data, setData] = useState<any>({});

  useEffect(() => {
    async function takeData() {
      const response = await fetchQuery(`api/footer-info?populate=*`);
      setData(response?.data?.attributes);
    }
    takeData();
  }, []);

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
});

export default Sotials;
