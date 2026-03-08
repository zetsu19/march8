"use client";

import { useEffect, useRef, useState } from "react";

export default function BackgroundMusic() {
  const [playing, setPlaying] = useState(false);
  const startedRef = useRef(false);

  const playMusic = () => {
    const iframe = document.getElementById(
      "bg-music-player",
    ) as HTMLIFrameElement;

    if (!iframe) return;

    iframe.contentWindow?.postMessage(
      JSON.stringify({
        event: "command",
        func: "playVideo",
      }),
      "*",
    );

    startedRef.current = true;
  };

  useEffect(() => {
    const startMusic = () => {
      if (!startedRef.current) {
        playMusic();
      }
    };

    // Try auto start after 1 second
    const timer = setTimeout(startMusic, 1000);

    // Fallback user interaction
    window.addEventListener("click", startMusic);

    return () => {
      clearTimeout(timer);
      window.removeEventListener("click", startMusic);
    };
  }, []);

  const toggleMusic = () => {
    const iframe = document.getElementById(
      "bg-music-player",
    ) as HTMLIFrameElement;

    if (!iframe) return;

    const func = playing ? "pauseVideo" : "playVideo";

    iframe.contentWindow?.postMessage(
      JSON.stringify({
        event: "command",
        func,
      }),
      "*",
    );

    setPlaying(!playing);
  };

  return (
    <>
      <iframe
        id="bg-music-player"
        width="0"
        height="0"
        src="https://www.youtube.com/embed/cNGjD0VG4R8?enablejsapi=1&autoplay=1&loop=1&playlist=cNGjD0VG4R8"
        allow="autoplay"
        style={{
          position: "fixed",
          opacity: 0,
          pointerEvents: "none",
        }}
      />

      <button
        onClick={toggleMusic}
        className="fixed bottom-20 right-5 z-[9999] px-5 py-2.5 rounded-full bg-pink-600 text-white shadow-lg hover:bg-pink-500 transition"
      >
        {playing ? "Mute 🔇" : "Play 🔊"}
      </button>
    </>
  );
}
