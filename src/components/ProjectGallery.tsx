"use client";

import { useState } from "react";
import Image from "next/image";

interface Screenshot {
  src: string;
  alt: string;
}

export function ProjectGallery({ images }: { images: Screenshot[] }) {
  const [activeIndex, setActiveIndex] = useState(0);
  
  const handleCycle = () => {
    setActiveIndex((prev) => (prev + 1) % images.length);
  };

  const getCardStyle = (index: number) => {
    const isCenter = index === activeIndex;
    const isLeft = (index === activeIndex - 1) || (activeIndex === 0 && index === images.length - 1);
    const isRight = (index === activeIndex + 1) || (activeIndex === images.length - 1 && index === 0);

    if (isCenter) {
      return {
        zIndex: 30,
        transform: "translateX(0) translateY(-10px) rotate(0) scale(1)",
        opacity: 1,
      };
    }
    if (isLeft) {
      return {
        zIndex: 10,
        transform: "translateX(-15%) translateY(10px) rotate(-8deg) scale(0.9)",
        opacity: 0.6,
      };
    }
    if (isRight) {
      return {
        zIndex: 10,
        transform: "translateX(15%) translateY(10px) rotate(8deg) scale(0.9)",
        opacity: 0.6,
      };
    }
    
    // For more than 3 images, hide the others
    return {
      zIndex: 0,
      transform: "translateX(0) translateY(20px) scale(0.8)",
      opacity: 0,
    };
  };

  return (
    <div 
      className="relative w-full h-full flex items-center justify-center p-4 cursor-pointer group/gallery"
      onClick={handleCycle}
    >
      <div className="relative w-full h-[280px] perspective-[1200px]">
        {images.map((img, idx) => (
          <div
            key={idx}
            className="absolute inset-0 m-auto w-[90%] h-[95%] transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] rounded-[1.2rem] overflow-hidden border border-black/10 bg-white shadow-xl touch-none flex flex-col"
            style={getCardStyle(idx)}
          >
            {/* Window Header */}
            <div className="h-6 bg-[#1A1A1A] border-b border-white/5 flex items-center px-3 gap-1.5 shrink-0">
              <div className="w-1.5 h-1.5 rounded-full bg-[#FF5F56]" />
              <div className="w-1.5 h-1.5 rounded-full bg-[#FFBD2E]" />
              <div className="w-1.5 h-1.5 rounded-full bg-[#27C93F]" />
            </div>
            
            <div className="relative flex-1 bg-white">
              <Image 
                src={img.src} 
                alt={img.alt} 
                fill 
                className="object-cover" 
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority={idx === 0}
              />
            </div>

            {/* Content Indicator Strip */}
            <div className={`absolute bottom-0 left-0 right-0 h-1 bg-black/10 transition-transform duration-700 origin-left scale-x-0 ${idx === activeIndex ? 'scale-x-100' : ''}`} />
          </div>
        ))}
      </div>

      {/* Pagination dots */}
      <div className="absolute bottom-[-10px] left-1/2 -translate-x-1/2 flex gap-2">
        {images.map((_, idx) => (
          <button
            key={idx}
            onClick={(e) => {
              e.stopPropagation();
              setActiveIndex(idx);
            }}
            className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${idx === activeIndex ? 'bg-black w-4' : 'bg-black/20 hover:bg-black/40'}`}
            aria-label={`Show image ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
