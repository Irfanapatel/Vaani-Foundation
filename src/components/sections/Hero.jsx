import { useState, useEffect, useCallback, useRef } from 'react';
import heroImage1 from '../../assets/home page.png';
import heroImage2 from '../../assets/home page 2.png';
import heroImage3 from '../../assets/home page 3.jpg';
import heroVideo from '../../assets/SnapInsta.to_AQPngxxV5w3G-9rNq4bLLIeqsI-J8vANcjSHrANjRGjYRIiAZ1FbuU0S-ivqnHCbtttyH4hEPk8Wc1oxM3TcF7-XuFATmF8MDYJlGR4.mp4';

// Array of media for the carousel
const heroMedia = [
  { type: 'image', src: heroImage1 },
  { type: 'image', src: heroImage2 },
  { type: 'video', src: heroVideo },
  { type: 'image', src: heroImage3 }
];

export function Hero() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const videoRef = useRef(null);
  
  // Debug current slide
  useEffect(() => {
    console.log('Current slide:', currentImageIndex, 'Type:', heroMedia[currentImageIndex].type);
    
    // If current slide is video, ensure it plays
    if (heroMedia[currentImageIndex].type === 'video' && videoRef.current) {
      const playPromise = videoRef.current.play();
      
      if (playPromise !== undefined) {
        playPromise.catch(error => {
          console.error('Video play failed:', error);
        });
      }
    }
  }, [currentImageIndex]);

  const goToNext = useCallback(() => {
    setCurrentImageIndex(prevIndex => 
      prevIndex === heroMedia.length - 1 ? 0 : prevIndex + 1
    );
  }, []);

  const goToPrevious = useCallback(() => {
    setCurrentImageIndex(prevIndex => 
      prevIndex === 0 ? heroMedia.length - 1 : prevIndex - 1
    );
  }, []);

  useEffect(() => {
    // Only auto-advance when not hovered
    if (!isHovered) {
      // Use longer interval for video (8 seconds) vs images (3 seconds)
      const intervalTime = heroMedia[currentImageIndex].type === 'video' ? 8000 : 3000;
      const interval = setInterval(goToNext, intervalTime);
      return () => clearInterval(interval);
    }
  }, [isHovered, goToNext, currentImageIndex]);

  return (
    <section 
      className="w-full relative group mt-[120px] max-w-full overflow-x-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative h-[35vh] sm:h-[40vh] md:h-[47vh] lg:h-[55vh] w-full max-w-full">
        {heroMedia.map((media, index) => (
          <div 
            key={index}
            className={`absolute inset-0 h-full w-full transition-opacity duration-1000 ${
              index === currentImageIndex ? 'opacity-100' : 'opacity-0'
            }`}
          >
            {media.type === 'image' ? (
              <img
                src={media.src}
                alt={`Vaani Foundation - Slide ${index + 1}`}
                className="h-full w-full object-cover object-left"
              />
            ) : (
              <video
                ref={(el) => {
                  if (el) {
                    videoRef.current = el;
                    el.playbackRate = 0.5;
                    // Try to play the video when it's loaded
                    const playPromise = el.play();
                    if (playPromise !== undefined) {
                      playPromise.catch(error => {
                        console.error('Initial video play failed:', error);
                      });
                    }
                  }
                }}
                autoPlay
                loop
                muted
                playsInline
                className="h-full w-full object-cover object-left"
                onLoadedData={(e) => {
                  // Ensure video plays when it's loaded
                  if (currentImageIndex === heroMedia.findIndex(m => m.type === 'video')) {
                    const playPromise = e.target.play();
                    if (playPromise !== undefined) {
                      playPromise.catch(error => {
                        console.error('Video play on loadeddata failed:', error);
                      });
                    }
                  }
                }}
              >
                <source src={media.src} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            )}
          </div>
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


