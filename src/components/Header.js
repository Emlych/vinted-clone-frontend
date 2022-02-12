import React from "react";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

const Header = ({
  token,
  setUser,
  setSignupModal,
  setLoginModal,
  search,
  handleInput,
  priceMin,
  handlePriceMin,
}) => {
  //set title search for GET params query

  return (
    <div className="header">
      <div className="header__top">
        <Link to={`/`}>
          <img src={logo} alt="" />
        </Link>

        <div className="filter">
          {/* Searchbar */}

          {/* Filters Paramètres Query ==>  title : String */}
          <input
            type="text"
            name="searchbar"
            id="searchbar"
            placeholder="Recherche des articles"
            value={search}
            onChange={(event) => {
              handleInput(event);
            }}
          />
          {/* Filters Paramètres Query ==>  priceMin : number */}
          <input
            type="number"
            name="priceMin"
            id="priceMin"
            value={priceMin}
            onChange={(event) => {
              handlePriceMin(event);
            }}
          />
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
                  id="openSignup"
                  className="btn white"
                  onClick={() => setSignupModal(true)}
                >
                  S'inscrire
                </button>

                <button
                  id="openLogin"
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
