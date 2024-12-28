
// import React, { useState, useEffect } from "react";
// import Button from "./../Button";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faThumbsUp, faReact } from '@fortawesome/free-solid-svg-icons';


// const Index = () => {

//     return (
//         <>
//             <div className="flex flex-col md:justify-center items-center  md:items-start justify-center gap-14 h-auto p-14 md:py-28  ">
//                 {/* Hero Section */}

//                 <div className="hero text-center lg:text-left flex flex-col gap-3 items-center lg:items-start lg:self-start self-center">

//                     <h1 className="text-yellow-500 text-3xl lg:text-6xl md:text-5xl font-extrabold font-poppins">
//                         Skills
//                     </h1>

//                     <h1 className="text-teal-300 text-center font-bold text-sm font-poppins self-center lg:text-left lg:self-start">
//                         THINGS I AM GOOD AT
//                     </h1>


//                 </div>
//                 <div className="text flex flex-col gap-6">

//                     <div className="flex flex-col gap-4 font-poppins">
//                         <div className="text-teal-300">
//                         <FontAwesomeIcon icon={faReact} />
//                         </div>
//                         <div className="text-yellow-500 font-bold text-lg">Cloud
//                             Computing</div>
//                         <div className="text-zinc-100 text-left text-md">Ever since I started using cloud, I have been on Cloud 9. I have used GCP, AWS, Azure, Gastby, and many more. I have participated in many programs like the Google Cloud Ready Facilitator, 30 Days of Cloud, Azure Developer League, AWS Cloud Summit, Google Devfest, Azure Skill-Up, Learn to Earn, Hacktoberfest and the list goes on.</div>
//                     </div>
//                     <div className="flex flex-col gap-4 font-poppins">
//                         <div className="text-teal-300">iicon</div>
//                         <div className="text-yellow-500 font-bold text-lg">Cloud
//                             Computing</div>
//                         <div className="text-zinc-100 text-left text-md">Ever since I started using cloud, I have been on Cloud 9. I have used GCP, AWS, Azure, Gastby, and many more. I have participated in many programs like the Google Cloud Ready Facilitator, 30 Days of Cloud, Azure Developer League, AWS Cloud Summit, Google Devfest, Azure Skill-Up, Learn to Earn, Hacktoberfest and the list goes on.</div>
//                     </div>
//                     <div className="flex flex-col gap-4 font-poppins">
//                         <div className="text-teal-300">
//                             <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6 text-teal-300">
//                                 <path fillRule="evenodd" d="M4.5 9.75a6 6 0 0 1 11.573-2.226 3.75 3.75 0 0 1 4.133 4.303A4.5 4.5 0 0 1 18 20.25H6.75a5.25 5.25 0 0 1-2.23-10.004 6.072 6.072 0 0 1-.02-.496Z" clipRule="evenodd" />
//                             </svg>
//                         </div>
//                         <div className="text-yellow-500 font-bold text-lg">Cloud
//                             Computing</div>
//                         <div className="text-zinc-100 text-left text-md">Ever since I started using cloud, I have been on Cloud 9. I have used GCP, AWS, Azure, Gastby, and many more. I have participated in many programs like the Google Cloud Ready Facilitator, 30 Days of Cloud, Azure Developer League, AWS Cloud Summit, Google Devfest, Azure Skill-Up, Learn to Earn, Hacktoberfest and the list goes on.</div>
//                     </div>




//                 </div>
//             </div>
//         </>
//     );
// };

// export default Index;
import React from "react";


