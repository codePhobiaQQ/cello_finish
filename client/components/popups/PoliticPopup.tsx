import Close from "../UI/close";
import ReactMarkdown from "react-markdown";

interface IPoliticPopup {
  isPoliticOpen: boolean;
  setPoliticOpen: any;
  text: any;
}

const PoliticPopup = ({
  isPoliticOpen,
  setPoliticOpen,
  text,
}: IPoliticPopup) => {
  return (
    <div className={`PoliticPopup ${isPoliticOpen ? "active" : ""}`}>
      <Close onClick={setPoliticOpen} />
      <div className="container">
        <ReactMarkdown>{text}</ReactMarkdown>
      </div>
    </div>
  );
};

export default PoliticPopup;
