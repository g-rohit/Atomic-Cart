import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <header className="fixed top-0 left-0 z-50 w-full px-3 py-3">
        <div className="mx-auto flex max-w-7xl items-center justify-between rounded-2xl border border-white/20 bg-white/10 px-5 py-3 shadow-[0_8px_32px_rgba(15,23,42,0.18)] backdrop-blur-xl supports-[backdrop-filter]:bg-white/10 dark:border-white/10 dark:bg-slate-900/40">
          <div>
            <Link
              to={'/'}
              className="max-w-[160px] text-sm font-black leading-tight tracking-tight text-slate-900 transition hover:text-red-800 sm:max-w-full sm:text-lg md:text-2xl dark:text-white"
            >
              Atomic Shopping Mart
            </Link>
          </div>

          <nav>
            <ul className="flex items-center gap-2 text-sm font-semibold md:gap-4 md:text-base">
              <li>
                <Link
                  to={'/'}
                  className="rounded-full px-4 py-2 text-slate-700 transition-all duration-300 hover:bg-white/30 hover:text-red-800 dark:text-slate-100 dark:hover:bg-white/10"
                >
                  Home
                </Link>
              </li>

              <li>
                <Link
                  to={'/cart'}
                  className="rounded-full border border-red-400/30 bg-red-800/80 px-4 py-2 text-white shadow-lg shadow-red-500/20 transition-all duration-300 hover:scale-105 hover:bg-red-800"
                >
                  Cart
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <div className="h-24" />
    </>
  );
}
