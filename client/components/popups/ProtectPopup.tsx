import Close from "../UI/close";
import { motion, AnimatePresence } from "framer-motion";
import { fadeIn } from "../../motions/oftenMotions";
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
    <AnimatePresence initial={false}>
      {isProtectOpen && (
        <motion.div
          variants={fadeIn}
          animate="visible"
          initial="hidden"
          exit="hidden"
          className="PoliticPopup"
        >
          <Close onClick={setProtectOpen} />
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

export default ProtectPopup;
