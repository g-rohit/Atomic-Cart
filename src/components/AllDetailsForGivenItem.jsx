import AddToCart from "./Buttons/AddToCart"

function AllDetailsForGivenItem({givenItem}) {
    // console.log('givenItem: ', givenItem.image)
  return (
     <div
        className="flex flex-col md:flex-row gap-6 m-4 p-4 items-center"
      >
        {/* left section */}
        <div className="product-image-container md:w-1/2 flex justify-center">
          <img
            src={`${ givenItem?.image}`}
            alt="product-name"
            className="max-h-[500px] object-contain"
          />
        </div>
        {/* right section */}
        <div className="md:w-1/2 flex flex-col justify-center h-full mt-4 p-6 ">
          <div className="mt-4 p-6 rounded-2xl shadow-2xl">
            <h2 className="text-2xl font-bold mb-2">
              { givenItem?.title} 
            </h2>

            <h3>
              <span className="font-bold">Price:</span>{" "}
              <span className="text-2xl font-medium text-red-800 sm:text-4xl">
                ${ givenItem?.price} 
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
            <AddToCart/>
          </div>
        </div>
      </div>
  )
}

export default AllDetailsForGivenItem
