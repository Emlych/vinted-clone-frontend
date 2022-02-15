import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Hero from "../components/Hero";
import CardProduct from "../components/CardProduct";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";

const Home = ({ params }) => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [page, setPage] = useState(1);
  // Fetch data from Vinted API
  useEffect(() => {
    const fetchData = async () => {
      console.log(params);
      try {
        const response = await axios.get(
          "https://vinted-clone-eld.herokuapp.com/offers",
          // "https://lereacteur-vinted-api.herokuapp.com/offers",
          {
            params: {
              title: params.product_name,
              priceMin: params.priceMin,
              priceMax: params.priceMax,
              sort: params.sort,
              limit: 8,
              page: page,
            },
          }
        );
        // const response = await axios.get(
        //   `https://vinted-clone-eld.herokuapp.com/offers?title=${params.product_name}&sort=${params.sort}&priceMin="${params.priceMin}&priceMax="${params.priceMax}&limit=8&page=${page}`
        // );
        console.log("response data ===>", response.data);
        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log("error ===>", error.message);
      }
    };
    fetchData(params);
  }, [params, page]);
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
          {/* Add pagination conditions */}
          <div className="pages">
            {page === 1 ? (
              <div className="page white">
                <FontAwesomeIcon icon={faAngleLeft} />{" "}
              </div>
            ) : (
              <button
                className="btn primary"
                onClick={() => page >= 2 && setPage(page - 1)}
              >
                Previous
              </button>
            )}

            <div className="page">{page}</div>
            {page === Math.ceil(data.count / 8) ? (
              ">"
            ) : (
              <button
                className="btn primary"
                onClick={() => page <= data.count / 8 && setPage(page + 1)}
              >
                Next
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
