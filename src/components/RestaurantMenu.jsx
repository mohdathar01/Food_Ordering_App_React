import React from "react";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { CHILD_OF_CARD_CID_RESMENU_COMP } from "../utils/constant";

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState();

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(
      "https://corsproxy.io/?https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.65200&lng=77.16630&restaurantId=253714&catalog_qa=undefined&submitAction=ENTER"
    );
    const json = await data.json();
    console.log(json.data);

    console.log(
      resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
        ?.card?.itemCards[0]?.card?.info || {}
    );
    setResInfo(json.data);
  };
  const { name, price, imageId } =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card
      ?.itemCards[0]?.card?.info || {};

  return resInfo === null ? (
    <Shimmer />
  ) : (
    <div className="resmenu">
      <div>
        <img
          className="imgofresmenu"
          src={CHILD_OF_CARD_CID_RESMENU_COMP + imageId}
          alt=""
        />
      </div>
      <div className="nameofresmenu">
        <h2 className="namee">{name}</h2>
      </div>
      <div className="sweets">
        <h3>Laddu</h3>
        <h3>Gulab Jamun</h3>
        <h3>Samosa</h3>
        <h3>Kuch nhi</h3>
      </div>
      <div>
        <p>{price / 100}.00 for two persons</p>
      </div>
    </div>
  );
};

export default RestaurantMenu;
