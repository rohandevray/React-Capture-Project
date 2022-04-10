import React from "react";
//ANimations
import { motion } from "framer-motion";
import { pageTransition, titleAnim } from "../Animation";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faLocationDot,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import {
  faInstagram,
  faFacebook,
  faGithub,
  faLinkedin,
  faReddit,
} from "@fortawesome/free-brands-svg-icons";

const ContactUs = () => {
  return (
    <ContactStyle
      exit="exit"
      variants={pageTransition}
      initial="hidden"
      animate="show"
      style={{ background: "black" }}
    >
      <Content>
        <Title>
          <motion.h4 variants={titleAnim}>Get in touch!</motion.h4>
          <motion.p variants={titleAnim}>
            Let's work on new projects and unique ideas together.
          </motion.p>
        </Title>
        <Box>
          <DD>
            <FontAwesomeIcon
              icon={faLocationDot}
              size="2x"
              color="#23d997"
              id="icon"
            />
            <motion.p variants={titleAnim}>NIT Karnataka</motion.p>
          </DD>
          <DD>
            <FontAwesomeIcon
              icon={faPhone}
              size="2x"
              color="#23d997"
              id="icon"
            />
            <motion.p variants={titleAnim}>+918294113981</motion.p>
          </DD>
          <DD>
            <FontAwesomeIcon
              icon={faEnvelope}
              size="2x"
              color="#23d997"
              id="icon"
            />
            <motion.p variants={titleAnim}>
              devrayrohan392 <br />
              @gmail.com
            </motion.p>
          </DD>
        </Box>
        <Table>
          <div className="left">
            <div className="name">
              <input type="text" name="name" placeholder="Name" />
            </div>
            <div className="mail"></div>
            <input type="email" name="email" placeholder="Mail" id="email" />
            <input type="text" name="phone" placeholder="Phone" />
          </div>

          <div className="right">
            <label for="message"></label>
            <textarea
              name=""
              id=""
              cols="30"
              rows="10"
              placeholder="Message"
            ></textarea>
          </div>
          <button type="submit">
            <a href="mailto:devrayrohan392@gmail.com">Send me</a>
          </button>
        </Table>
        <Foot>
          <h3>Thanks for visiting!</h3>
          <Icons>
            <a href="https://www.facebook.com/profile.php?id=100008341568818">
              <FontAwesomeIcon
                icon={faFacebook}
                size="2x"
                color="white"
                id="icon"
              />
            </a>
            <a href="https://www.instagram.com/rohan_dev_ray/">
              <FontAwesomeIcon
                icon={faInstagram}
                size="2x"
                color="white"
                id="icon"
              />
            </a>
            <a href="https://www.reddit.com/u/Background-One5531?utm_medium=android_app&utm_source=share">
              <FontAwesomeIcon
                icon={faReddit}
                size="2x"
                color="white"
                id="icon"
              />
            </a>
            <a href="https://www.linkedin.com/in/rohan-kumar-pushpam-326001212/">
              <FontAwesomeIcon
                icon={faLinkedin}
                size="2x"
                color="white"
                id="icon"
              />
            </a>
            <a href="https://github.com/rohandevray">
              <FontAwesomeIcon
                icon={faGithub}
                size="2x"
                color="white"
                id="icon"
              />
            </a>
          </Icons>
        </Foot>
      </Content>
    </ContactStyle>
  );
};

const ContactStyle = styled(motion.div)`
  padding: 0rem 0rem;
  min-height: 90vh;
  color: #353535;
  p {
    padding: 1rem 0;
    font-weight: 500;
  }
  text-align: center;
`;

const Title = styled(motion.div)`
  h4 {
    padding-top: 1.2rem;
  }
  margin-bottom: 2rem;
  color: black;
  overflow: hidden;
`;

const Content = styled.div`
  width: 100%;
  height: 90vh;
`;
const DD = styled.div`
  width: 10rem;
  overflow: hidden;
  height: 8rem;
  transform: all 0.5s ease;
  cursor: pointer;
  p {
    font-size: 1rem;
    z-index: 100;
  }
  #icon {
    &:hover {
      transform: translateY(10%);
    }
  }
`;
const Box = styled.div`
  width: 100%;
  height: 5rem;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;
const Table = styled.div`
  padding: 4rem;
  width: 60%;
  position: absolute;
  left: 20%;
  height: 22rem;

  @media (max-width: 1097px) {
    display: flex;
    flex-direction: column;

    .right {
      position: absolute;
      bottom: -110%;
      left: -11%;

      textarea {
        width: 100%;
        position: relative;
        left: 5%;
      }
    }

    button {
      position: absolute;
      top: 100%;
      left: 10%;
    }
  }

  .left {
    input {
      display: block;
      height: 2.5rem;
      width: 23rem;
      border: 2px solid white;
      margin-bottom: 2.5rem;
      background-color: black;
      color: white;
      font-size: 1rem;
      &:focus {
        outline-color: #23d997;
        border-color: #23d997;
        outline: 1px solid #23d997;
      }
    }
  }
  .right {
    textarea {
      width: 40%;
      height: 30vh;
      position: relative;
      top: -15rem;
      left: 25%;
      background-color: black;
      color: white;
      font-size: 1rem;
      width: 23rem;
      height: 12.5rem;
      margin-left: 5%;
      &:focus {
        outline-color: #23d997;
        border-color: #23d997;
        outline: 1px solid #23d997;
      }
      &::placeholder {
        font-size: 1.2rem;
        padding: 1px 0 0 0;
      }
    }
  }

  button {
    a {
      text-decoration: none;
      color: white;
    }
    position: relative;
    bottom: 90%;
    color: #23d997;
    &:hover {
      background-color: #23d997;
      color: white;
    }
  }
`;

const Foot = styled(motion.div)`
  position: absolute;
  bottom: -7%;
  width: 100%;
  text-align: center;
  transition: all 0.75s ease;
  @media (max-width: 768px) {
    position: absolute;
    bottom: -2rem;
    left: 5.1%;
    a {
      padding: 0 7px;
    }
  }
  h3 {
    padding-bottom: 0.5%;
    color: #23d997;
  }
  #icon {
    &:hover {
      color: #23d997;
      transform: translateY(-20%);
    }
    cursor: pointer;
  }
`;
const Icons = styled(motion.div)`
  display: flex;
  justify-content: space-around;
  width: 30%;
  position: absolute;
  left: 34.3%;
  bottom: -200%;
`;

export default ContactUs;
