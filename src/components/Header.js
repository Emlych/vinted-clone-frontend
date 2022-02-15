import React from "react";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faArrowDown,
  faArrowUp,
} from "@fortawesome/free-solid-svg-icons";
import { Range, getTrackBackground } from "react-range";

const Header = ({
  token,
  setUser,
  setSignupModal,
  setLoginModal,
  handleInput,
  priceRange,
  handlePriceRange,
  sort,
  handleSort,
}) => {
  return (
    <div className="header">
      <div className="header__top">
        <Link to={`/`}>
          <img src={logo} alt="" />
        </Link>

        <div className="filter">
          {/* Searchbar */}
          {/* Filters Paramètres Query ==>  title : String */}
          <div className="filter--search">
            <FontAwesomeIcon icon={faSearch} />
            <input
              type="text"
              name="searchbar"
              id="searchbar"
              className="searchbar"
              placeholder="Recherche des articles"
              onChange={(event) => handleInput(event)}
            />
          </div>

          {/* Range */}
          <div className="range">
            <Range
              step={0.5}
              min={1}
              max={500}
              values={priceRange}
              onChange={(priceRange) => handlePriceRange(priceRange)}
              renderTrack={({ props, children }) => (
                <div
                  onMouseDown={props.onMouseDown}
                  onTouchStart={props.onTouchStart}
                  style={{
                    ...props.style,
                    height: "6px",
                    width: "100%",
                    backgroundColor: "#ccc",
                  }}
                >
                  <div
                    ref={props.ref}
                    style={{
                      height: "5px",
                      width: "100%",
                      borderRadius: "4px",
                      background: getTrackBackground({
                        colors: ["#ccc", "#09adb6", "#ccc"],
                        min: 1,
                        max: 500,
                        values: priceRange,
                      }),
                      alignSelf: "center",
                    }}
                  >
                    {children}
                  </div>
                </div>
              )}
              renderThumb={({ index, props }) => (
                <div
                  {...props}
                  style={{
                    ...props.style,
                    height: "12px",
                    width: "12px",
                    borderRadius: "25px",
                    backgroundColor: "#09adb6",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <div
                    style={{
                      position: "absolute",
                      top: "-32px",
                      color: "white",
                      backgroundColor: "#09adb6",
                      padding: "5px 6px",
                      borderRadius: "5px",
                      fontSize: "14px",
                      fontWeight: "400",
                    }}
                  >
                    {priceRange[index]}€
                  </div>
                </div>
              )}
            />
          </div>

          <div className="sort">
            Trier par prix:
            <div className="toggle">
              <button className="switch"></button>
              <button
                onClick={handleSort}
                className={sort === "asc" ? "slider asc" : "slider"}
              >
                {sort === "asc" ? (
                  <FontAwesomeIcon icon={faArrowDown} />
                ) : (
                  <FontAwesomeIcon icon={faArrowUp} />
                )}
              </button>
            </div>
          </div>
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
                  onClick={() => {
                    setSignupModal(true);
                    document.body.style.overflow = "hidden";
                  }}
                >
                  S'inscrire
                </button>

                <button
                  id="openLogin"
                  className="btn white"
                  onClick={() => {
                    setLoginModal(true);
                    document.body.style.overflow = "hidden";
                  }}
                >
                  Se connecter
                </button>
              </div>
            )}
          </div>

          <Link to={"/publish"}>
            <button className="btn primary">Vends tes articles</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
