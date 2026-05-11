import { useSelector } from "react-redux";
import Navbar from "../components/Navbar";
import CardForEachItemInCart from "../components/CardForEachItemInCart";

export default function Cart() {
  const cartItems = useSelector((state) => {
    return state.cart.items;
  });

  console.log({ cartItems });

  return (
    <div>
      <Navbar />

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
          <h2 className="md:text-3xl font-bold text-blue-400 text-center">
            Item's in your cart
          </h2>

          <div className="w-full mx-auto px-2 flex flex-wrap m-3 justify-center align-middle">
            {cartItems.map((eachItem) => (
              <CardForEachItemInCart key={eachItem.id} eachItem={eachItem}/>
            ))}
          </div>
        </div>

        // <AllDetailsForGivenItem givenItem={{cartItems}} />
      )}

      {/* <div>{cartItems?.map(eachitem=>eachitem))}</div> */}
    </div>
  );
}

