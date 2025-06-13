import React, { useState } from 'react'
import { Menu, X } from 'lucide-react'
import HomeImg from "../assets/images/home-logo.png"
import NotesImg from "../assets/images/notes-logo2.png"
import BlogImg from "../assets/images/work-logo.png"
import ThemeToggle from './ThemeToggle'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

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
    setIsMenuOpen(false);
  };

  const navLinks = [
    { href: "home", label: "Home", icon: HomeImg },
    { href: "projects", label: "Projects", icon: BlogImg },
    { href: "education", label: "Blog", icon: NotesImg }
  ];

  return (
    <div className='fixed top-0 left-0 right-0 z-50 bg-[var(--bg-color)]/10 backdrop-blur-lg shadow-lg transition-colors duration-300'>
      <div className='max-w-[2000px] mx-auto'>
        <div className='flex justify-between items-center h-[60px] px-4 sm:px-6 md:px-8 lg:px-16 xl:px-80'>
          {/* Theme Toggle */}
          <div className='flex items-center gap-2'>
            <ThemeToggle />
          </div>

          {/* Logo/Portfolio */}
          <div className='text-2xl font-medium hover:scale-105 transition-transform duration-300 cursor-pointer'>
            <a href="#home" onClick={(e) => handleScroll(e, 'home')}>
             
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className='hidden md:flex text-lg gap-8'>
            {navLinks.map((link) => (
              <a 
                key={link.label}
                href={`#${link.href}`}
                onClick={(e) => handleScroll(e, link.href)}
                className='hover:opacity-70 transition-all duration-300 relative group flex items-center gap-1 px-1 py-0.5 text-[var(--text-color)]'
              >
                {link.icon && <img src={link.icon} alt="" className="w-5 h-5 flex justify-center mb-1" />}
                {link.label}
                <span className='absolute bottom-0 left-0 w-0 h-[1px] bg-[var(--text-color)] group-hover:w-full transition-all duration-400'></span>
              </a>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className='md:hidden'>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className='hover:opacity-70 transition-opacity duration-300 p-2 text-[var(--text-color)]'
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className='fixed top-[60px] left-0 right-0 bg-[var(--bg-color)]/90 backdrop-blur-lg border-b border-[var(--text-color)]/20 md:hidden transition-colors duration-300'>
          <div className='flex flex-col items-center py-6 gap-6'>
            {navLinks.map((link) => (
              <a 
                key={link.label}
                href={`#${link.href}`}
                onClick={(e) => handleScroll(e, link.href)}
                className='text-lg hover:opacity-70 transition-opacity duration-300 flex items-center gap-2 text-[var(--text-color)]'
              >
                {link.icon && <img src={link.icon} alt="" className="w-5 h-5" />}
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

export default Navbar