import React, { useState, useEffect } from 'react';
import { Moon, Sun } from 'lucide-react';

const ThemeToggle = () => {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    const root = document.documentElement;
    if (isDark) {
      root.classList.add('dark');
      root.style.setProperty('--bg-color', '#09090b');
      root.style.setProperty('--text-color', '#ffffff');
    } else {
      root.classList.remove('dark');
      root.style.setProperty('--bg-color', 'var(--primary-color)');
      root.style.setProperty('--text-color', '#09090b');
    }
  }, [isDark]);

  return (
    <button
      onClick={() => setIsDark(!isDark)}
      className="relative group rounded-full transition-all duration-300 hover:bg-zinc-800/20"
      aria-label="Toggle theme"
    >
      <div className="relative w-14 h-7 flex items-center rounded-full p-1 bg-zinc-900/90 dark:bg-zinc-800/90 border-[0.5px] border-[var(--primary-color)]">
        <div
          className={`absolute w-5 h-5 rounded-full bg-[var(--primary-color)] transition-transform duration-300 flex items-center justify-center
            ${isDark ? 'translate-x-7' : 'translate-x-0'}`}
        >
          {isDark ? (
            <Moon size={12} className="text-zinc-900" />
          ) : (
            <Sun size={12} className="text-zinc-900" />
          )}
        </div>
        
        {/* Cute decorative stars */}
        <div className="absolute inset-0 pointer-events-none">
          <span className={`absolute top-1 left-8 text-[8px] text-[var(--primary-color)] transition-opacity duration-300 ${isDark ? 'opacity-100' : 'opacity-0'}`}>✦</span>
          <span className={`absolute bottom-1 left-10 text-[8px] text-[var(--primary-color)] transition-opacity duration-300 ${isDark ? 'opacity-100' : 'opacity-0'}`}>✦</span>
          <span className={`absolute top-1 right-2 text-[8px] text-[var(--primary-color)] transition-opacity duration-300 ${!isDark ? 'opacity-100' : 'opacity-0'}`}>☼</span>
        </div>
      </div>
      
      {/* Cute tooltip */}
     
    </button>
  );
};

export default ThemeToggle; 