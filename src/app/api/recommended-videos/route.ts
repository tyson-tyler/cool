import { NextRequest, NextResponse } from "next/server";
import prisma from "@/vendor/db";
import { Channel, Video } from "@prisma/client";

interface GetRecommendedVideosProps {
  videoId: string;
  skip: number;
  limit: number;
}

export async function getRecommendedVideos({
  videoId,
  skip,
  limit,
}: GetRecommendedVideosProps): Promise<(Video & { channel: Channel })[]> {
  const video = await prisma.video.findUnique({ where: { id: videoId } });

  if (!video) {
    throw new Error("Video not found");
  }

  const videos = (await prisma.video.aggregateRaw({
    pipeline: [
      {
        $search: {
          index: "default",
          moreLikeThis: {
            like: [
              {
                description: video.description,
                title: video.title,
              },
            ],
          },
        },
      },
      { $skip: skip },
      { $limit: limit },
      {
        $lookup: {
          from: "Channel",
          localField: "channelId",
          foreignField: "_id",
          as: "channel",
        },
      },
      {
        $project: {
          _id: 0,
          id: { $toString: "$_id" },
          title: 1,
          description: 1,
          createdAt: 1,
          thumbnailSrc: 1,
          viewCount: 1,
          channel: { $arrayElemAt: ["$channel", 0] },
        },
      },
    ],
  })) as unknown as (Video & { channel: Channel })[];

  return videos.filter((vid) => vid.id !== video.id);
}

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const videoId = searchParams.get("videoId");
  const skip = parseInt(searchParams.get("skip") || "0", 10);
  const limit = parseInt(searchParams.get("limit") || "10", 10);

  if (!videoId) {
    return NextResponse.json({ error: "Invalid video ID" }, { status: 400 });
  }

  try {
    const videos = await getRecommendedVideos({ videoId, skip, limit });
    return NextResponse.json(videos);
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
