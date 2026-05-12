import { useDispatch } from "react-redux";
import { addToCart } from "../../reduxStore/slices/cart-slice";
import { useSelector } from "react-redux";

export default function AddToCart({ eachItem }) {
  const dispatch = useDispatch();

  const cartItems = useSelector((state) => {
    return state.cart.items;
  });

  // console.log(cartItems);
  // variable array containing ids of the existing items in cart
  // let existingItemsInCart = cartItems.map((item) => item.id);
// const itemExists = existingItemsInCart.includes(eachItem.id); 
const itemExists = cartItems.some((item)=> item.id === eachItem.id);
  // console.log("existingItemsInCart: ", existingItemsInCart);
  function handleAddToCart() {
    if (!eachItem) {
      return;
    }
    // dont dispatch the item if its already in cart, so avoid duplicates
    if (itemExists) {
      console.log("Item already exists in cart");
      return;
    }

    dispatch(addToCart(eachItem));
    console.log(`"${eachItem.title}" - added to cart successfully`);
    // console.log(eachItem);
  }

  function handleRemoveFromCart() {
    console.log("remove from cart");
  }
  return itemExists ? (
    <button
      onClick={handleRemoveFromCart}
      className="ml-2 mt-2 px-2 py-1 text-sm inline-flex items-center justify-center  text-white font-medium leading-tight uppercase rounded shadow-md hover:bg-red-800 hover:shadow-lg focus:bg-gray-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-900 active:shadow-lg transition duration-150 ease-in-out cursor-pointer bg-linear-to-r from-red-400 via-red-700 to-rose-900"
    >
      Remove from Cart
    </button>
  ) : (
    <button
      onClick={handleAddToCart}
className="ml-2 mt-2 px-2 py-1 text-sm inline-flex items-center justify-center text-white font-normal rounded shadow-md cursor-pointer bg-linear-to-r from-red-400 via-red-700 to-rose-900"
    >
      Add to Cart
    </button>
  );
}
