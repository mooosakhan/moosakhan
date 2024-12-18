
import React from "react";


const Index = () => {
    return (
        <>
            <div className="flex flex-col md:justify-center items-center md:items-start justify-center gap-14 h-auto p-14 md:py-28">
                {/* Hero Section */}
                <div className="hero text-center lg:text-left flex flex-col gap-3 items-center lg:items-start lg:self-start self-center">
                    <h1 className="text-yellow-500 text-3xl lg:text-6xl md:text-5xl font-extrabold font-poppins">
                        Internships
                    </h1>
                    <h1 className="text-teal-500 text-center font-bold text-sm font-poppins self-center lg:text-left lg:self-start">
                        I HAVE INTERNED FOR...
                    </h1>
                </div>

                {/* Skills Section */}
                <div className="text flex flex-col gap-6 flex-1">
                    

                    
                    {/* Third Skill */}
                    <div className="flex flex-col gap-4 font-poppins text-yellow-500 items-start">
                    <div className="f flex h-36 gap-3 ">
                    <div className="left transform rotate-90 text-center text-teal-500">
                        <p>05/2022-08/2022</p>
                    </div>
                       <div className="right flex flex-col justify-between ">
                        
                            <p>Bano Qabil Incubation Center</p>
                            <p className="font">Mern and react intern</p>
                        
                       </div>
                    </div>
                    <div className="s">
                        <p>
                          Completing their Projects in react and Next js 
                        </p>
                    </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Index;
