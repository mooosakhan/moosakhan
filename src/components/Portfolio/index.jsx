

import React, { useState } from "react";
import "./index.css";
// import Works from "./Showcase/index";
import Work from "./Work/Work";

const Index = () => {
    const percentage = 75;
    return (
        <>
            <div className="flex font-poppins flex-col md:justify-center items-center md:items-start justify-center gap-14 h-auto p-8 md:py-28">
                {/* Hero Section */}
                <div className="hero text-center md:text-left flex flex-col gap-3 items-center md:items-start md:self-start self-center">
                    <h1 className="text-yellow-500 text-4xl md:text-6xl font-extrabold font-poppins">
                        Portfolio

                    </h1>
                    <h1 className="text-teal-300 font-bold text-sm font-poppins self-center lg:text-left md:self-start">
                        My works...
                        <span className="block"><i>Click on each to learn more about them</i></span>
                    </h1>
                </div>

                <div className="h-auto w-full">
              <Work />
                    
                </div>
            </div>
        </>
    );
};

export default Index;
