import React, { useRef } from "react";

const SearchBar = function (props) {
  const movieInput = useRef();

  return (
    <div className="search-bar">
      <input
        className="search-bar__input input"
        type="text"
        ref={movieInput}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            props.clickHandler(movieInput.current.value);
            // movieInput.current.value = "";
          }
        }}
      />
      <span
        className="search-bar__btn"
        onClick={() => {
          props.clickHandler(movieInput.current.value);
          // movieInput.current.value = "";
        }}
        disabled={props.disabled}
      >
        <i className="fa-solid fa-magnifying-glass"></i>
      </span>
    </div>
  );
};

export default SearchBar;
