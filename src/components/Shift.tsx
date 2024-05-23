import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";

const Shift = () => {
  return (
    <>
      <div className="max-w-[988px] mx-auto flex-1 w-full flex flex-col lg:flex-row items-center justify-center p-4 gap-2 mt-[170px]">
        <div className="relative w-[340px] h-[340px] lg:w-[424px] lg:h-[424px] mb-8 lg:mb-0 mt-16 mr-4">
          <Image src={"/logo.jpg"} alt="helol" fill className="rounded-full" />
        </div>
        <div className="flex flex-col items-center gap-y-8">
          <h1 className="text-xl lg:text-3xl font-bold text-neutral-600 max-w-[480px] text-center">
            Explore All the Ai Content, in one place, with Myaimix.
          </h1>
          <Link href={"/about"}>
            <Button size={"lg"}>Explore</Button>
          </Link>
        </div>
      </div>
      <div className="max-w-[988px] mx-auto flex-1 w-full flex flex-col lg:flex-row-reverse items-center justify-center p-4 gap-2 mt-[170px] ">
        <div className="relative w-[340px] h-[340px] lg:w-[424px] lg:h-[424px] mb-8 lg:mb-0 mt-16">
          <Image src={"/logo1.jpg"} alt="helol" fill className="rounded-full" />
        </div>
        <div className="flex flex-col items-center gap-y-8 mr-6">
          <h1 className="text-xl lg:text-3xl font-bold text-neutral-600 max-w-[480px] text-center">
            Get into with Ai and Enjoy the Content, with Myaimix.
          </h1>
          <div>
            <Link href={"/about"}>
              <Button size={"lg"}>Get Into It</Button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Shift;
