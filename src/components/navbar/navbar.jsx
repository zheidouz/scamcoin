import React from 'react';

const Navbar = () => {
    return (
        <>
            <nav className="flex flex-col md:flex-row bg-blue-600 text-white shadow-md leading-none">
                <div className="flex items-center mx-5 py-5 md:py-0 mr-20">
                    <svg className="fill-current inline-block ml-40" width="34" height="34" viewBox="0 0 54 54"
                         xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z"/>
                    </svg>
                    <h1 className="text-4xl ml-2 inline-block">CashDrop</h1>
                </div>
                <div className="md:flex md:flex-grow bg-blue-700 md:bg-blue-600">
                    <ul className="text-lg md:flex md:ml-auto mr-20">
                        <li>
                            <a className="w-full md:w-auto p-5 inline-block bg-blue-800 border-b-4 border-white hover:border-white hover:bg-blue-800"
                               href="">Home</a>
                        </li>
                        <li><a
                            className="w-full md:w-auto p-5 inline-block border-b-4 border-transparent hover:border-white hover:bg-blue-800"
                            href="">Invest</a></li>
                        <li><a
                            className="w-full md:w-auto p-5 inline-block border-b-4 border-transparent hover:border-white hover:bg-blue-800"
                            href="">About Us</a></li>
                    </ul>
                </div>
            </nav>

        </>
    );
};

export default Navbar;