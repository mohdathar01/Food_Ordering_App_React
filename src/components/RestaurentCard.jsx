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
        <h4>{resObj.data.name}</h4>
        {/* <h4>{resObj.cuisines.join(",")}</h4> */}
      </div>

      <div className="foods">
        <h4>{resObj.data.locality}</h4>
      </div>
      <div className="Rating">{resObj.data.avgRating} </div>
      <div className="timeofdelivery">
        <h4>{resObj.data.costForTwo}</h4>
        <br />
        <h4>{resObj.data.deliveryTime}</h4>
      </div>
    </div>
  );
};
export default RestaurentCard;
