import { useState, useEffect } from "react";
import RestaurentCard from "./RestaurentCard";
import Shimmer from "./Shimmer";
// dont use index as key its a bad practice,use unique as a key its a good practice
const RestaurentContainer = () => {
  const [listOfRestaurent, setlistOfRestaurent] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [searchText, setSearchText] = useState(""); //only for git push

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.65200&lng=77.16630&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();
    console.log(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setlistOfRestaurent(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  // if(listOfRestaurent.length===0){
  //   return  <Shimmer/>
  // }

  return listOfRestaurent.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="RestaurentContainer">
      <div className="iambutton">
        <div className="searchhere">
          <input
            type="text"
            className="searchbox"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <br />
          <button
            className="search-fiter-button"
            onClick={() => {
              const filteredListofResnt = listOfRestaurent.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              console.log(filteredListofResnt);
              setlistOfRestaurent(filteredListofResnt);
            }}
          >
            Search
          </button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = listOfRestaurent.filter(
              (res) => res.info.avgRating > 4
            );
            setlistOfRestaurent(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="container-flex">
        {listOfRestaurent.map((restaurant) => (
          <RestaurentCard key={restaurant.id} resObj={restaurant} />
        ))}
      </div>
    </div>
  );
};
export default RestaurentContainer;
