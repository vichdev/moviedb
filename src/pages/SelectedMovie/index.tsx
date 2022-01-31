import axios from 'axios';
import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../../components/Header';
import SelectedContent from '../../components/SelectedContent';

const SelectedMovie: React.FC = () => {
  return (
    <>
      <Header />
      <SelectedContent />
    </>
  );
};

export default SelectedMovie;
