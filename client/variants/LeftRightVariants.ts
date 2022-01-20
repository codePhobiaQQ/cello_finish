interface IConstructor {
  duration?: number;
  interval?: number;
  delay?: number;
  staggerChildren?: number;
  fadeBottomPx?: number;
}

export default class LeftRightVariants {
  wrapperVariant = { hidden: {}, visible: {transition: { staggerChildren: 0.7, }} }
  textVariantLeft = {
    hidden: {
      x: -100,
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        delay: 0,
        duration: 0.7
      }
    },
  }
  mainVariantWrapper = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.4,
      }
    }
  }
  mainVariantChildren = {
    hidden: {
      opacity: 0,
      y: -15,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      }
    }
  }


  textVariantRight = {
    hidden: {
      x: 100,
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        delay: 0,
        duration: 0.7,
      }
    },
  }
  photoVariant = {
    hidden: {
      scale: 0.95,
      opacity: 0,
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delay: 0,
        duration: 0.7,
      }
    },
  }
  fadeInBottom = {
    hidden: {
      scale: 0.97,
      opacity: 0,
      y: 40,
    },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        delay: 0,
        duration: 0.7,
        when: "beforeChildren",
        staggerChildren: 0.2
      }
    },
  }
  fadeIn = {
    hidden: {
      scale: 0.97,
      opacity: 0,
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delay: 0,
        duration: 0.7,
      }
    },
  }

  errorVariant = {
    hidden: {
      opacity: 0,
      pointerEvents: "none",

    },
    visible: {
      opacity: 1,
      pointerEvents: "auto",
      backgroundColor: "#0f0f0f"
    }
  }

  constructor(options: IConstructor) {
    this.textVariantLeft.visible.transition.duration =
    this.textVariantRight.visible.transition.duration =
    this.photoVariant.visible.transition.duration =
    this.fadeInBottom.visible.transition.duration =
    this.fadeIn.visible.transition.duration =
    this.mainVariantChildren.visible.transition.duration =
      options?.duration || .7;

    options?.staggerChildren ?
      this.wrapperVariant.visible.transition.staggerChildren = options?.staggerChildren : null
    options?.staggerChildren ?
      this.mainVariantWrapper.visible.transition.staggerChildren = options?.staggerChildren : null

    this.textVariantLeft.visible.transition.delay =
    this.textVariantRight.visible.transition.delay =
    this.photoVariant.visible.transition.delay =
    this.fadeInBottom.visible.transition.delay =
    this.fadeIn.visible.transition.delay =
      options?.delay || 0;

    options?.fadeBottomPx ?
      this.fadeInBottom.hidden.y = options?.fadeBottomPx : null;

  }
}

