import React from "react";
import Header from "./components/Header";
import { GlobalStyles } from "./styles/globalStyles";

const App: React.FC = () => {
  return (
    <div>
      <GlobalStyles />
      <Header />
    </div>
  );
};

export default App;
