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
        Any Questions <span>FAQ</span>
      </h2>
      <AnimateSharedLayout>
        <Toggle title="How Do I Start?">
          <div className="answer">
            <p>Lorem ipsum dolor sit amet.</p>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores
              voluptatibus eum necessitatibus disti.
            </p>
          </div>
        </Toggle>

        <Toggle title="Daily Schedule">
          <div className="answer">
            <p>Lorem ipsum dolor sit amet.</p>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores
              voluptatibus eum necessitatibus disti.
            </p>
          </div>
        </Toggle>

        <Toggle title="Different Payment Methods">
          <div className="answer">
            <p>Lorem ipsum dolor sit amet.</p>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores
              voluptatibus eum necessitatibus disti.
            </p>
          </div>
        </Toggle>

        <Toggle title="What Products do you offer">
          <div className="answer">
            <p>Lorem ipsum dolor sit amet.</p>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores
              voluptatibus eum necessitatibus disti.
            </p>
          </div>
        </Toggle>
      </AnimateSharedLayout>
    </Faq>
  );
};

const Faq = styled(About)`
  display: block;
  span {
    display: block;
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
