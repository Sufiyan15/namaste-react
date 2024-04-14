import { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);

  const [filteredRestaurant, setFilteredRestaurant] = useState([]);

  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const res = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.740873&lng=75.914689&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const data = await res.json();

    console.log(
      data.data.cards[4].card.card.gridElements.infoWithStyle.restaurants
    );

    setListOfRestaurants(
      data?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestaurant(
      data?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  const handleClick = () => {
    const updatedListOfRestaurants = listOfRestaurants.filter((restaurant) => {
      return restaurant.data.avgRating > 4;
    });
    setListOfRestaurants(updatedListOfRestaurants);
  };

  const handleFilter = () => {
    const updatedFilteredListOfRestaurants = listOfRestaurants.filter((res) => {
      return res.data.name.toLowerCase().includes(searchText.toLowerCase());
    });
    setFilteredRestaurant(updatedFilteredListOfRestaurants);
  };

  const onlineStatus = useOnlineStatus();
  if (!onlineStatus) {
    return (
      <h1>
        Looks like you are offline! Please check your internet connection.
      </h1>
    );
  }

  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="">
      <div className="flex">
        <div className="m-4 p-4">
          <input
            type="text"
            className="border border-solid border-black rounded-lg"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button
            className="px-4 py-2 bg-green-100 m-4 rounded-lg"
            onClick={handleFilter}
          >
            Search
          </button>
        </div>
        <div className="m-4 p-4">
          <button
            className="px-4 py-2 bg-green-100 m-4 rounded-lg"
            onClick={handleClick}
          >
            Top Rated Restaurants
          </button>
        </div>
      </div>
      <div className="flex flex-wrap">
        {filteredRestaurant.map((restaurant) => {
          return (
            <Link
              key={restaurant.info.id}
              to={"/restaurants/" + restaurant.info.id}
            >
              <RestaurantCard resData={restaurant} />
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Body;
