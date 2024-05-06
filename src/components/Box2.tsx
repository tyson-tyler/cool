import Image from "next/image";
import Link from "next/link";

const BoxCard2 = () => {
  return (
    <Link href={"https://inter-main.vercel.app"}>
      <div className="max-w-sm rounded overflow-hidden shadow-lg border-b hover:border-sky-700 md:mr-5  mr-0 transition hover:scale-105 cursor-pointer">
        <div className="relative w-full h-[300px]">
          <Image
            src={"/3.webp"}
            alt="hello"
            layout="fill"
            objectFit="cover" // Covers the container while maintaining aspect ratio
            priority // Lazy loading for improved performance
            quality={75}
          />
        </div>

        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">Don't Feel Alone</div>
          <p className="text-gray-700 text-base">
            If You're Stuck on Something, No Problem! You Have Community
            Support.
          </p>
        </div>
      </div>
    </Link>
  );
};

export default BoxCard2;
