import React, { useEffect, useState } from 'react';

const RandomGridHighlights = () => {
  const [highlights, setHighlights] = useState([]);

  useEffect(() => {
    const generateHighlights = () => {
      const numHighlights = 20; // Number of glowing squares
      const gridSize = 40; // Matches your background-size
      const newHighlights = [];

      for (let i = 0; i < numHighlights; i++) {
        const top = Math.floor(Math.random() * (window.innerHeight / gridSize)) * gridSize;
        const left = Math.floor(Math.random() * (window.innerWidth / gridSize)) * gridSize;

        newHighlights.push({
          id: i,
          top: `${top}px`,
          left: `${left}px`,
          size: gridSize, // Keep size consistent with grid cells
          animationDelay: `${Math.random() * 8}s`, // Random delay up to 8 seconds
          animationDuration: `${Math.random() * 5 + 5}s`, // Random duration between 5 and 10 seconds
          opacity: Math.random() * 0.1 + 0.05 // Subtle random opacity between 0.05 and 0.15
        });
      }
      setHighlights(newHighlights);
    };

    generateHighlights();

    const handleResize = () => generateHighlights();
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-10 overflow-hidden">
      {highlights.map(highlight => (
        <div
          key={highlight.id}
          className="absolute bg-[var(--primary-color)] animate-grid-highlight"
          style={{
            top: highlight.top,
            left: highlight.left,
            width: highlight.size,
            height: highlight.size,
            opacity: highlight.opacity,
            animationDelay: highlight.animationDelay,
            animationDuration: highlight.animationDuration,
          }}
        />
      ))}
    </div>
  );
};

export default RandomGridHighlights; 