import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const ModalContainer = styled.div<{ isOpen: boolean }>`
  width: 100%;
  height: 100vh;
  position: absolute;
  top: 0;
  right: 0;
  z-index: 10;
  background-color: rgba(0, 0, 0, 0.5);
  display: ${(props) => (props.isOpen ? 'flex' : 'none')};
  align-items: center;
  justify-content: center;
  overflow-y: hidden;
`;

export const ModalContent = styled.div<{ isOpen: boolean }>`
  width: 300px;
  height: 300px;
  background: var(--background);
  display: ${(props) => (props.isOpen ? 'flex' : 'none')};
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  border-radius: 1rem;
  position: relative;
  padding: 1.5rem;
  overflow-y: hidden;
  svg {
    position: absolute;
    color: #fff;
    font-size: 2rem;
    right: 1.5rem;
    top: 1.5rem;
    cursor: pointer;
    background: transparent;
    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.9);
    }
  }
`;

export const SearchWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  height: 90px;
`;

export const SearchButton = styled.button`
  width: 100px;
  color: #fff;
  font-size: 1rem;
  border-radius: 9999em;
  border: 1px solid var(--red);
  padding: 0.5rem;
  background-color: #121212;
`;

export const SearchInput = styled.input`
  height: 40px;
  border: 1px solid var(--red);
  background: none;
  border-radius: 9999px;
  padding: 1rem;
  color: #a39f9f;
  font-size: 1rem;
  font-weight: bold;
  align-items: center;
  ::-webkit-search-cancel-button {
    display: none;
  }
`;

export const FavoritesButton = styled(Link)`
  width: 120px;
  color: #fff;
  font-size: 1rem;
  border-radius: 9999em;
  border: 1px solid var(--red);
  padding: 0.5rem;
  background-color: #121212;
  text-align: center;
`;
