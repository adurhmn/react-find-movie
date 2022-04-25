import React from "react";

const changeTheme = function () {
  const getRandom = () => {
    // returns random value  60 <= r <= 200 (for lighter shade)
    let r = Math.random();
    if (r < 0.3) r += 0.3;

    return Math.ceil(r * 200);
  };

  document.documentElement.style.setProperty(
    "--color-theme",
    `rgb(${getRandom()}, ${getRandom()}, ${getRandom()})`
  );
};

const ThemeChange = function () {
  return (
    <button className="theme-change" onClick={changeTheme}>
      <i className="fa-solid fa-arrows-rotate"></i>
    </button>
  );
};

export default ThemeChange;
