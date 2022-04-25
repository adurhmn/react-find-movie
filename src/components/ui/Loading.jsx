import React, { Component } from "react";

class Loading extends Component {
  render() {
    return (
      <div className="loader">
        <span className="loader__particle loader__particle--1"></span>
        <span className="loader__particle loader__particle--2"></span>
        <span className="loader__particle loader__particle--3"></span>
      </div>
    );
  }
}

export default Loading;
