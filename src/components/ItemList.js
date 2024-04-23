import { useDispatch } from "react-redux";
import { CDN_URL } from "../utils/constants";
import { addItem } from "../utils/cartSlice";

const ItemList = ({ items }) => {
  const dispatch = useDispatch();

  const handleAddItem = (item) => {
    // Dispatch an action
    dispatch(addItem(item));
  };

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
                  <button
                    className="p-2 bg-gray-700 text-white mx-16 align-middle shadow-lg rounded-lg"
                    onClick={() => handleAddItem(item)}
                  >
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
                  <button
                    className="p-2 bg-gray-700 text-white mx-16 align-middle shadow-lg rounded-lg"
                    onClick={handleAddItem}
                  >
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
