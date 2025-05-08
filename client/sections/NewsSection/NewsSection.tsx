import styles from "./NewsSection.module.sass";
import React, {useEffect, useState} from "react";
import ArrowRight from "../../components/ArrowRight/ArrowRight";
import MoreArrow from "../../components/MoreArrow/MoreArrow";
import {moreButton, readMore} from "../../vars";
import useTypedSelector from "../../hooks/useTypedSelector";
import Image from "next/image";
import fetchQuery from "../../services/ssr";

interface INews {
    day: string;
    month: string;
    year: string;
    title: string;
    description: string;
    image: string;
    longText: string;
    link: string;
    date: string;
}

interface NewsSection {
    NewsSection: any;
}

const NewsSection = () => {
    const lang = useTypedSelector((state) => state.app.language);
    const [pagination, setCurrentPagination] = useState<number>(5);
    const [isMoreVisible, setMobVisible] = useState<boolean>(true);
    const [newsAmount, setNewsAmount] = useState<number>(3);

    const clickMoreAction = () => {
        if (pagination + 3 > newsAmount) {
            setCurrentPagination(newsAmount);
            setMobVisible(false);
        } else {
            setCurrentPagination(pagination + 3);
        }
    };

    const [sectionData, setSectionData] = useState<INews[]>([] as INews[]);

    useEffect(() => {
        async function fetchData() {
            const response = await fetchQuery("news", lang);
            console.log("response", response);

            const filteredNews = response
                .filter((item: any) => !!item.acf?.title) // исключаем пустые/черновые записи
                .map((item: any) => {
                    const date = item.date.split("T")[0]; // "2025-04-06"
                    const [year, month, day] = date.split("-");

                    return {
                        id: item?.id,
                        title: item.acf?.title,
                        description: item.acf?.description,
                        longText: '',
                        date,
                        day,
                        month,
                        year,
                        link: item.acf?.link,
                        image: item.acf?.image ?? null
                    };
                })
                .sort((a: any, b: any) => {
                    return new Date(b.year + "-" + b.month + "-" + b.day).getTime() -
                        new Date(a.year + "-" + a.month + "-" + a.day).getTime();
                });

            setSectionData(filteredNews);
            setNewsAmount(filteredNews.length);
        }

        // fetchData();
    }, [lang]);

    return (
        <div className={styles.newsSection}>
            <div className="container">
                <div className={styles.newsWrapper}>
                    {sectionData
                        .map((newsing: any, index: number) => (
                            <div key={"newselement" + index} className={styles.newsElem}>
                                <div className={styles.leftSide}>
                                    <span className={styles.day}>{newsing.day}</span>
                                    <span className={styles.dayMonth}>
                                        {newsing.month} / {newsing.year}
                                      </span>
                                </div>
                                <div className={styles.centerSide}>
                                    <div className={styles.content}>
                                        <span className={styles.title}>{newsing.title}</span>
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
                                            src={newsing.image}
                                            alt="image"
                                        />
                                    </div>
                                </div>

                                <div className={styles.rightSide}>
                                    <a href={newsing.link} target="_blank">
                                        <span>{readMore[lang]}</span>
                                        <ArrowRight/>
                                    </a>
                                </div>
                            </div>
                        ))
                        .slice(0, pagination)}
                </div>

                {isMoreVisible && (
                    <div onClick={clickMoreAction} className="moreWrap">
                        <MoreArrow/>
                        <span>{moreButton[lang]}</span>
                    </div>
                )}
            </div>
        </div>
    );
};

export default NewsSection;
