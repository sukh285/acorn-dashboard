import React from 'react';
import { clsx } from 'clsx';

export const Avatar = ({ src, alt, size = "md", className }) => {
  const sizeClasses = {
    sm: "size-6",
    md: "size-8",
    lg: "size-10"
  };

  return (
    <img 
      src={src} 
      alt={alt || "Avatar"} 
      className={clsx(
        "rounded-full object-cover border-2 border-white shadow-sm", 
        sizeClasses[size],
        className
      )} 
    />
  );
};

export const AvatarGroup = ({ images, limit = 3, size = "md" }) => {
  return (
    <div className="flex items-center -space-x-2.5">
      {images.slice(0, limit).map((img, i) => (
        <Avatar key={i} src={img} size={size} />
      ))}
      {images.length > limit && (
        <div className={`flex items-center justify-center rounded-full bg-white border-2 border-white text-xs font-bold text-text-secondary shadow-sm ${size === 'md' ? 'size-8' : 'size-6'}`}>
          +{images.length - limit}
        </div>
      )}
    </div>
  );
};