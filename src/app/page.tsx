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
const BoxCard = lazy(() => import("@/components/Box"));
const BoxCard1 = lazy(() => import("@/components/Box1"));
const BoxCard2 = lazy(() => import("@/components/Box2"));
const Videomodel = lazy(() => import("@/components/Videomodel"));
const Goal = lazy(() => import("@/components/Goal"));
const Strop = lazy(() => import("@/components/strop"));

const About = () => {
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
        <Suspense
          fallback={
            <div>
              <SkeletonCard />
            </div>
          }
        >
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
            <Suspense
              fallback={
                <div>
                  <SkeletonCard />
                </div>
              }
            >
              <Videomodel />
              <Goal />
              <Strop />
            </Suspense>
          </div>
        </Suspense>
      </section>
    </>
  );
};

export default About;
