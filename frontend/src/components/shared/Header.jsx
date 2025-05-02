import React from "react";
import { Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import { Button } from "../ui/button";
const Header = () => {
  return (
    <header className="shadow-lg sticky">
      <div className="flex justify-between items-center max-w-6xl lg:max-w-7xl max-auto p-5">
        <Link>
          <h1 className="font-bold text-xl sm:text-2xl flex flex-wrap ">
            <span className="text-slate-500">Morninggg</span>
            <span className="text-slate-900">NewProvider</span>
          </h1>
        </Link>
        <form className="p-3 bg-slate-100 rounded-lg flex items-center"> 
          <input
            className="focus:outline-none bg-transparent w-44 sm:64"
            type="text"
            placeholder="Search....."
          />
          <FaSearch />
        </form>
        <ul className="flex gap-7">
          <li className="hidden lg:inline text-slate-700 hover:underline">
            <Link to={"/"}>Home</Link>
          </li>
          <li className="hidden lg:inline text-slate-700 hover:underline">
            <Link to={"/about"}>About</Link>
          </li>
          <li className="hidden lg:inline text-slate-700 hover:underline">
            <Link to={"/news"}>NewsArticles</Link>
          </li>
        </ul>
        <Link to={"/sign-in"}>
          <Button>Sign-In</Button>
        </Link>
      </div>
    </header>
  );
};

export default Header;
