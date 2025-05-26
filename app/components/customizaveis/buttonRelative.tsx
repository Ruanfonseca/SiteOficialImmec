'use client';

import React, { useEffect, useState } from "react";

export function ButtonRelative() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div
      onClick={scrollToTop}
      className={`go-top fixed bottom-2 right-4 w-12 h-12 bg-black rounded-full z-[1100] cursor-pointer overflow-hidden flex justify-center items-center transition-opacity duration-300 ${
        isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
      aria-label="Voltar ao topo"
    >
      <span
        style={{
          fontSize: "1.5rem",
          color: "white",
          userSelect: "none",
        }}
      >
        &#x2191;
      </span>
    </div>
  );
}
