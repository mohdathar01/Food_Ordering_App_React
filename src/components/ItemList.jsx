import React from "react";
import { CLOUDNARY_IMAGE_ID } from "../utils/constant";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";

const ItemList = ({ items }) => {
  //hook
  const dispatch = useDispatch();

  const handleAddItem = (item) => {
    //Dispatch an action using a hook known as useDispatch
    dispatch(addItem(item));
  };

  return (
    <div className="maindivofitem">
      {items.map((item) => (
        <div key={item.card.info.id} className="itemsinsideone">
          <div className="divofnameprice">
            <span className="itemcardname">{item.card.info.name}</span>
            <span className="itemcardprice">
              {"-₹"}
              {item.card.info.price
                ? item.card.info.price / 100
                : item.card.info.defaultPrice / 100}
            </span>
          </div>
          <div className="divofpimage">
            <p className="itemdescription">{item.card.info.description}</p>
            <div className="divisimgbtn">
              <img
                className="itemimage"
                src={CLOUDNARY_IMAGE_ID + item.card.info.imageId}
                alt=""
              />
              <button className="btnofitem" onClick={() => handleAddItem(item)}>
                Add +
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
