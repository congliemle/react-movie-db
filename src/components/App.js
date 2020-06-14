import React from "react";
import Header from "../components/elements/Header";
import Home from "./Home";
import { GlobalStyle } from "./styles/GlobalStyle";

function App() {
  return (
    <>
      <Header />
      <Home />
      <GlobalStyle />
    </>
  );
}

export default App;
