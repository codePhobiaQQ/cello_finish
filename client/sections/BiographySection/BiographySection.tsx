import styles from "./BiographySection.module.sass";
import ivan from "../../public/assets/img/ivan.jpg";
import Viol from "../../components/svg/viol";
import ArrowRight from "../../components/ArrowRight/ArrowRight";
import { motion, useTransform, useViewportScroll } from "framer-motion";
import { wrapperVariant } from "../../motions";
import { useEffect, useRef, useState } from "react";

const BiographySection = () => {
  const [offsetTop, setOffsetTop] = useState<number>(800);
  const [sectionHeight, setSectionHeight] = useState<number>(1200);
  const { scrollY } = useViewportScroll();
  const y1 = useTransform(
    scrollY,
    [offsetTop / 2, offsetTop / 2 + sectionHeight],
    [0, -100]
  );
  const bioWrapperVariant = wrapperVariant({ staggerChildren: 0.3 });

  const sectionRef = useRef<HTMLElement>(null);

  // Получаем параметры секции
  useEffect(() => {
    const section = sectionRef?.current;
    const top: number = section?.offsetTop || 0;
    const sectionHeight: number = section?.clientHeight || 0;
    setOffsetTop(top);
    setSectionHeight(sectionHeight);
  }, []);

  return (
    <motion.section
      ref={sectionRef}
      variants={bioWrapperVariant}
      id={"BiographySection"}
      className={styles.Biography}
    >
      <div className={styles.accent}>
        <span>Biography</span>
      </div>
      <div className="container">
        <div className={styles.biographyWrapper}>
          <div className={styles.imageWrapper}>
            <img src={ivan.src} alt="Ivan" />
          </div>
          <div className={styles.textWrapper}>
            <img src={ivan.src} alt="Ivan" />
            <motion.p style={{ y: y1 }}>
              Иван Сканави родился в 1996 году в Москве в семье музыкантов.
              Заниматься на виолончели начал в ДМШ Академического музыкального
              колледжа при МГК им. П.И. Чайковского (класс заслуженного
              работника культуры РФ Т.Г. Алексеева). Позднее обучался в классе
              профессора Алексея Селезнёва в Академическом Музыкальном Колледже
              при Московской Государственной Консерватории и в Московской
              Консерватории им. П.И. Чайковского.
            </motion.p>
            <p>
              Участник концертов абонемента Московской консерватории
              «Музыкальные династии», фестивалей «Шереметьевские сезоны в
              Останкино», «I Mozartini» (Италия), Международного фестиваля им.
              М.И.Ростроповича (Баку).
            </p>
            <p>
              Концертным симфоническим оркестром Московской Государственной
              Консерватории им. П.И. Чайковского, с Московским Камерным
              оркестром Центра Павла Слободкина, с Симфоническим оркестром
              Академического музыкального училища при МГК им. П.И. Чайковского,
              с Ансамблем солистов «Премьера», с Таллиннским камерным оркестром,
              с оркестром Südwestdeutsches Kammerorchester Pforzheim, с
              Зауральским симфоническим оркестром.
            </p>
            <Viol />
          </div>
        </div>
        <a href={ivan.src} download className={styles.dowloadButton}>
          <span>Скачать биографию</span>
          <ArrowRight />
        </a>
      </div>
    </motion.section>
  );
};

export default BiographySection;
