'use client';

import React, { useState, useEffect } from 'react';

export default function TypewriterHeroHeadline({
  text = "Prepare with Confidence. Learn with Integrity.",
  className = "",
  typingSpeed = 75,
  pauseDuration = 2500,
}) {
  const [typedText, setTypedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timer;

    if (!isDeleting && typedText.length < text.length) {
      timer = setTimeout(() => {
        setTypedText(text.slice(0, typedText.length + 1));
      }, typingSpeed);
    } else if (!isDeleting && typedText.length === text.length) {
      timer = setTimeout(() => {
        setIsDeleting(true);
      }, pauseDuration);
    } else if (isDeleting && typedText.length > 0) {
      timer = setTimeout(() => {
        setTypedText(text.slice(0, typedText.length - 1));
      }, 35);
    } else if (isDeleting && typedText.length === 0) {
      setIsDeleting(false);
    }

    return () => clearTimeout(timer);
  }, [typedText, isDeleting, text, typingSpeed, pauseDuration]);

  return (
    <h1 className={`text-2xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white leading-[1.15] drop-shadow-[0_4px_10px_rgba(0,0,0,0.95)] min-h-[4rem] sm:min-h-[6.5rem] lg:min-h-[8.5rem] flex items-center flex-wrap ${className}`}>
      {/* Full text for search crawlers & initial HTML rendering */}
      <span className="sr-only">{text}</span>
      {/* Animated client-side typewriter text */}
      <span aria-hidden="true">{typedText || text}</span>
      <span className="animate-pulse inline-block border-r-2 sm:border-r-4 border-white ml-1 h-[0.85em] align-middle shrink-0" aria-hidden="true">&nbsp;</span>
    </h1>
  );
}
