import React from 'react';

const Bow = ({ className }) => {
  return (
    <svg 
      className={className}
      width="60" 
      height="60" 
      viewBox="0 0 60 60" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M30 15C30 15 25 20 20 20C15 20 10 15 10 15C10 15 15 10 20 10C25 10 30 15 30 15Z"
        fill="var(--primary-color)"
        opacity="0.6"
      />
      <path
        d="M30 15C30 15 35 20 40 20C45 20 50 15 50 15C50 15 45 10 40 10C35 10 30 15 30 15Z"
        fill="var(--primary-color)"
        opacity="0.6"
      />
      <circle cx="30" cy="15" r="5" fill="var(--primary-color)" opacity="0.8" />
      <path
        d="M30 15L25 40"
        stroke="var(--primary-color)"
        strokeWidth="2"
        opacity="0.6"
      />
      <path
        d="M30 15L35 40"
        stroke="var(--primary-color)"
        strokeWidth="2"
        opacity="0.6"
      />
    </svg>
  );
};

export default Bow; 