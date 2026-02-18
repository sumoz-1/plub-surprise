"use client";

import Image from "next/image";
import { useState } from "react";

export default function GiftPage() {
  const [isOpen, setIsOpen] = useState(false);

  const handleEnvelopeClick = () => {
    setIsOpen(true);
  };

  return (
    <main className="min-h-screen bg-valentinePink flex flex-col">
      <div className="flex-1 flex flex-col items-center justify-between px-4 py-8">
        <header className="text-center space-y-1">
          <h1 className="text-2xl md:text-3xl font-bold font-handwritten">
            Our first meet with Scoma&apos;s!
          </h1>
          <a
            href="#"
            className="text-sm text-blue-600 underline hover:text-blue-700 transition-colors"
          >
            Click here to your Tickets
          </a>
        </header>

        <section className="flex-1 flex flex-col items-center justify-center w-full space-y-4 mt-6">
          <div className="w-full max-w-xs aspect-[4/3] bg-gray-200 border-4 border-white shadow-inner flex items-center justify-center overflow-hidden">
            {isOpen && (
              <div className="relative w-full h-full p-4">
                <Image
                  src="/flower.png"
                  alt="Flower for you"
                  fill
                  className="object-contain"
                />
              </div>
            )}
          </div>

          <p className="text-center text-sm md:text-base text-black">
            Study us click at the envelope
          </p>

          <button
            type="button"
            onClick={handleEnvelopeClick}
            className="mt-2 text-6xl md:text-7xl text-black transition-transform duration-300 hover:scale-110"
            aria-label={
              isOpen ? "Envelope opened, showing our memory" : "Open the envelope"
            }
          >
            {isOpen ? "✉️" : "📩"}
          </button>
        </section>

        <footer className="w-full flex items-center justify-center mt-8 text-black">
          <div className="flex items-center space-x-4 text-sm">
            <span className="cursor-default">&lt;</span>
            <span className="font-semibold">1</span>
            <span className="cursor-default">&gt;</span>
          </div>
        </footer>
      </div>
    </main>
  );
}


