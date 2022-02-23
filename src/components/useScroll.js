//for the scroll animation

import { useInView } from "react-intersection-observer";
import { useAnimation } from "framer-motion";

export const useScroll = () => {
  const controls = useAnimation();
  const [element, view] = useInView({ threshold: 0.3 }); //thresold means the view is how much 0.5 is 50% of screen then it activates
  if (view) {
    controls.start("show");
  } else {
    controls.start("hidden");
  }
  return [element, controls];
};
