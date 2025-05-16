import React from 'react'
import { FaInstagramSquare } from "react-icons/fa";
import { FaGithub ,FaLinkedin } from "react-icons/fa6";

const Footer = () => {
    return (
        <div>
            <footer className='bg-inherit text-white py-8 px-4'>
                <div className='grid grid-cols-1 md:grid-cols-3 auto-cols-[300px] mx-auto '>
                    <div className='flex flex-col justify-start items-center md:items-start md:text-left gap-4 mb-4'>
                        <span className='text-md font-semibold text-white/80'>Harsh Krishnatre</span>
                        <span className='text-sm text-white/50'> Aiding the future of software development</span>
                    </div>
                    <div className='flex flex-col justify-center items-top text-center gap-4 mb-4'>
                        <span className='text-md font-semibold text-white/80'> Quick Links</span>
                        <div className='text-sm text-white/50 flex flex-col justify-center items-top text-center gap-2'>
                            <span>About</span>
                            <span>Skills</span>
                            <span>Projects</span>
                        </div>
                        

                    </div>
                    <div className='text-center md:text-end gap-4 mb-4'>
                        <span className='text-md font-semibold text-white/80 '>Connect</span>
                        <div className="gap-2 mt-4 flex justify-center text-center items-center md:justify-end text-black text-xl filter drop-shadow-[0_0_1px_white]">
                            <FaInstagramSquare />
                            <FaLinkedin />
                            <FaGithub />
                        </div>
                    </div>
                </div>
                <div className="flex justify-center mt-auto p-4 text-white bg-black">
                    &#169; 2025 Harsh Krishnatre, All rights reserved
                </div>        
                </footer>
        </div>
    )
}

export default Footer