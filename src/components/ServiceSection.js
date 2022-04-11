import React from "react";
//Importing icons
import coding from "../img/codingp.jpg";
//importing styles from style.js file
import { About, Description, Image } from "../style";
import styled from "styled-components";
import { Fade } from "../Animation";
import { useScroll } from "./useScroll";
import { scrollReveal } from "../Animation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode } from "@fortawesome/free-solid-svg-icons";
import {
  faReact,
  faNodeJs,
  faJsSquare,
} from "@fortawesome/free-brands-svg-icons";

const ServicesSection = () => {
  const [element, controls] = useScroll();
  return (
    <Services
      ref={element}
      variants={(Fade, scrollReveal)}
      animate={controls}
      initial="hidden"
    >
      <Description>
        <h2>
          My <span>Skills</span>
        </h2>
        <Cards>
          <Card>
            <div className="icon">
              <FontAwesomeIcon icon={faReact} size="2x" color="skyblue" />
              <h3>FRONT-END</h3>
            </div>
            <p>Experienced with ReactJS, Sass and Bootstrap</p>
          </Card>

          <Card>
            <div className="icon">
              <FontAwesomeIcon icon={faNodeJs} size="2x" color="lightgreen" />
              <h3>BACK-END</h3>
            </div>
            <p>Experienced with NodeJS,Express and MongoDB</p>
          </Card>
          <Card>
            <div className="icon">
              <FontAwesomeIcon icon={faCode} size="2x" color="orange" />
              <h3>ALGORITHMS</h3>
            </div>
            <p>Learning Algorithms along with DS in C++</p>
          </Card>
          <Card>
            <div className="icon">
              <FontAwesomeIcon icon={faJsSquare} size="2x" color="yellow" />
              <h3>OTHER SKILLS</h3>
            </div>
            <p>C++, Python, Javascript, C, Hyper, Git</p>
          </Card>
        </Cards>
      </Description>
      <Image>
        <img src={coding} alt="homi icon" />
      </Image>
    </Services>
  );
};

const Services = styled(About)`
  //here we copied everything in About from style.js file
  //and now we can make changes here about the previous one.
  //super powerful feature
  h2 {
    padding-bottom: 5rem;
    font-size: 3rem;
  }
  p {
    width: 70%;
    padding: 2rem 0 4rem 0;
  }
`;

const Cards = styled.div`
  display: flex;
  flex-wrap: wrap;
  @media (max-width: 856px) {
    justify-content: center;
  }
`;
const Card = styled.div`
  flex-basis: 15rem;
  width: 90%;
  .icon {
    display: flex;
    align-items: center;
    h3 {
      margin-left: 0rem;
      padding: 1rem;
      color: white;
      border: #23d997;
      font-size: 1.3rem;
    }
  }
  @media (max-width: 856px) {
    margin: 5px;
    width: 70%;
  }
`;
export default ServicesSection;
