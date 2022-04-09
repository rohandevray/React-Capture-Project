import React from "react";
import styled from "styled-components";
//import link from react router in place of href (hey! i dont like href anymore)
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";

const Nav = () => {
  const { pathname } = useLocation();
  return (
    <StyledNav>
      <h1>
        <Link id="logo" to="/">
          Rohan
        </Link>
      </h1>
      <ul>
        <li>
          <Link to="/">About Me</Link>
          <Line
            transition={{ duration: 0.75 }}
            initial={{ width: "0%" }}
            animate={{ width: pathname === "/" ? "60%" : "" }}
          />
        </li>
        <li>
          <Link to="/work">Projects</Link>
          <Line
            transition={{ duration: 0.75 }}
            initial={{ width: "0%" }}
            animate={{ width: pathname === "/work" ? "60%" : "" }}
          />
        </li>
        <li>
          <Link to="/contact">Contact</Link>
          <Line
            transition={{ duration: 0.75 }}
            initial={{ width: "0%" }}
            animate={{ width: pathname === "/contact" ? "60%" : "" }}
          />
        </li>
      </ul>
    </StyledNav>
  );
};

const StyledNav = styled.nav`
  min-height: 10vh;
  display: flex;
  justify-content: space-between;
  margin: auto; // this will automatially set the content in middle of container
  align-items: center;
  padding: 1rem 8rem;
  background: #282828;
  position: sticky;
  top: 0;
  z-index: 10;
  //above 3 steps make the nav bar sticky
  a {
    text-decoration: none; //to remove the underline
    color: white;
  }
  ul {
    display: flex;
    list-style: none; //to get rid of dots of unordered list
  }
  #logo {
    font-family: "Lobster", cursive;
    font-size: 1.5rem;
    font-weight: lighter;
  }
  li {
    padding-left: 5rem;
    position: relative;
  }
  @media (max-width: 856px) {
    flex-direction: column;
    padding: 2rem 1rem;
    #logo {
      display: inline-block; //as it is anchor tag (inline element) margin and padding not works
      margin: 1rem;
    }
    ul {
      padding: 2rem;
      justify-content: space-around;
      width: 100%;
      li {
        padding: 0;
      }
    }
  }
`;
const Line = styled(motion.div)`
  height: 0.24rem;
  background: #23d997;
  width: 0%;
  position: absolute;
  bottom: -50%;
  left: 46%;
  border-radius: 5px;
  @media (max-width: 856px) {
    left: 0%;
  }
`;

export default Nav;
