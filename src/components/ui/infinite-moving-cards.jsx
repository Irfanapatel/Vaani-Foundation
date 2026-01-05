"use client";

import { cn } from "@/lib/utils";
import React, { useEffect, useRef, useState, useCallback } from "react";

// Animation styles are now in the component's style tag

export const InfiniteMovingCards = ({
  items,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className,
  cardClassName = "",
  contentClassName = "",
  titleClassName = "",
  quoteClassName = "",
  colors = [
    'from-blue-50 to-blue-100',
    'from-green-50 to-green-100',
    'from-purple-50 to-purple-100',
    'from-amber-50 to-amber-100',
    'from-rose-50 to-rose-100',
    'from-emerald-50 to-emerald-100'
  ]
}) => {
  const containerRef = useRef(null);
  const scrollerRef = useRef(null);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);

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
  // Handle mouse down for drag scrolling
  const handleMouseDown = useCallback((e) => {
    isDragging.current = true;
    startX.current = e.pageX - scrollerRef.current.offsetLeft;
    scrollLeft.current = scrollerRef.current.scrollLeft;
    scrollerRef.current.style.cursor = 'grabbing';
    scrollerRef.current.style.userSelect = 'none';
  }, []);

  // Handle mouse leave to stop dragging
  const handleMouseLeave = useCallback(() => {
    isDragging.current = false;
    if (scrollerRef.current) {
      scrollerRef.current.style.cursor = 'grab';
      scrollerRef.current.style.removeProperty('user-select');
    }
  }, []);

  // Handle mouse up to stop dragging
  const handleMouseUp = useCallback(() => {
    isDragging.current = false;
    if (scrollerRef.current) {
      scrollerRef.current.style.cursor = 'grab';
      scrollerRef.current.style.removeProperty('user-select');
    }
  }, []);

  // Handle mouse move for drag scrolling
  const handleMouseMove = useCallback((e) => {
    if (!isDragging.current || !scrollerRef.current) return;
    e.preventDefault();
    const x = e.pageX - (scrollerRef.current.offsetLeft || 0);
    const walk = (x - startX.current) * 2; // Scroll speed
    scrollerRef.current.scrollLeft = scrollLeft.current - walk;
  }, []);

  // Add event listeners for drag scrolling
  useEffect(() => {
    const scroller = scrollerRef.current;
    if (!scroller) return;

    scroller.style.cursor = 'grab';
    scroller.style.scrollBehavior = 'smooth';

    scroller.addEventListener('mousedown', handleMouseDown);
    scroller.addEventListener('mouseleave', handleMouseLeave);
    scroller.addEventListener('mouseup', handleMouseUp);
    scroller.addEventListener('mousemove', handleMouseMove);

    return () => {
      scroller.removeEventListener('mousedown', handleMouseDown);
      scroller.removeEventListener('mouseleave', handleMouseLeave);
      scroller.removeEventListener('mouseup', handleMouseUp);
      scroller.removeEventListener('mousemove', handleMouseMove);
    };
  }, [handleMouseDown, handleMouseLeave, handleMouseUp, handleMouseMove]);

  return (
    <div
      ref={containerRef}
      className={cn(
        "relative z-20 w-full overflow-hidden",
        className
      )}
    >
      <style>{`
        .scroller-mask {
          mask-image: linear-gradient(
            to right,
            transparent 0%,
            white 5%,
            white 95%,
            transparent 100%
          );
          -webkit-mask-image: linear-gradient(
            to right,
            transparent 0%,
            white 5%,
            white 95%,
            transparent 100%
          );
          -webkit-backface-visibility: hidden;
          backface-visibility: hidden;
          -webkit-transform: translateZ(0);
          transform: translateZ(0);
          will-change: transform;
          overflow-x: auto;
          overflow-y: hidden;
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        
        .scroller-mask::-webkit-scrollbar {
          display: none;
        }
        
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
      `}</style>
      <div className="scroller-mask overflow-x-auto overflow-y-hidden -mx-2 sm:-mx-3 md:-mx-4">
        <ul
          ref={scrollerRef}
          className={cn(
            "flex w-max min-w-full shrink-0 flex-nowrap gap-3 sm:gap-4 py-0.5 sm:py-2 md:py-4 px-2 sm:px-3 md:px-4 select-none",
            start && !isDragging.current && "animate-scroll",
            pauseOnHover && "hover-paused"
          )}
        >
        {items.map((item, idx) => (
          <li
            className={cn(
              `relative w-[280px] sm:w-[300px] md:w-[320px] lg:w-[350px] max-w-full shrink-0 rounded-2xl border border-zinc-200 p-4 sm:p-5 md:p-6 lg:p-8 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 cursor-grab active:cursor-grabbing bg-gradient-to-br ${colors[idx % colors.length]}`,
              "dark:border-zinc-700",
              cardClassName
            )}
            key={`${item.name}-${idx}`}
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseLeave}
            onMouseMove={handleMouseMove}>
            <blockquote className="h-full flex flex-col">
              <div className="shrink-0 mb-3 sm:mb-4 md:mb-5 lg:mb-6 flex justify-center">
                {item.icon || <span className="text-3xl sm:text-4xl">{item.title}</span>}
              </div>
              <div className={cn("grow flex flex-col", contentClassName)}>
                {item.heading && (
                  <h3 className={cn(
                    "text-base sm:text-lg md:text-xl font-bold text-gray-800 mb-2 sm:mb-3 md:mb-3",
                    "dark:text-gray-200"
                  )}>
                    {item.heading}
                  </h3>
                )}
                <p className={cn(
                  "text-xs sm:text-sm md:text-base text-gray-600 dark:text-gray-300 mb-2 sm:mb-3 md:mb-4 leading-relaxed md:leading-normal",
                  quoteClassName
                )}>
                  {item.quote}
                </p>
              </div>
            </blockquote>
          </li>
        ))}
        </ul>
      </div>
    </div>
  );
};
