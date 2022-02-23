import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useLocation } from "react-router-dom";
import { MovieState } from "../movieState";
//ANimations
import { motion } from "framer-motion";
import { pageTransition } from "../Animation";

const MovieDetail = () => {
  const location = useLocation();
  const url = location.pathname;
  const [movies, setMovies] = useState(MovieState); //this gonna copy the whole moviestate object
  const [movie, setMovie] = useState(null);

  //use  effect
  useEffect(() => {
    const currentMovie = movies.filter((StateMovie) => StateMovie.url === url);
    //comparing the url above from history with the current movie
    setMovie(currentMovie[0]); //we want the first element of array
  }, [movies, url]);

  // we want to run useeffect when movies changes or url changes.
  // this is called dependencies of useEffect

  return (
    <>
      {movie && ( //this means if movie is available and not null(default) then only render the below things
        <Details
          exit="exit"
          variants={pageTransition}
          initial="hidden"
          animate="show"
        >
          <Headline>
            <h2>{movie.title}</h2>
            <img src={movie.mainImg} alt="movie" />
          </Headline>
          <Awards>
            {movie.awards.map((award) => (
              <Award
                title={award.title}
                description={award.description}
                key={award.title}
              />
            ))}
          </Awards>
          <ImageDisplay>
            <img src={movie.secondaryImg} alt="" />
          </ImageDisplay>
        </Details>
      )}
    </>
  );
};

const Details = styled(motion.div)`
  color: white;
`;
const Headline = styled.div`
  min-height: 90vh;
  padding-top: 20vh;
  position: relative;
  h2 {
    position: absolute;
    left: 50%;
    top: 5%;
    transform: translate(-50%, -5%);
  }
  img {
    width: 100%;
    height: 70vh;
    object-fit: cover;
  }
`;

const Awards = styled.div`
  min-height: 80vh;
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin: 5rem 10rem;
  @media (max-width: 856px) {
    display: block;
    width: 70%;
    position: relative;
    left: -6%;
  }
`;

const StyleAward = styled.div`
  padding: 5rem;
  h3 {
    font-size: 1.5rem;
  }
  .line {
    width: 100%;
    background: #23d997;
    height: 0.3rem;
    margin: 1rem 0;
  }
  p {
    font-size: 1.1rem;
    padding: 2rem 0;
  }
`;

const ImageDisplay = styled.div`
  min-height: 50vh;
  img {
    width: 100%;
    height: 100vh;
    object-fit: cover;
  }
`;
//award component creation

const Award = ({ title, description, key }) => {
  return (
    <StyleAward>
      <h3>{title}</h3>
      <div className="line"></div>
      <p>{description}</p>
    </StyleAward>
  );
};

export default MovieDetail;
