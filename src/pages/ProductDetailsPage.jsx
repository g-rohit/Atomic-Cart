import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import HandleCartAddOrRemove from "../components/Buttons/HandleCartAddOrRemove";
import AllDetailsForGivenItem from "../components/AllDetailsForGivenItem";

export default function ProductDetailsPage() {
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
      setError("Error occured, something went wrong ", error.message);
      console.log(error.message);
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
      {products ? (
        <>
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2 px-4 py-3">
            <div>
              <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-red-900">
                PRODUCT DETAILS:
              </h1>
            </div>

            <div className="text-gray-600 self-start sm:self-auto">
              <Link
                to={"/"}
                className="inline-flex items-center gap-2 hover:text-black transition-colors duration-200"
              >
                <span>&larr;</span>
                <span>Go back</span>
              </Link>
            </div>
          </div>

          {/* load each product in details */}
          <AllDetailsForGivenItem givenItem={products} />
        </>
      ) : (
        ""
      )}
    </>
  );
}


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
