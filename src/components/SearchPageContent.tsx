"use client";
import VideoCard from "@/components/shared/VideoCard";
import { Channel, Video } from "@prisma/client";
import axios from "axios";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useRouter, useSearchParams } from "next/navigation";
import { Loader } from "lucide-react";
import Image from "next/image";

export default function SearchPageContent() {
  const params = useSearchParams();
  const searchQuery = params.get("searchQuery");
  const [loading, setLoading] = useState(true);
  const [videos, setVideos] = useState<(Video & { channel: Channel })[]>([]);
  const router = useRouter();

  useEffect(() => {
    axios
      .get("/api/videos", { params: { searchQuery } })

      .then((data) => {
        setVideos(data.data as unknown as (Video & { channel: Channel })[]);
      })
      .catch(() => toast.error("No Result found"));
  }, [searchQuery]);
  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false); // Hide loader after 2000 milliseconds
    }, 3000);

    // Clear timeout on component unmount or when videos are loaded
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="w-full relative mt-16 flex justify-center">
      <div className="basis-[85%] sm:mb-[100px] lg:mb-[0px] gap-x-10 gap-y-10 mt-5 justify-center grid-container w-full">
        {loading ? (
          <div className="w-full h-screen justify-center flex items-center">
            <div className="flex justify-center items-center">
              <span className="usespan text-xl">
                <Loader className="w-10 h-10 animate-spin" />
              </span>
            </div>
          </div>
        ) : videos.length ? (
          videos.map((video) => (
            <VideoCard
              key={video.id}
              isVertical={false}
              video={video}
              channel={video.channel}
              includeDescription
            />
          ))
        ) : (
          <div className="w-full h-fit justify-center flex items-center flex-col">
            <div className="flex justify-center items-center flex-col">
              <Image
                width={250}
                height={250}
                src={"/oops.png"}
                alt="log"
                className="object-cover"
              />
              <span className="usespan text-xl font-semibold">
                No videos found
              </span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
