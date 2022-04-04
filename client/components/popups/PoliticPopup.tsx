import Close from "../UI/close";
import { motion } from "framer-motion";
import { fadeIn } from "../../motions/oftenMotions";

interface IPoliticPopup {
  isPoliticOpen: boolean;
  setPoliticOpen: any;
}

const PoliticPopup = ({ isPoliticOpen, setPoliticOpen }: IPoliticPopup) => {
  return (
    <>
      {isPoliticOpen && (
        <motion.div
          variants={fadeIn}
          animate="visible"
          initial="hidden"
          className="PoliticPopup"
        >
          <Close onClick={setPoliticOpen} />
          <div className="container">
            <h2>Политика конфиденциальности</h2>
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
          </div>
        </motion.div>
      )}
    </>
  );
};

export default PoliticPopup;
