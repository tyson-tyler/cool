import prisma from "@/vendor/db";
import { Channel, Video } from "@prisma/client";

export default async function getTrendingVideos(): Promise<
  (Video & { channel: Channel })[]
> {
  try {
    const videos: (Video & { channel: Channel })[] = [];

    let skip = 0;
    const take = 2;

    while (true) {
      const fetchedVideos = await prisma.video.findMany({
        include: {
          Channel: true,
        },
        orderBy: [
          {
            createdAt: "desc",
          },
        ],
        skip,
        take,
      });

      const videosWithChannels = fetchedVideos.map((video) => ({
        ...video,
        channel: video.Channel || null,
      }));

      videos.push(...videosWithChannels);

      if (fetchedVideos.length < take) {
        // If fetchedVideos.length is less than take, it means no more videos to fetch
        break;
      }

      // Increment skip for the next iteration
      skip += take;

      // Wait for 1 second before fetching the next batch of videos
      await new Promise((resolve) => setTimeout(resolve, 10));
    }

    return videos;
  } catch (error: any) {
    throw new Error("Failed to fetch trending videos: " + error.message);
  }
}
