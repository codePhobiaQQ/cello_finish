export const listItem = {
  hidden: {
    opacity: 0,
    x: 30,
  },
  visible: (custom: number) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: custom * 0.1,
    },
  }),
};

export const fadeIn = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
  },
};

export const scale = {
  hidden: {
    scale: 1,
  },
  visible: {
    scale: 1.05,
  },
};
