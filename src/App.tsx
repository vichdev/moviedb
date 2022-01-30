import React from 'react';
import { Context } from './context/moviecontext';
import { GlobalStyles } from './styles/globalStyles';
import RoutesPages from './routes';
import { BrowserRouter as Router } from 'react-router-dom';

const App: React.FC = () => {
  return (
    <Context>
      <GlobalStyles />
      <Router>
        <RoutesPages />
      </Router>
    </Context>
  );
};

export default App;
