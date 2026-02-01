import {Link} from "react-router-dom"
export default function NotFoundPage() {
  return (
    <div className="bg-blue-950 w-full h-svh flex justify-center items-center flex-col">
      <h1 className="text-3xl text-red-300 font-bold">Page not foundddddd !!!</h1>
      <Link to={"/"}>
        <button className="my-6 p-3 bg-blue-800 text-blue-100 hover:cursor-pointer">Go back home</button>
      </Link>
    </div>
  );
}
