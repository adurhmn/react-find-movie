import React, { Component } from "react";
import Filter from "./filter";
import SearchBar from "./searchBar";
import MovieCardList from "../movieCard/movieCardList";

class Landing extends Component {
  constructor(props) {
    super(props);
    this.findMovieHandler = this.findMovieHandler.bind(this);
    this.filterChangeHandler = this.filterChangeHandler.bind(this);
    this.filterVisiblityHandler = this.filterVisiblityHandler.bind(this);
    this.filterResetHandler = this.filterResetHandler.bind(this);
    this.state = {
      genre: [],
      date: ["", ""],
      language: "any",
      movieData: null,
      count: 20,
      loading: false,
      disableSearch: false,
      filterVisiblity: false,
    };
  }

  generateURL(title) {
    // let url =
    //   "https://imdb-api.com/API/AdvancedSearch/k_swlhmlaw?title_type=feature";
    let url =
      "https://imdb-api.com/API/AdvancedSearch/k_u94oq3k9?title_type=feature";

    //Title
    url += "&title=" + title;

    //Genre
    this.state.genre.length > 0 &&
      (url += "&genres=" + this.state.genre.join(","));

    //Release Date
    (this.state.date[0] || this.state.date[0]) &&
      (url += "&release_date=" + this.state.date[0] + "," + this.state.date[1]);

    //Language
    this.state.language !== "any" &&
      (url += "&languages=" + this.state.language);

    //Count
    this.state.count && (url += "&count=" + Math.abs(this.state.count));

    // console.log(url);
    return url;
  }

  findMovieHandler(movieName) {
    this.setState({ loading: true });
    this.setState({ disableSearch: true });

    const requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch(this.generateURL(movieName), requestOptions)
      .then((data) => data.json())
      .then((data) => {
        this.setState({
          loading: false,
          disableSearch: false,
          movieData: data.results,
        });
        // console.log(data.results);
      })
      .catch((err) => console.log(err));
  }

  filterChangeHandler(e) {
    const fieldName = e.target.name;

    //Genres
    if (fieldName === "genre") {
      if (e.target.checked) {
        this.setState((prevState) => {
          return { genre: [...prevState.genre, e.target.value] };
        });
      } else {
        this.setState((prevState) => {
          return { genre: prevState.genre.filter((g) => g !== e.target.value) };
        });
      }
    }

    //From Date
    if (fieldName === "from-date")
      this.setState((prevState) => {
        return { date: [e.target.value, prevState.date[1]] };
      });

    //To Date
    if (fieldName === "to-date")
      this.setState((prevState) => {
        return { date: [prevState.date[0], e.target.value] };
      });

    //Language
    if (fieldName === "language") this.setState({ language: e.target.value });

    //Count
    if (fieldName === "count") this.setState({ count: e.target.value });
  }

  filterResetHandler() {
    this.setState({
      genre: [],
      date: ["", ""],
      language: "any",
      count: 20,
    });
    // console.log("filter reset succesfull");
  }

  filterVisiblityHandler(e) {
    if (e === "forceClose") this.setState({ filterVisiblity: false });
    else
      this.setState((prevState) => {
        return { filterVisiblity: !prevState.filterVisiblity };
      });
  }

  render() {
    return (
      <React.Fragment>
        <div className="landing">
          <span className="logo">Movie Stack</span>
          <Filter
            filterVisiblity={this.state.filterVisiblity}
            filterVisiblityHandler={this.filterVisiblityHandler}
            filterChangeHandler={this.filterChangeHandler}
            filterData={this.state}
            filterResetHandler={this.filterResetHandler}
          />
          <SearchBar
            clickHandler={(name) => {
              this.filterVisiblityHandler("forceClose");
              this.findMovieHandler(name);
            }}
            disabled={this.state.disableSearch}
          />
        </div>
        <MovieCardList
          movieData={this.state.movieData}
          loading={this.state.loading}
        />
      </React.Fragment>
    );
  }
}

export default Landing;
