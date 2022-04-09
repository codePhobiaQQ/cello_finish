import styles from "./ConcertsSection.module.sass";

import image1 from "../../public/assets/concerts/concert1.jpg";
import image2 from "../../public/assets/concerts/concert2.jpg";
import image3 from "../../public/assets/concerts/concert3.jpg";

import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import MoreArrow from "../../components/MoreArrow/MoreArrow";
import ArrowRight from "../../components/ArrowRight/ArrowRight";
import useTypedSelector from "../../hooks/useTypedSelector";
import { buyTiket, moreButton } from "../../vars";

interface IConcert {
  day: string;
  month: string;
  year: string;
  city: string;
  location: string;
  link: string;
}

interface ConcertsSection {
  ConcertSection: any;
}

const ConcertsSection = ({ ConcertSection }: ConcertsSection) => {
  const lang = useTypedSelector((state) => state.app.language);

  const [pagination, setCurrentPagination] = useState<number>(5);
  const [isMoreVisible, setMobVisible] = useState<boolean>(true);

  const concertsAmount = ConcertSection["ConcertsEn"].length;

  const clickMoreAction = () => {
    if (pagination + 3 > concertsAmount) {
      setCurrentPagination(concertsAmount);
      setMobVisible(false);
    } else {
      setCurrentPagination(pagination + 3);
    }
  };

  return (
    <div className={styles.concertsSection}>
      <div className="container">
        <div className={styles.concertsImagesWrapper}>
          <div className={styles.concertsWrapper}>
            {ConcertSection[`Concerts${lang}`]
              .slice(0, pagination)
              .map((concert: any, index: number) => (
                <div key={uuidv4() + index} className={styles.concertElem}>
                  <div className={styles.leftSide}>
                    <span className={styles.day}>{concert.attributes.day}</span>
                    <span className={styles.dayMonth}>
                      {concert.attributes.month} / {concert.attributes.year}
                    </span>
                  </div>
                  <div className={styles.centerSide}>
                    <span className={styles.city}>
                      {concert.attributes.city}
                    </span>
                    <span className={styles.location}>
                      {concert.attributes.location}
                    </span>
                  </div>
                  <div className={styles.rightSide}>
                    <a
                      className={styles.buyTiсket}
                      href={concert.attributes.link}
                    >
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
