import Link from "next/link";
import Image from "next/image";

const BoxCard = () => {
  return (
    <Link href={"/"}>
      <div className="max-w-sm rounded overflow-hidden shadow-lg border-b hover:border-sky-700 md:mr-5  mr-0 transition hover:scale-105 cursor-pointer">
        <div className="relative w-[300px] h-[300px]">
          <Image
            src={"/1.gif"}
            alt="hello"
            layout="fill"
            objectFit="cover"
            loading="lazy"
          />
        </div>
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">Watch and Enjoy</div>
          <p className="text-gray-700 text-base">
            In Myaimix you can watch ai video and using the video in your
            project so On.
          </p>
        </div>
      </div>
    </Link>
  );
};

export default BoxCard;
