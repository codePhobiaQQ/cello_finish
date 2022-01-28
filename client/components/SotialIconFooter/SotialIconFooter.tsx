import { motion } from "framer-motion";

export interface ISotial {
  icon: string;
  active: string;
}

const SotialIconFooter = ({ icon, active }: ISotial) => {
  return (
    <div className={"sotial"}>
      <motion.img src={icon} />
    </div>
  );
};

export default SotialIconFooter;
