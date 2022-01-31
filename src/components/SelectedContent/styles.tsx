import styled from 'styled-components';

export const SelectedMovieContainer = styled.div`
  max-width: 1200px;
  height: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  padding: 2rem;
  justify-content: flex-start;
  color: #fff;
  @media screen and (max-width: 600px) and (min-width: 320px) {
    width: 100%;
    justify-content: center;
  }
`;

export const SelectedMovie = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-around;
  align-items: center;
  @media screen and (max-width: 600px) and (min-width: 320px) {
    flex-direction: column;
    width: 100%;
  }
`;

export const InformationWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  height: 300px;
  width: 600px;
  @media screen and (max-width: 600px) and (min-width: 320px) {
    flex-direction: column;
    width: 100%;
  }
`;

export const DescriptionWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
`;

export const SelMovieImg = styled.img`
  box-shadow: 0px 0px 50px 5px #000;
`;

export const SelTitle = styled.h1``;

export const SelOverview = styled.span``;

export const RatingWrapper = styled.div`
  display: flex;
  width: 90px;
  border-radius: 9999em;
  justify-content: space-around;
  align-items: center;
  text-align: center;
  background-color: rgba(0, 0, 0, 0.3);
  svg {
    align-items: center;
    color: yellow;
    margin-right: 5px;
  }
`;

export const SelRating = styled.span<{ color: string }>`
  font-size: 1rem;
  font-weight: bold;
  justify-content: center;
  text-align: center;
  padding: 9px;
  color: ${(props) => (props.color ? props.color : '#fff')};
  text-align: center;
`;

export const SelDate = styled.span`
  border-radius: 9999em;
  text-align: center;
  padding: 9px;
  background-color: rgba(0, 0, 0, 0.3);
  text-align: center;
`;

export const SelPopularity = styled.span`
  border-radius: 9999em;
  text-align: center;
  padding: 9px;
  background-color: rgba(0, 0, 0, 0.3);
`;
