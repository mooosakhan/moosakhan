
import React, { useState, useEffect } from "react";
import Button from "./../Button";

const Index = () => {

  return (
    <>
      <div className="flex flex-col md:justify-center items-center  md:items-start justify-center gap-14 h-[70vh] p-14 md:py-28  ">
        {/* Hero Section */}

        <div className="hero text-center lg:text-left flex flex-col gap-3 items-center lg:items-start lg:self-start self-center">
     
          <h1 className="text-yellow-500 text-3xl lg:text-6xl md:text-5xl font-extrabold font-poppins">
            About Me
          </h1>

          <h1 className="text-teal-500 text-center font-bold text-sm font-poppins self-center lg:text-left lg:self-start">
            MY STORY
          </h1>


        </div>
        <div className="text flex flex-col gap-5 text-center">

          <p className="text-zinc-100 lg:text-left text-md font-poppins">
            I have always been intrigued to learn more. I have experience in Cloud Computing, Cybersecurity, and Data Science. I love taking up new projects and building new apps/websites with people. I have recently started with Artifitial Intelligence and am currently making a project on it.
          </p>

          <p className="text-zinc-100 lg:text-left text-md font-poppins ">
            I also love taking part in Hackathons, Challenges and Summits. I have participated in many programs like the Google Cloud Ready Facilitator, 30 Days of Cloud, Azure Developer League, AWS Cloud Summit, <span className="hidden md:block">Google Devfest, Azure Skill-Up, Learn to Earn, Hacktoberfest and much more.</span>
          </p>


        </div>
      </div>
    </>
  );
};

export default Index;
