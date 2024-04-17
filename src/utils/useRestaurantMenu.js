import { useEffect, useState } from "react";
import { MENU_URL } from "./constants.js";

const useRestaurantMenu = (resId) => {
  const [resInfo, setResInfo] = useState(null);
  const [resMenu, setResMenu] = useState(null);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const res = await fetch(
      MENU_URL +
        resId +
        "&catalog_qa=undefined&isMenuUx4=true&submitAction=ENTER"
    );
    const data = await res.json();
    setResInfo(data?.data?.cards[2]?.card?.card?.info);
    setResMenu(
      data?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
        ?.card?.itemCards
    );
    // console.log(
    //   data?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards
    // );
    setCategories(
      data?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
        (c) =>
          c.card?.card?.["@type"] ===
          "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
      )
    );
    // console.log(categories);
  };

  return { resInfo, resMenu, categories };
};

export default useRestaurantMenu;
