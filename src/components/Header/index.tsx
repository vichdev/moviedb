import React from 'react';
import * as Styles from './styles';
import logo from '../../assets/logo.svg';
import { FaSearch, FaHeart } from 'react-icons/fa';
import { useLocation } from 'react-router-dom';
import { useMovieContext } from '../../context/moviecontext';

const Header: React.FC = () => {
  const location = useLocation();
  const { search, setSearch } = useMovieContext();

  const onTextChange = (event: { target: { value: string } }) => {
    setSearch(event.target.value);
  };

  return (
    <Styles.HeaderContainer>
      {location.pathname == '/' || location.pathname == '/SelectedMovie' ? (
        <Styles.Header>
          <Styles.LogoWrapper>
            <Styles.HeaderLogo src={logo} />
            <Styles.LogoTitle to="/">MovieDB</Styles.LogoTitle>
          </Styles.LogoWrapper>
          <Styles.MenuWrapper>
            <Styles.SearchBox>
              <Styles.SearchInput
                type="search"
                placeholder="Procure seu filme aqui..."
                value={search}
                onChange={onTextChange}
              />
              <Styles.SearchButton>
                <FaSearch />
              </Styles.SearchButton>
            </Styles.SearchBox>
            <Styles.FavoriteButton to="/Favorites">
              <FaHeart />
            </Styles.FavoriteButton>
          </Styles.MenuWrapper>
        </Styles.Header>
      ) : (
        <Styles.Header>
          <Styles.LogoWrapper>
            <Styles.HeaderLogo src={logo} />
            <Styles.LogoTitle to="/">MovieDB</Styles.LogoTitle>
          </Styles.LogoWrapper>
          <Styles.FavoriteTitle>Meus favoritos</Styles.FavoriteTitle>
        </Styles.Header>
      )}
    </Styles.HeaderContainer>
  );
};

export default Header;
