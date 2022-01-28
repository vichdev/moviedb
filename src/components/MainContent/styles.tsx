import styled, { keyframes } from "styled-components";

export const MovieContainer = styled.div`
  max-width: 1200px;
  height: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  padding: 2rem;
  justify-content: flex-start;
  color: #fff;
`;

export const MainTitle = styled.h1`
  color: var(--red);
  margin-bottom: 1rem;
  text-shadow: 1px 0px 5px #000;
`;

export const PAnimation = keyframes`
0% {width: 0%}
100% {width: 30%}

`;

export const PAnimated = styled.p`
  border: 1px solid #fff;
  margin-bottom: 4rem;
  color: #fff;
  width: 30%;
  animation-name: ${PAnimation};
  animation-duration: 1.8s;
  animation-fill-mode: forwards;
`;

export const MoviesWrapper = styled.div`
  display: flex;
`;

export const Movie = styled.div<{ isActive?: boolean }>`
  display: flex;
  position: relative;
  flex-direction: column;
  width: 100%;
  max-width: 300px;
  height: 530px;
  box-shadow: 0px 0px 50px 5px #000;
  cursor: pointer;

  &:hover {
    box-shadow: 0px 0px 5px 1px var(--red);
    svg {
      display: block;
    }
  }
  svg {
    position: absolute;
    float: right;
    top: 10px;
    right: 10px;
    color: ${(props) => (props.isActive ? "yellow" : "#fff")};
    z-index: 10;
    font-size: 20px;
    transition: 0.3s;
    display: none;
    &:hover {
      color: yellow;
    }
  }
`;

export const MovieDescriptionWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  align-items: center;
  background-color: #1b1b1b;
  justify-content: space-around;
`;

export const MovieImg = styled.img`
  z-index: 9;
  svg {
    display: block;
  }
`;

export const MovieTitle = styled.h2`
  font-size: 1.5rem;
  color: #fff;
`;

export const MovieOverview = styled.p``;

export const MovieRating = styled.p<{ color?: string }>`
  font-size: 1rem;
  font-weight: bold;
  text-align: center;
  padding: 9px;
  color: ${(props) => (props.color ? props.color : "#fff")};
  background-color: rgba(0, 0, 0, 0.5);
`;

export const MoviePopularity = styled.p``;
