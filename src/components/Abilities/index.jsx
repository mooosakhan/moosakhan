

import React, { useState } from "react";


const Index = () => {
    const percentage = 75;
    return (
        <>

            <div className="flex font-poppins flex-col md:justify-center items-center md:items-start justify-center gap-14 h-auto lg:h-auto px-8 lg:px-14 py-14 md:py-20 lg:py-20">
                {/* Hero Section */}
                <div className="hero text-center md:text-left flex flex-col gap-3 items-center md:items-start md:self-start self-center">
                    <h1 className="text-yellow-500 text-4xl md:text-6xl font-extrabold font-poppins">
                        Abilities

                    </h1>
                    <h1 className="text-teal-300 text-center font-bold text-sm font-poppins self-center lg:text-left md:self-start">
                        WEBDEVELOPMENT AND PHYSICAL SKILLS
                    </h1>
                </div>

                {/* Skills Section */}
                <div className="text flex gap-6 flex-col flex-wrap md:flex-row flex-1">


                    {/* first Education */}
                    <div className="skills flex gap-4 text-lg text-yellow-500 flex-col lg:w-[20vw]">
                        <h1 className="font-bold">Web Layout</h1>
                        <p className="text-sm text-zinc-100">
                            Web Design is one of my favourite things. I love designing web pages.
                            It's amazing how beautiful and creative we can be with a website.
                        </p>
                        <div className="Percentage">
                            <div className="percentage_text text-teal-300 text-xs">{percentage}%</div>
                            <div className="line overflow-hidden w-full h-1 bg-gray-800   relative">
                                {/* Full line */}
                                <div
                                    className="w-full h-full bg-gray-800"
                                    style={{ width: "100%" }}
                                ></div>
                                {/* Dynamic filled part */}
                                <div
                                    className="h-full bg-teal-600 absolute top-0 left-0"
                                    style={{ width: `${percentage}%` }}
                                ></div>
                            </div>
                        </div>
                    </div>
                     {/* first Education */}
                     <div className="skills flex gap-4 text-lg text-yellow-500 flex-col lg:w-[20vw]">
                        <h1 className="font-bold">Web Layout</h1>
                        <p className="text-sm text-zinc-100">
                            Web Design is one of my favourite things. I love designing web pages.
                            It's amazing how beautiful and creative we can be with a website.
                        </p>
                        <div className="Percentage">
                            <div className="percentage_text text-teal-300 text-xs">{percentage}%</div>
                            <div className="line overflow-hidden w-full h-1 bg-gray-800   relative">
                                {/* Full line */}
                                <div
                                    className="w-full h-full bg-gray-800"
                                    style={{ width: "100%" }}
                                ></div>
                                {/* Dynamic filled part */}
                                <div
                                    className="h-full bg-teal-600 absolute top-0 left-0"
                                    style={{ width: `${percentage}%` }}
                                ></div>
                            </div>
                        </div>
                    </div>
                    <div className="skills flex gap-4 text-lg text-yellow-500 flex-col lg:w-[20vw]">
                        <h1 className="font-bold">Web Layout</h1>
                        <p className="text-sm text-zinc-100">
                            Web Design is one of my favourite things. I love designing web pages.
                            It's amazing how beautiful and creative we can be with a website.
                        </p>
                        <div className="Percentage">
                            <div className="percentage_text text-teal-300 text-xs">{percentage}%</div>
                            <div className="line overflow-hidden w-full h-1 bg-gray-800   relative">
                                {/* Full line */}
                                <div
                                    className="w-full h-full bg-gray-800"
                                    style={{ width: "100%" }}
                                ></div>
                                {/* Dynamic filled part */}
                                <div
                                    className="h-full bg-teal-600 absolute top-0 left-0"
                                    style={{ width: `${percentage}%` }}
                                ></div>
                            </div>
                        </div>
                    </div>
                    <div className="skills flex gap-4 text-lg text-yellow-500 flex-col lg:w-[20vw]">
                        <h1 className="font-bold">Web Layout</h1>
                        <p className="text-sm text-zinc-100">
                            Web Design is one of my favourite things. I love designing web pages.
                            It's amazing how beautiful and creative we can be with a website.
                        </p>
                        <div className="Percentage">
                            <div className="percentage_text text-teal-300 text-xs">{percentage}%</div>
                            <div className="line overflow-hidden w-full h-1 bg-gray-800   relative">
                                {/* Full line */}
                                <div
                                    className="w-full h-full bg-gray-800"
                                    style={{ width: "100%" }}
                                ></div>
                                {/* Dynamic filled part */}
                                <div
                                    className="h-full bg-teal-600 absolute top-0 left-0"
                                    style={{ width: `${percentage}%` }}
                                ></div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    );
};

export default Index;
