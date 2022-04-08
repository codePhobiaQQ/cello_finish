import Close from "../UI/close";
import { motion, AnimatePresence } from "framer-motion";
import { fadeIn } from "../../motions/oftenMotions";

interface IPoliticPopup {
  isProtectOpen: boolean;
  setProtectOpen: any;
}

const ProtectPopup = ({ isProtectOpen, setProtectOpen }: IPoliticPopup) => {
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
            <h2>Защита персональных данных</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae
              consectetur dolor ea error explicabo, ipsa magni maiores nemo
              obcaecati officiis porro quam, quas, quasi qui quos rem
              repudiandae sed veniam.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae
              consectetur dolor ea error explicabo, ipsa magni maiores nemo
              obcaecati officiis porro quam, quas, quasi qui quos rem
              repudiandae sed veniam.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae
              consectetur dolor ea error explicabo, ipsa magni maiores nemo
              obcaecati officiis porro quam, quas, quasi qui quos rem
              repudiandae sed veniam.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae
              consectetur dolor ea error explicabo, ipsa magni maiores nemo
              obcaecati officiis porro quam, quas, quasi qui quos rem
              repudiandae sed veniam.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae
              consectetur dolor ea error explicabo, ipsa magni maiores nemo
              obcaecati officiis porro quam, quas, quasi qui quos rem
              repudiandae sed veniam.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae
              consectetur dolor ea error explicabo, ipsa magni maiores nemo
              obcaecati officiis porro quam, quas, quasi qui quos rem
              repudiandae sed veniam.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae
              consectetur dolor ea error explicabo, ipsa magni maiores nemo
              obcaecati officiis porro quam, quas, quasi qui quos rem
              repudiandae sed veniam.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae
              consectetur dolor ea error explicabo, ipsa magni maiores nemo
              obcaecati officiis porro quam, quas, quasi qui quos rem
              repudiandae sed veniam.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae
              consectetur dolor ea error explicabo, ipsa magni maiores nemo
              obcaecati officiis porro quam, quas, quasi qui quos rem
              repudiandae sed veniam.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae
              consectetur dolor ea error explicabo, ipsa magni maiores nemo
              obcaecati officiis porro quam, quas, quasi qui quos rem
              repudiandae sed veniam.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae
              consectetur dolor ea error explicabo, ipsa magni maiores nemo
              obcaecati officiis porro quam, quas, quasi qui quos rem
              repudiandae sed veniam.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae
              consectetur dolor ea error explicabo, ipsa magni maiores nemo
              obcaecati officiis porro quam, quas, quasi qui quos rem
              repudiandae sed veniam.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae
              consectetur dolor ea error explicabo, ipsa magni maiores nemo
              obcaecati officiis porro quam, quas, quasi qui quos rem
              repudiandae sed veniam.
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ProtectPopup;
