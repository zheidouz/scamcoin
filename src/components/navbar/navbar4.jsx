import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from '../../assets/img/32x32.png';


export default function Navbar() {
   const [navbarOpen, setNavbarOpen] = useState(false);

   return (
      <>
         <nav
            className="sticky w-full flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg bg-blue-700 z-50"
         >
            <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
               <div
                  className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
                  <div className='flex items-center'>
                     <img src={logo} alt="logo"/>
                     <Link to='/'>
                        <h2 className='text-xl font-bold text-white ml-2 font-serif uppercase'>Scam
                           Coin</h2>
                     </Link>
                  </div>
                  <button
                     className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block md:hidden outline-none focus:outline-none"
                     type="button"
                     onClick={() => setNavbarOpen(!navbarOpen)}
                  >
                     <svg className="w-8 h-8 fill-current" fill="none" stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                              d="M4 6h16M4 12h16M4 18h16 "/>
                     </svg>
                  </button>
               </div>
               <div
                  className={"md:flex flex-row items-center" + (navbarOpen ? " flex" : " hidden")}
                  id="example-navbar-danger"
               >
                  <ul className="flex flex-col md:flex-row list-none md:ml-auto">
                     <li className="nav-item">
                        <Link to='/packages'
                              className="px-3 py-2 flex items-center text-xs uppercase tracking-widest font-semibold leading-snug text-white hover:opacity-75"
                        >
                           <span className="ml-2">Buy Packages</span>
                        </Link>
                     </li>
                     <li className="nav-item">
                        <Link to='/contact'
                              className="px-3 py-2 flex items-center text-xs uppercase tracking-widest font-semibold leading-snug text-white hover:opacity-75"
                        >
                           <span className="ml-2">Contact Us</span>
                        </Link>
                     </li>
                     <li className="nav-item">
                        <Link to='/register'
                              className="px-3 py-2 md:ml-20 flex items-center text-xs uppercase tracking-widest font-bold leading-snug text-white hover:opacity-75 bg-blue-600 rounded-lg"
                        >
                           <span className="ml-2">Register Here!</span>
                        </Link>
                     </li>
                  </ul>
               </div>
            </div>
         </nav>
      </>
   );
}