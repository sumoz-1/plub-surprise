"use client";

import Image from "next/image";
import { useMemo, useState } from "react";

export default function GiftPage() {
  const [isTrunkOpen, setIsTrunkOpen] = useState(false);
  const [isButtonPressed, setIsButtonPressed] = useState(false);

  const handleTrunkButton = () => {
    if (!isButtonPressed) {
      setIsButtonPressed(true);
      setTimeout(() => setIsTrunkOpen(true), 600);
    }
  };

  const trunkClasses = useMemo(
    () => ["trunk-car", isTrunkOpen ? "trunk-car--open" : "", isButtonPressed ? "trunk-car--shake" : ""].join(" ").trim(),
    [isButtonPressed, isTrunkOpen]
  );

  return (
    <main className="relative min-h-screen flex flex-col lg:flex-row gap-10 lg:gap-16 bg-gradient-to-b from-rose-50 via-pink-100 to-white overflow-hidden px-6 py-10">
      <div className="absolute inset-0 bg-heart-grid opacity-40" aria-hidden="true" />
      <div className="absolute -bottom-24 -right-16 w-64 h-64 pink-glow" aria-hidden="true" />

      <section className="relative z-10 flex-1 flex flex-col items-center justify-center text-center space-y-6">
        <p className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/70 text-rose-500 text-sm font-semibold shadow-sm">
          <span className="animate-heart-beat">💓</span> Surprise unlock
        </p>
        <h1 className="text-3xl md:text-4xl font-bold text-rose-700">
          เปิดกล่องของขวัญแล้ว ตามมาถึงภารกิจต่อไป!
        </h1>
        <p className="text-base md:text-lg text-rose-500 max-w-xl">
          กดปุ่มเปิดท้ายรถเพื่อดูความลับที่เก็บไว้ให้ เงี่ยหูฟังหัวใจ แล้วไปดูท้ายรถพร้อมกันนะ 💖
        </p>

        <div className="relative w-full max-w-sm aspect-[9/16] rounded-[2.5rem] overflow-hidden shadow-2xl ring-4 ring-white/60 animate-photo-pop">
          <Image src="/Plub.png" alt="Our facetime memory" fill className="object-cover" priority />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
          <p className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white text-xl font-semibold drop-shadow-lg animate-soft-bounce">
            ยิ้มไว้ก่อนนะ
          </p>
        </div>
      </section>

      <section className="relative z-10 flex-1 flex flex-col items-center justify-center space-y-8">
        <div className="car-scene">
          <div className={trunkClasses} aria-live="polite">
            <span className="trunk-car__body" />
            <span className="trunk-car__door" />
            <span className="trunk-car__light trunk-car__light--left" />
            <span className="trunk-car__light trunk-car__light--right" />
            <span className="trunk-car__sparkles trunk-car__sparkles--one">✧</span>
            <span className="trunk-car__sparkles trunk-car__sparkles--two">✧</span>
          </div>
        </div>

        <button
          type="button"
          onClick={handleTrunkButton}
          disabled={isTrunkOpen}
          className="px-8 py-3 rounded-full bg-gradient-to-r from-rose-500 to-pink-400 text-white font-semibold shadow-lg hover:shadow-rose-400/50 transition-all duration-300 hover:-translate-y-0.5 disabled:opacity-70 disabled:cursor-not-allowed"
        >
          {isTrunkOpen ? "ท้ายรถเปิดแล้ว" : "กดปุ่มเปิดท้ายรถ"}
        </button>

        <p className="text-lg md:text-xl font-semibold text-rose-600 min-h-[2.5rem] flex items-center">
          {isTrunkOpen ? "ไปดูท้ายรถ 💌" : "เมื่อท้ายรถเปิด จะมีข้อความให้เธอ"}
        </p>
      </section>
    </main>
  );
}


