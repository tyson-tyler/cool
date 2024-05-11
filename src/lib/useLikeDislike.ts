import { CurrentUserContext } from "@/context/CurrentUserContext";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useCallback, useContext, useMemo, useState } from "react";
import toast from "react-hot-toast";

interface UseLikeDislikeProps {
  videoId: string;
}

export enum LikeDislikeStatus {
  Liked = 1,
  Disliked = 2,
  None = 3,
}

export const useLikeDislike = ({ videoId }: UseLikeDislikeProps) => {
  const currentUser = useContext(CurrentUserContext);
  const router = useRouter();

  const [likeDislikeCache, setLikeDislikeCache] = useState<{
    [key: string]: LikeDislikeStatus;
  }>({});

  const likeDislikeStatus = useMemo(() => {
    if (!currentUser || !videoId) return LikeDislikeStatus.None;

    return likeDislikeCache[videoId] || LikeDislikeStatus.None;
  }, [currentUser, videoId, likeDislikeCache]);

  const toggleLikeDislike = useCallback(
    async (action: "like" | "dislike") => {
      if (!currentUser) {
        toast.error("Please Sign to Like/DisLike");
        return;
      } else if (!videoId) return;

      try {
        let updatedStatus = likeDislikeStatus;

        if (action === "like") {
          switch (likeDislikeStatus) {
            case LikeDislikeStatus.Liked:
              await axios.delete(`/api/videos/${videoId}/like`);
              updatedStatus = LikeDislikeStatus.None;
              break;
            case LikeDislikeStatus.Disliked:
              await axios.delete(`/api/videos/${videoId}/dislike`);
              await axios.post(`/api/videos/${videoId}/like`);
              updatedStatus = LikeDislikeStatus.Liked;
              break;
            default:
              await axios.post(`/api/videos/${videoId}/like`);
              updatedStatus = LikeDislikeStatus.Liked;
              break;
          }
        } else if (action === "dislike") {
          switch (likeDislikeStatus) {
            case LikeDislikeStatus.Liked:
              await axios.delete(`/api/videos/${videoId}/like`);
              await axios.post(`/api/videos/${videoId}/dislike`);
              updatedStatus = LikeDislikeStatus.Disliked;
              break;
            case LikeDislikeStatus.Disliked:
              await axios.delete(`/api/videos/${videoId}/dislike`);
              updatedStatus = LikeDislikeStatus.None;
              break;
            default:
              await axios.post(`/api/videos/${videoId}/dislike`);
              updatedStatus = LikeDislikeStatus.Disliked;
              break;
          }
        }
        setLikeDislikeCache((prevCache) => ({
          ...prevCache,
          [videoId]: updatedStatus,
        }));
        router.refresh();
        toast.success("Thanks for Like!");
      } catch (error) {
        toast.error("There is an error");
      }
    },
    [currentUser, videoId, likeDislikeStatus, router]
  );

  return {
    likeDislikeStatus,
    toggleLikeDislike,
  };
};
