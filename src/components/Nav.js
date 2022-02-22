import React from "react";
import styled from "styled-components";
//import link from react router in place of href (hey! i dont like href anymore)
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <StyledNav>
      <h1>
        <Link id="logo" to="/">
          Capture
        </Link>
      </h1>
      <ul>
        <li>
          <Link to="/">1. About Us</Link>
        </li>
        <li>
          <Link to="/work">2. Our Work</Link>
        </li>
        <li>
          <Link to="/contact">3. Contact Us</Link>
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
`;

export default Nav;
