export default interface IVariantClass {
  hidden?: {
    x?: number;
    y?: number;
    opacity?: number;
    scale?: number;
    pointerEvents?: string;
  },
  visible?: {
    x?: number;
    y?: number;
    pointerEvents?: string;
    opacity?: number;
    scale?: number;
    transition?: {
      delay?: number;
      duration?: number;
      staggerChildren?: number;
    }
  }
}

