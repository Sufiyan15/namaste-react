import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_URL } from "../utils/constants.js";
import useRestaurantMenu from "../utils/useRestaurantMenu.js";

const RestaurantMenu = () => {
  // const [resInfo, setResInfo] = useState(null);
  // const [resMenu, setResMenu] = useState(null);

  const { resId } = useParams();
  const { resInfo, resMenu } = useRestaurantMenu(resId);

  // useEffect(() => {
  //   fetchMenu();
  // }, []);

  // const fetchMenu = async () => {
  //   const res = await fetch(
  //     MENU_URL +
  //       resId +
  //       "&catalog_qa=undefined&isMenuUx4=true&submitAction=ENTER"
  //   );
  //   const data = await res.json();
  //   setResInfo(data?.data?.cards[2]?.card?.card?.info);
  //   setResMenu(
  //     data?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
  //       ?.card?.itemCards
  //   );
  //   console.log(resMenu);
  //   console.log(resInfo);
  // };

  if (resInfo === null || resMenu === null) {
    return <Shimmer />;
  }

  const { name, id, avgRating, costForTwoMessage, cuisines } = resInfo;

  return (
    <div className="menu">
      <h1>{name}</h1>
      <p>
        {cuisines.join(", ")} - {costForTwoMessage}
      </p>
      <ul>
        {resMenu.map((menu) => {
          return (
            <li key={menu?.card?.info?.id}>
              {menu?.card?.info?.name} - Rs.{" "}
              {menu?.card?.info?.defaultPrice / 100 ||
                menu?.card?.info?.price / 100}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
