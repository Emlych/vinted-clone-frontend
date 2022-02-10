// Home page

import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Hero from "../components/Hero";
import CardProduct from "../components/CardProduct";

const Home = () => {
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
        console.log("error ===>", error.response);
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
        <div className="offers">
          {/* display a limited number of items with query.limit */}
          Display limited number of items
          {data.offers.map((item) => {
            return (
              <div>
                {/* Opens Offer when click on CardProduct item */}
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
