
// import React, { useState, useEffect } from "react";
// import Button from "./../Button";

// const Index = () => {

//   return (
//     <>
//       <div id="about" className="flex flex-col md:justify-center items-center  md:items-start justify-between md:gap-14 gap-10 h-auto lg:h-[70vh] px-8 lg:px-14 py-14 md:py-20 lg:py-28  ">
//         {/* Hero Section */}

//         <div className="hero text-center md:text-left flex flex-col gap-3 items-center md:items-start md:self-start self-center">

//           <h1 className="text-yellow-500 text-4xl lg:text-6xl md:text-5xl font-extrabold font-poppins">
//             About Me
//           </h1>

//           <h1 className="text-teal-300 text-center font-bold text-sm font-poppins self-center md:text-left md:self-start">
//             MY STORY
//           </h1>


//         </div>
//         <div className="text flex flex-col gap-5 text-center text-sm md:text-left font-poppins">

//           <p className="text-zinc-200">
//             I have always been intrigued to learn more. I have experience in Cloud Computing, Cybersecurity, and Data Science. I love taking up new projects and building new apps/websites with people. I have recently started with Artifitial Intelligence and am currently making a project on it.
//           </p>

//           <p className="text-zinc-200">
//             I also love taking part in Hackathons, Challenges and Summits. I have participated in many programs like the Google Cloud Ready Facilitator, 30 Days of Cloud, Azure Developer League, AWS Cloud Summit, <span className="hidden md:block">Google Devfest, Azure Skill-Up, Learn to Earn, Hacktoberfest and much more.</span>
//           </p>


//         </div>
//       </div>
//     </>
//   );
// };

// export default Index;

import React from "react";
import Button from "./../Button";

const Index = () => {
  return (
    <>
    <div id="scroll-container" style={{ overflow: 'scroll' }}>
      <div
        id="about"
        className="flex flex-col md:justify-center items-center md:items-start justify-between md:gap-14 gap-10 h-auto lg:h-[70vh] px-8 lg:px-14 py-14 md:py-20 lg:py-28"
      >
        {/* Hero Section */}
        <div className="hero text-center md:text-left flex flex-col gap-3 items-center md:items-start md:self-start self-center">
          <h1 className="text-yellow-500 text-4xl lg:text-6xl md:text-5xl font-extrabold font-poppins">
            About Me
          </h1>
          <h2 className="text-teal-300 text-center font-bold text-sm font-poppins self-center md:text-left md:self-start">
            MY STORY
          </h2>
        </div>

        <div className="text flex flex-col gap-5 text-center text-sm md:text-left font-poppins">
          <p className="text-zinc-200">
          As an undergraduate passionate about web development, I specialize in creating dynamic applications and engaging websites. I thrive on collaborating with others to bring innovative projects to life.
    </p>

          <p className="text-zinc-200">

Recently, I've delved into machine learning and natural language processing, currently working on an AI-driven project that integrates these technologies.<span className="hidden md:inline"> I actively participate in hackathons, challenges, and summits to further enhance my expertise.</span>
          </p>
        </div>
      </div>
</div>
    </>
  );
};

export default Index;
