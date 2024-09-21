import React from "react";
import ItemList from "./ItemList";

const RestaurentCategory = ({ data, showItems, setShowIndex }) => {
  const handleClick = () => {
    setShowIndex(!showItems);
    console.log("clicked");
  };
  return (
    <div>
      {/* {header of rescatogery accordian} */}
      <div className="titleheader">
        <div className="childdataoftheader" onClick={handleClick}>
          <span className="datatitletext">
            {data.title}({data.itemCards.length})
          </span>
          <span>🔽</span>
        </div>
        <div>{showItems && <ItemList items={data.itemCards} />}</div>
      </div>
    </div>
  );
};

export default RestaurentCategory;
