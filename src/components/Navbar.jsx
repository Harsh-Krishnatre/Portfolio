import React, { useState } from 'react'
import { Menu, X } from 'lucide-react'


const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    }

    return (
        <>
            <nav className='sticky z-50 top-0 w-full h-max bg-indigo-500  '>
                <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
                    <div className='flex justify-between items-center h-16'>
                        <div className="flex items-center">
                            <div className="flex-shrink-0">
                                <span className=' text-2xl font-bold text-white bg-white/20 px-3 py-1 rounded-lg'>
                                    HKRS
                                </span>
                            </div>
                            <div className="hidden md:block ml-4 ">
                                <span className="text-white font-semibold text-lg">Harsh Krishnatre</span>
                            </div>
                            <div className="">
                                <ul className="hidden md:flex space-x-2 ">
                                    <li>
                                        <a href="" className='text-white hover:text-purple-200 px-3 py-2 rounded-md text-sm font-medium'>About</a>
                                    </li>
                                    <li>
                                        <a href="" className='text-white hover:text-purple-200 px-3 py-2 rounded-md text-sm font-medium'>Skills</a>
                                    </li>
                                    <li>
                                        <a href="" className='text-white hover:text-purple-200 px-3 py-2 rounded-md text-sm font-medium'>Tracer</a>
                                    </li>
                                    <li>
                                        <a href="" className='text-white hover:text-purple-200 px-3 py-2 rounded-md text-sm font-medium'>Projects</a>
                                    </li>
                                    <li>
                                        <a href="" className='text-white hover:text-purple-200 px-3 py-2 rounded-md text-sm font-medium'>Contacts</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="md:hidden ml-auto">
                            <button onClick={() => toggleMenu()} className="text-white hover:text-purple-200 focus:outline-none transition-color duration-200">
                                {
                                    menuOpen ?
                                        (
                                            <X className='h-6 w-6' />

                                        ) : (
                                            <Menu className='h-6 w-6' />
                                        )
                                }
                            </button>

                        </div>
                    </div>
                </div>
                {menuOpen && (
                    <div className="md:hidden from-indigo-500">
                        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 ">
                            <a href="" className='text-white hover:text-purple-200 block px-3 py-2 rounded-md transition-color duration-200 text-center'>About</a>
                            <a href="" className='text-white hover:text-purple-200 block px-3 py-2 rounded-md transition-color duration-200 text-center'>Skills</a>
                            <a href="" className='text-white hover:text-purple-200 block px-3 py-2 rounded-md transition-color duration-200 text-center'>Tracers</a>
                            <a href="" className='text-white hover:text-purple-200 block px-3 py-2 rounded-md transition-color duration-200 text-center'>Projects</a>
                            <a href="" className='text-white hover:text-purple-200 block px-3 py-2 rounded-md transition-color duration-200 text-center'>Contacts</a>
                        </div>
                    </div>
                )}
            </nav>
        </>
    )
}

export default Navbar