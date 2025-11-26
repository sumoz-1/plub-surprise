"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useMemo, useState } from "react";

const messages = [
  "I love you",
  "I miss you",
  "I want to be with you",
  "I need you",
  "please accept me",
  "กด yes เถอะยอมแพ้ได้ละ"
] as const;

export default function HomePage() {
  const [index, setIndex] = useState(0);
  const router = useRouter();

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

  const handleYesClick = () => {
    router.push("/gift");
  };

  return (
    <main className="min-h-screen flex items-center justify-center bg-white">
      <div className="flex flex-col items-center justify-center px-4 w-full max-w-md space-y-8">
        <div className="w-40 h-40 relative">
          <Image
            src="/love.png"
            alt="Two cute characters in love"
            fill
            className="object-contain"
            priority
          />
        </div>

        <p className="text-center text-3xl md:text-4xl font-bold text-red-500 transition-all duration-300">
          {messages[index]}
        </p>

        <div className="flex items-center justify-center space-x-4 mt-4 w-full">
          <button type="button" onClick={handleYesClick} className={yesButtonClasses}>
            Yes
          </button>

          {!isLast && (
            <button
              type="button"
              onClick={handleNoClick}
              className="px-6 py-2 rounded-full bg-red-500 text-white font-semibold shadow-md hover:bg-red-600 transition-all duration-300"
            >
              No
            </button>
          )}
        </div>
      </div>
    </main>
  );
}


