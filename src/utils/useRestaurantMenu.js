import { useEffect, useState } from "react";
import { MENU_URL } from "./constants.js";

const useRestaurantMenu = (resId) => {
  const [resInfo, setResInfo] = useState(null);
  const [resMenu, setResMenu] = useState(null);

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
  };
  return { resInfo, resMenu };
};

export default useRestaurantMenu;
