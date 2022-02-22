import React from "react";
//ANimations
import { motion } from "framer-motion";
import { pageTransition } from "../Animation";

const ContactUs = () => {
  return (
    <motion.div
      exit="exit"
      variants={pageTransition}
      initial="hidden"
      animate="show"
    >
      <h1>Contact</h1>
    </motion.div>
  );
};

export default ContactUs;
