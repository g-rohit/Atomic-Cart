import { useSelector } from "react-redux";
import Navbar from "../components/Navbar";
import CardForEachItemInCart from "../components/CardForEachItemInCart";
import { useMemo } from "react";


export default function Cart() {
  const cartItems = useSelector((state) => {
    return state.cart.items;
  });

const USD_TO_INR = 95;

const cartTotal = useMemo(() => (cartItems ?? []).reduce((acc, curr)=>acc+curr.price*USD_TO_INR, 0), [cartItems]);

  console.log({ cartItems });

  return (
    <div>
      <Navbar />
      {/* When cart if empty */}
      {cartItems == null || cartItems.length === 0 ? (
        <div className="flex v-100 justify-center w-100vh">
          <h1 className="text-3xl text-center text-orange-800 font-bold">
            Wow !! I smell empty Cart !!!
            <br />
            Please continue to shop and we will meet here again.
          </h1>
        </div>
      ) : (
        <div className="flex justify-center flex-col">
          {/* When cart if NOT empty */}
          <h2 className="md:text-3xl font-bold text-blue-400 text-center">
            Item's in your cart
          </h2>
          <p className="text-center my-5">
            Item Total: ₹{" "}
            <span className="text-4xl font-mono font-bold text-green-600">
              {`${cartTotal}`}{" "}
            </span>
          </p>
          <div className="w-full mx-auto px-2 flex flex-wrap m-3 justify-center align-middle">
            {cartItems.map((eachItem) => (
              <CardForEachItemInCart key={eachItem.id} eachItem={eachItem} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
