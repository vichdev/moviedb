import React from 'react';
import { useMovieContext } from '../../context/moviecontext';
import * as Styles from './styles';
import { IoIosClose } from 'react-icons/io';
import { FaSearch } from 'react-icons/fa';

const ModalMobile: React.FC = () => {
  const { modal, setSearchMovie, fetchSearch, setModal } = useMovieContext();
  return (
    <Styles.ModalContainer isOpen={modal!}>
      <Styles.ModalContent isOpen={modal!}>
        <IoIosClose onClick={() => setModal(!modal)} />
        <Styles.SearchWrapper>
          <Styles.SearchInput
            type="search"
            placeholder="Procure seu filme aqui..."
            onChange={(e) => setSearchMovie(e.target.value)}
          />
          <Styles.SearchButton onClick={fetchSearch}>
            Pesquisar
          </Styles.SearchButton>
        </Styles.SearchWrapper>
        <Styles.FavoritesButton
          to="/favorites"
          onClick={() => setModal(!modal)}
        >
          Meus Favoritos
        </Styles.FavoritesButton>
      </Styles.ModalContent>
    </Styles.ModalContainer>
  );
};

export default ModalMobile;
