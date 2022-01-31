import styled from 'styled-components';

export const FavoritesContainer = styled.div`
  max-width: 1200px;
  height: 100vh;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  padding: 2rem;
  color: #fff;
  @media screen and (max-width: 600px) and (min-width: 320px) {
    flex-direction: column;
    width: 100%;
    align-items: center;
  }
`;

export const FavoritesList = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-content: space-around;
  @media screen and (max-width: 600px) and (min-width: 320px) {
    display: flex;
    flex-direction: column;
    width: 100%;
    justify-content: center;
    align-items: center;
  }
`;
