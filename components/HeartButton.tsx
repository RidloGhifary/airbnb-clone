"use client";

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
  const hasFavorited = false;
  const toggleFavorited = () => {};

  return (
    <div
      onClick={toggleFavorited}
      className="relative cursor-pointer transition hover:opacity-70"
    >
      <AiOutlineHeart
        size={28}
        className="absolute -right-[2px] -top-[2px] fill-white"
      />
      <AiFillHeart
        size={28}
        className={hasFavorited ? "fill-rose-500" : "fill-neutral-500/70"}
      />
    </div>
  );
}
