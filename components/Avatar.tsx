"use client";

import Image from "next/image";

interface AvatarProps {
  avatar?: string | null | undefined;
}

export default function Avatar({ avatar }: AvatarProps) {
  return (
    <Image
      className="rounded-full"
      height={30}
      width={30}
      priority
      alt="avatar"
      src={avatar || "/images/placeholder.png"}
    />
  );
}
