import Image from "next/image";
import Link from "next/link";

const BoxCard2 = () => {
  return (
    <Link href={"https://inter-taupe.vercel.app"}>
      <div className="max-w-sm rounded overflow-hidden shadow-lg border-b hover:border-sky-700 md:mr-5  mr-0 transition hover:scale-105 cursor-pointer">
        <img
          src={"/3.gif"}
          alt="hello"
          className="w-full pt-6 h-[300px] object-cover"
        />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">Don't Fell Alone</div>
          <p className="text-gray-700 text-base">
            If You stuck on Something No Problem You have Community Support .
          </p>
        </div>
      </div>
    </Link>
  );
};

export default BoxCard2;
