import React, { useCallback } from "react";
import { motion } from "framer-motion";
import { textVariant } from "../../motions/bioMotions";

interface ITextAnimation {
  children?: any;
  isLoading?: boolean;
}

const TextAnimation = ({ children, isLoading }: ITextAnimation) => {
  // console.log(children.props?.children);
  const content: () => string[] = useCallback(
    () => children?.props?.children?.split("\n"),
    [isLoading]
  );
  return (
    <>
      {content()?.map((text, index) => (
        <div className={"pWrap"} key={"textBio" + index}>
          <p>{text}</p>
        </div>
      ))}
    </>
  );
};

export default TextAnimation;
