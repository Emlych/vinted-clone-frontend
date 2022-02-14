import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Hero from "../components/Hero";
import CardProduct from "../components/CardProduct";

const Home = ({ params, signupModal }) => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  // const

  // Fetch data from Vinted API
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          // "https://vinted-clone-eld.herokuapp.com/offers"
          "https://lereacteur-vinted-api.herokuapp.com/offers",
          {
            params: {
              title: params.title,
              priceMin: params.priceMin,
              priceMax: params.priceMax,
              sort: params.sort,
            },
          }
        );
        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log("error ===>", error.message);
      }
    };
    fetchData(params);
  }, [params]);
  return (
    <div>
      <Hero />
      {isLoading ? (
        <span>En cours de chargement...</span>
      ) : (
        <div className="home">
          <div className="offers">
            {data.offers.map((item) => {
              return (
                <div key={item._id}>
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
