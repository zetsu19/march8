"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { useRouter } from "next/navigation";

export default function ReasonsPage() {
  const router = useRouter();
  const [selectedImage, setSelectedImage] = useState<{
    src: string;
    alt: string;
  } | null>(null);

  const pictures = [
    { src: "/picOne.jpg", alt: "Cake Slice" },
    { src: "/picTwo.jpg", alt: "Letter" },
    { src: "/pic3.jpg", alt: "Camera" },
    { src: "/pic4.jpg", alt: "Music" },
    { src: "/pic5.jpg", alt: "Kitty" },
    { src: "/pic6.jpg", alt: "Birthday" },
    { src: "/pic7.jpg", alt: "Cake Slice" },
    { src: "/pic8.jpg", alt: "Letter" },
    { src: "/pic10.jpg", alt: "Camera" },
    { src: "/pic11.jpg", alt: "Music" },
    { src: "/pic12.jpg", alt: "Kitty" },
    { src: "/pic13.jpg", alt: "Birthday" },
    { src: "/pic14.jpg", alt: "Cake Slice" },
    { src: "/pic15.jpg", alt: "Letter" },
    { src: "/pic16.jpg", alt: "Camera" },
    { src: "/pic17.jpg", alt: "Music" },
    { src: "/pic18.jpg", alt: "Kitty" },
    { src: "/pic19.jpg", alt: "Birthday" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };
  const itemVariants: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 80,
        damping: 15,
      },
    },
  };

  return (
    <div className="min-h-screen bg-[#fbc2eb] flex flex-col items-center p-6 relative font-serif overflow-x-hidden">
      {/* Refined Header */}
      <header className="relative z-10 max-w-2xl text-center backdrop-blur-sm bg-white/20 p-8 rounded-3xl border border-white/30 my-12 shadow-sm">
        <h1 className="text-2xl md:text-3xl font-bold text-red-900 leading-relaxed">
          Чи минь миний цэцэг билээ. Үргэлж цэцэг шиг сайхан үнэртэй, сайхан
          харагддаг, Миний сэтгэлийг гүн догдлуулдаг чамдаа хайртай шүү.
        </h1>
        <div className="mt-6 flex justify-center">
          <div className="relative w-32 h-32 md:w-40 md:h-40 mb-10">
            <Image
              src="/flowers.png"
              alt="flowers decoration"
              height={300}
              width={300}
              className="object-contain"
              priority
            />
          </div>
        </div>
      </header>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 w-full max-w-6xl pb-24"
      >
        {pictures.map((pic, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            whileHover={{
              scale: 1.05,
              rotate: index % 2 === 0 ? 2 : -2,
              zIndex: 10,
            }}
            whileTap={{ scale: 0.95 }}
            className="bg-white p-3 pb-8 rounded-lg shadow-xl cursor-pointer transform transition-shadow hover:shadow-2xl"
            onClick={() => setSelectedImage(pic)}
          >
            <div className="relative aspect-square rounded-md overflow-hidden">
              <Image
                src={pic.src}
                alt={pic.alt}
                fill
                className="object-cover transition-transform duration-700 hover:scale-110"
                priority={index < 4}
              />
            </div>
            {/* Minimalist Caption */}
            <div className="mt-3 text-center text-[10px] uppercase tracking-[0.2em] text-gray-400">
              Memory No. {index + 1}
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Improved Modal Viewer */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-md flex items-center justify-center z-[100] p-4 cursor-zoom-out"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.8, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="relative w-full max-w-3xl aspect-[4/3] max-h-[80vh]"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={selectedImage.src}
                alt={selectedImage.alt}
                fill
                className="object-contain rounded-lg shadow-2xl"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Styled Back Button */}
      <button
        className="fixed bottom-8 mt-10 right-8 bg-[#c92a2a] text-white px-6 py-2 rounded-full font-bold shadow-lg hover:bg-red-700 transition-colors"
        onClick={() => router.push("/yesOfCourse")}
      >
        Буцах ←
      </button>
    </div>
  );
}
