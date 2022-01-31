import styled from 'styled-components';

export const FavoritesContainer = styled.div`
  max-width: 1200px;
  height: 100vh;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  padding: 2rem;
  color: #fff;

  h1 {
    color: #fff;
    font-size: 100px;
  }
`;

export const FavoritesList = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-content: space-around;
`;

export const FavoritesTitle = styled.h1`
  font-size: 0.5rem;
`;
