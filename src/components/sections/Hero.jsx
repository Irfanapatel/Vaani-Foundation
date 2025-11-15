import { useState, useEffect, useCallback } from 'react';
import heroImage1 from '../../assets/home page.png';
import heroImage2 from '../../assets/home page 2.png';

// Array of images for the carousel
const heroImages = [
  heroImage1,
  heroImage2,
  // Add more images here if needed
];

export function Hero() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const goToNext = useCallback(() => {
    setCurrentImageIndex(prevIndex => 
      prevIndex === heroImages.length - 1 ? 0 : prevIndex + 1
    );
  }, []);

  const goToPrevious = useCallback(() => {
    setCurrentImageIndex(prevIndex => 
      prevIndex === 0 ? heroImages.length - 1 : prevIndex - 1
    );
  }, []);

  useEffect(() => {
    // Only auto-advance when not hovered
    if (!isHovered) {
      const interval = setInterval(goToNext, 3000);
      return () => clearInterval(interval);
    }
  }, [isHovered, goToNext]);

  return (
    <section 
      className="w-full flex justify-end overflow-hidden m-0 p-0 relative group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative h-[70vh] w-full">
        {heroImages.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Vaani Foundation - Slide ${index + 1}`}
            className={`absolute inset-0 h-full w-full object-cover object-left transition-opacity duration-1000 ${
              index === currentImageIndex ? 'opacity-100' : 'opacity-0'
            }`}
          />
        ))}
        
        {/* Navigation Arrows */}
        <button 
          onClick={goToPrevious}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 opacity-0 group-hover:opacity-100 focus:outline-none"
          aria-label="Previous slide"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        
        <button 
          onClick={goToNext}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 opacity-0 group-hover:opacity-100 focus:outline-none"
          aria-label="Next slide"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </section>
  );
}

export default Hero


