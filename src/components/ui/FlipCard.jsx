import React from 'react';

const FlipCard = ({
  year,
  title,
  description,
  imageSrc,
  altText = '',
  ctaLabel = 'Read More',
  onCtaClick,
  panelColor = '#f7cfd8',
  panelTextColor = '#3b0d16',
  buttonColor = '#1f2937',
  buttonTextColor = '#ffffff'
}) => {
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
        '--flip-button-bg': buttonColor,
        '--flip-button-text': buttonTextColor
      }}
    >
      <img
        src={getImageSource(imageSrc)}
        alt={altText || `${title} visual`}
        className="flip-card-image"
        onError={(e) => {
          e.target.src = `https://via.placeholder.com/700x550/F3F4F6/6B7280?text=${year}`;
        }}
      />

      <div className="flip-card-panel">
        <div className="flip-card-panel-content">
          <span className="text-xs uppercase tracking-[0.4em] text-gray-500">
            {year}
          </span>
          <h3 className="text-3xl font-bold text-gray-900 leading-tight mt-3 mb-4">
            {title}
          </h3>
          <p className="text-base text-gray-600 leading-relaxed">
            {description}
          </p>
        </div>

        {ctaLabel && (
          <button
            type="button"
            onClick={onCtaClick}
            className="flip-card-panel-button"
          >
            {ctaLabel}
          </button>
        )}
      </div>
    </div>
  );
};

export default FlipCard;
