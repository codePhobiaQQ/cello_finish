import React from "react";

interface CloseProps {
  CloseClick: React.Dispatch<React.SetStateAction<boolean>>;
}

const Close = ({CloseClick}: CloseProps) => {
  return (
    <svg onClick={() => CloseClick(false)} xmlns="http://www.w3.org/2000/svg" className="close" viewBox="0 0 24 24">
      <path strokeWidth={2} d="M6 18L18 6M6 6l12 12" fill="#fff" />
    </svg>
  );
};

export default Close;