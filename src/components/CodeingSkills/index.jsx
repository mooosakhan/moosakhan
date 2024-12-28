
import React from "react";


const Index = () => {


    const skills = [
        {
            name: "Python",
            percentage: 90,
            description: "Certainly my favorite language to code in. Simple code, limitless possibilities.",
        },
        {
            name: "HTML, CSS, Javascript(React)",
            percentage: 84,
            description: "Began with Web Development a month ago. Feels amazing to build my own website.",
        },
        {
            name: "Linux Shell",
            percentage: 85,
            description: "I have used Linux for more than 2 years now. Even though I mostly use Windows, I also like Linux.",
        },
        {
            name: "Linux Shell",
            percentage: 85,
            description: "I have used Linux for more than 2 years now. Even though I mostly use Windows, I also like Linux.",
        },
    ];
    return (
        <>
            <div className="flex flex-col md:justify-center items-center md:items-start justify-center  gap-14 h-auto lg:h-auto px-8 lg:px-14 py-14 md:py-20 lg:py-20">
                {/* Hero Section */}
                <div className="hero text-center md:text-left flex flex-col gap-3 items-center md:items-start md:self-start self-center">
                    <h1 className="text-yellow-500 text-4xl md:text-6xl font-extrabold font-poppins">
                        Coding Skills
                    </h1>
                    <h1 className="text-teal-300 text-center font-bold text-sm font-poppins self-center lg:text-left md:self-start">
                        DEVELOPING ON...
                    </h1>
                </div>

                {/* Skills Section */}
                <div className="">
                 
                    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-2 gap-8 ">
                        {skills.map((skill, index) => (
                            <div
                                key={index}
                                className="flex flex-col items-center text-center text-white rounded-lg p-6 border-2 border-gray-700  shadow-md"
                            >
                                <div className="relative w-24 h-24">
                                    <svg className="w-full h-full">
                                        <circle
                                            cx="50%"
                                            cy="50%"
                                            r="40%"
                                            strokeWidth="8"
                                            className="text-zinc-700 fill-none"
                                            stroke="currentColor"
                                        />
                                        <circle
                                            cx="50%"
                                            cy="50%"
                                            r="40%"
                                            strokeWidth="8"
                                            className="text-teal-400 fill-none stroke-current"
                                            strokeDasharray={`${skill.percentage}, 100`}
                                            strokeDashoffset="25"
                                        />
                                    </svg>
                                    <span className="absolute inset-0 flex items-center justify-center text-lg font-semibold text-teal-400">
                                        {skill.percentage}%
                                    </span>
                                </div>
                                <h3 className="text-yellow-500 text-lg font-bold mt-4">{skill.name}</h3>
                                <p className="text-zinc-100 mt-2 text-sm">{skill.description}</p>
                            </div>
                        ))}
                    </div>



                </div>
            </div>
        </>
    );
};

export default Index;







