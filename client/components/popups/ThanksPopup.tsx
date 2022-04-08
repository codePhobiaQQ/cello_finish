import Close from "../UI/close";
import useTypedSelector from "../../hooks/useTypedSelector";
import { useDispatch } from "react-redux";
import { setThanks } from "../../redux/slices/AppSlice";
import { AnimatePresence, motion } from "framer-motion";
import { fadeIn } from "../../motions/menuMotion";

const ThanksPopup = () => {
  const thanks = useTypedSelector((state) => state.app.thanks);
  const dispatch = useDispatch();

  const closeThanksHandler = () => {
    dispatch(setThanks(false));
  };

  return (
    <AnimatePresence initial={false}>
      {thanks && (
        <motion.div
          variants={fadeIn}
          initial="hidden"
          animate="visible"
          exit="hidden"
          className="ThanksPopup"
        >
          <Close onClick={closeThanksHandler} />

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 30 }}
            className="content"
          >
            <h2>Thank You</h2>
            <p>In little time our manager connect with you</p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ThanksPopup;
