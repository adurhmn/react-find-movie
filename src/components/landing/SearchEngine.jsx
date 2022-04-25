import React, { useContext, useState } from "react";
import { FilterContext } from "../context/filter-state-manager";
import Filter from "./Filter";
import FilterList from "./FilterList";
import SearchBar from "./SearchBar";

const SearchEngine = function (props) {
  const [disableSearch, setDisableSearch] = useState(false);
  const { setIsLoading, setMovieData } = props;

  const filterData = useContext(FilterContext);

  const generateURL = function (title) {
    // let url =
    //   "https://imdb-api.com/API/AdvancedSearch/k_swlhmlaw?title_type=feature";
    let url =
      "https://imdb-api.com/API/AdvancedSearch/k_u94oq3k9?title_type=feature";

    //Title
    url += "&title=" + title;

    //Genre
    filterData.genre.length > 0 &&
      (url += "&genres=" + filterData.genre.join(","));

    //Release Date
    (filterData.date[0] || filterData.date[1]) &&
      (url += "&release_date=" + filterData.date[0] + "," + filterData.date[1]);

    //Language
    filterData.language !== "any" &&
      (url += "&languages=" + filterData.language);

    //Count
    filterData.count && (url += "&count=" + Math.abs(filterData.count));

    // console.log(url);
    return url;
  };

  const findMovieHandler = function (movieName) {
    setIsLoading(true);
    setDisableSearch(true);

    const requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch(generateURL(movieName), requestOptions)
      .then((data) => data.json())
      .then((data) => {
        setIsLoading(false);
        setDisableSearch(false);
        setMovieData(data.results);
        // console.log(data.results);
      })
      .catch((err) => console.log(err));
  };

  return (
    <React.Fragment>
      <Filter>{filterData.filterVisiblity ? <FilterList /> : null}</Filter>
      <SearchBar
        clickHandler={(name) => {
          if (!disableSearch) {
            filterData.filterVisiblityHandler("forceClose");
            findMovieHandler(name);
            // makes search button disabled during an ongoing api call
          } else return;
        }}
      />
    </React.Fragment>
  );
};

export default SearchEngine;
