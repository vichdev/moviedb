import React, { useState } from "react";
import * as Styles from "./styles";
import movie from "../../assets/filme01.jpg";
import { FaStar } from "react-icons/fa";

const MainContent: React.FC = () => {
  const [average, setAverage] = useState<string>("");

  const setAverageColor = (average: number) => {
    if (average >= 8) {
      setAverage("green");
    } else if (average >= 6) {
      setAverage("orange");
    } else {
      setAverage("red");
    }
  };

  return (
    <Styles.MovieContainer>
      <Styles.MainTitle>Mais populares</Styles.MainTitle>
      <Styles.PAnimated />
      <Styles.MoviesWrapper>
        <Styles.Movie>
          <Styles.MovieImg src={movie} />
          <FaStar />
          <Styles.MovieDescriptionWrapper>
            <Styles.MovieTitle>Homem Aranha</Styles.MovieTitle>
            <Styles.MovieRating>9.3</Styles.MovieRating>
          </Styles.MovieDescriptionWrapper>
          <Styles.MovieOverview></Styles.MovieOverview>
        </Styles.Movie>
      </Styles.MoviesWrapper>
    </Styles.MovieContainer>
  );
};

export default MainContent;
