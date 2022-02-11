import React from "react";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

const Header = ({ token, setUser, setSignupModal, setLoginModal }) => {
  return (
    <div className="header">
      {console.log("token in header ===>", token)}
      <div className="header__top">
        <Link to={`/`}>
          <img src={logo} alt="" />
        </Link>

        <div className="header__interaction">
          <div className="interaction--left">
            {token ? (
              <button className="btn pink" onClick={() => setUser(null)}>
                Se déconnecter
              </button>
            ) : (
              <div className="">
                <button
                  className="btn white"
                  onClick={() => setSignupModal(true)}
                >
                  S'inscrire
                </button>

                <button
                  className="btn white"
                  onClick={() => setLoginModal(true)}
                >
                  Se connecter
                </button>
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
