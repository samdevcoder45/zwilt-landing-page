import { Link, useLocation } from "react-router-dom";
import HeaderCard from "../cards/header-card";
import { navlinks } from "../../utils/nav-links";
import clsx from "clsx";
import ZwitLogo from "../zwift-logo";
import { Button } from "../button";
import { useState } from "react";

export default function NavLinks() {
  const location = useLocation();
  const [toggleMenu, setToggleMenu] = useState(false);
  const toggleNav = () => {
    setToggleMenu(!toggleMenu);
  };
  return (
    <HeaderCard className="flex justify-between mx-6 items-center w-[90%]  bg-navy-blue mt-5 md:mt-[36px] md:mx-70 h-[50px] md:h-60 shadow-light">
      <div className="ml-3 md:ml-6">
        <Link to="/">
          <ZwitLogo />
        </Link>
      </div>
      <nav>
        <ul className="hidden md:flex items-center">
          {navlinks.map((link) => (
            <li key={link.id} className="md:px-[15px]">
              <Link
                to={link.url}
                className={clsx(
                  "text-white hover:opacity-80 text-xs md:text-[14px] md:leading-[14px] font-medium font-switzer",
                  { active: location.pathname === link.url }
                )}
              >
                {link.text}
              </Link>
            </li>
          ))}
        </ul>
        <div className="md:hidden flex items-center">
          <Button onClick={toggleNav} aria-label="Hamburger Button" className="text-white focus:outline-none">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </Button>
        </div>
      </nav>
      <div className="hidden md:flex gap-2">
        <Button className="bg-transparent hover:opacity-80 text-white text-[14px] leading-[14px] font-medium font-switzer">
          Log in
        </Button>
        <Button className="mr-[9px] bg-white hover:border-navy-blue hover:bg-opacity-20 hover:text-white shadow-xl text-[14px] leading-[14px] font-switzer">
          Join Now
        </Button>
      </div>
      {toggleMenu && (
        <div
          onClick={() => setToggleMenu(false)}
          className={`fixed inset-0 bg-black bg-opacity-75 z-50 flex justify-center items-center sm:items-start md:hidden ${
            toggleMenu ? "animate-slideIn" : "animate-slideOut"
          }`}
        >
          <div className="bg-navy-blue w-10/12 p-8 rounded-lg shadow-lg">
            <ul className="space-y-4">
              {navlinks.map((link) => (
                <li key={link.id} className="text-center">
                  <Link
                    to={link.url}
                    onClick={() => setToggleMenu(false)}
                    className={clsx(
                      "text-white hover:opacity-80 text-[18px] font-medium font-switzer",
                      { active: location.pathname === link.url }
                    )}
                  >
                    {link.text}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-6 flex flex-col items-center gap-2">
              <Button className="bg-transparent hover:opacity-80 text-white text-[14px] leading-[14px] font-medium font-switzer">
                Log in
              </Button>
              <Button className="bg-white hover:border-navy-blue hover:bg-opacity-20 hover:text-white shadow-xl text-[14px] leading-[14px] font-switzer">
                Join Now
              </Button>
            </div>
          </div>
        </div>
      )}
    </HeaderCard>
  );
}
