import styled from "styled-components";

export const HeaderContainer = styled.div``;

export const Header = styled.header`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  padding: 2rem;
  align-items: center;
  justify-content: space-between;
  color: #fff;
`;

export const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 300px;
  justify-content: space-around;
`;

export const LogoTitle = styled.h1`
  font-size: 2rem;
`;

export const HeaderLogo = styled.img`
  width: 90px;
  height: 90px;
`;

export const MenuWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 400px;
  justify-content: space-evenly;
  svg {
    font-size: 20px;
    color: #fff;
    transition: 0.4s;
    &:hover {
      color: var(--red);
    }
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
