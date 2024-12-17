import React from "react";
import Hero from './components/hero'
import About from './components/About'
import Navbar from './components/Navbar'
import './index.css'

const Portfolio = () => {
  return (
    <>
    <div className="Navbar absolute top-8 w-full">
      <Navbar/>
    </div>
    <div className="flex flex-col
     sm:flex-row w-full bg-zinc-900">
      {/* Left Section - Image */}
      <div className="w-full sm:w-1/2 h-[50vh] sm:h-screen">
        <img
          src="https://sabyasachiseal.com/wp-content/img/main.jpg"
          alt="Profile"
          className="object-cover w-full h-full"
        />
      </div>

      {/* Right Section - Sliding Content */}
      <div className="w-full sm:w-1/2 h-1/2 sm:h-screen overflow-y-auto">
      <Hero/>
      <About/>
        
        {/* <div className="p-8 space-y-8">
          <section>
            <h1 className="text-4xl font-bold">Welcome to My Portfolio</h1>
            <p className="text-lg mt-4">
              This is a sample section of your portfolio. Add details here.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold">About Me</h2>
            <p className="mt-2 text-gray-600">
              Add a brief description about yourself and your skills.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold">Projects</h2>
            <ul className="list-disc mt-2 pl-4 space-y-2">
              <li>Project 1: Description here.</li>
              <li>Project 2: Description here.</li>
              <li>Project 3: Description here.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold">Contact</h2>
            <p className="mt-2">
              Email: <a href="mailto:example@email.com" className="text-blue-500">example@email.com</a>
            </p>
          </section>
        </div>  */}
      </div>
    </div>
    </>
  );
};

export default Portfolio;
