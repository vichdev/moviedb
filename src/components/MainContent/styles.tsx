import styled, { keyframes } from 'styled-components';

export const MovieContainer = styled.div`
  max-width: 1200px;
  height: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  padding: 2rem;
  justify-content: flex-start;
  color: #fff;
  @media screen and (max-width: 600px) and (min-width: 300px) {
    width: 100%;
    justify-content: center;
    align-items: center;
  }
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
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-content: space-around;
  @media screen and (max-width: 600px) and (min-width: 320px) {
    display: flex;
    flex-direction: column;
  }
`;

export const MoviePopularity = styled.p``;
