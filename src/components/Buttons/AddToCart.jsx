import { useDispatch } from "react-redux";
import { addToCart } from "../../reduxStore/slices/cart-slice";

export default function AddToCart({ eachItem }) {
  const dispatch = useDispatch();

  function handleAddToCart() {
    if (!eachItem) {
      return;
    }
    dispatch(addToCart(eachItem));
    console.log(`"${eachItem.title}" - added to cart successfully`)
    // console.log(eachItem);
  }
  return (
    <button
      onClick={handleAddToCart}
      className="inline-flex items-center justify-center px-4 py-2.5 text-white font-medium text-sm leading-tight uppercase rounded shadow-md hover:bg-red-800 hover:shadow-lg focus:bg-gray-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-900 active:shadow-lg transition duration-150 ease-in-out cursor-pointer bg-linear-to-r from-red-400 via-red-700 to-rose-900"
    >
      Add to Cart
    </button>
  );
}
