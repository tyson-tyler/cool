"use client";

import React from "react";
import { Button } from "./ui/button";

const Videomodel = () => {
  return (
    <div
      className={`dark:text-white text-black z-40 flex justify-center w-full lg:flex-row flex-col`}
    >
      <video
        src={"/1.mp4"}
        autoPlay
        loop
        muted
        className="w-full lg:w-1/2 rounded-md lg:ml-6 mt-12 mb-5 max-h-[500px]"
      />
      <div>
        {" "}
        <h1 className="head_text text-center lg:pt-[200px] md:pt-[100px] sm:pt-[50px] pt-[30px] dark:text-white text-black">
          <span className="dark:text-white text-black">
            If You Want to Learn Ai
          </span>
          <br className="max-md:hidden" />
        </h1>
        <p className="desc text-center text-gray-600 mt-5">
          If You want to know how you make that video and Image Please Click on
          the button and know the requiredments
        </p>
        <Button
          className="flex justify-center w-full md:w-1/2 ml-2 mr-2 m-auto mt-4 transform transition scale-105"
          size={"lg"}
        >
          Learn Ai.
        </Button>
      </div>
    </div>
  );
};

export default Videomodel;
