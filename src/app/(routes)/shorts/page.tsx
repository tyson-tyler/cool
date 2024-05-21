import getCurrentSubscription from "@/actions/getCurrentSubscriptions";
import getTreadingVideo from "@/actions/getSad";
import Bar from "@/components/Bar";
import LeftBar from "@/components/Leftbar";
import VideoCard from "@/components/videoTrue";
import { FilmIcon } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    absolute: "Clips",
  },
};
export default async function Home() {
  const subscriptions = await getCurrentSubscription();
  const trendingVideos = await getTreadingVideo();
  return (
    <div className="w-full relative  mt-16 flex justify-center">
      <div className="sm:hidden md:flex  flex flex-between md:mr-4">
        <LeftBar subscribedChannels={subscriptions} />
      </div>
      <div className="basis-[85%] mb-[100px] lg:mb-[0px] gap-x-10 gap-y-10 mt-5 justify-center">
        <div className="flex justify-center mt-3 mb-10 items-center">
          <FilmIcon className="w-10 h-10" />
          <span className="text-sm sm:text-sm md:text-lg lg:text-xl font-bold ml-3">
            {" "}
            Ai Films{" "}
          </span>
        </div>
        {trendingVideos
          ? trendingVideos.map((trendingVideo) => {
              return (
                <VideoCard
                  key={trendingVideo.id}
                  video={trendingVideo}
                  channel={trendingVideo.channel}
                  channelAvatar={trendingVideo.thumbnailSrc}
                />
              );
            })
          : "No Video"}
      </div>
      <div className="sm:hidden lg:flex flex flex-between md:mr-4 md:hidden">
        <Bar />
      </div>
    </div>
  );
}
