import React from "react";
import * as Styles from "./styles";
import logo from "../../assets/logo.svg";
import { FaSearch, FaStar } from "react-icons/fa";

const Header: React.FC = () => {
  return (
    <Styles.HeaderContainer>
      <Styles.Header>
        <Styles.LogoWrapper>
          <Styles.HeaderLogo src={logo} />
          <Styles.LogoTitle>MovieDB</Styles.LogoTitle>
        </Styles.LogoWrapper>
        <Styles.MenuWrapper>
          <Styles.SearchBox>
            <Styles.SearchInput
              type="search"
              placeholder="Procure seu filme aqui..."
            />
            <Styles.SearchButton>
              <FaSearch />
            </Styles.SearchButton>
          </Styles.SearchBox>
          <Styles.FavoriteButton to="/Favorite">
            <FaStar />
          </Styles.FavoriteButton>
        </Styles.MenuWrapper>
      </Styles.Header>
    </Styles.HeaderContainer>
  );
};

export default Header;
