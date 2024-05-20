import getTreadingVideo from "@/actions/NewCreator";
import LeftBar from "@/components/Leftbar";
import VideoCard from "@/components/shared/VideoCard";
import getCurrentSubscription from "@/actions/getCurrentSubscriptions";

import { Metadata } from "next";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: {
    absolute: "Dashboard",
  },
};
export default async function Home() {
  const trendingVideos = await getTreadingVideo();
  const subscriptions = await getCurrentSubscription();
  return (
    <div className="w-full relative  mt-16 flex justify-center">
      <div className="sm:hidden md:flex flex flex-between md:mr-4">
        <LeftBar subscribedChannels={subscriptions} />
      </div>
      <Suspense fallback={<div>Loading...</div>}>
        {/* <div className="basis-[85%] sm:mb-[100px] lg:mb-[0px] gap-x-10 gap-y-10 mt-5 justify-center grid-container lg:mr-5">
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
        </div> */}
      </Suspense>
    </div>
  );
}
