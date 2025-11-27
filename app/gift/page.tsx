"use client";

import { useRouter } from "next/navigation";
import { useEffect, useMemo, useState } from "react";

export default function GiftIconPage() {
  const [isClicked, setIsClicked] = useState(false);
  const [statusText, setStatusText] = useState("แตะกล่องของขวัญดูหน่อย 💝");
  const router = useRouter();

  useEffect(() => {
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
            <span className="gift-box__lid" />
            <span className="gift-box__ribbon-vertical" />
            <span className="gift-box__ribbon-horizontal" />
            <span className="gift-box__body" />
            <span className="gift-box__sparkles gift-box__sparkles--left">✦</span>
            <span className="gift-box__sparkles gift-box__sparkles--right">✦</span>
          </div>
        </button>

        <div className="flex items-center gap-2 text-rose-500 text-sm md:text-base">
          <span className="inline-flex h-2 w-2 rounded-full bg-rose-300 animate-ping-fast" aria-hidden="true" />
          <span>เปิดแล้วรอต่ออีกนิด จะมีอะไรสนุกต่อแน่ๆ</span>
        </div>
      </div>
    </main>
  );
}


