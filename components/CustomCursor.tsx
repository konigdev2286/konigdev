"use client";

import React, { useEffect, useState, useRef } from "react";
import Image from "next/image";

export default function CustomCursor() {
  const [position, setPosition] = useState<{ x: number; y: number }>({ x: -100, y: -100 });
  const [trailingPos, setTrailingPos] = useState<{ x: number; y: number }>({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [hasFinePointer, setHasFinePointer] = useState(false);

  const requestRef = useRef<number | null>(null);
  const targetPos = useRef({ x: -100, y: -100 });
  const currentPos = useRef({ x: -100, y: -100 });

  useEffect(() => {
    // Vérifier si l'appareil a une vraie souris / pointeur fin (pas un écran tactile)
    if (typeof window === "undefined") return;
    const mediaQuery = window.matchMedia("(pointer: fine)");
    setHasFinePointer(mediaQuery.matches);

    const handlePointerTypeChange = (e: MediaQueryListEvent) => {
      setHasFinePointer(e.matches);
    };
    mediaQuery.addEventListener("change", handlePointerTypeChange);

    const onMouseMove = (e: MouseEvent) => {
      targetPos.current = { x: e.clientX, y: e.clientY };
      setPosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);

      // Détecter si on survole un élément interactif
      const target = e.target as HTMLElement | null;
      if (target) {
        const interactive = target.closest("a, button, input, textarea, select, [role='button'], .cursor-pointer");
        setIsHovered(!!interactive);
      }
    };

    const onMouseDown = () => setIsClicking(true);
    const onMouseUp = () => setIsClicking(false);
    const onMouseLeave = () => setIsVisible(false);
    const onMouseEnter = () => setIsVisible(true);

    window.addEventListener("mousemove", onMouseMove, { passive: true });
    window.addEventListener("mousedown", onMouseDown);
    window.addEventListener("mouseup", onMouseUp);
    document.addEventListener("mouseleave", onMouseLeave);
    document.addEventListener("mouseenter", onMouseEnter);

    // Animation fluide pour le cercle suiveur (lerp)
    const animate = () => {
      currentPos.current.x += (targetPos.current.x - currentPos.current.x) * 0.22;
      currentPos.current.y += (targetPos.current.y - currentPos.current.y) * 0.22;
      setTrailingPos({ x: currentPos.current.x, y: currentPos.current.y });
      requestRef.current = requestAnimationFrame(animate);
    };
    requestRef.current = requestAnimationFrame(animate);

    return () => {
      mediaQuery.removeEventListener("change", handlePointerTypeChange);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mousedown", onMouseDown);
      window.removeEventListener("mouseup", onMouseUp);
      document.removeEventListener("mouseleave", onMouseLeave);
      document.removeEventListener("mouseenter", onMouseEnter);
      if (requestRef.current) cancelAnimationFrame(requestRef.current);
    };
  }, [isVisible]);

  if (!hasFinePointer || !isVisible) {
    return null;
  }

  return (
    <>
      {/* ─── CERCLE LOGO PRINCIPAL AVEC MIX-BLEND DIFFERENCE ─── */}
      <div
        className="fixed top-0 left-0 pointer-events-none z-[99999] transition-transform duration-75 ease-out select-none"
        style={{
          transform: `translate3d(${trailingPos.x}px, ${trailingPos.y}px, 0) translate(-50%, -50%)`,
          mixBlendMode: "difference",
        }}
      >
        <div
          className={`relative rounded-full flex items-center justify-center transition-all duration-300 ease-out ${
            isClicking
              ? "scale-90"
              : isHovered
              ? "scale-140"
              : "scale-100"
          }`}
          style={{
            width: isHovered ? "54px" : "44px",
            height: isHovered ? "54px" : "44px",
            background: "rgba(255, 255, 255, 0.95)",
            boxShadow: isHovered
              ? "0 0 20px 2px rgba(255, 255, 255, 0.8)"
              : "0 0 10px 1px rgba(255, 255, 255, 0.5)",
          }}
        >
          {/* Logo KoniG.dev au centre du rond */}
          <div className="relative w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center overflow-hidden rounded-full p-0.5">
            <Image
              src="/logo.png"
              alt="KoniG.dev"
              width={32}
              height={32}
              className="object-contain w-full h-full"
              priority
            />
          </div>

          {/* Anneau subtil d'accent autour du rond */}
          <span
            className="absolute inset-0 rounded-full border border-black/20"
          />
        </div>
      </div>

      {/* ─── POINT POINTEUR AU CENTRE EXACT DU CURSEUR ─── */}
      <div
        className="fixed top-0 left-0 pointer-events-none z-[99999] select-none"
        style={{
          transform: `translate3d(${position.x}px, ${position.y}px, 0) translate(-50%, -50%)`,
          mixBlendMode: "difference",
        }}
      >
        <div
          className={`rounded-full transition-transform duration-150 ${
            isHovered ? "scale-0 opacity-0" : "scale-100 opacity-100"
          }`}
          style={{
            width: "5px",
            height: "5px",
            background: "#ffffff",
          }}
        />
      </div>
    </>
  );
}
