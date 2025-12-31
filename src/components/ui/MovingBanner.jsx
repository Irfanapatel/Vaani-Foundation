import React, { useEffect, useRef } from 'react';

const MovingBanner = ({ text }) => {
  const containerRef = useRef(null);
  const textRef = useRef(null);
  const animationRef = useRef();
  const positionRef = useRef(0);
  const containerWidthRef = useRef(0);
  const textWidthRef = useRef(0);

  useEffect(() => {
    const container = containerRef.current;
    const textElement = textRef.current;
    
    if (!container || !textElement) return;

    // Set container width reference
    containerWidthRef.current = container.offsetWidth;
    
    // Set initial position to start from the right edge of the screen
    positionRef.current = containerWidthRef.current;
    
    // Create a temporary element to measure the text width
    const tempElement = document.createElement('div');
    tempElement.style.position = 'absolute';
    tempElement.style.visibility = 'hidden';
    tempElement.style.whiteSpace = 'nowrap';
    tempElement.innerHTML = text;
    document.body.appendChild(tempElement);
    
    // Get the width of the text with HTML
    textWidthRef.current = tempElement.offsetWidth;
    document.body.removeChild(tempElement);
    
    // Set the HTML content
    textElement.innerHTML = text;
    textElement.style.transform = `translateX(${positionRef.current}px)`;
    
    // Force a reflow to ensure the transform is applied
    textElement.offsetHeight;
    
    // Start the animation
    const moveText = () => {
      positionRef.current -= 1;
      
      // If the text has completely scrolled off to the left
      if (positionRef.current <= -textWidthRef.current) {
        // Reset position to just off the right side
        positionRef.current = containerWidthRef.current;
      }
      
      textElement.style.transform = `translateX(${positionRef.current}px)`;
      animationRef.current = requestAnimationFrame(moveText);
    };
    
    // Start the animation immediately with no delay
    moveText();
    
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [text]);

  return (
    <div 
      ref={containerRef}
      className="overflow-hidden whitespace-nowrap w-full h-full flex items-center relative"
    >
      <div 
        ref={textRef}
        className="absolute whitespace-nowrap text-white text-sm font-medium"
        style={{
          willChange: 'transform',
          padding: '0 10px',
        }}
        dangerouslySetInnerHTML={{ __html: text }}
      ></div>
    </div>
  );
};

export default MovingBanner;
