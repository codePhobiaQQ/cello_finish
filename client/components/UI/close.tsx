interface IClose {
  onClick?: any;
}

const Close = ({ onClick }: IClose) => {
  return (
    <svg
      width="44"
      height="44"
      viewBox="0 0 44 44"
      onClick={onClick}
      className="close"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="0.707153"
        width="60"
        height="1"
        transform="rotate(45 0.707153 0)"
        fill="#fff"
      />
      <rect
        y="42.4265"
        width="60"
        height="1"
        transform="rotate(-45 0 42.4265)"
        fill="#fff"
      />
    </svg>
  );
};

export default Close;
