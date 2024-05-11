"use client";

import { LikeDislikeStatus, useLikeDislike } from "@/hooks/useLikeDislike";
import { compactNumberFormat } from "@/utils/numUtils";
import { Video } from "@prisma/client";
import {
  MdOutlineThumbDown,
  MdOutlineThumbUp,
  MdThumbDown,
  MdThumbUp,
} from "react-icons/md";

interface LikeDisLikeButtonProps {
  video: Video;
}

const LikeDisLikeButton: React.FC<LikeDisLikeButtonProps> = ({ video }) => {
  const { likeDislikeStatus, toogleLikeDislike } = useLikeDislike({
    videoId: video.id,
  });
  return (
    <div className="flex items-center gap-1 dark:bg-neutral-800 bg-gray-200 rounded-full px-3 py-2 dark:text-white text-black font-medium">
      <button
        className="pr-3 border-r-2 border-neutral-600 flex items-center gap-3"
        onClick={() => toogleLikeDislike("like")}
      >
        {likeDislikeStatus === LikeDislikeStatus.Liked ? (
          <MdThumbUp className="w-6 h-6" />
        ) : (
          <MdOutlineThumbUp className="h-6 w-6" />
        )}
        <p>{compactNumberFormat(video.likeCount)}</p>
      </button>
      <button className="pl-2" onClick={() => toogleLikeDislike("dislike")}>
        {likeDislikeStatus === LikeDislikeStatus.Disliked ? (
          <MdThumbDown className="w-6 h-6" />
        ) : (
          <MdOutlineThumbDown className="h-6 w-6" />
        )}
      </button>
    </div>
  );
};

export default LikeDisLikeButton;
