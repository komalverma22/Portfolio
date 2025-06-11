import React from 'react';
import Bow from './Bow';

const BackgroundBows = () => {
  const bowPositions = [
    'top-10 left-10',
    'top-20 right-20',
    'bottom-10 left-1/4',
    'top-1/3 right-10',
    'bottom-20 right-1/4',
    'top-1/2 left-20',
  ];

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {bowPositions.map((position, index) => (
        <div key={index} className={`absolute ${position} animate-float`}>
          <Bow 
            className={`transform rotate-${Math.floor(Math.random() * 360)} opacity-30 hover:opacity-50 transition-opacity duration-300`}
          />
        </div>
      ))}
    </div>
  );
};

export default BackgroundBows; 