import React, { Component } from "react";
import MovieCard from "./movieCard";
import Loading from "../ui/loading";

class movieCardList extends Component {
  render() {
    if (this.props.loading) return <Loading />;

    if (this.props.movieData === null) return null;

    if (this.props.movieData.length === 0)
      return <p className="no-movie-found">No movie found! 😔</p>;

    return (
      <div className="movie-list">
        {this.props.movieData.map((movie) => (
          <MovieCard
            key={movie.id}
            title={movie.title}
            year={movie.description}
            plot={movie.plot}
            stars={movie.stars}
            image={movie.image}
            imdbRating={movie.imDbRating}
          />
        ))}
      </div>
    );
  }
}

export default movieCardList;
