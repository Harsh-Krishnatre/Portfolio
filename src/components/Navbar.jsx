import React from 'react'

const Navbar = () => {
    return (
        <>
            <nav className='w-full h-max bg-gradient-to-r from-purple-500 via-purple-800 to-black '>
                <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
                    <div className='flex items-center  h-16'>
                        <div className="flex items-center justify-center">
                            <div className="flex-shrink-0">
                                <span className=' text-2xl font-bold text-white bg-white/20 px-3 py-1 rounded-lg'>
                                    HKRS
                                </span>
                            </div>
                            <div className="hidden md:block ml-4 ">
                                <span className="text-white font-semibold text-lg">Harsh Krishnatre</span>
                            </div>
                            <div className="">
                                <ul className="flex space-x-2">
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
                    </div>
                </div>

            </nav>
        </>
    )
}

export default Navbar