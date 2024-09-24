import { useState, useEffect } from "react";
import RestaurentCard, { withPromotedLabel } from "./RestaurentCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { RES_CONTAINER_API } from "../utils/constant";
import useOnlineStatus from "../utils/useOlnineStatus";
import { useContext } from "react";
import UserContext from "../utils/UserContext";

// dont use index as key its a bad practice,use unique as a key its a good practice
const RestaurentContainer = () => {
  const [listOfRestaurent, setlistOfRestaurent] = useState([]);
  const [filteredListofResnt, setfilteredListofResnt] = useState([]);
  const [searchText, setSearchText] = useState("");

  const RestaurentCardPromoted = withPromotedLabel(RestaurentCard);

  useEffect(() => {
    fetchData();
  }, []);

  // console.log("ye h listof res",listOfRestaurent);
  const fetchData = async () => {
    const data = await fetch(RES_CONTAINER_API);

    const json = await data.json();

    setlistOfRestaurent(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setfilteredListofResnt(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  const onlineStatus = useOnlineStatus();

  if (onlineStatus === false)
    return (
      <h1>
        OOPS!!😤 Looks like you are Offline😒!!!Please check your internet
        connection and try Again
      </h1>
    );
  // if(listOfRestaurent.length===0){
  //   return  <Shimmer/>
  // }

  //for usecontext to update logininnfo when we input something inside input box
  const { loggedInUser, setUserName } = useContext(UserContext);

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
              setfilteredListofResnt(filteredListofResnt);
            }}
          >
            Search
          </button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = listOfRestaurent.filter(
              (res) => res.info.avgRating > 4.5
            );
            setfilteredListofResnt(filteredList);
            console.log(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
        {/* update userName from here using useContext hook */}
        <div className="showusernameininput">
          <label htmlFor="">Your UserName:</label>

          <input
            className="myinputbox"
            type="text"
            value={loggedInUser}
            onChange={(e) => setUserName(e.target.value)}
          />
        </div>
      </div>
      <div className="container-flex">
        {filteredListofResnt.map((restaurant) => (
          <Link
            key={restaurant.info.id}
            to={"/restaurantsmenu/" + restaurant.info.id}
          >
            {restaurant.info.isOpen ? (
              <RestaurentCardPromoted resObj={restaurant} />
            ) : (
              <RestaurentCard resObj={restaurant} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};
export default RestaurentContainer;
