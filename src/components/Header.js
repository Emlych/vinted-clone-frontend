import React from "react";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <div className="header__top">
        <Link to={`/`}>
          <img src={logo} alt="" />
        </Link>

        <div>Some other text</div>
      </div>
    </div>
  );
};

export default Header;
