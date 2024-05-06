import { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Suspense } from "react";
import BoxCard from "@/components/Box";
import BoxCard1 from "@/components/Box1";
import BoxCard2 from "@/components/Box2";
import Videomodel from "@/components/Videomodel";
import Goal from "@/components/Goal";
import Strop from "@/components/strop";
import { SkeletonCard } from "@/components/Sketon";

export const metadata: Metadata = {
  title: {
    absolute: "Home",
  },
};

const About = () => {
  const loadBoxCard = () => import("@/components/Box");
  const loadBoxCard1 = () => import("@/components/Box1");
  const loadBoxCard2 = () => import("@/components/Box2");

  return (
    <>
      <section className="w-full flex-center  flex-col mt-6">
        <h1 className="head_text text-center pt-[200px] dark:text-white text-black">
          <span className="dark:text-white text-black">Explore & Create</span>
          <br className="max-md:hidden" />
          <span className="usespan text-center">Ai Video .</span>
        </h1>

        <p className="desc text-center text-gray-600 mt-5">
          Myaimix is an open-source Ai Video & Image watch and create your own .
        </p>
        <div className="flex justify-center items-center mt-5 gap-3">
          <Link href={"/about"}>
            <Button className="p-5 justify-center flex" size={"lg"}>
              Try it Now
            </Button>
          </Link>
          <Link href={"/https://inter-taupe.vercel.app"}>
            <Button
              className="p-5 justify-center flex"
              size={"lg"}
              variant={"ghost"}
            >
              Community
            </Button>
          </Link>
        </div>
        <div className="w-full justify-center mt-5 flex items-center flex-wrap ">
          <Suspense
            fallback={
              <div>
                <SkeletonCard />
              </div>
            }
          >
            <BoxCard />
            <BoxCard1 />
            <BoxCard2 />
          </Suspense>
        </div>
        <Videomodel />
        <Goal />
        <Strop />
      </section>
    </>
  );
};

export default About;
