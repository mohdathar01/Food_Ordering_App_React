// import { resData } from "../utils/mockData";
import RestaurentCard from "./RestaurentCard";
import { useState,useEffect } from "react";
// dont use index as key its a bad practice,use unique as a key its a good practice
const RestaurentContainer = () => {
  let [listOfRestaurent,setlistOfRestaurent]=useState( []);
     
  
useEffect(()=>{

  fetchData();
},[])

const fetchData= async()=>{
  const data= await fetch(
   
 "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.65200&lng=77.16630&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");

 const  json=await data.json();
 console.log(json);
};


   
  return (
    <div className="RestaurentContainer">
      <div className="iambutton">
    <button
    className="filter-btn"
      
    onClick={() => {
    const filteredList=listOfRestaurent.filter(
        (res)=>res.avgRating > 4
      );
      setlistOfRestaurent(filteredList);
    }}
  >
    Top Rated Restaurants
  </button>
  </div>
<div>
  
      {listOfRestaurent.map((restaurant ) => (
        <RestaurentCard key={restaurant.id} resObj={restaurant} />
       
        
      ))}
       
      </div>
    </div>
  );
};
export default RestaurentContainer;
