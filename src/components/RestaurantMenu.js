import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_URL } from "../utils/constants.js";
import useRestaurantMenu from "../utils/useRestaurantMenu.js";
import RestaurantCategory from "./RestaurantCategory.js";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const { resInfo, resMenu, categories } = useRestaurantMenu(resId);

  if (resInfo === null || resMenu === null) {
    return <Shimmer />;
  }

  const { name, id, avgRating, costForTwoMessage, cuisines } = resInfo;

  return (
    <div className="text-center">
      <h1 className="font-bold my-6 text-2xl">{name}</h1>
      <p className="font-bold text-lg">
        {cuisines.join(", ")} - {costForTwoMessage}
      </p>
      {categories.map((category) => {
        return (
          <RestaurantCategory
            key={category?.card?.card?.title}
            data={category?.card?.card}
          />
        );
      })}
      {/* <ul>
        {resMenu.map((menu) => {
          return (
            <li key={menu?.card?.info?.id}>
              {menu?.card?.info?.name} - Rs.{" "}
              {menu?.card?.info?.defaultPrice / 100 ||
                menu?.card?.info?.price / 100}
            </li>
          );
        })}
      </ul> */}
    </div>
  );
};

export default RestaurantMenu;
