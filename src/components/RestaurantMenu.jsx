import React from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import RestaurentCategory from "./RestaurentCategory";

import useRestaurentMenu from "../utils/useRestaurentMenu";

const RestaurantMenu = () => {
  // const [resInfo, setResInfo] = useState();
  // const [showItems, setShowItems] = useState();
  const [showIndex, setShowIndex] = useState(null);

  const { resId } = useParams();

  const resInfo = useRestaurentMenu(resId);

  if (resInfo === null) return;
  <Shimmer />;

  const { name, price } =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card
      ?.itemCards[0]?.card?.info || {};

  const categories =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  return (
    <div className="resmenu">
      <div className="nameofresmenu">
        <h2 className="namee">{name}</h2>
      </div>

      <div className="pricee">
        <p>{price / 100}.00 for two persons</p>
        {categories.map((category, index) => (
          <RestaurentCategory
            key={category?.card?.card?.title}
            data={category.card.card}
            showItems={index === showIndex ? true : false}
            setShowIndex={() => setShowIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default RestaurantMenu;
