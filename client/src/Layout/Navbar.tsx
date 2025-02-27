import { useLocation } from "react-router-dom";

import { Link } from "react-router-dom";

const Navbar = () => {
  const { pathname } = useLocation();

  return (
    <div className="p-5">
      <div className="sm:hidden">
        <label htmlFor="Tab" className="sr-only">
          Tab
        </label>

        <select id="Tab" className="w-full rounded-md border-gray-200">
          <option>Dashboard</option>
          <option>History</option>
        </select>
      </div>

      <div className="hidden sm:block">
        <div className="border-b border-gray-200">
          <nav className="-mb-px flex gap-6" aria-label="Tabs">
            <Link
              to="/"
              className={`shrink-0 border-b-2 px-1 pb-4 text-lg font-medium
                  ${
                    pathname === "/"
                      ? "border-sky-500 text-sky-600"
                      : " text-gray-500 hover:border-gray-300 hover:text-gray-700"
                  }`}
            >
              Dashboard
            </Link>

            <Link
              to="/history"
              className={`shrink-0 border-b-2 px-1 pb-4 text-lg font-medium
                  ${
                    pathname === "/history"
                      ? "border-sky-500 text-sky-600"
                      : " text-gray-500 hover:border-gray-300 hover:text-gray-700"
                  }`}
            >
              History
            </Link>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
