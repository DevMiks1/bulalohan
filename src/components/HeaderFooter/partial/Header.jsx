import { useState } from "react";

import Logo from "../../../assets/logo_3.png"
import {Link, NavLink} from "react-router-dom"
import DarkMode from "../../darkmode/DarkMode"

// css
import "../css/header.css"

export const Header = () => {

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    window.scrollTo(0, 0);
  };
  return (
    <nav className="bg-white  fixed w-full z-20 top-0 left-0 border-gray-200 boder-b dark:bg-darkModeGray">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto  px-4 py-2">
        <Link to="/" onClick={()=>window.scrollTo(0, 0)}>
          <img src={Logo} alt="bulalohan Logo" className="h-[60px]"/>
        </Link>
      <div className="flex md:order-2">
          <DarkMode />
          <button data-collapse-toggle="navbar-dropdown" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-dropdown" aria-expanded={isMenuOpen ? "true" : "false"} onClick={handleMenuToggle}>
            <span className="sr-only">Open main menu</span>
            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
            </svg>
        </button>
      </div>
      <div className={`${
            isMenuOpen ? "block" : "hidden"
          } w-full md:block md:w-auto `}
          id="navbar-dropdown">
        <ul className="font-poppins flex flex-col p-4 md:p-0 mt-4 font-medium border rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0 dark:text-white">
          <li>
            <NavLink to="/" className="nav-link py-2 rounded hover:text-primary md:p-0 dark:hover:text-primary"><h2 className="text-lg" onClick={closeMenu}>Home</h2></NavLink>
          </li>
          <li>
            <NavLink to="/about" className="nav-link py-2 rounded hover:text-primary md:p-0"><h2 className="text-lg" onClick={closeMenu}>About</h2></NavLink>
          </li>
          <li>
            <NavLink to="/menu" className="nav-link py-2 rounded hover:text-primary md:p-0"><h2 className="text-lg" onClick={closeMenu}>Menu</h2></NavLink>
          </li>
          <li>
          <NavLink to="/events" className="nav-link py-2 rounded hover:text-primary md:p-0"><h2 className="text-lg" onClick={closeMenu}>Events</h2></NavLink>
          </li>
          <li>
          <NavLink to="/book" className="nav-link py-2 rounded hover:text-primary md:p-0"><h2 className="text-lg" onClick={closeMenu}>Book</h2></NavLink>
          </li>
        </ul>
      </div>
      </div>
    </nav>

  )
}
