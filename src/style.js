import styled from "styled-components";

export const About = styled.div`
  //here we can write our normal css
  min-height: 90vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2rem 8rem;
  color: white;
`;

export const Description = styled.div`
  flex: 1;
  z-index: 2;
  padding-right: 5rem;
  h2 {
    font-weight: lighter;
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
