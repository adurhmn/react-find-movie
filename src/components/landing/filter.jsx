import React, { Component } from "react";
import FilterList from "./filterList";

class Filter extends Component {
  render() {
    return (
      <div className="filter-box">
        <div className="filter" onClick={this.props.filterVisiblityHandler}>
          <span>Filters</span>
          <i className="fa-solid fa-filter"></i>
        </div>
        <FilterList
          filterData={this.props.filterData}
          filterVisiblity={this.props.filterVisiblity}
          filterChangeHandler={this.props.filterChangeHandler}
          filterResetHandler={this.props.filterResetHandler}
        />
      </div>
    );
  }
}

export default Filter;
