import About from "@/components/About";
import dynamic from "next/dynamic";
import React from "react";

const Content = dynamic(() => import("../components/About"));

const page = () => {
  return (
    <div>
      <About />
    </div>
  );
};

export default page;
