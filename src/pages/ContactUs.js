import React from "react";
//ANimations
import { motion } from "framer-motion";
import { pageTransition, titleAnim } from "../Animation";
import styled from "styled-components";

const ContactUs = () => {
  return (
    <ContactStyle
      exit="exit"
      variants={pageTransition}
      initial="hidden"
      animate="show"
      style={{ background: "#fff" }}
    >
      <Title>
        <Hide>
          <motion.h2 variants={titleAnim}>Get in touch.</motion.h2>
        </Hide>
      </Title>

      <div>
        <Hide>
          <Social variants={titleAnim}>
            <Circle />
            <h2>Send Us A Message</h2>
          </Social>
        </Hide>
        <Hide>
          <Social variants={titleAnim}>
            <Circle />
            <h2>Send Us A Message</h2>
          </Social>
        </Hide>
        <Hide>
          <Social variants={titleAnim}>
            <Circle />
            <h2>Send Us A Message</h2>
          </Social>
        </Hide>
        <Hide>
          <Social variants={titleAnim}>
            <Circle />
            <h2>Send Us A Message</h2>
          </Social>
        </Hide>
      </div>
    </ContactStyle>
  );
};

const ContactStyle = styled(motion.div)`
  padding: 3rem 8rem;
  min-height: 90vh;
  color: #353535;
`;

const Title = styled.div`
  margin-bottom: 2rem;
  color: black;
`;

const Hide = styled.div`
  overflow: hidden;
`;

const Circle = styled.div`
  border-radius: 50%;
  height: 2rem;
  width: 2rem;
  background: #353535;
`;

const Social = styled(motion.div)`
  display: flex;
  align-items: center;

  h2 {
    margin: 1.3rem 2rem;
    font-size: 2rem;
    font-weight: lighter;
  }
`;

const font = styled(motion.h2)`
  font-size: 1.2rem;
`;

export default ContactUs;
