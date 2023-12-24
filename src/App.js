import React from "react";

import {useFilms} from "./hooks/useFilms";

import {Footer} from "./components/ui/Footer";

import GlobalRouter from "./routers/GobalRouter";

import {FilmsContext} from "./context/FilmContext";

function App() {

  const filmsData = useFilms();

  return (
      <FilmsContext.Provider value={{filmsData}}>
          <GlobalRouter />
          <Footer />
      </FilmsContext.Provider>
  );
}

export default App;
