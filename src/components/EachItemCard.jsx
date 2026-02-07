export default function EachItemCard({ eachItem }) {
  return (
    <div className="bg-gray-50 border w-[300px] m-2 p-4 rounded-2xl shadow hover:image-scale(1.25x)">
      <div className="text-center w-full overflow-hidden">
        <img
          src={eachItem.image}
          alt={eachItem.title}
          className="h-[200px] w-[150px] mx-auto object-contain"
        />
      </div>
      
      <h2 className="truncate">{eachItem.title}</h2>
      <p>Price: ₹{eachItem.price * 50}</p>
      <p>Category: {eachItem.category}</p>
      <p>Rating: {eachItem.rating.rate}</p>
      {/* <p className="">Description: {eachItem.description}</p> */}

      <button class="px-4 py-2 font-semibold text-white bg-indigo-500 rounded-lg shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-7 cursor-pointer m-2">
        Details
      </button>

      <button class="px-4 py-2 font-semibold text-white bg-gray-500 rounded-lg shadow-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-7 cursor-pointer m-2">
        Add to Cart
      </button>
    </div>
  );
}
