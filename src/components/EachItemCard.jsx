import { Link } from "react-router-dom";
import AddToCart from './Buttons/AddToCart'
import EachProdDetailsBtn from './Buttons/EachProdDetailsBtn'

export default function EachItemCard({ eachItem }) {


  return (
    <div className="bg-gray-50 border border-red-800 w-full max-w-75 m-3 p-4 rounded-2xl shadow transition-transform duration-300 hover:bg-red-100 hover:scale-105 hover:shadow-2xl">
      <div className="text-center w-full overflow-hidden">
        <img
          src={eachItem?.image}
          alt={eachItem?.title}
          className="h-[200px] w-[150px] mx-auto object-contain"
        />
      </div>

      <h2 className="truncate">{eachItem?.title}</h2>
      <p>Price: ₹{Math.round(eachItem?.price * 50)}</p>
      <p>Category: {eachItem?.category}</p>
      <p>Rating: {eachItem?.rating?.rate}</p>

     <EachProdDetailsBtn id={eachItem?.id} />

    <AddToCart eachItem={eachItem}/>
    </div>
  );
}
