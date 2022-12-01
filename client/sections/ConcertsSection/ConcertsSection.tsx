import styles from "./ConcertsSection.module.sass";

import image1 from "../../public/assets/concerts/concert1.jpg";
import image2 from "../../public/assets/concerts/concert2.jpg";
import image3 from "../../public/assets/concerts/concert3.jpg";

import React, { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import MoreArrow from "../../components/MoreArrow/MoreArrow";
import ArrowRight from "../../components/ArrowRight/ArrowRight";
import useTypedSelector from "../../hooks/useTypedSelector";
import { backUrl, buyTiket, moreButton } from "../../vars";
import fetchQuery from "../../services/ssr";

interface IConcert {
  Day: string;
  Month: string;
  Year: string;
  City: string;
  Place: string;
  Link: string;
  Time?: string;
  AllDate: string;
}

interface ConcertsSection {
  ConcertSection: any;
}

const ConcertsSection = () => {
  const lang = useTypedSelector((state) => state.app.language);
  const [pagination, setCurrentPagination] = useState<number>(5);
  const [isMoreVisible, setMobVisible] = useState<boolean>(true);
  const [concertsAmount, setConcertsAmount] = useState<number>(3);

  const clickMoreAction = () => {
    if (pagination + 3 > concertsAmount) {
      setCurrentPagination(concertsAmount);
      setMobVisible(false);
    } else {
      setCurrentPagination(pagination + 3);
    }
  };
  const [sectionData, setSectionData] = useState<IConcert[]>([
    {
      City: "Berge, Germany",
      Day: "11",
      Link: "https://www.altmarkfestspiele.de/programm/",
      Month: "06",
      Place: "Dorfkirche",
      Time: "2022-06-11",
      Year: "2022",
    },
  ] as IConcert[]);
  useEffect(() => {
    async function fetchData() {
      const response = await fetchQuery(
        `api/concerts?locale=${lang.toLowerCase()}&populate=*`
      );
      setSectionData(
        response.data
          .map((concert: any) => ({
            ...concert.attributes,
            AllDate: concert.attributes.Time,
            Day: concert.attributes.Time.split("-")[2],
            Month: concert.attributes.Time.split("-")[1],
            Year: concert.attributes.Time.split("-")[0],
          }))
          .sort((a: IConcert, b: IConcert) =>
            ("" + a?.Time).localeCompare("" + b?.Time)
          )
      );
      console.log(response.data);
      setConcertsAmount(response.data.length);
    }
    fetchData();
  }, [lang]);

  return (
    <div className={styles.concertsSection}>
      <div className="container">
        <div className={styles.concertsImagesWrapper}>
          <div className={styles.concertsWrapper}>
            {sectionData
              .slice(0, pagination)
              .sort(function (a, b) {
                if (a.AllDate < b.AllDate) return 1;
                else if (a.AllDate > b.AllDate) return -1;
                else return 0;
              })
              .map((concert: any, index: number) => (
                <div key={uuidv4() + index} className={styles.concertElem}>
                  <div className={styles.leftSide}>
                    <span className={styles.day}>{concert.Day}</span>
                    <span className={styles.dayMonth}>
                      {concert.Month} / {concert.Year}
                    </span>
                  </div>
                  <div className={styles.centerSide}>
                    <span className={styles.city}>{concert.City}</span>
                    <span className={styles.location}>{concert.Place}</span>
                  </div>
                  <div className={styles.rightSide}>
                    <a className={styles.buyTiсket} href={concert.Link}>
                      <span>{buyTiket[lang]}</span>
                      <ArrowRight />
                    </a>
                  </div>
                </div>
              ))}
          </div>

          <div className={styles.imagesWrapper}>
            <img src={image1.src} alt="concert1" />
            <img src={image2.src} alt="concert2" />
            <img src={image3.src} alt="concert3" />
          </div>
        </div>

        {isMoreVisible && (
          <div onClick={clickMoreAction} className="moreWrap">
            <MoreArrow />
            <span>{moreButton[lang]}</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default ConcertsSection;
