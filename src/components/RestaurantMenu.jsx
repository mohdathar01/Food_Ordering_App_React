import React from "react";
// import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import RestaurentCategory from "./RestaurentCategory";
// import { CHILD_OF_CARD_CID_RESMENU_COMP } from "../utils/constant";
import useRestaurentMenu from "../utils/useRestaurentMenu";


const RestaurantMenu = () => {
  // const [resInfo, setResInfo] = useState();
  const { resId } = useParams();

  const resInfo =useRestaurentMenu(resId);
   


 
  if (resInfo === null) return;
  <Shimmer />;
  // const { name, price, imageId } =
  const { name, price  } =resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards[0]?.card?.info || {};
 
   
  // const { itemCards } =
  //   resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
  //     ?.card || [];
 
const categories=resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((c)=>c.card?.card?.["@type"]=== "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");
//  console.log("category concole",categories); 


return (
    <div className="resmenu">
      {/* <div>
        <img
          className="imgofresmenu"
          src={CHILD_OF_CARD_CID_RESMENU_COMP + imageId}
          alt=""
        />
      </div> */}
      <div className="nameofresmenu">
       
        <h2 className="namee">{name}</h2>
      </div>
      {/* <div className="sweets">
        {itemCards &&
          itemCards.map((item) => (
            <li key={item?.card?.info?.id}>
              {item?.card?.info?.name}-{"Rs."}-
              {item?.card?.info?.price / 100 ||
                item?.card?.info?.finalPrice / 100}
            </li>
          ))}
      </div> */}
      <div className="pricee">
        <p>{price / 100}.00 for two persons</p>
        {categories.map((category)=><RestaurentCategory key={category?.card?.card?.title} data={category.card.card}/>)}
      </div>
       
    </div>
  );
};

export default RestaurantMenu;
