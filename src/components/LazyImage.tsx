import React, { useState } from "react";

interface LazyImageProps {
  src: string;
  alt: string;
  className?: string;
}

const LazyImage: React.FC<LazyImageProps> = ({ src, alt, className }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className={`lazy-image-container ${!isLoaded ? "loading" : ""}`}>
      <img
        src={src}
        alt={alt}
        className={`lazy-image ${className || ""}`}
        loading="lazy"
        onLoad={() => setIsLoaded(true)}
      />
      {!isLoaded && <div className="loading-spinner" />}
    </div>
  );
};

export default LazyImage;
