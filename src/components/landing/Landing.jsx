import React, { useContext, useState } from "react";
import MovieCardList from "../movieCard/MovieCardList";
import FilterContextProvider from "../context/filter-state-manager";
import SearchEngine from "./SearchEngine";
import ThemeChange from "../ui/ThemeChange";

const Landing = function () {
  const [movieData, setMovieData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  return (
    <React.Fragment>
      <div className="landing">
        <ThemeChange />
        <span className="logo">Movie Stack</span>
        <FilterContextProvider>
          <SearchEngine
            setMovieData={setMovieData}
            setIsLoading={setIsLoading}
          />
        </FilterContextProvider>
      </div>
      <MovieCardList movieData={movieData} loading={isLoading} />
    </React.Fragment>
  );
};

export default Landing;
