import styles from "./ArrowSlider.module.sass";
import React, { useState, useEffect } from "react";
import sliderArrow from "./../../public/assets/svg/ArrowRight.svg";
import sliderArrowMob from "./../../public/assets/svg/ArrowRightMob.svg";
import useWindowWidth from "react-hook-use-window-width";

interface IArrowSlider {
  left?: boolean;
  onClick?: () => void | null;
}

const ArrowSlider = ({ onClick, left }: IArrowSlider) => {
  const [whatArrow, setWhatArrow] = useState<number>(0);
  const width = useWindowWidth();

  useEffect(() => {
    if (width > 765) {
      setWhatArrow(1);
    } else {
      setWhatArrow(0);
    }
  }, [width]);

  return (
    <div onClick={onClick} className={styles.arrowSlider + " arrowSlider"}>
      <div className={styles.circle}>
        <img
          className={left ? styles.left : ""}
          src={whatArrow ? sliderArrow.src : sliderArrowMob.src}
          alt="arrow"
        />
      </div>
    </div>
  );
};

export default ArrowSlider;
