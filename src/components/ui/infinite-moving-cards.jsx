"use client";

import { cn } from "@/lib/utils";
import React, { useEffect, useRef, useState } from "react";

// Add the animation styles
const styles = `
  @keyframes scroll {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(calc(-250px * 3));
    }
  }
  
  .animate-scroll {
    animation: scroll var(--animation-duration, 40s) linear infinite;
    animation-play-state: running;
  }
  
  .hover-paused:hover {
    animation-play-state: paused;
  }
`;

export const InfiniteMovingCards = ({
  items,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className,
  cardClassName = "",
  contentClassName = "",
  titleClassName = "",
  nameClassName = "",
  quoteClassName = ""
}) => {
  const containerRef = React.useRef(null);
  const scrollerRef = React.useRef(null);

  useEffect(() => {
    addAnimation();
  }, []);
  const [start, setStart] = useState(false);
  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });

      getDirection();
      getSpeed();
      setStart(true);
    }
  }
  const getDirection = () => {
    if (containerRef.current) {
      if (direction === "left") {
        containerRef.current.style.setProperty("--animation-direction", "forwards");
      } else {
        containerRef.current.style.setProperty("--animation-direction", "reverse");
      }
    }
  };
  const getSpeed = () => {
    if (containerRef.current) {
      if (speed === "fast") {
        containerRef.current.style.setProperty("--animation-duration", "20s");
      } else if (speed === "normal") {
        containerRef.current.style.setProperty("--animation-duration", "40s");
      } else {
        containerRef.current.style.setProperty("--animation-duration", "80s");
      }
    }
  };
  // Add styles to the document head
  useEffect(() => {
    if (typeof document !== 'undefined') {
      const styleElement = document.createElement('style');
      styleElement.textContent = styles;
      document.head.appendChild(styleElement);
      return () => {
        document.head.removeChild(styleElement);
      };
    }
  }, []);

  return (
    <div
      ref={containerRef}
      className={cn(
        "relative z-20 w-full overflow-hidden",
        className
      )}
    >
      <style jsx global>{`
        .scroller-mask {
          mask-image: linear-gradient(
            to right,
            transparent,
            white 20%,
            white 80%,
            transparent
          );
          -webkit-mask-image: linear-gradient(
            to right,
            transparent,
            white 20%,
            white 80%,
            transparent
          );
        }
      `}</style>
      <div className="scroller-mask">
        <ul
          ref={scrollerRef}
          className={cn(
            "flex w-max min-w-full shrink-0 flex-nowrap gap-4 py-4",
            start && "animate-scroll",
            pauseOnHover && "hover-paused"
          )}
        >
        {items.map((item, idx) => (
          <li
            className={cn(
              "relative w-[320px] max-w-full shrink-0 rounded-2xl border border-zinc-200 bg-linear-to-br from-white to-gray-50 p-8 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1",
              "dark:from-zinc-900 dark:to-zinc-800 dark:border-zinc-700",
              cardClassName
            )}
            key={`${item.name}-${idx}`}>
            <blockquote className="h-full flex flex-col">
              <div className="shrink-0 mb-6 text-4xl">
                {item.title}
              </div>
              <div className={cn("grow flex flex-col", contentClassName)}>
                <p className={cn(
                  "text-base text-gray-600 dark:text-gray-300 mb-6 leading-relaxed",
                  quoteClassName
                )}>
                  {item.quote}
                </p>
                <div className="mt-auto pt-4 border-t border-gray-100 dark:border-zinc-700">
                  <div className={cn(
                    "text-sm font-semibold text-gray-900 dark:text-white",
                    nameClassName
                  )}>
                    {item.name}
                  </div>
                </div>
              </div>
            </blockquote>
          </li>
        ))}
        </ul>
      </div>
    </div>
  );
};
