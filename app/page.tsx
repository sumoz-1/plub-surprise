"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";

const messages = [
  "Do you love me?",
  "I miss you",
  "I want to be with you",
  "I need you",
  "please accept me",
  "กด yes เถอะยอมแพ้ได้ละ"
] as const;

export default function HomePage() {
  const [index, setIndex] = useState(0);

  const isLast = index === messages.length - 1;

  const yesButtonClasses = useMemo(() => {
    const base = "transition-all duration-300 rounded-full font-semibold";

    const sizeByIndex = [
      "px-6 py-2 text-base", // index 0
      "px-7 py-2.5 text-lg",
      "px-8 py-3 text-xl",
      "px-9 py-3.5 text-2xl",
      "px-10 py-4 text-3xl",
      "px-12 py-5 text-3xl" // last, big
    ];

    const size = sizeByIndex[Math.min(index, sizeByIndex.length - 1)];

    const alignment = isLast ? "mx-auto" : "mr-2";

    return [
      base,
      size,
      alignment,
      "bg-green-500 text-white shadow-md hover:bg-green-600"
    ].join(" ");
  }, [index, isLast]);

  const handleNoClick = () => {
    setIndex((prev) => (prev < messages.length - 1 ? prev + 1 : prev));
  };

  useEffect(() => {
    if (typeof window === "undefined" || typeof performance === "undefined") return;
    const [navEntry] = performance.getEntriesByType?.("navigation") as PerformanceNavigationTiming[];
    if (navEntry?.type === "reload") {
      setIndex(0);
    }
  }, []);

  const floatingHearts = [
    "top-[6%] left-[8%]",
    "top-[18%] right-[12%]",
    "bottom-[14%] left-[10%]",
    "bottom-[8%] right-[6%]",
    "top-1/2 left-[2%]",
    "top-1/3 right-[4%]"
  ];

  return (
    <main className="min-h-screen flex items-center justify-center bg-white">
      <div className="relative min-h-screen w-full bg-gradient-to-b from-rose-50 via-pink-50 to-white overflow-hidden px-4 py-12">
        {floatingHearts.map((position, idx) => (
          <span
            key={position}
            className={`heart-floating ${position}`}
            aria-hidden="true"
            style={{ animationDelay: `${idx * 0.4}s` }}
          >
            💕
          </span>
        ))}

        <div className="relative z-10 mx-auto w-full max-w-3xl">
          <section className="cute-card space-y-8 text-center">
            <div className="relative flex items-center justify-center">
              <div className="floating-blob" />

              <div className="relative w-64 h-64 rounded-[2.5rem] overflow-hidden shadow-2xl ring-4 ring-white/60 animate-photo-pop">
                <Image
                  src="/Plub.png"
                  alt="Us smiling together"
                  fill
                  className="object-cover"
                  priority
                />
              </div>

              <div className="absolute -bottom-10 -left-6 w-28 h-28 rounded-3xl border-4 border-white shadow-md bg-gradient-to-br from-rose-200 to-pink-200 flex items-center justify-center animate-float-slow z-10">
                <div className="cute-love-icon" />
              </div>

              <div className="absolute -bottom-6 -right-2 w-24 h-24 rounded-3xl border-4 border-white shadow-md bg-gradient-to-br from-rose-200 to-pink-200 flex items-center justify-center animate-float-slow">
                <div className="cute-flower-icon" />
              </div>

              <div className="absolute -top-8 left-1/2 -translate-x-1/2 w-20 h-20 rounded-2xl border-3 border-white shadow-lg bg-gradient-to-br from-yellow-200 to-orange-200 flex items-center justify-center animate-soft-bounce z-10">
                <div className="cute-star-icon" />
              </div>

              <div className="absolute top-1/4 -right-8 w-16 h-16 rounded-2xl border-3 border-white shadow-md bg-gradient-to-br from-purple-200 to-pink-200 flex items-center justify-center animate-float-slow">
                <div className="cute-heart-icon" />
              </div>
            </div>

            <div className="space-y-3">
              <p className="text-sm uppercase tracking-[0.3em] text-rose-400">question of the day</p>
              <p
                className="text-center text-3xl md:text-4xl font-bold text-rose-600 transition-all duration-300"
                aria-live="polite"
              >
                {messages[index]}
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-4 mt-6 w-full">
              <Link href="/gift" className={yesButtonClasses} prefetch>
                Yes
              </Link>

              {!isLast && (
                <button
                  type="button"
                  onClick={handleNoClick}
                  className="px-6 py-2 rounded-full border-2 border-rose-200 text-rose-500 font-semibold shadow-sm bg-white/80 hover:bg-rose-50 transition-all duration-300 hover:-translate-y-0.5"
                >
                  No
                </button>
              )}
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}


