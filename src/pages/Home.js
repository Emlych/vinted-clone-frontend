import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import CardProduct from "../components/CardProduct";

import { Link } from "react-router-dom";

const Home = () => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  // Fetch data from Vinted API
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://lereacteur-vinted-api.herokuapp.com/offers"
        );
        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error.response);
      }
    };
    fetchData();
  }, []);
  return (
    <div>
      <Header />
      <Hero />
      {isLoading ? (
        <span>En cours de chargement...</span>
      ) : (
        <div className="offers">
          {data.offers.map((item) => {
            return (
              <div>
                {/* Opens Offer on click */}
                <Link to={`/offer/${item._id}`} key={item._id}>
                  <CardProduct item={item} />
                </Link>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Home;
