import { useParams, Link } from "react-router-dom";
import AddToCart from "./Buttons/AddToCart";
import { useEffect, useState } from "react";


function ProductDetails() {

    const { id } = useParams();

   const [products, setProducts] = useState([]);
   const [error, setError] = useState(null);
   const [loading, setLoading] = useState(false);
 
//    console.log(`https://fakestoreapi.com/products/${id}`)
    
  const fetchEachProdDetails = async () => {
    try {
      setLoading(true);
      const response = await fetch(`https://fakestoreapi.com/products/${id}`);
      if (!response.ok) {
        throw new Error("Failed to fetch Products!!");
      }
      const data = await response.json();
    //   console.log('eachProd: ', data);
      setProducts(data);
    } catch (error) {
      setLoading(false);
      setError(
        "Error occured, something went wrong ",
        error.message,
      );
      console.log(error.message)
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchEachProdDetails();
  }, [id]);

  if (loading) {
  return <h1 className="text-3xl p-5 text-center">Loading...</h1>;
}

if (error) {
  return <h1 className="text-3xl text-red-500 p-5 text-center">{error}</h1>;
}

  return (
    
    <>
     {products? <>
      <div className="flex justify-between ">
        <div>
          <h1 className="text-2xl font-extrabold tracking-tight text-red-900 sm:text-3xl m-4 p-4">
            PRODUCT DETAILS:
          </h1>
        </div>
        <div className="m-4 p-4 text-gray-600">
          <Link to={"/"}><span className="mr-2">&larr;</span> Go back </Link>
        </div>
      </div>
      <div
        id="productDetails"
        className="flex flex-col md:flex-row gap-6 m-4 p-4 items-center"
      >
        {/* left section */}
        <div className="product-image-container md:w-1/2 flex justify-center">
          <img
            src={`${ products?.image}`}
            alt="product-name"
            className="max-h-[500px] object-contain"
          />
        </div>
        {/* right section */}
        <div className="md:w-1/2 flex flex-col justify-center h-full mt-4 p-6 ">
          <div className="mt-4 p-6 rounded-2xl shadow-2xl">
            <h2 className="text-2xl font-bold mb-2">
              { products?.title} 
            </h2>

            <h3>
              <span className="font-bold">Price:</span>{" "}
              <span className="text-2xl font-medium text-red-800 sm:text-4xl">
                ${ products?.price} 
              </span>
            </h3>
            <p className="text-wrap mt-5">
              <span className="font-bold">Description: </span>
              { products?.description}
            </p>
            <p className="mt-5">
              <span className="font-bold">Category:</span>{" "}
              <span className="capitalize">{ products?.category}</span>
            </p>
            <p className="mt-3">
              <span className="font-bold">Rating:</span>{" "}
              <span className="text-2xl">⭐ { products?.rating?.rate} / 5</span>
            </p>
            <p className="mt-3">
              <span className="font-bold">Total Ratings:</span>{" "}
              <span className="text-2xl">{ products?.rating?.count}</span>
            </p>
          </div>

          <div className="mt-5">
            <AddToCart/>
          </div>
        </div>
      </div>
     </>: ''}
    </>
  );
}

export default ProductDetails;

// {
//     "id": 1,
//     "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
//     "price": 109.95,
//     "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
//     "category": "men's clothing",
//     "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_t.png",
//     "rating": {
//         "rate": 3.9,
//         "count": 120
//     }
// }
