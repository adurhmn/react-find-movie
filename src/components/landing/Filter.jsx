import React, { Component, useContext } from "react";
import { FilterContext } from "../context/filter-state-manager";
import FilterList from "./FilterList";

const Filter = function (props) {
  const filterData = useContext(FilterContext);

  return (
    <div className="filter-box">
      <div className="filter" onClick={filterData.filterVisiblityHandler}>
        <span>Filters</span>
        <i className="fa-solid fa-filter"></i>
      </div>
      {props.children}
    </div>
  );
};

export default Filter;
