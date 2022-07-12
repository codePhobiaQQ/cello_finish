export const imageVariant = {
  hidden: {
    opacity: 0,
    x: "-100%",
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 1,
      ease: "easeOut",
    },
  },
};

export const textVariant = (custom = 0) => ({
  hidden: {
    opacity: 0,
    x: -140,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 1,
      ease: "easeOut",
      delay: custom * 0.1,
    },
  },
});
