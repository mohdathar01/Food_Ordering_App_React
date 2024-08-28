const Body = () => {
  return (
    <div className="body">
      <div className=" filter">
        <button
          className="filter-btn"
          onClick={() => {
            console.log("Button Clicked");
          }}
        >
          Top Rated Restaurants
        </button>
        {/* <input type="text" placeholder="search here" /> */}
      </div>
    </div>
  );
};
export default Body;
