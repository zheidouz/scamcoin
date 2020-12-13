import React, { Component } from 'react';
import { Link } from "react-router-dom";


class Navbar3 extends Component {
   

   render() {
      return (
         <nav className='bg-gray-900'>
            <header className='flex items-center justify-between px-6 py-3 md:container'>
               <div className='flex items-center'>
                  <svg className="w-8 h-8 text-red-700" fill="none" stroke="currentColor"
                       viewBox="0 0 24 24"
                       xmlns="http://www.w3.org/2000/svg">
                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                           d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"/>
                  </svg>
                  <h2 className='text-xl font-bold text-white ml-2 font-serif'>Logo Here</h2>
               </div>
               <div className='md:hidden'>
                  <button type='button' className='block text-gray-500 hover:text-white'>
                     <svg className="w-8 h-8 fill-current" fill="none" stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                              d="M4 6h16M4 12h16M4 18h16"/>
                     </svg>
                  </button>
               </div>
               <div className='hidden md:block text-white'>
                  <ul className='flex'>
                     <li
                        className='font-semibold mx-2 bg-gray-600 rounded-lg px-2 py-0.5 hover:bg-gray-400 border border-gray-800'>
                        <Link to="/">Home</Link>
                     </li>
                     <li
                        className='font-semibold mx-2 bg-gray-600 rounded-lg px-2 py-0.5 hover:bg-gray-400 border border-gray-800'>
                        <Link to="/register">Register</Link>
                     </li>
                     <li
                        className='font-semibold mx-2 bg-gray-600 rounded-lg px-2 py-0.5 hover:bg-gray-400 border border-gray-800'>
                        <Link to="/about">About Us</Link>
                     </li>
                  </ul>
               </div>
            </header>
         </nav>
      );
   }
}

export default Navbar3;