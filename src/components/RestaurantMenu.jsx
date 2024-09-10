import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import { CHILD_OF_CARD_CID_RESMENU_COMP } from "../utils/constant";
import useRestaurentMenu from "../utils/useRestaurentMenu";


const RestaurantMenu = () => {
  // const [resInfo, setResInfo] = useState();
  const { resId } = useParams();

  const resInfo =useRestaurentMenu(resId);



  // useEffect(() => {
  //   fetchMenu();
  // }, []);

  // const fetchMenu = async () => {
  //   const data = await fetch(CHILDCARD_ID_USEPARAMS + resId);
  //   const json = await data.json();
  //   console.log(json.data);

  //   console.log(
  //     "this is you are searching for",
  //     resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
  //       ?.card || {}
  //   );
  //   setResInfo(json.data);
  // };
  if (resInfo === null) return;
  <Shimmer />;

  const { name, price, imageId } =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card
      ?.itemCards[0]?.card?.info || {};

  // resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card
  // ?.itemCards[0]?.card?.info || {};

  const { itemCards } =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
      ?.card || [];
  console.log("this is itemcard console", itemCards);

  return (
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
        {itemCards &&
          itemCards.map((item) => (
            <li key={item?.card?.info?.id}>
              {item?.card?.info?.name}-{"Rs."}-
              {item?.card?.info?.price / 100 ||
                item?.card?.info?.finalPrice / 100}
            </li>
          ))}
      </div>
      <div>
        <p>{price / 100}.00 for two persons</p>
      </div>
    </div>
  );
};

export default RestaurantMenu;
