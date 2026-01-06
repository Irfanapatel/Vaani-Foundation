import React from 'react';
import { useNavigate } from 'react-router-dom';

const FlipCard = ({
  title,
  description,
  bigNumber,
  bigNumberDescription,
  imageSrc,
  altText = '',
  ctaLabel = 'READ MORE',
  onCtaClick,
  readMoreLink,
  panelColor = '#f7cfd8',
  panelTextColor = '#3b0d16',
  buttonTextColor = '#ffffff'
}) => {
  const navigate = useNavigate();

  const handleButtonClick = (e) => {
    if (onCtaClick) {
      onCtaClick(e);
    }
    if (readMoreLink) {
      navigate(readMoreLink);
    }
  };

  const getImageSource = (src) => {
    if (!src) return '';
    if (src.startsWith('http')) {
      return src;
    }
    return src.startsWith('/') ? src : `/${src}`;
  };

  return (
    <div
      className="flip-card group relative w-full max-w-[700px] h-[550px] mx-auto overflow-hidden shadow-2xl"
      style={{
        '--flip-panel-bg': panelColor,
        '--flip-panel-text': panelTextColor,
        '--flip-button-bg': '#000000',
        '--flip-button-text': buttonTextColor
      }}
    >

      <img
        src={getImageSource(imageSrc)}
        alt={altText || `${title} visual`}
        className="flip-card-image"
        onError={(e) => {
          e.target.src = `https://via.placeholder.com/700x550/F3F4F6/6B7280?text=${title}`;
        }}
      />

      <div className="flip-card-panel">
        <div className="flip-card-panel-content flex flex-col items-center justify-center text-center h-full">
          <div className="max-w-md">
            <h3 className="inline-block bg-white text-black text-3xl md:text-4xl font-bold px-6 py-2 mb-6">
              {title}
            </h3>
            <p className="text-black text-base leading-relaxed mb-6">
              {description}
            </p>
            {bigNumber && (
              <div className="text-center mb-6">
                <div className="text-5xl font-bold text-black mb-2">
                  {bigNumber}
                </div>
                <div className="text-base text-black">
                  {bigNumberDescription}
                </div>
              </div>
            )}
            {ctaLabel && (
              <button
                type="button"
                onClick={handleButtonClick}
                className="flip-card-panel-button font-medium tracking-wider px-8 py-3"
              >
                {ctaLabel}
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlipCard;
