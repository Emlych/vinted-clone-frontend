import React from "react";
import logo from "../assets/logo.png";
import hero from "../assets/hero.jpg";

const Header = () => {
  return (
    <div className="header">
      <div className="header__top">
        <img src={logo} alt="" />
        <div>Some other text</div>
      </div>
      <div className="header__hero">
        <img src={hero} alt="" />
      </div>
    </div>
  );
};

export default Header;
