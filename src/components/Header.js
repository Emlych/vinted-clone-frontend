import React from "react";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import Cookies from "js-cookie";

const Header = () => {
  const tokenCookie = Cookies.get("token");
  console.log(tokenCookie.length);

  const disconnect = () => {
    Cookies.remove(tokenCookie);
    console.log("Token deleted : ", tokenCookie);
    console.log(Cookies.get("tokenCookie"));
  };
  return (
    <div className="header">
      <div className="header__top">
        <Link to={`/`}>
          <img src={logo} alt="" />
        </Link>

        <div className="header__interaction">
          <div className="interaction--left">
            {tokenCookie.length > 0 ? (
              <button onClick={disconnect}>Disconnect</button>
            ) : (
              <div className="">
                <Link to={`/signup`}>
                  <button className="btn white">S'inscrire</button>
                </Link>
                <Link to={`/login`}>
                  <button className="btn white">Se connecter</button>
                </Link>
              </div>
            )}
          </div>

          <button className="btn primary">Vends tes articles</button>
        </div>
      </div>
    </div>
  );
};

export default Header;
