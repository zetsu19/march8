"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import confetti from "canvas-confetti";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700", "900"],
});

export default function UguePage() {
  const [visibleButtons, setVisibleButtons] = useState<number[]>([]);
  const router = useRouter();

  useEffect(() => {
    [1, 2, 3].forEach((num, index) => {
      setTimeout(() => {
        setVisibleButtons((prev) => [...prev, num]);
      }, index * 800);
    });
  }, []);

  useEffect(() => {
    const duration = 15000;
    const animationEnd = Date.now() + duration;
    let power = 2;

    const interval: any = setInterval(() => {
      const timeLeft = animationEnd - Date.now();
      if (timeLeft <= 0) return clearInterval(interval);

      power += 0.3;

      confetti({
        particleCount: power * 2,
        angle: 60,
        spread: 70,
        origin: { x: 0, y: 0.8 },
        colors: ["#b91c1c", "#f194a0", "#ffffff", "#ffd700"],
      });

      confetti({
        particleCount: power * 2,
        angle: 120,
        spread: 70,
        origin: { x: 1, y: 0.8 },
        colors: ["#b91c1c", "#f194a0", "#ffffff", "#ffd700"],
      });

      if (Math.random() > 0.6) {
        confetti({
          particleCount: power * 5,
          startVelocity: 35,
          spread: 360,
          origin: { x: Math.random(), y: Math.random() - 0.2 },
          colors: ["#ff0000", "#ff718a", "#ffffff", "#ffd700"],
        });
      }
    }, 200);

    return () => clearInterval(interval);
  }, []);

  const handleGiftClick = (num: number) => {
    if (num === 1) router.push("/firstGift");
    if (num === 2) router.push("/secondGift");
    if (num === 3) router.push("/thirdGift");
  };

  return (
    <main
      className={`min-h-screen bg-[#f7b6c2] flex flex-col items-center justify-center px-4 relative overflow-hidden ${poppins.className}`}
    >
      <div className="max-w-4xl text-center z-10 mb-16 animate-fadeIn">
        <h1 className="text-[#b91c1c] text-4xl md:text-7xl font-black tracking-wide leading-tight mb-6">
          Тийм гэж хэлсэнд чинь <br /> баярлалаа, Шинэбаяр💞!
        </h1>

        <p className="text-[#7f1d1d] text-lg md:text-2xl font-semibold tracking-wide">
          Золжаргал-аас 💞 нь зориулж бэлдсэн энэ бүхэн миний хайрын өчүүхэн
          хэсэг нь шүү ✨
        </p>
      </div>

      <div className="flex gap-8 z-10 mb-32 flex-wrap justify-center">
        {[1, 2, 3].map((num) => (
          <div
            key={num}
            className={`transition-all duration-700 transform ${
              visibleButtons.includes(num)
                ? "opacity-100 translate-y-0 scale-100"
                : "opacity-0 translate-y-10 scale-75"
            }`}
          >
            <Button
              onClick={() => handleGiftClick(num)}
              className="
                bg-[#f194a0] 
                hover:bg-[#e87d8d] 
                text-white 
                text-3xl 
                md:text-4xl 
                font-black 
                px-16 
                md:px-20 
                py-12 
                md:py-16 
                rounded-2xl 
                border-2 
                border-[#b91c1c]
                shadow-[0_10px_0px_rgba(185,28,28,1)] 
                hover:shadow-[0_4px_0px_rgba(185,28,28,1)] 
                hover:translate-y-[6px] 
                transition-all 
                duration-150
                min-w-[220px]
              "
            >
              Бэлэг {num}
            </Button>
          </div>
        ))}
      </div>

      <div className="absolute -bottom-4 left-0 w-[250px] h-[250px] md:w-[450px] md:h-[450px] pointer-events-none z-20 animate-float">
        <Image
          src="/cuteCat.gif"
          alt="cat"
          fill
          className="object-contain object-bottom"
        />
      </div>

      <div className="absolute -bottom-4 right-0 w-[250px] h-[250px] md:w-[450px] md:h-[450px] pointer-events-none z-20 animate-float">
        <Image
          src="/bunnies.gif"
          alt="bunny"
          fill
          className="object-contain object-bottom"
          unoptimized
        />
      </div>
    </main>
  );
}
