import React from "react";
//Importing icons
import clock from "../img/clock.svg";
import diaphragm from "../img/diaphragm.svg";
import money from "../img/money.svg";
import teamwork from "../img/teamwork.svg";
import home2 from "../img/home2.png";
//importing styles from style.js file
import { About, Description, Image } from "../style";
import styled from "styled-components";
import { Fade } from "../Animation";
import { useScroll } from "./useScroll";
import { scrollReveal } from "../Animation";

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
          High <span>quality</span> services
        </h2>
        <Cards>
          <Card>
            <div className="icon">
              <img src={clock} alt="clock icon" />
              <h3>Efficient</h3>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
          </Card>

          <Card>
            <div className="icon">
              <img src={teamwork} alt="team icon" />
              <h3>Teamwork</h3>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
          </Card>
          <Card>
            <div className="icon">
              <img src={diaphragm} alt="dia icon" />
              <h3>Diaphragm</h3>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
          </Card>
          <Card>
            <div className="icon">
              <img src={money} alt="money icon" />
              <h3>Affordable</h3>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
          </Card>
        </Cards>
      </Description>
      <Image>
        <img src={home2} alt="homi icon" />
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
      margin-left: 1rem;
      padding: 1rem;
      background: white;
      color: black;
    }
  }
  @media (max-width: 856px) {
    margin: 5px;
    width: 70%;
  }
`;
export default ServicesSection;
