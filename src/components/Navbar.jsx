import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <div className="fixed top-0 left-0 z-50 w-full flex justify-between items-center gap-2 p-3 backdrop-blur-lg bg-white/60 dark:bg-slate-900/60 border-b border-white/20 shadow-[0_8px_30px_rgba(0,0,0,0.08)] supports-[backdrop-filter]:bg-white/50">
        <div className=""> 
          <h2 className="md:text-2xl font-bold text-red-900 hover:text-red-300 hover:underline dark:text-red-200">
            <Link to={"/"}>Atomic Shopping Mart</Link>
          </h2>
        </div>
        <div>
          <ul className="flex gap-2 text-red-800 font-bold">
            <li>
              <Link to={"/"} className="hover:text-red-400 hover:underline dark:text-red-200">
                Home
              </Link>
            </li>
            <Link to={"/cart"} className="hover:text-red-400 hover:underline dark:text-red-200">
              Cart
            </Link>
          </ul>
        </div>
      </div>
      <div className="h-20">&nbsp;</div>
    </>
  );
}
