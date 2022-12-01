import Close from "../UI/close";
import { AnimatePresence, motion } from "framer-motion";
import { fadeIn } from "./../../motions/oftenMotions";
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
    <AnimatePresence initial={false}>
      {isPoliticOpen && (
        <motion.div
          variants={fadeIn}
          animate="visible"
          initial="hidden"
          exit="hidden"
          className="PoliticPopup"
        >
          <Close onClick={setPoliticOpen} />
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 30 }}
            className="container"
          >
            <ReactMarkdown>{text}</ReactMarkdown>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default PoliticPopup;
