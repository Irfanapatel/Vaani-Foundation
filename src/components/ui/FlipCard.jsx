import React from 'react';

const FlipCard = ({ year, title, description, imageSrc, altText = '' }) => {
  // Function to handle image source
  const getImageSource = (src) => {
    // If it's an external URL, use it as is
    if (src.startsWith('http')) {
      return src;
    }
    // For local files, ensure proper path
    return src.startsWith('/') ? src : `/${src}`;
  };

  return (
    <div className="flip-card w-full max-w-[727px] h-[660px] perspective-1000 mx-auto">
      <div className="flip-card-inner w-full h-full relative transition-transform duration-700 transform-style-preserve-3d">
        {/* Front of Card - Shows Image */}
        <div className="flip-card-front absolute w-full h-full backface-hidden rounded-2xl shadow-lg overflow-hidden">
          <div className="relative w-full h-full">
            <img
              src={getImageSource(imageSrc)}
              alt={altText}
              className="w-full h-full object-cover"
              onError={(e) => {
                e.target.src = `https://via.placeholder.com/727x660/F3F4F6/6B7280?text=${year}`;
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-8">
              <h3 className="text-5xl font-bold text-white mb-2">{year}</h3>
              <p className="text-2xl text-white font-medium">{title}</p>
            </div>
          </div>
        </div>
        
        {/* Back of Card - Shows Content */}
        <div className="flip-card-back absolute w-full h-full backface-hidden bg-white rounded-2xl shadow-lg p-8 transform rotate-y-180 overflow-y-auto">
          <h3 className="text-3xl font-bold mb-6">{year} - {title}</h3>
          <p className="text-lg text-gray-700 leading-relaxed">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default FlipCard;
