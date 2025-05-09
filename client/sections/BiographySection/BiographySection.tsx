import cls from "./BiographySection.module.sass";
import cello from "../../public/assets/bio/viol.png";
import ivan from "../../public/assets/img/ivan.jpg";
import Viol from "../../components/svg/viol";
import Image from "next/image";
import ArrowRight from "../../components/ArrowRight/ArrowRight";
import { useInView } from "react-intersection-observer";
import useTypedSelector from "../../hooks/useTypedSelector";
import { useEffect, useState } from "react";
import fetchQuery from "../../services/ssr";
import cn from "classnames";

interface IBiographySection {
  content: string;
  title: string;
  image: string;
  bioFile: string;
  button_text: string;
}

const BiographySection = () => {
  const lang = useTypedSelector((state) => state.app.language);

  const [imageRef] = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });
  const [imageMobRef] = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });
  const [text1Ref] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  const [sectionData, setSectionData] = useState<IBiographySection>(
    {} as IBiographySection
  );
  const [_, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    async function fetchData() {
      const response = await fetchQuery('biography', lang);
      const data = response?.[0]

      setSectionData({
        ...data?.acf,
        content: data?.acf?.content,
        bioFile: data?.acf?.bio_file,
        image: data?.acf?.image,
      });

      setIsLoading(false);
    }

    fetchData();
  }, [lang]);

  return (
    <section id={"BiographySection"} className={cls.Biography}>
      <div className={cls.accent}>
        <span>{sectionData.title}</span>
      </div>
      <div className="container">
        <div className={cls.biographyWrapper}>

          <div ref={imageRef} className={cn(cls.imageWrapper, cls.Ivan)}>
            <img
              width={270}
              height={400}
              src={sectionData?.image || ivan.src}
              alt="Ivan"
            />
          </div>

          <div className={cls.textWrapper}>
            <div ref={imageMobRef} className={cls.imageWrapperMob}>
              <Image
                width={270}
                height={400}
                src={sectionData?.image || ivan.src}
                alt="Ivan"
                objectFit="contain"
              />
            </div>
            <div
              ref={text1Ref}
            >
              <div className={cls.imageWrapperCello}>
                <Image alt='Cello' src={cello.src} objectFit="contain" layout="fill" />
              </div>

              <p>
                {sectionData?.content}
              </p>

            </div>
            <Viol />
          </div>
        </div>
        <a
          href={sectionData?.bioFile}
          download
          target="_blank"
          className={cls.dowloadButton}
        >
          <span>{sectionData.button_text}</span>
          <ArrowRight />
        </a>
      </div>
    </section>
  );
};

export default BiographySection;
