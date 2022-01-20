import { useEffect } from "react";
import { useState } from "react";
import {useInView} from "react-intersection-observer";
import { motion } from "framer-motion";
import Close from "../../UI/Close";
import bg from "../../../public/assets/img/AboutSection/about1.jpg"
import { Container } from "reactstrap";
import {ImageType} from "../../../types/types";
import IVariantClass from "../../../variants/VariantClass";

interface IImages {
  image: ImageType;
  textRu: string;
  textEn: string;
  textGe: string;
  bigImg: string;
}

interface IGallery {
  PropsImages: IImages[];
}

const GallerySection = ({ PropsImages }: IGallery) => {
  const Images: IImages[] = PropsImages;
  let [result, setResult] = useState<IImages[][]>([]);
  const [columns, setColumns] = useState<number>(4);
  let ptr: IImages[][] = [];

  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [numberCurrentPhoto, setNumberCurrentPhoto] = useState<number>(0);

  const { ref, inView } = useInView({
    triggerOnce: true,
  });

  const fadeIn: IVariantClass = {
    hidden: { opacity: 0, scale: .97 },
    visible: { opacity: 1, scale: 1, transition: { duration: .7 }}};
  const fadeInBig: IVariantClass = {
    hidden: { opacity: 0, pointerEvents: "none" },
    visible: { opacity: 1, pointerEvents: "auto", transition: { duration: .7 }}};

  const arrToColumns = (size: number) => {
    for (let i = 0; i < Math.ceil(Images.length/size); i++) {
      ptr[i] = Images.slice((i * size), (i * size) + size);
    }
    setResult(ptr);
  }

  useEffect(() => {}, [columns]);

  useEffect(() => {
    const width = window.innerWidth;
    if (width > 1200) {
      setColumns(4);
    } else if (width <= 1200 && width > 768) {
      setColumns(3);
    } else if (width <= 768) {
      setColumns(2);
    }
    arrToColumns(Math.ceil(Images.length / columns));
  },[]);

  const clickHandler = (src: string, index: number, column: number) => {
    setIsOpen(true);
    for (let i = 0; i < column; i++) {
      index += result[i].length;
    };
    setNumberCurrentPhoto(index);
  }

  const clickArrowHandler = (destination: number) => {
    let resultImg = 0;

    if (numberCurrentPhoto == 0 && destination == -1) {
      resultImg = Images.length - 1;
    } else {
      resultImg = (numberCurrentPhoto + destination) % Images.length;
    };
    setNumberCurrentPhoto(resultImg);
  }

  return (
    <>
      <div
        className="gallery"
        ref={ref}
      >
        {result.map((column, index) => (
          <div key={index + "gallery__column"} className="gallery__column">
            {column.map((photo, indexPhoto, column) => (
              <div className="gallery__link" onClick={() => clickHandler(photo.bigImg, indexPhoto, index)}>
                <figure key={"photoIndex" + indexPhoto} className="gallery__thumb">
                  <img
                    src={photo.image?.url ? "http://localhost:1337" + photo.image.url : bg.src}
                    alt={photo.textRu}
                    className="gallery__image"
                  />
                  <figcaption className="gallery__caption">{photo.textRu}</figcaption>
                </figure>
              </div>
              )
            )}
          </div>
        ))}
      </div>

      <motion.div
        className="openGallery"
        ref={ref}
        animate={isOpen ? "visible" : ""}
        initial={"hidden"}
        variants={fadeInBig}
      >
        <Container>
          <Close CloseClick={setIsOpen} />
            <svg onClick={() => clickArrowHandler(1)} className="arrow" height="24px" viewBox="0 0 24 24" width="24px"><g><path d="M0,0h24v24H0V0z" fill="none"/></g><g><polygon points="6.23,20.23 8,22 18,12 8,2 6.23,3.77 14.46,12"/></g></svg>
            <img className="bigPhoto" src={"http://localhost:1337" + Images[numberCurrentPhoto].bigImg.url} alt="photo" />
            <svg onClick={() => clickArrowHandler(-1)} className="arrow left" height="24px" viewBox="0 0 24 24" width="24px"><g><path d="M0,0h24v24H0V0z" fill="none"/></g><g><polygon points="6.23,20.23 8,22 18,12 8,2 6.23,3.77 14.46,12"/></g></svg>
        </Container> 
      </motion.div>
    </>
  );
};

export default GallerySection;