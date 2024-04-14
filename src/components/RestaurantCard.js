import { CDN_URL } from "../utils/constants";

const RestaurantCard = ({ resData }) => {
  const { name, cuisines, costForTwo, avgRating, cloudinaryImageId } =
    resData.info;

  const { slaString } = resData.info.sla;

  return (
    <div className="p-4 m-4 w-[250px] bg-slate-100 hover:bg-slate-200 rounded-lg">
      <img
        className="rounded-lg"
        src={CDN_URL + cloudinaryImageId}
        alt="img-logo"
      />
      <h3 className="font-bold py-4 text-lg">{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating} stars</h4>
      <h4>{costForTwo}</h4>
      <h4>{slaString}</h4>
    </div>
  );
};

export default RestaurantCard;
