import React from 'react';
import * as Styles from './styles';
import logo from '../../assets/logo.svg';
import { FaSearch, FaHeart, FaBars } from 'react-icons/fa';
import { useLocation } from 'react-router-dom';
import { useMovieContext } from '../../context/moviecontext';
import ModalMobile from '../ModalMobile';

const Header: React.FC = () => {
  const location = useLocation();
  const { setSearchMovie, fetchSearch, setModal, modal } = useMovieContext();

  return (
    <Styles.HeaderContainer>
      <ModalMobile />
      {location.pathname == '/' || location.pathname == '/SelectedMovie' ? (
        <Styles.Header>
          <Styles.LogoWrapper>
            <Styles.HeaderLogo src={logo} />
            <Styles.LogoTitle to="/">MovieDB</Styles.LogoTitle>
          </Styles.LogoWrapper>
          <FaBars onClick={() => setModal(!modal)} />
          <Styles.MenuWrapper>
            <Styles.SearchBox>
              <Styles.SearchInput
                type="search"
                placeholder="Procure seu filme aqui..."
                onChange={(e) => setSearchMovie(e.target.value)}
              />
              <Styles.SearchButton>
                <FaSearch onClick={fetchSearch} />
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
