import { Link } from "react-router-dom";

export default function EachProdDetailsBtn({ id }) {
  // console.log('eachItem id: ', id);
  return (
    <Link
      to={`/product-details/${id}`}
      className="flex-1 h-8 px-4 inline-flex items-center justify-center rounded-xl text-sm font-semibold text-white bg-slate-500 hover:bg-slate-800 transition-all duration-200 shadow-md hover:shadow-lg"
    >
      Details
    </Link>
  );
}
