import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const HeaderContainer = styled.div``;

export const Header = styled.header`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  padding: 2rem;
  align-items: center;
  justify-content: space-between;
  color: #fff;
  svg:nth-child(2) {
    display: none;
  }
  @media screen and (max-width: 600px) and (min-width: 320px) {
    justify-content: space-between;
    svg:nth-child(2) {
      display: block;
      width: 80px;
      font-size: 1.5rem;
    }
  }
`;

export const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 300px;
  justify-content: space-around;
  @media screen and (max-width: 600px) and (min-width: 320px) {
    width: 100%;
    max-width: 200px;
    justify-content: space-evenly;
    svg {
      display: block;
      margin-right: 5px;
    }
  }
`;

export const LogoTitle = styled(Link)`
  font-size: 2rem;
  cursor: pointer;
  text-decoration: none;
  color: #fff;
  transition: 0.3s;
  text-shadow: 0.1em 0.1em 0 #000;
  &:hover {
    color: var(--text);
    opacity: 0.8;
  }
  @media screen and (max-width: 600px) and (min-width: 320px) {
    font-size: 1.5rem;
  }
`;

export const HeaderLogo = styled.img`
  width: 90px;
  height: 90px;
  @media screen and (max-width: 600px) and (min-width: 320px) {
    width: 40px;
    height: 40px;
  }
`;

export const MenuWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 400px;
  justify-content: space-evenly;
  svg {
    font-size: 20px;
    color: #fff;
    display: block;
    transition: 0.4s;
    &:hover {
      color: red;
    }
  }
  @media screen and (max-width: 600px) and (min-width: 320px) {
    display: none;
    svg {
      width: 20px;
      display: block;
    }
  }
`;

export const FavoriteButton = styled(Link)`
  @media screen and (max-width: 600px) and (min-width: 320px) {
    svg {
      display: none;
    }
  }
`;

export const FavoriteTitle = styled.h1`
  color: var(--text);
  text-shadow: 0.1em 0.1em 0 #000;

  @media screen and (max-width: 600px) and (min-width: 320px) {
    font-size: 1rem;
  }
`;

export const SearchBox = styled.div`
  background: none;
  height: 40px;
  border-radius: 40px;
  border: 1px solid var(--red);
  padding: 1px;
  align-items: center;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;

  @media screen and (max-width: 600px) and (min-width: 320px) {
    display: none;
  }
`;

export const SearchInput = styled.input`
  height: 40px;
  border: none;
  background: none;
  border-radius: 3px;
  padding: 1rem;
  color: #a39f9f;
  font-size: 1rem;
  font-weight: bold;
  align-items: center;
  ::-webkit-search-cancel-button {
    display: none;
  }
`;

export const SearchButton = styled.button`
  float: right;
  width: 40px;
  height: 40px;
  background: none;
  padding-bottom: 2px;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  svg {
    color: var(--text);
    font-size: 1rem;
    background: none;
    border: none;
  }
`;
