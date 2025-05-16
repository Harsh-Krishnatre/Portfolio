import React from 'react';
import { DiPython, DiJava, DiJavascript1, DiHtml5, DiCss3, DiGit, DiMysql } from 'react-icons/di';

const Skills = () => {
    return (
        <div className='shadow-md p-6 bg-white/5 backdrop-blur-md rounded-xl w-full max-w-4xl flex flex-col items-center mx-auto'>
            <h1 className="text-3xl font-semibold bg-clip-text text-white/50 hover:text-white duration-800 text-shadow-lg mb-8">
                Skills
            </h1>

            {/* 3-column responsive grid */}
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-6'>
                {/* Skill Card */}
                <div className="flex flex-col justify-between bg-white/10 backdrop-blur-md text-white p-6 rounded-xl shadow-md hover:shadow-xl transition duration-300 space-y-4">
                    <DiPython className="text-4xl text-yellow-400" />
                    <h2 className="text-xl font-bold mb-2">Python</h2>
                    <p className="text-white/80">Core, APIs, Django, Numpy & Pandas</p>
                    <button 
                    onClick={() => window.open('https://docs.python.org/3/', '_blank', 'noopener,noreferrer')}
                    className="px-4 py-2 bg-inherit border-2 border-transparent hover:border-white text-white font-semibold rounded-md shadow-md transition duration-300">
                        Read More
                    </button>
                </div>

                <div className="flex flex-col justify-between bg-white/10 backdrop-blur-md text-white p-6 rounded-xl shadow-md hover:shadow-xl transition duration-300 space-y-4">
                    <DiJava className="text-4xl text-red-500" />
                    <h2 className="text-xl font-bold mb-2">Java</h2>
                    <p className="text-white/80">Core, Spring, SpringBoot, Maven</p>
                    <button 
                    onClick={() => window.open('https://developer.mozilla.org/en-US/docs/Glossary/Java', '_blank', 'noopener,noreferrer')}
                    className="px-4 py-2 bg-inherit border-2 border-transparent hover:border-white text-white font-semibold rounded-md shadow-md transition duration-300">
                        Read More
                    </button>
                </div>

                <div className="flex flex-col justify-between bg-white/10 backdrop-blur-md text-white p-6 rounded-xl shadow-md hover:shadow-xl transition duration-300 space-y-4">
                    <div className="flex items-center gap-2 mb-2">
                        <DiHtml5 className="text-4xl text-orange-500" />
                        <DiCss3 className="text-4xl text-blue-400" />
                    </div>
                    <h2 className="flex flex-col justify-between text-xl font-bold mb-2">HTML & CSS</h2>
                    <p className="text-white/80">HTML5, CSS3, Tailwind4, BootStrap5</p>
                    <button 
                    onClick={() => window.open('https://developer.mozilla.org/en-US/docs/Web/CSS', '_blank', 'noopener,noreferrer')}                    
                    className="px-4 py-2 bg-inherit border-2 border-transparent hover:border-white text-white font-semibold rounded-md shadow-md transition duration-300">
                        Read More
                    </button>
                </div>

                <div className="flex flex-col justify-between bg-white/10 backdrop-blur-md text-white p-6 rounded-xl shadow-md hover:shadow-xl transition duration-300 space-y-4">
                    <DiJavascript1 className="text-4xl text-yellow-300" />
                    <h2 className="text-xl font-bold mb-2">JavaScript</h2>
                    <p className="text-white/80">Core, NodeJs, ExpressJs, React</p>
                    <button 
                    onClick={() => window.open('https://developer.mozilla.org/en-US/docs/Web/JavaScript', '_blank', 'noopener,noreferrer')}  
                    className="px-4 py-2 bg-inherit border-2 border-transparent hover:border-white text-white font-semibold rounded-md shadow-md transition duration-300">
                        Read More
                    </button>
                </div>

                <div className="flex flex-col justify-between  bg-white/10 backdrop-blur-md text-white p-6 rounded-xl shadow-md hover:shadow-xl transition duration-300 space-y-4">
                    <DiMysql className="text-4xl text-blue-300" />
                    <h2 className="text-xl font-bold mb-2">Database</h2>
                    <p className="text-white/80">MySQL, PostgreSQL, MongoDB</p>
                    <button 
                    onClick={() => window.open('https://www.tutorialspoint.com/sql/index.htm', '_blank', 'noopener,noreferrer')} 
                    className="px-4 py-2 bg-inherit border-2 border-transparent hover:border-white text-white font-semibold rounded-md shadow-md transition duration-300">
                        Read More
                    </button>
                </div>

                <div className="flex flex-col justify-between bg-white/10 backdrop-blur-md text-white p-6 rounded-xl shadow-md hover:shadow-xl transition duration-300 space-y-4">
                    <DiGit className="text-4xl text-orange-400" />
                    <h2 className="text-xl font-bold mb-2">Version Control</h2>
                    <p className="text-white/80">Git, GitHub</p>
                    <button 
                    onClick={() => window.open('https://git-scm.com/doc', '_blank', 'noopener,noreferrer')} 
                    className="px-4 py-2 bg-inherit border-2 border-transparent hover:border-white text-white font-semibold rounded-md shadow-md transition duration-300">
                        Read More
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Skills;
