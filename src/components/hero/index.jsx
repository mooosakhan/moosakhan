import React from "react";
// import "./index.css";
import Button from "./../Button";

const index = () => {
  return (
    <>
      {/* <div className="circle bg-zinc-900 h-72 w-72  absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full">
  mbnbvvbvb
</div> */}

      <div className=" flex flex-col justify-end items-center gap-16 h-screen p-6">
        <div className="hero text-center lg:text-left">
          <h1 className="text-yellow-400 text-7xl font-extrabold font-poppins z-50">
          👋 I am <br />
            Moosa Khan
          </h1>
        </div>
        <div className="text flex flex-col gap-5 items-center  text-center">
          <p class="text-teal-600 font-bold text-md">
            <img
              src="https://readme-typing-svg.herokuapp.com/?font=Righteous&size=35&center=true&vCenter=true&width=500&height=70&duration=4000&lines=MERN STACK DEVELOPER;PYTHON DEVELOPER;BACKEND DEVELOPER!&color=14B8A6"
              alt="Typing SVG"
            />
          </p>

          <p className="text-zinc-100 text-md">
            Hello! I am an undergraduate student with a never ending love {" "}
            for Cloud and a burning passion for Cybersecurity. I love talking{" "}
             to new people and discuss about new ideas. I have recently{" "}
            started with Web Development and loving it since.
          </p>
          <div className="btn">
            <Button />
          </div>
        </div>
      </div>
    </>
  );
};

export default index;
