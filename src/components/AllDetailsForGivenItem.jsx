import HandleCartAddOrRemove from "./Buttons/HandleCartAddOrRemove"
// import { useSelector } from "react-redux"

function AllDetailsForGivenItem({givenItem}) {
  const USD_TO_INR = 95;

  //   const cartItems = useSelector((state) => {
  //   return state.cart.items;
  // });

  // console.log(cartItems);
  // variable array containing ids of the existing items in cart

  // const itemExistsInCart = cartItems.some((item)=>item.id === givenItem.id);

    // console.log('givenItem: ', givenItem.image)
  return (
     <div
        className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-8 lg:gap-12 px-4 py-6 items-center"
      >
        {/* left section */}
        <div className="product-image-container w-full lg:w-[45%] flex justify-center">
          <img
            src={`${ givenItem?.image}`}
            alt="product-name"
            className="max-h-[420px] w-full max-w-md object-contain"
          />
        </div>
        {/* right section */}
        <div className="w-full lg:w-[55%] flex flex-col justify-center">
          <div className="w-full p-6 rounded-2xl shadow-xl border border-gray-100">
            <h2 className="text-2xl font-bold mb-2">
              { givenItem?.title} 
            </h2>

            <h3>
              <span className="font-bold">Price:</span>{" "}
              <span className="text-2xl font-medium text-red-800 sm:text-4xl">
                ₹{Math.round(givenItem?.price * USD_TO_INR)}
              </span>
            </h3>
            <p className="text-wrap mt-5">
              <span className="font-bold">Description: </span>
              { givenItem?.description}
            </p>
            <p className="mt-5">
              <span className="font-bold">Category:</span>{" "}
              <span className="capitalize">{ givenItem?.category}</span>
            </p>
            <p className="mt-3">
              <span className="font-bold">Rating:</span>{" "}
              <span className="text-2xl">⭐ { givenItem?.rating?.rate} / 5</span>
            </p>
            <p className="mt-3">
              <span className="font-bold">Total Ratings:</span>{" "}
              <span className="text-2xl">{ givenItem?.rating?.count}</span>
            </p>
          </div>

          <div className="mt-5">

             
            <HandleCartAddOrRemove eachItem={givenItem}/>
          
          </div>
        </div>
      </div>
  )
}

export default AllDetailsForGivenItem
