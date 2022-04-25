import React, { useState } from "react";

export const FilterContext = React.createContext();

export default function FilterContextProvider(props) {
  const [filterData, setFilterData] = useState({
    genre: [],
    date: ["", ""],
    language: "any",
    count: 15,
  });
  const [filterVisiblity, setFilterVisiblity] = useState(false);

  const filterVisiblityHandler = function (e) {
    if (e === "forceClose") setFilterVisiblity(false);
    else
      setFilterVisiblity((prevState) => {
        return !prevState;
      });
  };

  const filterResetHandler = function () {
    setFilterData({
      genre: [],
      date: ["", ""],
      language: "any",
      count: 15,
    });
    // console.log("filter reset succesfull");
  };

  const filterChangeHandler = function (e) {
    const fieldName = e.target.name;

    //Genres
    if (fieldName === "genre") {
      if (e.target.checked) {
        setFilterData((prevState) => {
          return { ...prevState, genre: [...prevState.genre, e.target.value] };
        });
      } else {
        setFilterData((prevState) => {
          return {
            ...prevState,
            genre: prevState.genre.filter((g) => g !== e.target.value),
          };
        });
      }
    }

    //From Date
    if (fieldName === "from-date")
      setFilterData((prevState) => {
        return { ...prevState, date: [e.target.value, prevState.date[1]] };
      });

    //To Date
    if (fieldName === "to-date")
      setFilterData((prevState) => {
        return { ...prevState, date: [prevState.date[0], e.target.value] };
      });

    //Language
    if (fieldName === "language")
      setFilterData((prevState) => {
        return { ...prevState, language: e.target.value };
      });

    //Count
    if (fieldName === "count")
      setFilterData((prevState) => {
        return { ...prevState, count: e.target.value };
      });

    // setFilterData((prevState) => {
    //   console.log(prevState);
    //   return prevState;
    // });
  };

  return (
    <FilterContext.Provider
      value={{
        genre: filterData.genre,
        date: filterData.date,
        language: filterData.language,
        count: filterData.count,
        filterVisiblity: filterVisiblity,
        filterResetHandler: filterResetHandler,
        filterChangeHandler: filterChangeHandler,
        filterVisiblityHandler: filterVisiblityHandler,
      }}
    >
      {props.children}
    </FilterContext.Provider>
  );
}
