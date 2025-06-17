import React, { useState, useEffect } from 'react';

const Clock = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (date) => {
    return date.toLocaleTimeString('en-US', {
      hour12: false,
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const formatDate = (date) => {
    return date.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric'
    });
  };

  return (
    <div className="fixed left-1/2 -translate-x-1/2 lg:left-4 lg:translate-x-0 top-2 z-[9999]">
      <div className="backdrop-blur-sm rounded-lg px-3 py-2 shadow-lg hover:animate-glow transition-all duration-300">
        <div className="flex items-center gap-3">
          {/* Time */}
          <div className="text-sm font-mono font-bold text-white">
            {formatTime(time)}
          </div>
          
          {/* Separator */}
          <div className="w-px h-4 bg-white/20"></div>
          
          {/* Date */}
          <div className="text-xs text-white/80 font-mono">
            {formatDate(time)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Clock; 