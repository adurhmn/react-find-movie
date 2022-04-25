import React, { Component } from "react";

class movieCard extends Component {
  render() {
    return (
      <div className="movie">
        <img
          className="movie-poster"
          src={this.props.image}
          alt="movie-poster"
          loading="lazy"
        />
        <div className="movie-desc">
          <p className="movie-title">
            {this.props.title} {this.props.year}
          </p>
          <p>
            <span className="bold underline">IMDB:</span>&nbsp;
            {this.props.imdbRating}/10
          </p>
          <p>
            <span className="bold underline">Stars:</span>&nbsp;
            {this.props.stars}
          </p>
          <p>
            <span className="bold underline">Plot:</span>&nbsp;{this.props.plot}
          </p>
        </div>
      </div>
    );
  }
}

export default movieCard;
