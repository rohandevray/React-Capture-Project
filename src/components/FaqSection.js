import React from "react";
import styled from "styled-components";
//importing styles from style.js file where we make one time style and export it everywhere in react
import { About } from "../style";
import Toggle from "./Toggle";
import { AnimateSharedLayout } from "framer-motion";
import { useScroll } from "./useScroll";
import { scrollReveal } from "../Animation";

const FaqSection = () => {
  const [element, controls] = useScroll();
  return (
    <Faq
      ref={element}
      variants={scrollReveal}
      animate={controls}
      initial="hidden"
    >
      <h2>
        About <span> Me</span>
      </h2>
      <AnimateSharedLayout>
        <Toggle title="Student at NITK">
          <div className="answer">
            <p>
              Hi! I'm Rohan Kumar Pushpam, currently doing my B.Tech in
              Electrical and Electronics Engineering at NIT Karnataka:
              (2020-2024).
            </p>
            <p>I am currently working as Web Developer in NITK Racing Club.</p>
            <a href="https://www.nitk.ac.in/">NIT Karnataka</a>
          </div>
        </Toggle>

        <Toggle title="Interests & Skills">
          <div className="answer">
            <p>
              I have an interest in making websites and User Interface Designs.I
              also like to solve maths and analytical problems.I also made many
              websites namely Weatherapp, Newsletter, Blog-website, Voice
              Recognition App and many more.
            </p>

            <p>
              I have a keen interest in Competitive Programming. To learn about
              algorithms and to apply it in cp contests are the best parts of
              it. I started it in my first year.
            </p>
            <a href="https://www.stopstalk.com/user/profile/LightYaGaMi96">
              CP Handles
            </a>
          </div>
        </Toggle>

        <Toggle title="Tools that I use">
          <div className="answer">
            <p>
              I know C, C++, Javascript as a programming language. I am
              currently learning Data Structures and Algorithms in C++.
            </p>
            <p>
              I also well-familiar with ReactJs, NodeJs ,ExpressJs, JQuery,
              Sass, MongoDB, Git n GitHub, Mongoose , Figma , Bootstrap, Latex.
            </p>

            <a href="https://github.com/rohandevray?tab=repositories">
              GitHub Repositories
            </a>
          </div>
        </Toggle>
        {/* <Toggle title="What Products do you offer">
          <div className="answer">
            <p>Lorem ipsum dolor sit amet.</p>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores
              voluptatibus eum necessitatibus disti.
            </p>
          </div>
        </Toggle> */}
      </AnimateSharedLayout>
    </Faq>
  );
};

const Faq = styled(About)`
  display: block;
  span {
    font-weight: lighter;
  }

  cursor: pointer;

  h2 {
    font-weight: lighter;
    padding-bottom: 2rem;
  }
  .faq-line {
    background: #cccccc;
    height: 0.2rem;
    margin: 2rem 0;
    width: 100%;
  }
  .question {
    padding: 3rem 0;
  }
  .answer {
    padding: 2rem 0;
    p {
      padding: 1rem 0;
    }
  }
`;
export default FaqSection;
