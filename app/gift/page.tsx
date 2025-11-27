"use client";

import { useRouter } from "next/navigation";
import { useEffect, useMemo, useState } from "react";

export default function GiftIconPage() {
  const [isClicked, setIsClicked] = useState(false);
  const [statusText, setStatusText] = useState("แตะกล่องของขวัญดูหน่อย 💝");
  const router = useRouter();

  useEffect(() => {
    if (typeof window !== "undefined" && typeof performance !== "undefined") {
      const [navEntry] = performance.getEntriesByType?.("navigation") as PerformanceNavigationTiming[];
      if (navEntry?.type === "reload") {
        router.replace("/");
        return;
      }
    }

    if (!isClicked) return undefined;

    setStatusText("กล่องกำลังค่อยๆ เปิดอยู่ ✨");

    const statusTimeout = setTimeout(() => {
      setStatusText("เตรียมเจออะไรพิเศษกว่านี้อีกนิดนะ 🎀");
    }, 1600);

    const redirectTimeout = setTimeout(() => {
      router.push("/gift-page");
    }, 3400);

    return () => {
      clearTimeout(statusTimeout);
      clearTimeout(redirectTimeout);
    };
  }, [isClicked, router]);

  const handleClick = () => {
    if (!isClicked) {
      setIsClicked(true);
    }
  };

  const giftBoxClasses = useMemo(
    () => ["gift-box", isClicked ? "gift-box--open" : ""].join(" ").trim(),
    [isClicked]
  );

  return (
    <main className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-rose-50 via-pink-100 to-rose-200">
      <div className="absolute inset-0 bg-heart-grid opacity-40" aria-hidden="true" />

      <div className="relative z-10 flex flex-col items-center gap-8 px-6 text-center">
        <p className="text-lg md:text-xl text-rose-600 font-semibold drop-shadow-sm" aria-live="polite">
          {statusText}
        </p>

        <button
          type="button"
          onClick={handleClick}
          aria-label="Open your special gift"
          className="gift-box-wrapper"
          disabled={isClicked}
        >
          <div className={giftBoxClasses}>
            <span className="gift-box__shadow" aria-hidden />
            <span className="gift-box__body" aria-hidden />
            <span className="gift-box__top" aria-hidden />
            <span className="gift-box__bow-center" aria-hidden />
            <span className="gift-box__bow-left" aria-hidden />
            <span className="gift-box__bow-right" aria-hidden />
            <span className="gift-box__ribbon-vertical" aria-hidden />
            <span className="gift-box__ribbon-horizontal" aria-hidden />
            <span className="gift-box__interior-glow" aria-hidden />
            <span className="gift-box__tag" aria-hidden>
              for U
            </span>
            <span className="gift-box__sparkles gift-box__sparkles--left">✦</span>
            <span className="gift-box__sparkles gift-box__sparkles--right">✦</span>
          </div>
        </button>
      </div>
    </main>
  );
}


