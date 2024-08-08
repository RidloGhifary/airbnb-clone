"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Logo() {
  const router = useRouter();

  return (
    <Image
      alt="logo"
      className="hidden cursor-pointer md:block"
      height={100}
      width={100}
      src="/images/text_logo.png"
    />
  );
}
