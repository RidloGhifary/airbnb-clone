"use client";

import useFavourite from "@/hooks/useFavourite";
import { SafeUser } from "@/types";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";

interface HeartButtonProps {
  listingId: string;
  currentUser?: SafeUser | null;
}

export default function HeartButton({
  listingId,
  currentUser,
}: HeartButtonProps) {
  const { toggleFavourite, hasFavourited } = useFavourite({
    listingId,
    currentUser,
  });

  return (
    <button
      onClick={toggleFavourite}
      className="relative cursor-pointer transition hover:opacity-70"
    >
      <AiFillHeart
        size={28}
        className={hasFavourited ? "fill-rose-500" : "fill-white"}
      />
    </button>
  );
}
