import BoxCard from "@/components/Box";
import BoxCard1 from "@/components/Box1";
import BoxCard2 from "@/components/Box2";
import Goal from "@/components/Goal";
import Videomodel from "@/components/Videomodel";
import Strop from "@/components/strop";
import { Button } from "@/components/ui/button";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: {
    absolute: "About",
  },
};

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
          Myaimix is an open-sourse Ai Video & Image watch and create your own .
        </p>
        <div className="flex justify-center items-center mt-5 gap-3">
          <Link href={"/about"}>
            <Button className="p-5 justify-center flex" size={"lg"}>
              Try it Now
            </Button>
          </Link>
          <Link href={"/"}>
            <Button
              className="p-5 justify-center flex"
              size={"lg"}
              variant={"ghost"}
            >
              Commutinity
            </Button>
          </Link>
        </div>
        <div className="w-full justify-center mt-2 flex items-center flex-wrap">
          <BoxCard />
          <BoxCard1 />
          <BoxCard2 />
        </div>
        <Videomodel />
        <Goal />

        <Strop />
      </section>
    </>
  );
};

export default About;
