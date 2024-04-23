import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  const { items } = useSelector((store) => store.cart);
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(clearCart());
  };

  return (
    <div className="m-4 p-4 text-center">
      <h1 className="text-2xl font-bold">Cart</h1>
      <div className="w-6/12 m-auto">
        {items.length === 0 ? (
          <h1>Cart is empty , please add items to the cart!</h1>
        ) : (
          <button
            className="p-2 m-2 bg-gray-600 rounded-lg text-white"
            onClick={handleClick}
          >
            Clear Cart
          </button>
        )}
        <ItemList items={items} />
      </div>
    </div>
  );
};

export default Cart;
