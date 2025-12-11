"use client";

import React, { useState, useEffect, useRef } from "react";

interface AnimatedCounterProps {
  end: number,
  duration?: number,
  label: string
}

const AnimatedCounter: React.FC<AnimatedCounterProps> = ({
  end,
  duration = 2000,
  label,
}) => {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);

          let start = 0;
          const increment = end / (duration / 16);
          const timer = setInterval(() => {
            start += increment;
            if (start >= end) {
              setCount(end);
              clearInterval(timer);
            } else {
              setCount(Math.floor(start));
            }
          }, 16);
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, [end, duration, hasAnimated]);

  const displayValue = `${count}+`;

  return (
    <div
      ref={ref}
      className="text-center group cursor-pointer transform hover:-translate-y-2 transition-all duration-300"
    >
      <div className="relative">
        <div className="text-3xl font-black text-amber-700 dark:text-amber-400 mb-3 group-hover:scale-105 transition-transform duration-300">
          {displayValue}
        </div>
        <div className="w-8 h-1 bg-gradient-to-r from-amber-400 to-amber-600 mx-auto mb-3 group-hover:w-12 transition-all duration-300"></div>
      </div>
      <div className="text-sm font-medium text-gray-600 dark:text-amber-200/70 uppercase tracking-widest">
        {label}
      </div>
    </div>
  );
};

export default AnimatedCounter;
