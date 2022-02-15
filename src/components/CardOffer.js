//Reste à faire : css flex
import React from "react";
import { Link } from "react-router-dom";
import Cookies from "js-cookie";
import Home from "../pages/Home";
import profilePic from "../assets/profilePic.svg";

const CardOffer = ({ data, setLoginModal }) => {
  return (
    <div className="offer">
      <div className="offer__img">
        <img src={data.product_image.url} alt={data.product_name} />
      </div>
      <div className="offer__infos">
        <div className="infos--price">{data.product_price} €</div>
        <div className="infos--details">
          {data.product_details.map((item, index) => {
            return (
              <div className="infos--details--line" key={index}>
                <span className="grey">{Object.keys(item)}</span>
                <span className="darkgrey">{Object.values(item)}</span>
              </div>
            );
          })}
        </div>

        <div className="offer__block">
          <div className="block--name">{data.product_name}</div>
          <div className="block--description">{data.product_description}</div>
          <div className="block--user">
            {data.owner.account.avatar ? (
              <img src={data.owner.account.avatar.url} alt="avatar" />
            ) : (
              <img src={profilePic} alt="default profile" />
            )}

            <div className="user--name">{data.owner.account.username}</div>
          </div>
        </div>
        {Cookies.get("userToken") ? (
          <Link
            to={`/payment`}
            state={{ title: data.product_name, price: data.product_price }}
          >
            <button>Acheter</button>
          </Link>
        ) : (
          //open modal
          <Home setLoginModal={setLoginModal(true)} />
        )}
      </div>
    </div>
  );
};

export default CardOffer;
