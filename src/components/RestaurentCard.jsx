import { CLOUDNARY_IMAGE_ID } from "../utils/constant";

const RestaurentCard = (props) => {
  const { resObj } = props;
  console.log(resObj?.info);

  return (
    <div className="RestaurentCard">
      <div className="img-container-res-card">
        <img
          className="img-container-res-card2"
          src={CLOUDNARY_IMAGE_ID + resObj?.info?.cloudinaryImageId}
          alt=""
        />
      </div>
      <div className="res-name-container">
        <h4>{resObj.name}</h4>

        {/* <h4>{resObj.cuisines.join(",")}</h4> */}
      </div>

      <div className="foods">
        <h4>{resObj.locality} </h4>
      </div>
      <div className="Rating">{resObj.avgRating} </div>
      <div className="timeofdelivery">
        <h4>{resObj.costForTwo}</h4>
        <br />
        <h4>{resObj.deliveryTime}</h4>
      </div>
    </div>
  );
};
export default RestaurentCard;
