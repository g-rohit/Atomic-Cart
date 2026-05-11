import { useSelector } from "react-redux";
import Navbar from "../components/Navbar";
import AllDetailsForGivenItem from "../components/AllDetailsForGivenItem";

export default function Cart() {
  const cartItems = useSelector((state) => {
    return state.cart.items;
  });

  console.log({ cartItems });

  return (
    <div>
      <Navbar />

      {cartItems != null ? (
        <div className="flex v-100 justify-center w-100vh">
          <h1 className="text-3xl text-center text-orange-800 font-bold">
            Wow !! I smell empty Cart !!!
            <br />
            Please continue to shop and we will meet here again.
          </h1>
        </div>
      ) : (
{
  cartItems
}
        // <AllDetailsForGivenItem givenItem={{cartItems}} />
      )}

      {/* <div>{cartItems?.map(eachitem=>eachitem))}</div> */}
    </div>
  );
}
