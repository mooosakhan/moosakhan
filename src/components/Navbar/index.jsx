import React from "react";
import Button from "./../Button";
import "./index.css";

const Index = () => {
  return (
    <div className="text-zinc-100 bg-black bg-opacity-60 h-18 flex items-center self-center rounded-full justify-between mx-12 ">

      <a href="https://github.com/mooosakhan" target="blank">
        <div className="logo">
          <button className="cursor-pointer w-fit h-fit invert rounded-full scale-50  flex transition-all gap-5 ">
            <svg height="95" width="98" xmlns="http://www.w3.org/2000/svg">
              <path
                fill="#000"
                d="M48.854 0C21.839 0 0 22 0 49.217c0 21.756 13.993 40.172 33.405 46.69 2.427.49 3.316-1.059 3.316-2.362 0-1.141-.08-5.052-.08-9.127-13.59 2.934-16.42-5.867-16.42-5.867-2.184-5.704-5.42-7.17-5.42-7.17-4.448-3.015.324-3.015.324-3.015 4.934.326 7.523 5.052 7.523 5.052 4.367 7.496 11.404 5.378 14.235 4.074.404-3.178 1.699-5.378 3.074-6.6-10.839-1.141-22.243-5.378-22.243-24.283 0-5.378 1.94-9.778 5.014-13.2-.485-1.222-2.184-6.275.486-13.038 0 0 4.125-1.304 13.426 5.052a46.97 46.97 0 0 1 12.214-1.63c4.125 0 8.33.571 12.213 1.63 9.302-6.356 13.427-5.052 13.427-5.052 2.67 6.763.97 11.816.485 13.038 3.155 3.422 5.015 7.822 5.015 13.2 0 18.905-11.404 23.06-22.324 24.283 1.78 1.548 3.316 4.481 3.316 9.126 0 6.6-.08 11.897-.08 13.526 0 1.304.89 2.853 3.316 2.364 19.412-6.52 33.405-24.935 33.405-46.691C97.707 22 75.788 0 48.854 0z"
                clip-rule="evenodd"
                fill-rule="evenodd"
              ></path>
            </svg>
            <div className="text-zinc-900 text-4xl self-center font-black font-poppins" >mooosa <br /> khan</div>
          </button>
        </div></a>
      <div className="right w-1/2 flex font-poppins font-bold justify-between">
        <div className="list flex justify-center align-middle items-center gap-7">
          <a href="">Home</a>
          <a href="">About</a>
          <a href="">Portfolio</a>
          <a href="">Contact Us</a>
          <a href="">Resume</a>
        </div>
        <div className="Download mx-10 ">
          {/* <Button/> */}
          <button className="download-button">
            <div className="docs">
              <svg
                viewBox="0 0 24 24"
                width="20"
                height="20"
                stroke="currentColor"
                stroke-width="2"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="css-i6dzq1"
              >
                <path
                  d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"
                ></path>
                <polyline points="14 2 14 8 20 8"></polyline>
                <line x1="16" y1="13" x2="8" y2="13"></line>
                <line x1="16" y1="17" x2="8" y2="17"></line>
                <polyline points="10 9 9 9 8 9"></polyline>
              </svg>
              Resume
            </div>
            <div className="download">
              <svg
                viewBox="0 0 24 24"
                width="24"
                height="24"
                stroke="currentColor"
                stroke-width="2"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="css-i6dzq1"
              >
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                <polyline points="7 10 12 15 17 10"></polyline>
                <line x1="12" y1="15" x2="12" y2="3"></line>
              </svg>
            </div>
          </button>

        </div>
      </div>

    </div>
  );
};

export default Index;
