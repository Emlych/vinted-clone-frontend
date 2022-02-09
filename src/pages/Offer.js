import React from "react";
import Header from "../components/Header";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";

const Offer = () => {
  //Select specific data
  const { id } = useParams();

  //Import Data
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  // Fetch data from Vinted API
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://vinted-clone-eld.herokuapp.com/offer/${id}`
        );
        // const offer = response.data.offers.find((elem) => elem._id === id);
        setData(response.data.offers);
        setIsLoading(false);
      } catch (error) {
        console.log("error of ===>", error.response);
      }
    };
    fetchData();
  }, [id]);

  return (
    <div>
      <Header />
      {isLoading ? (
        <span>En cours de chargement...</span>
      ) : (
        <div className="offer">
          <div className="offer__img">
            <img src={data.product_image.url} alt={data.product_name} />
          </div>
          <div className="offer__infos">
            <div className="infos--price">{data.product_price} €</div>
            <div className="infos--details">
              {data.product_details.map((item, index) => {
                return (
                  <div className="infos--details--line">
                    <span className="grey">{Object.keys(item)}</span>
                    <span className="darkgrey">{Object.values(item)}</span>
                  </div>
                );
              })}
            </div>

            <div className="offer__block">
              <div className="block--name">{data.product_name}</div>
              <div className="block--description">
                {data.product_description}
              </div>
              <div className="block--user">
                <img src={data.owner.account.avatar.url} alt="avatar" />
                <div className="user--name">{data.owner.account.username}</div>
              </div>
            </div>

            <button>Acheter</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Offer;
