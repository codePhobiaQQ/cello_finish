import styles from "./NewsSection.module.sass";
import React, { useState } from "react";
import ArrowRight from "../../components/ArrowRight/ArrowRight";
import MoreArrow from "../../components/MoreArrow/MoreArrow";
import newsImg from "../../public/assets/news/newsImg.jpg";
import { backUrl, moreButton, readMore } from "../../vars";
import useTypedSelector from "../../hooks/useTypedSelector";
import Image from "next/image";

interface INews {
  day: string;
  month: string;
  year: string;
  title: string;
  littleImg: string;
  longText: string;
}

interface NewsSection {
  NewsSection: any;
}

const NewsSection = ({ NewsSection }: NewsSection) => {
  const lang = useTypedSelector((state) => state.app.language);
  const news: INews[] = [
    {
      day: "05",
      month: "03",
      year: "2022",
      title:
        "Иван Скавани вместе с Диной Ивановой дали концерт в Концертном\n" +
        "зале имени Уолта Диснея в Лос-Анжелесе",

      littleImg: newsImg.src,
      longText:
        "Публика горячо приняла Ивана и Дину и не хотела их отпускать – два выхода на" +
        " бис и продолжительные аплодисменты не заставили Публика горячо приняла Ивана и Дину и не хотела их отпускать – два выхода на" +
        " бис и продолжительные аплодисменты не заставили Публика горячо приняла Ивана и Дину и не хотела их отпускать – два выхода на" +
        " бис и продолжительные аплодисменты не заставили",
    },
    {
      day: "05",
      month: "03",
      year: "2022",
      title:
        "Иван Скавани вместе с Диной Ивановой дали концерт в Концертном\n" +
        "зале имени Уолта Диснея в Лос-Анжелесе",

      littleImg: newsImg.src,
      longText:
        "Публика горячо приняла Ивана и Дину и не хотела их отпускать – два выхода на" +
        " бис и продолжительные аплодисменты не заставили Публика горячо приняла Ивана и Дину и не хотела их отпускать – два выхода на" +
        " бис и продолжительные аплодисменты не заставили Публика горячо приняла Ивана и Дину и не хотела их отпускать – два выхода на" +
        " бис и продолжительные аплодисменты не заставили",
    },
    {
      day: "05",
      month: "03",
      year: "2022",
      title:
        "Иван Скавани вместе с Диной Ивановой дали концерт в Концертном\n" +
        "зале имени Уолта Диснея в Лос-Анжелесе",

      littleImg: newsImg.src,
      longText:
        "Публика горячо приняла Ивана и Дину и не хотела их отпускать – два выхода на" +
        " бис и продолжительные аплодисменты не заставили Публика горячо приняла Ивана и Дину и не хотела их отпускать – два выхода на" +
        " бис и продолжительные аплодисменты не заставили Публика горячо приняла Ивана и Дину и не хотела их отпускать – два выхода на" +
        " бис и продолжительные аплодисменты не заставили",
    },
    {
      day: "05",
      month: "03",
      year: "2022",
      title:
        "Иван Скавани вместе с Диной Ивановой дали концерт в Концертном\n" +
        "зале имени Уолта Диснея в Лос-Анжелесе",

      littleImg: newsImg.src,
      longText:
        "Публика горячо приняла Ивана и Дину и не хотела их отпускать – два выхода на" +
        " бис и продолжительные аплодисменты не заставили Публика горячо приняла Ивана и Дину и не хотела их отпускать – два выхода на" +
        " бис и продолжительные аплодисменты не заставили Публика горячо приняла Ивана и Дину и не хотела их отпускать – два выхода на" +
        " бис и продолжительные аплодисменты не заставили",
    },
    {
      day: "05",
      month: "03",
      year: "2022",
      title:
        "Иван Скавани вместе с Диной Ивановой дали концерт в Концертном\n" +
        "зале имени Уолта Диснея в Лос-Анжелесе",

      littleImg: newsImg.src,
      longText:
        "Публика горячо приняла Ивана и Дину и не хотела их отпускать – два выхода на" +
        " бис и продолжительные аплодисменты не заставили Публика горячо приняла Ивана и Дину и не хотела их отпускать – два выхода на" +
        " бис и продолжительные аплодисменты не заставили Публика горячо приняла Ивана и Дину и не хотела их отпускать – два выхода на" +
        " бис и продолжительные аплодисменты не заставили",
    },
    {
      day: "05",
      month: "03",
      year: "2022",
      title:
        "Иван Скавани вместе с Диной Ивановой дали концерт в Концертном\n" +
        "зале имени Уолта Диснея в Лос-Анжелесе",

      littleImg: newsImg.src,
      longText:
        "Публика горячо приняла Ивана и Дину и не хотела их отпускать – два выхода на" +
        " бис и продолжительные аплодисменты не заставили Публика горячо приняла Ивана и Дину и не хотела их отпускать – два выхода на" +
        " бис и продолжительные аплодисменты не заставили Публика горячо приняла Ивана и Дину и не хотела их отпускать – два выхода на" +
        " бис и продолжительные аплодисменты не заставили",
    },
    {
      day: "05",
      month: "03",
      year: "2022",
      title:
        "Иван Скавани вместе с Диной Ивановой дали концерт в Концертном\n" +
        "зале имени Уолта Диснея в Лос-Анжелесе",

      littleImg: newsImg.src,
      longText:
        "Публика горячо приняла Ивана и Дину и не хотела их отпускать – два выхода на" +
        " бис и продолжительные аплодисменты не заставили Публика горячо приняла Ивана и Дину и не хотела их отпускать – два выхода на" +
        " бис и продолжительные аплодисменты не заставили Публика горячо приняла Ивана и Дину и не хотела их отпускать – два выхода на" +
        " бис и продолжительные аплодисменты не заставили",
    },
    {
      day: "05",
      month: "03",
      year: "2022",
      title:
        "Иван Скавани вместе с Диной Ивановой дали концерт в Концертном\n" +
        "зале имени Уолта Диснея в Лос-Анжелесе",

      littleImg: newsImg.src,
      longText:
        "Публика горячо приняла Ивана и Дину и не хотела их отпускать – два выхода на" +
        " бис и продолжительные аплодисменты не заставили Публика горячо приняла Ивана и Дину и не хотела их отпускать – два выхода на" +
        " бис и продолжительные аплодисменты не заставили Публика горячо приняла Ивана и Дину и не хотела их отпускать – два выхода на" +
        " бис и продолжительные аплодисменты не заставили",
    },
    {
      day: "05",
      month: "03",
      year: "2022",
      title:
        "Иван Скавани вместе с Диной Ивановой дали концерт в Концертном\n" +
        "зале имени Уолта Диснея в Лос-Анжелесе",

      littleImg: newsImg.src,
      longText:
        "Публика горячо приняла Ивана и Дину и не хотела их отпускать – два выхода на" +
        " бис и продолжительные аплодисменты не заставили Публика горячо приняла Ивана и Дину и не хотела их отпускать – два выхода на" +
        " бис и продолжительные аплодисменты не заставили Публика горячо приняла Ивана и Дину и не хотела их отпускать – два выхода на" +
        " бис и продолжительные аплодисменты не заставили",
    },
  ];

  const [pagination, setCurrentPagination] = useState<number>(5);
  const [isMoreVisible, setMobVisible] = useState<boolean>(true);

  const newsAmount = news.length;

  const clickMoreAction = () => {
    if (pagination + 3 > newsAmount) {
      setCurrentPagination(newsAmount);
      setMobVisible(false);
    } else {
      setCurrentPagination(pagination + 3);
    }
  };

  return (
    <div className={styles.newsSection}>
      <div className="container">
        <div className={styles.newsWrapper}>
          {NewsSection[`News${lang}`]
            .slice(0, pagination)
            .map((newsing: any, index: number) => (
              <div key={"newselement" + index} className={styles.newsElem}>
                <div className={styles.leftSide}>
                  <span className={styles.day}>{newsing.attributes.day}</span>
                  <span className={styles.dayMonth}>
                    {newsing.attributes.month} / {newsing.attributes.year}
                  </span>
                </div>
                <div className={styles.centerSide}>
                  <div className={styles.content}>
                    <span className={styles.title}>
                      {newsing.attributes.title}
                    </span>
                  </div>

                  <div
                    className={
                      index % 2 != 0
                        ? styles.imgSide
                        : styles.imgSide + " rightImg"
                    }
                  >
                    <Image
                      width={210}
                      height={120}
                      objectFit={"contain"}
                      src={
                        backUrl +
                        newsing.attributes.littleImg.data.attributes.url
                      }
                      alt="image"
                    />
                  </div>
                </div>

                <div className={styles.rightSide}>
                  <span>{readMore[lang]}</span>
                  <ArrowRight />
                </div>
              </div>
            ))}
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

export default NewsSection;
