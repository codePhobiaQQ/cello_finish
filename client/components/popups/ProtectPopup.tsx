import Close from "../UI/close";
import ReactMarkdown from "react-markdown";

interface IPoliticPopup {
  isProtectOpen: boolean;
  setProtectOpen: any;
  text: any;
}

const ProtectPopup = ({
  isProtectOpen,
  setProtectOpen,
  text,
}: IPoliticPopup) => {
  return (
    <div className={`PoliticPopup ${isProtectOpen ? "active" : ""}`}>
      <Close onClick={setProtectOpen} />
      <div className="container">
        <ReactMarkdown>{text}</ReactMarkdown>
      </div>
    </div>
  );
};

export default ProtectPopup;