const Index = () => {
    return (
        <>
            <div className="flex flex-col md:justify-center items-center md:items-start justify-center gap-14 h-auto lg:h-auto px-8 lg:px-14 py-14 md:py-20 lg:py-20">
                {/* Hero Section */}
                <div className="hero text-center lg:text-left flex flex-col gap-3 items-center md:items-start md:self-start self-center">
                    <h1 className="text-yellow-500 text-4xl lg:text-6xl md:text-5xl font-extrabold font-poppins">
                        Skills
                    </h1>
                    <h1 className="text-teal-300 text-center font-bold text-sm font-poppins ">
                        THINGS I AM GOOD AT
                    </h1>
                </div>

                {/* Skills Section */}
                <div className="text flex flex-col gap-6 flex-1">
                    {/* First Skill */}
                    <div className="flex flex-col gap-4 font-poppins">
                        <div className="text-teal-300">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6 text-teal-300">
                                <path fillRule="evenodd" d="M4.5 9.75a6 6 0 0 1 11.573-2.226 3.75 3.75 0 0 1 4.133 4.303A4.5 4.5 0 0 1 18 20.25H6.75a5.25 5.25 0 0 1-2.23-10.004 6.072 6.072 0 0 1-.02-.496Z" clipRule="evenodd" />
                            </svg>
                        </div>
                        <div className="text-yellow-500 font-bold text-lg">React Development</div>
                        <div className="text-zinc-100 text-left text-sm">
                            I love working with React to build dynamic and interactive web apps. My experience includes building single-page applications (SPAs), using hooks, and managing state with Redux.
                        </div>
                    </div>

                    {/* Second Skill */}
                    <div className="flex flex-col gap-4 font-poppins">
                        <div className="text-teal-300">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6 text-teal-300">
                                <path fillRule="evenodd" d="M4.5 9.75a6 6 0 0 1 11.573-2.226 3.75 3.75 0 0 1 4.133 4.303A4.5 4.5 0 0 1 18 20.25H6.75a5.25 5.25 0 0 1-2.23-10.004 6.072 6.072 0 0 1-.02-.496Z" clipRule="evenodd" />
                            </svg>
                        </div>
                        <div className="text-yellow-500 font-bold text-lg">Cloud Computing</div>
                        <div className="text-zinc-100 text-left text-sm">
                            Ever since I started using cloud, I have been on Cloud 9. I have used GCP, AWS, Azure, Gatsby, and many more. I have participated in many programs like the Google Cloud Ready Facilitator, 30 Days of Cloud, Azure Developer League, AWS Cloud Summit, Google Devfest, Azure Skill-Up, Learn to Earn, Hacktoberfest and the list goes on.
                        </div>
                    </div>

                    {/* Third Skill */}
                    <div className="flex flex-col gap-4 font-poppins">
                        <div className="">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6 text-teal-300">
                                <path fillRule="evenodd" d="M4.5 9.75a6 6 0 0 1 11.573-2.226 3.75 3.75 0 0 1 4.133 4.303A4.5 4.5 0 0 1 18 20.25H6.75a5.25 5.25 0 0 1-2.23-10.004 6.072 6.072 0 0 1-.02-.496Z" clipRule="evenodd" />
                            </svg>
                        </div>
                        <div className="text-yellow-500 font-bold text-lg">Networking</div>
                        <div className="text-zinc-100 text-left text-sm">
                            I have a solid understanding of networking protocols, including TCP/IP, DNS, HTTP, and more. I have worked on various projects to optimize network performance and security.
                        </div>
                    </div>

                    {/* Fourth Skill */}
                    <div className="flex flex-col gap-4 font-poppins">
                        <div className="">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6 text-teal-300">
                                <path fillRule="evenodd" d="M4.5 9.75a6 6 0 0 1 11.573-2.226 3.75 3.75 0 0 1 4.133 4.303A4.5 4.5 0 0 1 18 20.25H6.75a5.25 5.25 0 0 1-2.23-10.004 6.072 6.072 0 0 1-.02-.496Z" clipRule="evenodd" />
                            </svg>
                        </div>
                        <div className="text-yellow-500 font-bold text-lg">Networking</div>
                        <div className="text-zinc-100 text-left text-sm">
                            I have a solid understanding of networking protocols, including TCP/IP, DNS, HTTP, and more. I have worked on various projects to optimize network performance and security.
                        </div>
                    </div>
                    {/* Third Skill */}
                    <div className="flex flex-col gap-4 font-poppins">
                        <div className="">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6 text-teal-300">
                                <path fillRule="evenodd" d="M4.5 9.75a6 6 0 0 1 11.573-2.226 3.75 3.75 0 0 1 4.133 4.303A4.5 4.5 0 0 1 18 20.25H6.75a5.25 5.25 0 0 1-2.23-10.004 6.072 6.072 0 0 1-.02-.496Z" clipRule="evenodd" />
                            </svg>
                        </div>
                        <div className="text-yellow-500 font-bold text-lg">Networking</div>
                        <div className="text-zinc-100 text-left text-sm">
                            I have a solid understanding of networking protocols, including TCP/IP, DNS, HTTP, and more. I have worked on various projects to optimize network performance and security.
                        </div>
                    </div>
                    {/* Third Skill */}
                    <div className="flex flex-col gap-4 font-poppins">
                        <div className="">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6 text-teal-300">
                                <path fillRule="evenodd" d="M4.5 9.75a6 6 0 0 1 11.573-2.226 3.75 3.75 0 0 1 4.133 4.303A4.5 4.5 0 0 1 18 20.25H6.75a5.25 5.25 0 0 1-2.23-10.004 6.072 6.072 0 0 1-.02-.496Z" clipRule="evenodd" />
                            </svg>
                        </div>
                        <div className="text-yellow-500 font-bold text-lg">Networking</div>
                        <div className="text-zinc-100 text-left text-sm">
                            I have a solid understanding of networking protocols, including TCP/IP, DNS, HTTP, and more. I have worked on various projects to optimize network performance and security.
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Index;
