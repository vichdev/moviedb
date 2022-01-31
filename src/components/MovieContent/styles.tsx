import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const MovieLink = styled(Link)``;

export const Movie = styled.div<{ isActive?: boolean; isFavorite?: boolean }>`
  display: flex;
  position: relative;
  flex-direction: column;
  width: 100%;
  max-width: 300px;
  height: 530px;
  box-shadow: 0px 0px 50px 5px #000;
  cursor: pointer;
  margin-bottom: 4rem;

  &:hover {
    box-shadow: 0px 0px 5px 0.5px var(--red);
    top: -4px;
    svg {
      display: block;
    }
  }
  svg {
    position: absolute;
    float: right;
    top: 10px;
    right: 10px;
    color: ${(props) => (props.isActive ? 'yellow' : 'red')};
    z-index: 10;
    font-size: 20px;
    transition: 0.3s;
    opacity: 0.5;
    display: none;
    &:hover {
      opacity: 1;
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
  font-size: 1rem;
  width: 100%;
  max-width: 200px;
  color: #fff;
`;

export const MovieRating = styled.p<{ color?: string }>`
  font-size: 1rem;
  font-weight: bold;
  justify-content: center;
  border-radius: 50%;
  text-align: center;
  padding: 9px;
  color: ${(props) => (props.color ? props.color : '#fff')};
  background-color: rgba(0, 0, 0, 0.3);
`;
