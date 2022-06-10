import { CSSEffect } from "@donkeyclip/motorcortex";
export const backgroundPosition = (direction,selector, duration, delay = 0, easing = "linear") =>
  new CSSEffect(
    {
      animatedAttrs: {
        backgroundPosition:direction,
      },
    },
    {
      selector,
      duration,
      delay,
      easing,
    }
  );