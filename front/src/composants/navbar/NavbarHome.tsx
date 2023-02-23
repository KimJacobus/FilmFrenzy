import { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import SmallCarousel from "../Carousel/SmallCarousel";
import Inputsearchbar from "../LoginForm/Inputsearchbar";

const NavbarHome = ({ onQueryChange }: any) => {
  const [navbar, setNavbar] = useState(false);
  const [query, setQuery] = useState("");

  const getTrending = (e: any) => {
    const url = `https://api.themoviedb.org/3/${e.getAttribute(
      "data-value"
    )}?api_key=83a1629902bd9dbacb7cf2bcff2293ab&language=fr-FR`;

    setQuery(url);
    // console.log(e.getAttribute('data-value'));
    // setQuery(e.firstChild.data)
  };

  // action, comedy, romance

  const getClickedValue = (e: any) => {
    const url = `https://api.themoviedb.org/3/discover/movie?api_key=83a1629902bd9dbacb7cf2bcff2293ab&with_genres=${e.getAttribute(
      "data-value"
    )}&language=fr-FR`;

    setQuery(url);
  };

  const handleQueryChange = (newQuery: string) => {
    setQuery(newQuery);
  };

  useEffect(() => {
    const newQuery = query;
    setQuery(newQuery);
    onQueryChange(newQuery);
  }, [handleQueryChange]);

  return (
    <nav className="w-full bg-gradient-to-r from-zinc-600 to-slate-900 shadow">
      <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
        <div>
          <div className="flex items-center justify-between py-3 md:py-5 md:block">
            <Link to="/home">
              <h2 className="righteous text-2xl font-bold text-white hover:text-red-400">
                FilmFriendzy
              </h2>
            </Link>

            <div className="md:hidden">
              <button
                className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                onClick={() => setNavbar(!navbar)}
              >
                {navbar ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 text-white"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
        <div>
          <div
            className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
              navbar ? "block" : "hidden"
            }`}
          >
            <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
              <li className="roboto text-white  hover:text-indigo-200 cursor-pointer">
                <a
                  onClick={(e) => getTrending(e.target)}
                  data-value="trending/all/day"
                >
                  Trending
                </a>
              </li>
              <li className="roboto text-white hover:text-indigo-200 cursor-pointer">
                <a onClick={(e) => getClickedValue(e.target)} data-value="28">
                  Action
                </a>
              </li>
              <li className="roboto text-white hover:text-indigo-200 cursor-pointer">
                <a onClick={(e) => getClickedValue(e.target)} data-value="35">
                  Comedy
                </a>
              </li>
              <li className="roboto text-white hover:text-indigo-200 cursor-pointer">
                <a onClick={(e) => getClickedValue(e.target)} data-value="878">
                  Sci-fi
                </a>
              </li>
            </ul>

            <div className="mt-3 space-y-2 md:hidden inline-block ">
              <a
                href="javascript:void(0)"
                className="inline-block w-full px-4 py-2 text-center text-white bg-blue-600 rounded-full shadow hover:bg-blue-500"
              >
                User
              </a>
              <a
                href="javascript:void(0)"
                className="inline-block w-full px-4 py-2 text-center text-gray-800 bg-red-600 rounded-md shadow hover:bg-red-500"
              >
                Log out
              </a>
            </div>
          </div>
        </div>

        <div className="hidden space-x-2 md:flex md:mx-2">
          <Link
            to="/UserProfile"
            className="px-2 py-2 text-white rounded-full bg-blue-600 rounded-md-full shadow hover:bg-blue-500 "
          >
            User
          </Link>
          <Link
            to="/"
            className="px-2 py-2  text-white bg-red-600 rounded-md shadow hover:bg-red-500"
          >
            Log out
          </Link>
        </div>

        <Inputsearchbar onQueryChange={handleQueryChange} />
      </div>

      <div className="flex justify-center" id="inputRecherche"></div>
    </nav>
  );
};
export default NavbarHome;
