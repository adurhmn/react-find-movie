import React, { Component } from "react";
import FilterList from "./filterList";

class Filter extends Component {
  constructor(props) {
    super(props);
    this.filterClickHandler = this.filterClickHandler.bind(this);
    this.state = {
      visible: false,
    };
  }

  filterClickHandler() {
    this.setState((prevState) => {
      if (prevState.visible) this.props.filterResetHandler(); // if filter tab is closed, reset all filters to default
      return { visible: !prevState.visible };
    });
  }

  render() {
    return (
      <div className="filter-box">
        <div className="filter" onClick={this.filterClickHandler}>
          <span>Filters</span>
          <i className="fa-solid fa-filter"></i>
        </div>
        <FilterList
          visible={this.state.visible}
          filterChangeHandler={this.props.filterChangeHandler}
        />
      </div>
    );
  }
}

export default Filter;
