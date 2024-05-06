import { Metadata } from "next";
import { Button } from "@/components/ui/button";
import { Suspense, lazy } from "react";
import { SkeletonCard } from "@/components/Sketon";

export const metadata: Metadata = {
  title: {
    absolute: "Home",
  },
};

const BoxCard = lazy(() => import("@/components/Box"));
const BoxCard1 = lazy(() => import("@/components/Box1"));
const BoxCard2 = lazy(() => import("@/components/Box2"));

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
          <Button
            className="p-5 justify-center flex"
            size={"lg"}
            onClick={() => (window.location.href = "/about")}
          >
            Try it Now
          </Button>
          <Button
            className="p-5 justify-center flex"
            size={"lg"}
            variant={"ghost"}
            onClick={() =>
              window.open("https://inter-taupe.vercel.app", "_blank")
            }
          >
            Community
          </Button>
        </div>
        <div className="w-full justify-center mt-2 flex items-center flex-wrap ">
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
      </section>
    </>
  );
};

export default About;
