import React, { useState, useEffect } from "react";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import Cookies from "js-cookie";

const Header = ({ openModal }) => {
  //Connected status
  const [isConnected, setIsConnected] = useState(false);
  const disconnect = () => {
    Cookies.remove("token");
    setIsConnected(false);
  };
  useEffect(() => {
    if (Cookies.get("token")) {
      setIsConnected(true);
    }
  }, []);

  return (
    <div className="header">
      <div className="header__top">
        <Link to={`/`}>
          <img src={logo} alt="" />
        </Link>

        <div className="header__interaction">
          <div className="interaction--left">
            {isConnected ? (
              <button className="btn pink" onClick={disconnect}>
                Se déconnecter
              </button>
            ) : (
              <div className="">
                <Link to={`/signup`}>
                  <button className="btn white" onClick={openModal}>
                    S'inscrire
                  </button>
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
