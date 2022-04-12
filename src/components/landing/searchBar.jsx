import React, { Component } from "react";

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.changeHandler = this.changeHandler.bind(this);
  }

  state = {
    movieName: "",
  };

  changeHandler(e) {
    this.setState({ movieName: e.target.value });
  }

  render() {
    return (
      <div className="search-bar">
        <input
          className="search-bar__input input"
          type="text"
          value={this.state.movieName}
          onChange={this.changeHandler}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              this.props.clickHandler(this.state.movieName);
              this.setState({ movieName: "" });
            }
          }}
        />
        <span
          className="search-bar__btn"
          onClick={() => {
            this.props.clickHandler(this.state.movieName);
            this.setState({ movieName: "" });
          }}
          disabled={this.props.disabled}
        >
          <i className="fa-solid fa-magnifying-glass"></i>
        </span>
      </div>
    );
  }
}

export default SearchBar;
