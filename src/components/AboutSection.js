import React from "react";
import home1 from "../img/home1.png";
//import styled
import styled from "styled-components";
//importing styles from style.js file what we need
import { About, Description, Hide, Image } from "../style";
//Framer Motion
import { motion } from "framer-motion";
//importing animations
import { titleAnim, Fade, photoAnim } from "../Animation";
import Wave from "../components/Wave";

const AboutSection = () => {
  return (
    <About>
      <EditDescription>
        <div className="title">
          <Hide>
            <motion.h2 variants={titleAnim}>We work to make</motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={titleAnim}>
              your <span>dreams</span> come
            </motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={titleAnim}>true.</motion.h2>
          </Hide>
        </div>
        <motion.p variants={Fade}>
          Contact us for any photography or videography ideas that you have. We
          have professionals with amazing skills
        </motion.p>
        <motion.button variants={Fade}>Contact us</motion.button>
      </EditDescription>

      <Image>
        <motion.img variants={photoAnim} src={home1} alt="guy camera" />
      </Image>
      <Wave />
    </About>
  );
};

//styled-components
const EditDescription = styled(Description)`
  padding-top: 3.5rem;
  h2 {
    font-size: 3rem;
  }
  p {
    padding: 1.5rem 0;
    font-size: 1rem;
  }
  button {
    font-size: 1rem;
  }
`;

export default AboutSection;

//with simple animation we just use varients not any thing else
