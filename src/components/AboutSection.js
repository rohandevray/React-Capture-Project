import React from "react";
import home1 from "../img/finalme.jpg";
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
            <motion.h2 variants={titleAnim}>
              Hi there<span>!</span>
            </motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={titleAnim}>
              I'm <span>Rohan</span> Kumar
            </motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={titleAnim}>Pushpam</motion.h2>
          </Hide>
        </div>
        <motion.p variants={Fade}>
          I'm a Full-Stack Web-Developer and a Programmer. I used to create
          websites, UI designs and games sometimes.
        </motion.p>

        <motion.button
          variants={Fade}
          onClick={(e) => {
            e.preventDefault();
            window.location.href =
              "https://drive.google.com/file/d/1OHG-9iBWLhLmh1pAAk3OvD5PM3NEo50C/view?usp=sharing";
          }}
        >
          RESUME
        </motion.button>
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
