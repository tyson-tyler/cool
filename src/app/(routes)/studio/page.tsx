import getCurrentChannel from "@/actions/getCurrentChannel";
import getCurrentSubscription from "@/actions/getCurrentSubscriptions";
import getVideosByChannelId from "@/actions/getVideosByChannelId";
import Avatar, { AvatarSize } from "@/components/Avatar";
import LeftBar from "@/components/second";
import AnalayticSummary from "@/components/studio/AnalayticSummary";
import VideoDetailCard from "@/components/studio/VideoDetailCard";

import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: {
    absolute: "Studio",
  },
};

const page = async () => {
  const currentChannel = await getCurrentChannel();
  const subscriptions = await getCurrentSubscription();

  const videos = await getVideosByChannelId({ channelId: currentChannel?.id });
  return (
    <div className="w-full flex">
      <div className="sm:hidden border-r border-gray-500 md:flex flex flex-between md:mr-0 mt-12 md:ml-5 lg:ml-0">
        <LeftBar subscribedChannels={subscriptions} />
      </div>
      <div className="flex flex-col w-full">
        <div className="flex justify-center items-center mt-40">
          <Image
            src={`${currentChannel?.imageSrc}`}
            width={80}
            height={80}
            className=""
            alt="hello"
          />
        </div>
        <div className="flex flex-col w-full h-full">
          <AnalayticSummary videos={videos} />

          <div className="flex flex-col gap-4 mt-8">
            <h2 className="text-2xl text-center font-semibold">Videos</h2>
            <div className="py-5 grid-container">
              {videos.length
                ? videos.map((video) => {
                    return <VideoDetailCard key={video.id} video={video} />;
                  })
                : "there is No Video"}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default page;
