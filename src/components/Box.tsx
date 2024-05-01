// components/BoxCard.js

import Link from "next/link";

const BoxCard = () => {
  return (
    <Link href={"/"}>
      <div className="max-w-sm rounded overflow-hidden shadow-lg border-b hover:border-sky-700 md:mr-5  mr-0 transition hover:scale-105 cursor-pointer">
        <img
          src={
            "https://media4.giphy.com/media/YiJTlLGomNP3TeJXdE/giphy.webp?cid=ecf05e47qv7fkww41bp2yd1d8ey67e0jrhq0in3gtbtjpe1b&ep=v1_gifs_search&rid=giphy.webp&ct=g"
          }
          alt="hello"
          className="w-full pt-6 h-[300px] object-cover"
        />
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
