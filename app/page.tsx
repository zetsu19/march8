"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700", "900"],
  variable: "--font-poppins",
});

export default function Home() {
  const router = useRouter();

  return (
    <main
      className={`min-h-screen bg-[#f7b6c2] flex flex-col items-center justify-center px-4 ${poppins.variable}`}
    >
      <div className="mb-8">
        <Image
          src="/flower.png"
          alt="love gif"
          width={270}
          height={270}
          priority
          className="drop-shadow-xl"
        />
      </div>

      {/* Bold Heading */}
      <h1 className="text-center text-5xl md:text-6xl font-black text-red-700 leading-tight drop-shadow-md tracking-wide">
        Сайн уу, Шинэбаяр💞
        <br />
        Чамд зориулж нэг бяцхан бэлэг бэлдсэн 🎁
      </h1>

      {/* Bold Subtitle */}
      <p className="text-center text-xl md:text-2xl font-bold text-red-600 mt-4 drop-shadow-sm tracking-wide">
        хайрт Золжаргал-аас нь 💞
      </p>

      <div className="flex gap-8 mt-9 flex-wrap justify-center">
        <Button
          className="bg-[#f8a5a5] hover:bg-[#f48b8b] text-black text-2xl font-black tracking-wide px-12 py-7 rounded-full border-2 border-black shadow-[0_8px_0px_rgba(0,0,0,0.45)] hover:shadow-[0_5px_0px_rgba(0,0,0,0.45)] hover:translate-y-[3px] transition-all"
          onClick={() => router.push("/yesOfCourse")}
        >
          ТИЙМ ЭЭ, МЭДЭЭЖ
        </Button>

        <Button
          className="bg-white hover:bg-gray-100 text-black text-2xl font-black tracking-wide px-12 py-7 rounded-full border-2 border-black shadow-[0_8px_0px_rgba(0,0,0,0.45)] hover:shadow-[0_5px_0px_rgba(0,0,0,0.45)] hover:translate-y-[3px] transition-all"
          onClick={() => router.push("/noThanks")}
        >
          ҮГҮЙ ЭЭ, БАЯРЛАЛАА
        </Button>
      </div>
    </main>
  );
}
