// import { resData } from "../utils/mockData";
import RestaurentCard from "./RestaurentCard";
// dont use index as key its a bad practice,use unique as a key its a good practice
const RestaurentContainer = () => {
  const listOfRestaurent = [
    {
      data: {
        id: "256139",
        name: "koki restaurent",
        cloudinaryImageId:
          "RX_THUMBNAIL/IMAGES/VENDOR/2024/4/17/2ce18342-6c04-4ebc-9725-788819ddaa56_256139.JPG",

        costForTwo: "₹250 for two",
        cuisines: ["Bakery", "Beverages", "Sweets"],
        avgRating: 4.6,

        deliveryTime: 36,
      },
      data: {
        id: "256140",
        name: "Rajaji ki Haveli",
        cloudinaryImageId:
          "RX_THUMBNAIL/IMAGES/VENDOR/2024/4/17/6e97ac8f5c89213610309ef1940afa05",

        costForTwo: "₹250 for two",
        cuisines: ["Bakery", "Beverages", "Sweets"],
        avgRating: 3.5,

        deliveryTime: 36,
      },
    },
  ];
  return (
    <div className="RestaurentContainer">
      {listOfRestaurent.map((restaurant, index) => (
        <RestaurentCard key={restaurant.id} resObj={restaurant} />
      ))}
    </div>
  );
};
export default RestaurentContainer;
