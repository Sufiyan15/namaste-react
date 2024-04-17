import { CDN_URL } from "../utils/constants";

const ItemList = ({ items }) => {
  return (
    <div>
      {items.map((item) => {
        return (
          <div
            key={item.card.info.id}
            className="p-2 m-2 border-gray-200 border-b-2 text-left flex justify-between"
          >
            <div className="w-9/12">
              <div className="py-2">
                <span>{item.card.info.name}</span>
                <span>
                  {" "}
                  - ₹
                  {item.card.info.price / 100 ||
                    item.card.info.defaultPrice / 100}
                </span>
              </div>
              <p className="text-xs">{item.card.info.description}</p>
            </div>
            {item.card.info.imageId ? (
              <div className="w-3/12 px-4">
                <div className="absolute">
                  <button className="p-2 bg-gray-700 text-white mx-16 align-middle shadow-lg rounded-lg">
                    +
                  </button>
                </div>
                <img
                  src={CDN_URL + item.card.info.imageId}
                  className="w-full"
                />
              </div>
            ) : (
              <div className="w-3/12 px-4">
                <div className="absolute">
                  <button className="p-2 bg-gray-700 text-white mx-16 align-middle shadow-lg rounded-lg">
                    Add +
                  </button>
                </div>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default ItemList;
