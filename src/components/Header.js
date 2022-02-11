import React, { useState } from "react";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

const Header = ({ token, setUser, setSignupModal, setLoginModal }) => {
  const [search, setSearch] = useState("");
  const handleInput = (event) => {
    setSearch(event.target.value);
  };
  return (
    <div className="header">
      {console.log("token in header ===>", token)}
      <div className="header__top">
        <Link to={`/`}>
          <img src={logo} alt="" />
        </Link>

        <div className="filter">
          {/* Searchbar */}
          <input
            type="text"
            name="searchbar"
            id="searchbar"
            placeholder="Recherche des articles"
            value={search}
            onChange={handleInput}
          />
          {/* Filters */}
        </div>

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
