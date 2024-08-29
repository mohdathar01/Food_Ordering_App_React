
const RestaurentCard = (props) => {
  const { resObj } = props;

  return (
    <div className="RestaurentCard">
      
      <div className="img-container-res-card">
        <img
          className="img-container-res-card2"
          src={
            "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/6116a2736e177c4a872d11a9d077584a"
          }
          alt=""
        />
      </div>
      <div className="res-name-container">
        <h4>{resObj.name}</h4>
        
        {/* <h4>{resObj.cuisines.join(",")}</h4> */}
      </div>

      <div className="foods">
        <h4>{resObj.locality}  </h4>
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
