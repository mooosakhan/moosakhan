// import React from "react";
// // import "./index.css";
// import Button from "./../Button";

// const index = () => {
//   return (

//     <>
//       {/* <div className="circle bg-zinc-900 h-72 w-72  absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full">
//   mbnbvvbvb
// </div> */}

//       <div className=" flex flex-col md:justify-end items-center md:items-start justify-start gap-6 h-50vw md:h-screen p-6">
//         {/* gap-16 */}
//         <div className="hero text-center md:text-left ">
//           <h1 className="text-yellow-500 text-3xl md:text-6xl lg:text-7xl font-extrabold font-poppins z-50">
//             👋 I am <br />
//             Moosa Khan
//           </h1>
//         </div>
//         <div className="text flex flex-col gap-5">

//           <p className="text-md">
//             <img
//               src="https://readme-typing-svg.herokuapp.com/?font=Righteous&size=18&width=500&height=70&duration=4000&lines=MERN%20STACK%20DEVELOPER;PYTHON%20DEVELOPER;BACKEND%20DEVELOPER!&color=14B8A6"
//               alt="Typing SVG"
//             />
//           </p>



//           <p className="text-zinc-100 text-left text-sm font-poppins">
//             Hello! I am an undergraduate student with a never ending love {" "}
//             for Cloud and a burning passion for Cybersecurity. I love talking{" "}
//             to new people and discuss about new ideas. I have recently{" "}
//             started with Web Development and loving it since.
//           </p>
//           <div className="btn text-left self-center  md:self-start">
//             <Button />
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default index;

// import React, { useState, useEffect } from "react";
// import Button from "./../Button";

// const Index = () => {
//   // State to track whether it's mobile or not
//   const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

//   // Effect to update the state on window resize
//   useEffect(() => {
//     const handleResize = () => {
//       setIsMobile(window.innerWidth < 768);
//     };

//     // Add resize event listener
//     window.addEventListener('resize', handleResize);

//     // Clean up event listener on component unmount
//     return () => window.removeEventListener('resize', handleResize);
//   }, []);

//   // Dynamically set the SVG URL based on screen size
//   const svgUrl = isMobile
//     ? "https://readme-typing-svg.herokuapp.com/?font=Righteous&size=18&center=true&vCenter=true&width=500&height=70&duration=4000&lines=MERN%20STACK%20DEVELOPER!;PYTHON%20DEVELOPER!;BACKEND%20DEVELOPER!&color=14B8A6"
//     : "https://readme-typing-svg.herokuapp.com/?font=Righteous&size=18&width=500&height=70&duration=4000&lines=MERN%20STACK%20DEVELOPER;PYTHON%20DEVELOPER;BACKEND%20DEVELOPER!&color=14B8A6"; // Left-aligned version

//   return (
//     <>
//       <div className="flex flex-col lg:justify-end items-center lg:items-start justify-start gap-6 h-50vh lg:h-[96vh] p-6 px-14">
//         {/* Hero Section */}
//         <div className="hero text-center lg:text-left">
//           <h1 className="text-yellow-500 text-3xl md:text-6xl lg:text-7xl font-extrabold font-poppins z-50">
//             👋 I am <br />
//             Moosa Khan
//           </h1>
//         </div>

//         <div className="text flex flex-col gap-5">
//           <p className="text-md flex justify-center lg:justify-start">
//             {/* Dynamically change the SVG URL */}
//             <img
//               src={svgUrl}
//               alt="Typing SVG"
//             />
//           </p>

//           <p className="text-zinc-100 text-center text-sm font-poppins lg:text-left ">
//             Hello! I am an undergraduate student with a never ending love{" "}
//             for Cloud and a burning passion for Cybersecurity. I love talking{" "}
//             to new people and discuss about new ideas. I have recently{" "}
//             started with Web Development and loving it since.
//           </p>

//           <div className="btn  self-center lg:self-start">
//             <Button />
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Index;

import React, { useState, useEffect } from "react";
import Button from "./../Button";
import HeroSectionTextHover from "../animata/hero/hero-section-text-hover";

const Index = () => {
  // State to track whether it's mobile or not
  const [svgUrl, setSvgUrl] = useState("");

  // Effect to update the SVG URL based on screen size
  useEffect(() => {
    const updateSvgUrl = () => {
      const isLgOrBigger = window.innerWidth >= 1024;  // Check if screen is large or bigger

      const url = isLgOrBigger
        ? "https://readme-typing-svg.herokuapp.com/?font=Righteous&size=18&width=500&height=70&duration=4000&lines=MERN%20STACK%20DEVELOPER;PYTHON%20DEVELOPER;BACKEND%20DEVELOPER!&color=5eead4"  // Left-aligned for large screens
        : "https://readme-typing-svg.herokuapp.com/?font=Righteous&size=18&center=true&vCenter=true&width=500&height=70&duration=4000&lines=MERN%20STACK%20DEVELOPER;PYTHON%20DEVELOPER;BACKEND%20DEVELOPER!&color=5eead4"; // Center-aligned for smaller screens

      setSvgUrl(url);
    };

    // Update SVG URL on initial load and window resize
    updateSvgUrl();  // Call on initial render
    window.addEventListener('resize', updateSvgUrl);  // Add resize event listener

    // Cleanup the event listener
    return () => window.removeEventListener('resize', updateSvgUrl);
  }, []);

  return (
    <>
      <div className="flex flex-col lg:justify-end lg:items-start justify-start gap-6 h-50vh lg:h-[96vh] p-6 px-14 rounded-4xl ">
        {/* Hero Section */}
        <div className="hero text-center lg:text-left flex items-center lg:items-start justify-start flex-col ">
           <h1 className="text-yellow-500 text-3xl md:text-6xl lg:text-7xl font-extrabold font-poppins ">
            👋 I am <br />
            Moosa Khan
          </h1>

        </div>

        <div className="text flex flex-col gap-5 lg:mb-14">
          <p className="text-md flex justify-center lg:justify-start">
            {/* Dynamically change the SVG URL */}
            <img
              src={svgUrl}
              alt="Typing SVG"
            />
          </p>

          <p className="text-zinc-100 text-center text-sm font-poppins lg:text-left ">
            Hello! I am an undergraduate student with a never ending love{" "}
            for Cloud and a burning passion for Cybersecurity. I love talking{" "}
            to new people and discuss about new ideas. I have recently{" "}
            started with Web Development and loving it since.
          </p>

          <div className="btn self-center lg:self-start text-sm">
            <Button />
          </div>
        </div>
      </div>
    </>
  );
};

export default Index;
