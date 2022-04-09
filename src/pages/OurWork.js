import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
//importing images
import ignite from "../img/pic1.jpg";
import impres from "../img/impre.jpg";
import musics from "../img/disk.jpg";
//ANimations
import { motion } from "framer-motion";
import {
  sliderContainer,
  pageTransition,
  Fade,
  photoAnim,
  lineAnim,
  slider,
} from "../Animation";
import { useScroll } from "../components/useScroll";
import ScrollTop from "../components/SrcrollTop";

const OurWork = () => {
  const [element, controls] = useScroll();
  const [element2, controls2] = useScroll();
  return (
    <Work
      style={{ background: "black" }}
      exit="exit"
      variants={pageTransition}
      initial="hidden"
      animate="show"
    >
      <motion.div variants={sliderContainer}>
        <Frame1 variants={slider}></Frame1>
        <Frame2 variants={slider}></Frame2>
        <Frame3 variants={slider}></Frame3>
        <Frame4 variants={slider}></Frame4>
      </motion.div>

      <Movie>
        <motion.h2 variants={Fade}>Ignite Games</motion.h2>
        <motion.div variants={lineAnim} className="line"></motion.div>
        <Link to="/work/the-athlete">
          <Hide>
            <motion.img variants={photoAnim} src={ignite} alt="athlete" />
          </Hide>
        </Link>
      </Movie>
      <Movie variants={Fade} ref={element} initial="hidden" animate={controls}>
        <h2>Impresario</h2>
        <motion.div variants={lineAnim} className="line"></motion.div>
        <Link to="/work/the-racer">
          <img src={impres} alt="theracer" />
        </Link>
      </Movie>
      <Movie
        variants={Fade}
        ref={element2}
        initial="hidden"
        animate={controls2}
      >
        <h2>Music Player</h2>
        <motion.div variants={lineAnim} className="line"></motion.div>
        <Link to="/work/good-times">
          <img src={musics} alt="goodtimes" />
        </Link>
      </Movie>
      <ScrollTop />
    </Work>
  );
};

const Work = styled(motion.div)`
  //this way we can add animation via motion to the styled component
  min-height: 100vh;
  overflow: hidden; //this is boz when we animate it should not behave weird
  padding: 1rem 8rem;
  @media (max-width: 856px) {
    padding: 2rem 2rem;
  }
  h2 {
    padding: 1rem 0;
    color: white;
  }
`;
const Movie = styled(motion.div)`
  padding-bottom: 10rem;
  color: white;
  .line {
    height: 0.38rem;
    background: #23d997;
    margin-bottom: 1.5rem;
  }
  img {
    width: 100%;
    height: 80vh;
    object-fit: cover;
  }
`;

const Hide = styled.div`
  overflow: hidden;
`;
//Frame Transitions
const Frame1 = styled(motion.div)`
  //as we add motion. here for the div name as we knew alredy we are going to add animation
  position: fixed;
  top: 10%;
  width: 100%;
  left: 0;
  height: 100vh;
  background: #fffebf;
  z-index: 2;
`;

const Frame2 = styled(Frame1)`
  background: #ff8efb;
`;

const Frame3 = styled(Frame1)`
  background: #8ed2ff;
`;

const Frame4 = styled(Frame1)`
  background: #8effa0;
`;

export default OurWork;

//the hide div wrapped around img having property of overflow of hidden so it donot show
//the scaling effect(NICE)
