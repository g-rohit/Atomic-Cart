import { Link } from "react-router-dom";

export default function EachProdDetailsBtn({ id }) {
  // console.log('eachItem id: ', id);
  return (
    <Link
      to={`/product-details/${id}`}
      className="inline-block px-6 py-2.5 m-2 bg-gray-500 text-white font-medium text-sm leading-tight uppercase rounded shadow-md hover:bg-gray-700 hover:shadow-lg focus:bg-red-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-900 active:shadow-lg transition duration-150 ease-in-out text-center"
    >
      Details
    </Link>
  );
}
