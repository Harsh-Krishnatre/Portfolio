import React from 'react';

const About = () => {
    return (
        <>
            {/* Full-page gradient background */}
            <div className="min-h-screen w-full overflow-x-hidden bg-inherit ">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">

                    {/* Header Section */}
                    <div className="text-center text-white space-y-8 mb-16">
                        <h1 className="text-5xl font-bold bg-clip-text text-white/50 hover:text-white duration-800 text-shadow-lg">
                            Hey, I'm Harsh Krishnatre
                        </h1>

                        <p className="typewriter text-xl text-shadow-md font-semibold text-white/85 max-w-3xl mx-auto">
                            I'm a passionate developer with a focus on building responsive web applications and modern user interfaces. I enjoy solving problems, learning new technologies, and creating digital experiences that are clean, fast, and accessible.
                        </p>
                    </div>

                    {/* Profile Image and Journey Section */}
                    <div className="relative flex items-center justify-center w-60 h-60 mb-16 mx-auto group">

                        {/* Gradient background circle behind image */}
                        <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 via-purple-600 to-teal-600 rounded-full blur-2xl opacity-70 z-20 group-hover:z-0 group-hover:opacity-0 transition-opacity duration-[1500ms]"></div>


                        {/* Profile Image */}
                        <img
                            src="image/ProfilePhoto.png"
                            alt="Profile Photo"
                            className="rounded-full transform group-hover:scale-110 transition duration-500 shadow-lg border-4 border-white w-48 h-48 object-cover  group-hover:z-30"
                        />
                        </div>

                        {/* Professional Journey Text */}
                        <div className="shadow-md p-6 bg-white/5 backdrop-blur-md rounded-xl w-full max-w-4xl flex flex-col items-center mx-auto">
                            <h1 className="text-3xl font-semibold bg-clip-text text-white/50 hover:text-white duration-800 text-shadow-lg mb-4">
                                Professional Journey
                            </h1>
                            <p className="text-lg text-gray-200 leading-relaxed text-justify">
                                I'm currently navigating my journey from a passionate student to a professional developer. I started with curiosity and self-learning, deepened my skills through academic projects, and now focus on building real-world applications and contributing meaningfully to the tech community. Every challenge I face is a step toward becoming a better version of myself — not just technically, but personally and professionally.
                            </p>
                        </div>
                    </div>
                </div>
        </>
    );
};

export default About;
