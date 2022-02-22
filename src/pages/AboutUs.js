import React from "react";
//We are importing the ABout Us whole page components
import AboutSection from "../components/AboutSection";
import ServicesSection from "../components/ServiceSection";
import FaqSection from "../components/FaqSection";
//ANimations
import { motion } from "framer-motion";
import { pageTransition } from "../Animation";
const AboutUs = () => {
  return (
    <motion.div
      exit="exit"
      variants={pageTransition}
      initial="hidden"
      animate="show"
      //this way we do page transition by passing every details when fadein or when fade out
    >
      <AboutSection />
      <ServicesSection />
      <FaqSection />
    </motion.div>
  );
};

export default AboutUs;
