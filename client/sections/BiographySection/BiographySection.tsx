import styles from "./BiographySection.module.sass";
import cello from "../../public/assets/bio/viol.png";
import ivan from "../../public/assets/img/ivan.jpg";
import Viol from "../../components/svg/viol";
import ReactMarkdown from "react-markdown";
import Image from "next/image";
import ArrowRight from "../../components/ArrowRight/ArrowRight";
import { useInView } from "react-intersection-observer";
import useTypedSelector from "../../hooks/useTypedSelector";
import { useEffect, useState } from "react";
import fetchQuery from "../../services/ssr";

interface IBiographySection {
  Content: string;
  Title: string;
  Image: string;
  BioFile: string;
  ButtonText: string;
}

const BiographySection = () => {
  const lang = useTypedSelector((state) => state.app.language);

  const [imageRef, imageInView] = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });
  const [imageMobRef, imageMobInView] = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });
  const [text1Ref, text1InView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  const [sectionData, setSectionData] = useState<IBiographySection>(
    {} as IBiographySection
  );
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    async function fetchData() {
      const response = await fetchQuery('biography', lang);
      const data = response?.[0]
      console.log('response', response);
      setSectionData({
        ...data.acf,
        Content: data.acf?.content,
        BioFile: data.acf?.bio_file,
        Image: data.acf?.image,
      });

      setIsLoading(false);
    }
    fetchData();
  }, [lang]);

  return (
    <section id={"BiographySection"} className={styles.Biography}>
      <div className={styles.accent}>
        <span>{sectionData.Title}</span>
      </div>
      <div className="container">
        <div className={styles.biographyWrapper}>
          <div ref={imageRef} className={styles.imageWrapper}>
            <img
              width={270}
              height={400}
              src={sectionData?.Image || ivan.src}
              alt="Ivan"
            />
          </div>
          <div className={styles.textWrapper}>
            <div ref={imageMobRef} className={styles.imageWrapperMob}>
              <Image
                width={270}
                height={400}
                src={sectionData?.Image || ivan.src}
                alt="Ivan"
                objectFit="contain"
              />
            </div>
            <div
              ref={text1Ref}
              // variants={textVariant}
            >
              <div className={styles.imageWrapperCello}>
                <Image alt='Cello' src={cello.src} objectFit="contain" layout="fill" />
              </div>

              <p>
                {sectionData?.Content}
              </p>
            </div>
            <Viol />
          </div>
        </div>
        <a
          href={sectionData?.BioFile}
          download
          target="_blank"
          className={styles.dowloadButton}
        >
          <span>{sectionData.ButtonText}</span>
          <ArrowRight />
        </a>
      </div>
    </section>
  );
};

export default BiographySection;
