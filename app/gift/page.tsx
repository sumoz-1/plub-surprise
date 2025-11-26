"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function GiftIconPage() {
  const [isClicked, setIsClicked] = useState(false);
  const router = useRouter();

  useEffect(() => {
    if (!isClicked) return;

    const timeout = setTimeout(() => {
      router.push("/gift-page");
    }, 3000);

    return () => clearTimeout(timeout);
  }, [isClicked, router]);

  const handleClick = () => {
    if (!isClicked) {
      setIsClicked(true);
    }
  };

  return (
    <main className="min-h-screen flex items-center justify-center bg-white">
      <button
        type="button"
        onClick={handleClick}
        aria-label="Open your special gift"
        className="text-black text-7xl md:text-8xl transition-transform duration-300 ease-out transform hover:scale-110"
        style={{
          transform: isClicked ? "scale(1.4)" : undefined
        }}
      >
        🎁
      </button>
    </main>
  );
}


