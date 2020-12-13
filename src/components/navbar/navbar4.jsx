import React, { useState } from "react";
import { Link } from "react-router-dom";


export default function Navbar() {
   const [navbarOpen, setNavbarOpen] = useState(false);

   return (
      <>
         <nav
            className="relative flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg bg-blue-500 mb-3">
            <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
               <div
                  className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
                  <div className='flex items-center'>
                     <svg className="w-8 h-8 text-blue-800" fill="none" stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                              d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"/>
                     </svg>
                     <Link to='/'>
                        <h2 className='text-xl font-bold text-white ml-2 font-serif uppercase'>Scam
                           Coin</h2>
                     </Link>
                  </div>
                  <button
                     className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
                     type="button"
                     onClick={() => setNavbarOpen(!navbarOpen)}
                  >
                     <svg className="w-8 h-8 fill-current" fill="none" stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                              d="M4 6h16M4 12h16M4 18h16"/>
                     </svg>
                  </button>
               </div>
               <div
                  className={
                     "lg:flex flex-grow items-center" +
                     (navbarOpen ? " flex" : " hidden")
                  }
                  id="example-navbar-danger"
               >
                  <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
                     <li className="nav-item">
                        <Link to='/register'
                              className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                        >
                           <span className="ml-2">Register</span>
                        </Link>
                     </li>
                     <li className="nav-item">
                        <Link to='/about'
                              className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                        >
                           <span className="ml-2">About Us</span>
                        </Link>
                     </li>
                  </ul>
               </div>
            </div>
         </nav>
      </>
   );
}