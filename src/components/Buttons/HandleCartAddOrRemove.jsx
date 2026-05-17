import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { addToCart, removeFromCart } from "../../reduxStore/slices/cart-slice";

export default function HandleCartAddOrRemove({ eachItem }) {
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
    console.log(`"${eachItem.title}" ---- added to cart successfully`);
    // console.log(eachItem);
  }

  function handleRemoveFromCart() {
    dispatch(removeFromCart(eachItem));
    console.log(`${eachItem.title} ::: removed from cart`);
  }
  return itemExists ? (
    <button
      onClick={handleRemoveFromCart}
      className="ml-3 mt-2 min-w-[140px] h-9 px-3 text-xs sm:text-sm inline-flex items-center justify-center text-center whitespace-nowrap text-white font-semibold rounded-md shadow-md hover:scale-105 transition-all duration-200 cursor-pointer bg-gradient-to-r from-red-500 via-red-700 to-rose-900"
    >
      Remove from Cart
    </button>
  ) : (
    <button
      onClick={handleAddToCart}
      className="ml-3 mt-2 min-w-[140px] h-9 px-3 text-xs sm:text-sm inline-flex items-center justify-center text-center whitespace-nowrap text-white font-semibold rounded-md shadow-md hover:scale-105 transition-all duration-200 cursor-pointer bg-gradient-to-r from-red-500 via-red-700 to-rose-900"
    >
      Add to Cart
    </button>
  );
}
