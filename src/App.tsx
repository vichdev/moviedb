import React from "react";
import Header from "./components/Header";
import { Context } from "./context/context";
import { GlobalStyles } from "./styles/globalStyles";

const App: React.FC = () => {
  return (
    <Context>
      <GlobalStyles />
      <Header />
    </Context>
  );
};

export default App;
