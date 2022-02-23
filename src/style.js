import styled from "styled-components";
import { motion } from "framer-motion";

export const About = styled(motion.div)`
  //here we can write our normal css
  min-height: 90vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2rem 8rem;
  color: white;
  @media (max-width: 856px) {
    display: block;
    text-align: center;
    padding: 2rem 2rem;
  }
`;

export const Description = styled.div`
  flex: 1;
  z-index: 2;
  padding-right: 5rem;
  h2 {
    font-weight: lighter;
  }
  @media (max-width: 856px) {
    padding: 0;
    button {
      margin: 2rem 0 5rem 0;
    }
  }
`;

export const Image = styled.div`
  flex: 1;
  z-index: 2;
  overflow: hidden; //this is for animation part and we want the image to constrained inside this div only.
  img {
    width: 100%;
    height: 83vh;
    object-fit: cover;
  }
`;

export const Hide = styled.div`
  overflow: hidden;
`;
