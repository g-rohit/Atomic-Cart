import EachProdDetailsBtn from './Buttons/EachProdDetailsBtn';

export default function CardForEachItemInCart({ eachItem }) {
  const USD_TO_INR = 95;
  return (
    <div className="bg-white border transition-all duration-300 m-2 p-3 rounded-xl shadow-sm overflow-hidden flex flex-col items-center gap-4 border-gray-200 w-full max-w-[320px] mx-auto">
      {/* Product Image */}
      <div className="w-28 h-28 flex justify-center items-center">
        <img
          src={eachItem?.image}
          alt={eachItem?.title}
          className="h-full max-w-full object-contain"
        />
      </div>

      {/* Product Details */}
      <div className="flex-1 w-full min-w-0 text-center">
        <h2 className="font-semibold text-gray-900 text-sm break-words leading-5 px-1 line-clamp-2">
          {eachItem?.title}
        </h2>
        <p className="text-red-800 font-semibold text-sm mt-1">₹{Math.round(eachItem?.price * USD_TO_INR)}</p>
        {/* <p className='mt-2 text-2xl'>Quantity: </p> */}
      </div>



      {/* Action Buttons */}
      <div className="flex flex-col gap-2 w-full mt-2 items-stretch">
        <EachProdDetailsBtn id={eachItem?.id} />

        <button className="px-4 py-3 text-xs font-semibold text-white bg-red-900 rounded-md hover:bg-red-700 shadow-sm transition-colors w-full cursor-pointer">
          Remove
        </button>
      </div>
    </div>
  );
}
