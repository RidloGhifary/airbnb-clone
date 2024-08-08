"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Logo() {
  const router = useRouter();

  return (
    <div className="hidden flex-1 cursor-pointer md:block">
      <Image
        alt="logo"
        className="hidden cursor-pointer md:block"
        height={100}
        width={100}
        priority
        src="/images/text_logo.png"
      />
    </div>
  );
}
