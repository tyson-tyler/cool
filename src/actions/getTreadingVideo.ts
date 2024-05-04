import { useInfiniteQuery } from "react-query";
import prisma from "@/vendor/db";
import { Channel, Video } from "@prisma/client";

const fetchTrendingVideos = async (key: any, nextPage = 1) => {
  const PAGE_SIZE = 10;
  try {
    const startDate = new Date();
    startDate.setMonth(startDate.getMonth() - 1);

    const videos = await prisma.video.findMany({
      include: {
        Channel: true,
      },
      where: {
        createdAt: {
          gte: startDate,
        },
      },
      orderBy: [
        {
          viewCount: "desc",
        },
      ],
      skip: (nextPage - 1) * PAGE_SIZE,
      take: PAGE_SIZE,
    });

    // Add channel information to each video and return as a tuple
    const videosWithChannels = videos.map((video) => ({
      ...video,
      channel: video.Channel || null, // Ensure channel property is not undefined
    })) as (Video & { channel: Channel })[];

    return videosWithChannels;
  } catch (error) {
    throw new Error("Failed to fetch trending videos: " + error);
  }
};
export default fetchTrendingVideos;
