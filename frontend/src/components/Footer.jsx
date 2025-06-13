import React from 'react';
import { Heart } from 'lucide-react';
import Logo from './Logo';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const handleScroll = (e, targetId) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      const offset = 80; // Adjust this value based on your navbar height
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const navLinks = [
    { href: "home", label: "Home" },
    { href: "projects", label: "Projects" },
    { href: "education", label: "Education" },
    { href: "contact", label: "Contact" }
  ];

  return (
    <footer className="py-4 border-t-[0.2px] border-[var(--primary-color)]/30 backdrop-blur-lg">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center gap-6">
          {/* Logo Section */}
          <div className="flex flex-col items-center gap-4">
           
            {/* <Logo /> */}
          </div>

          {/* Navigation Links */}
          <div className="flex flex-wrap justify-center gap-6 text-lg text-white/60">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={`#${link.href}`}
                onClick={(e) => handleScroll(e, link.href)}
                className="hover:text-[var(--primary-color)] transition-colors duration-300 relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-[var(--primary-color)] group-hover:w-full transition-all duration-300"></span>
              </a>
            ))}
          </div>

          {/* Copyright */}
          <div className="flex items-center gap-1 text-sm text-white/60">
            <span>Made with</span>
            <Heart size={14} className="text-[var(--primary-color)] fill-[var(--primary-color)]" />
            <span>by</span>
            <a 
              href="https://x.com/coffee_0708" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-[var(--primary-color)] hover:underline"
            >
              Komal Verma
            </a>
            <span className="mx-1">©</span>
            <span>{currentYear}</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 