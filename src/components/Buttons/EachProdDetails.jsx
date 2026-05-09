import { Link } from "react-router-dom";

export default function EachProdDetails({id}) {
  // console.log('eachItem id: ', id);
  return (
    <button className="px-4 py-2 font-semibold text-white bg-red-800 rounded-lg shadow-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-7 cursor-pointer m-2">
      <Link to={`/product-details/${id}`}>Details</Link>
    </button>
  );
}
