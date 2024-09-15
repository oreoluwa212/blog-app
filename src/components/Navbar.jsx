import { useState } from 'react';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../AuthContext';
import  navbarIcon  from '../assets/images/navbarIcon.svg';
import arrowIcon from '../assets/images/arrowIcon.svg' ;

import { useLocation } from 'react-router-dom';

const links = [
  { 
    name: "home", 
    path: "/" 
},
  { 
    name: "blogs", 
    path: "/blogs" 
},
{ 
    name: "resources", 
    path: "/resources" 
},
  { 
    name: "authors", 
    path: "/authors" 
},
{ 
    name: "contact", 
    path: "/contact" 
},
];

const Navbar = () => {
    const pathname = useLocation().pathname;
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const { user, loginWithGoogle, logout } = useContext(AuthContext);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (        
        <div className=''>
            <div className='flex justify-center items-center py-3'>
                <p className='text-center text-accent text-sm'>Subscribe to our Newsletter For New & latest Blogs and Resources</p>
                <span className='inline-flex ml-2 cursor-pointer'><img src={arrowIcon} alt='arrow icon' className='w-3 h-3'/></span>
            </div>
            <nav className="bg-secondary text-text ">
                <div className="py-4 xl:py-2 sm:px-6">
                    <div className="container mx-auto flex items-center justify-between h-16">
                        <Link href="/"
                        className='flex items-center'>
                            <img src={navbarIcon} alt='navbar icon' className='w-10 h-10 mr-2' />
                            <h1 className="text-2xl font-bold">
                                FutureTech
                            </h1>
                        </Link>
                        <div className="flex justify-center items-center">                        
                            <div className="hidden md:block ">
                                <div className="mr-8 flex text-accent items-baseline space-x-8">
                                   
                                {links.map((link, index) => {
                                    return (
                                    <Link to={link.path} key={index} 
                                        className={`${
                                            link.path === pathname 
                                            && "text-white px-4 py-2 border-[0.2px] bg-background rounded-lg border-accent"
                                        } capitalize hover:text-accent transition-all ease-in"
                                        > 
                                        }`}>
                                        {link.name}
                                    </Link>     
                                );  
                            })}                         
                            
                                </div>
                            </div>
                        </div> 

                        <div>
                            {user ? (
                            <>
                                <span className="text-white mr-4">Welcome, {user.displayName || user.email}</span>
                                <Link to="/create" className="bg-blue-500 text-white py-1 px-3 rounded hover:bg-blue-600">Create Post</Link>
                                <button 
                                onClick={logout} 
                                className="bg-red-500 text-white py-1 px-3 rounded hover:bg-red-600 ml-2"
                                >
                                Log Out
                                </button>
                            </>
                            ) : (
                            <Link onClick={loginWithGoogle} 
                            className="flex items-center gap-2 bg-primary text-black px-6 mb-8 py-2 rounded-lg shadow-md hover:bg-hover transition-all duration-300 easein mt-8">
                                Log In
                            </Link>
                            )}
                        </div>
                        
                        <div className="-mr-4 flex md:hidden">
                            <button
                                onClick={toggleMobileMenu}
                                className="inline-flex items-center justify-center p-2 rounded-md hover:text-secondary hover:bg-gray-700 focus:outline-none focus:bg-gray-700 focus:text-white"
                                aria-label="Toggle mobile menu"
                            >
                                <svg
                                    className={`${isMobileMenuOpen ? 'hidden' : 'block'} h-6 w-6`}
                                    stroke="currentColor"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                </svg>
                                <svg
                                    className={`${isMobileMenuOpen ? 'block' : 'hidden'} h-6 w-6`}
                                    stroke="currentColor"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            </button>
                        </div>
                    </div>
                    {/* mobile menu */}
                    <div className={`${isMobileMenuOpen ? 'block' : 'hidden'} md:hidden`}>
                        <div className="flex flex-col gap-4 p-4 sm:px-3">
                            {links.map((link, index) => {
                            return (
                            <Link to={link.path} key={index} 
                                className={`${
                                    link.path === pathname 
                                    && "text-white px-4 py-2 border-[0.2px] bg-background rounded-lg border-accent"
                                        } capitalize hover:text-accent transition-all ease-in"
                                    > 
                                }`}>
                                {link.name}
                            </Link>     
                        );  
                    })}
                </div>
            </div>
            </div>
            </nav>
        </div>
    );
}
export default Navbar;