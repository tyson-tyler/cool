"use client";

import { Channel, Video } from "@prisma/client";
import Image from "next/image";
import Link from "next/link";
import Avatar, { AvatarSize } from "./Avatar";
import { useRef } from "react";

interface VideoCardProps {
  channel?: Channel;
  channelAvatar?: string;
  video: Video;
  includeDescription?: boolean;
  isVertical?: boolean;
}

const VideoCard: React.FC<VideoCardProps> = ({
  channel,

  video,
  includeDescription = false,
}) => {
  const truncatedTitle =
    video.title.length > 20 ? video.title.slice(0, 20) + "..." : video.title;

  const videoRef = useRef<HTMLVideoElement>(null);
  const playVideoOnFocus = () => {
    if (videoRef.current) {
      videoRef.current.play();
    }
  };

  return (
    <Link
      className="m-auto w-full block mt-13 mb-3"
      href={`/video/${video.id}`}
      prefetch={true}
    >
      <div className="relative w-full flex justify-center  lg:h-[550px] aspect-video">
        {/* <Image
          className="object-cover md:hover:scale-105 rounded-md max-w-[40rem] duration-150 transtion-all ease-in "
          src={video.thumbnailSrc}
          alt="thumbnail"
          loading="lazy"
          fill
        /> */}
        <video
          ref={videoRef}
          src={video.videoSrc}
          className="object-cover md:hover:scale-105 rounded-md w-full max-w-[40rem] duration-150 transtion-all ease-in"
          autoPlay
          muted
          loop
          onFocus={playVideoOnFocus}
        />
      </div>

      <div className="flex gap-x-5 mt-[-40px] mb-15 flex-col justify-center items-center z-50 mb-40">
        {channel ? (
          <div className="flex gap-2 items-center z-20 dark:bg-gray-600 bg-gray-100 text-black dark:text-white rounded-full p-4">
            <Avatar size={AvatarSize.medium} imageSrc={channel.imageSrc} />
            <div className="flex flex-col">
              <h3 className="font-semibold text-lg">{truncatedTitle}</h3>
              <p className="text-gray-500 text-sm whitespace-nowrap">
                {channel.name}
              </p>
            </div>
          </div>
        ) : null}
      </div>
    </Link>
  );
};

export default VideoCard;
