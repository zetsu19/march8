"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export default function UguePage() {
  const router = useRouter();

  return (
    <main className="min-h-screen bg-[#f7b6c2] flex flex-col items-center justify-center px-4">
      <div className="mb-8">
        <Image
          src="/sitting-silent.gif"
          alt="love gif"
          width={300}
          height={300}
          priority
          className="drop-shadow-xl"
        />
      </div>

      <h1 className="text-5xl md:text-6xl font-extrabold text-red-700 text-center drop-shadow-md mt-8">
        Дахиад нэг оролдоорой :(
      </h1>

      <div className="mt-12">
        <Button
          onClick={() => router.push("/")}
          className="
    bg-white
    text-black
    text-2xl
    font-extrabold
    px-12
    py-7
    rounded-full
    border-2
    border-black
    shadow-[0_6px_0px_rgba(0,0,0,0.3)]   /* lighter shadow */
    hover:shadow-[0_3px_0px_rgba(0,0,0,0.2)] /* lighter on hover */
    hover:translate-y-[2px]                /* smaller move */
    transition-all duration-150
  "
        >
          ДАХИН ОРОЛДОХ 💔
        </Button>
      </div>
    </main>
  );
}
