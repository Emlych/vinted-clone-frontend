// Home page

import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Hero from "../components/Hero";
import CardProduct from "../components/CardProduct";
//for nested routes use Outlet?
import Signup from "./Signup";
import Login from "./Login";

const Home = ({ signupModal, loginModal, closeModal }) => {
  // States
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  // Fetch data from Vinted API
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          // "https://vinted-clone-eld.herokuapp.com/offers"
          "https://lereacteur-vinted-api.herokuapp.com/offers"
        );
        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log("error ===>", error.message);
      }
    };
    fetchData();
  }, []);
  return (
    <div>
      {/* <Header /> */}
      <Hero />
      {isLoading ? (
        <span>En cours de chargement...</span>
      ) : (
        <div className="home">
          <div className={signupModal ? "modal" : "hide"}>
            <Signup closeModal={closeModal} />
          </div>
          <div className={loginModal ? "modal" : "hide"}>
            <Login />
          </div>

          <div className="offers">
            {/* display a limited number of items with query.limit */}

            {data.offers.map((item) => {
              return (
                <div key={item._id}>
                  {/* Opens Offer when click on CardProduct item */}
                  <Link to={`/offer/${item._id}`}>
                    <CardProduct item={item} />
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
