import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import EachItemCard from "../components/EachItemCard";

export default function Home() {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  // async function funcName(){} OR const name = async = () {}

  const fetchListOfProducts = async () => {
    try {
      setLoading(true);
      const response = await fetch("https://fakestoreapi.com/products");
      if (!response.ok) {
        throw new Error("Failed to fetch Products!!");
      }
      const data = await response.json();
      console.log(data);
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
      <h1 className="text-center font-bold text-3xl my-5">
        Welcome to Atomic Shopping Mart
      </h1>
      {loading && <h1 className="text-gray-600">Loading please wait !!</h1>}

      {error && <h1 className="text-red-600">Somthing wrong !! `${error}` </h1>}

      {!loading && !error && (
        <>
          {/* loading products here */}
          <div className="flex flex-wrap justify-center flex-row">
            {products.map((eachItem, index) => (
              <EachItemCard eachItem={eachItem} key={index} />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
