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
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.65200&lng=77.16630&restaurantId=253714&catalog_qa=undefined&submitAction=ENTER"
    );
    const json = await data.json();
    console.log(json.data);

    console.log("this is you are searching for",
      resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
        ?.card || {}
    );
    setResInfo(json.data);
  };
  if  (resInfo === null )return
    <Shimmer />;
  
  const { name, price, imageId } =
  resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
  ?.card  
      // resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card
      // ?.itemCards[0]?.card?.info || {};

      const { itemCards  } =
      resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
      console.log(itemCards)

  return    (
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
        
        {/* <h3>{itemCards[0].card.info.name}</h3>
        <h3>{itemCards[1].card.info.name}</h3>
        <h3>{itemCards[2].card.info.name}</h3>
        <h3>{itemCards[3].card.info.name}</h3> */}
      </div>
      <div>
        <p>{price / 100}.00 for two persons</p>
      </div>
    </div>
  );
};

export default RestaurantMenu;
