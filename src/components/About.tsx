import { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Suspense, lazy } from "react";
import { SkeletonCard } from "@/components/Sketon";

export const metadata: Metadata = {
  title: {
    absolute: "Home",
  },
};

// Lazy-loaded components

const About = () => {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <section className="w-full flex-center  flex-col mt-6">
          <h1 className="head_text text-center pt-[200px] dark:text-white text-black">
            <span className="dark:text-white text-black">Explore & Create</span>
            <br className="max-md:hidden" />
            <span className="usespan text-center ml-2">Ai Video</span>
          </h1>

          <p className="desc text-center text-gray-600 mt-5">
            Myaimix is an open-source Ai Video & Image watch and create your own
            .
          </p>
          <div className="flex justify-center items-center mt-5 gap-3">
            <Link href={"/about"}>
              <Button className="p-5 justify-center flex" size={"lg"}>
                Try it Now
              </Button>
            </Link>
            <a href={"https://inter-main.vercel.app"}>
              <Button
                className="p-5 justify-center flex"
                size={"lg"}
                variant={"ghost"}
              >
                Community
              </Button>
            </a>
          </div>
        </section>
      </Suspense>
    </>
  );
};

export default About;
