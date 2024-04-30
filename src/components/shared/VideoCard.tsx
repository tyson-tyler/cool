"use client";
import { Channel, Video } from "@prisma/client";
import Image from "next/image";
import Link from "next/link";
import Avatar, { AvatarSize } from "../Avatar";
import { compactNumberFormat } from "@/utils/numUtils";
import dayjs from "@/vendor/devjs";
import { useState } from "react";

interface VideoCardProps {
  channel?: Channel;
  channelAvatar?: string;
  video: Video;
  includeDescription?: boolean;
  isVertical?: boolean;
}

const VideoCard: React.FC<VideoCardProps> = ({
  channel,
  channelAvatar,
  video,
  includeDescription = false,
  isVertical = true,
}) => {
  const truncatedTitle =
    video.title.length > 20 ? video.title.slice(0, 20) + "..." : video.title;
  const [isLoading, setIsLoading] = useState(true);
  const prefetchResource = (event: any) => {
    if (event.target.dataset.prefetched) return;
    event.target.dataset.prefetched = true;
    const postIndex = event.target.dataset.postIndex
      ? parseInt(event.target.dataset.postIndex)
      : -1;
    if (postIndex < 10) {
      // Prefetch the first 10 posts immediately
      prefetchImmediately(event.target.getAttribute("href"));
    } else {
      // Prefetch subsequent posts after a 1-second delay
      setTimeout(() => {
        prefetchImmediately(event.target.getAttribute("href"));
      }, 1000);
    }
  };

  const prefetchImmediately = (href: string) => {
    const prefetchLink = document.createElement("link");
    prefetchLink.rel = "prefetch";
    prefetchLink.href = href;
    document.head.appendChild(prefetchLink);
  };

  const handleImageLoad = () => {
    setIsLoading(false);
  };

  return (
    <Link
      className="m-auto w-full block mt-13 mb-3"
      href={`/video/${video.id}`}
      prefetch={true}
    >
      <div
        className="relative w-full flex justify-center md:h-[400px] lg:h-[550px] max-w-128 sm:h-[400px] h-[400px] aspect-video"
        onMouseEnter={prefetchResource} // Prefetch on hover
        data-post-index={video.id} // Pass the post index
      >
        {isLoading && (
          <div className="absolute inset-0 flex justify-center items-center dark:bg-gray-700 bg-gray-500">
            <div className="animate-pulse w-full h-full dark:bg-gray-700 bg-gray-500"></div>
          </div>
        )}
        <Image
          className="object-cover hover:scale-105 rounded-md max-w-[40rem] duration-150 transtion-all ease-in "
          src={video.thumbnailSrc}
          alt="thumbnail"
          layout="fill"
          loading="lazy"
          onLoad={handleImageLoad}
        />
      </div>

      <div className="flex gap-x-5 mt-4 flex-col">
        <h3 className="font-semibold text-lg">{truncatedTitle}</h3>
        {channel ? (
          <div className="flex gap-2 items-center ">
            <Avatar size={AvatarSize.medium} imageSrc={channel.imageSrc} />
            <p className="text-gray-500 text-sm whitespace-nowrap">
              {channel.name}
            </p>
          </div>
        ) : null}
        <p className="text-gray-500 text-sm  mt-2 mb-1">
          {compactNumberFormat(video.viewCount)} views * {""}
          {dayjs(video.createdAt).fromNow()}
        </p>
        {includeDescription ? (
          <div className="whitespace-pre-line text-sm text-gray-500">
            {video.description.split("/n").map((line, index) => {
              return line === "" ? <br key={index} /> : <p>{line}</p>;
            })}
          </div>
        ) : null}
      </div>
    </Link>
  );
};

export default VideoCard;
