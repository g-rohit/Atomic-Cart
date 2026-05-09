import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import EachItemCard from "../components/EachItemCard";
import { Circles } from "react-loader-spinner";

export default function Home() {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  // async function funcName(){} OR const name = async () => {}

  const fetchListOfProducts = async () => {
    try {
      setLoading(true);
      const response = await fetch("https://fakestoreapi.com/products");
      if (!response.ok) {
        throw new Error("Failed to fetch Products!!");
      }
      const data = await response.json();
      // console.log(data);
      setProducts(data);
    } catch (error) {
      setLoading(false);
      setError(
        "Error occured, something went wrong, Error message: ",
        error.message,
      );
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchListOfProducts();
  }, []);
  return (
    <div>
      <Navbar />

      {/* <h1>This is my Shopping Home Page</h1> */}
      <h1 className="md:text-4xl font-extrabold tracking-tight bg-linear-to-r from-red-900 via-red-800 to-red-600 bg-clip-text text-transparent text-center">
        Welcome to Atomic Shopping Mart
      </h1>

      {loading && (
        // <h1 className="text-gray-600">Loading please wait !!</h1>

        <div className="min-h-screen w-full flex justify-center items-center">
          <Circles
            height={120}
            width={120}
            color="rgb(127,29,29)"
            visible={true}
          />
        </div>
      )}

      {error && <h1 className="text-red-600">Somthing wrong !! `${error}` </h1>}

      {!loading && !error && (
        <>
          {/* loading products here */}
          <div className="flex flex-wrap justify-center flex-row">
            {products.map((eachItem, index) => (
              <EachItemCard eachItem={eachItem} key={index} />
            ))}
          </div>
          <div className="h-50">&nbsp;</div>
        </>
      )}
    </div>
  );
}
