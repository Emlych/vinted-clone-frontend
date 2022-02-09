import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import Header from "../components/Header";
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
        console.log(data.offers);
      } catch (error) {
        console.log(error.response);
      }
    };
    fetchData();
  }, []);
  return (
    <div>
      <Header />
      {isLoading ? (
        <span>En cours de chargement...</span>
      ) : (
        <div className="products">
          {data.offers.map((item, index) => {
            return (
              <Link to={`/product/${item._id}`}>
                <CardProduct item={item} />
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Home;
