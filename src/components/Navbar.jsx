import {Link} from 'react-router-dom'

export default function Navbar() {
  return (
    <div className="flex justify-between gap-1 border-b border-b-amber-900  shadow-lg p-3 mb-5">
      <div className="">
        <h2 className="text-xl font-bold text-purple-600">Atomic Cart</h2>
      </div>
      <div>
        <ul className="flex gap-2 text-purple-800 font-bold">
          <li>
            <Link to={'/home'}>Home</Link>
          </li>
                    <Link to={'/cart'}>Cart</Link>
        </ul>
      </div>
    </div>
  );
}
