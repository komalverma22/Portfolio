import React, { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import HomeImg from "../assets/images/home-logo.png"
import NotesImg from "../assets/images/notes-logo2.png"
import BlogImg from "../assets/images/work-logo.png"
import ThemeToggle from './ThemeToggle'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'projects', 'education'];
      let found = 'home';
      for (let id of sections) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom > 100) {
            found = id;
            break;
          }
        }
      }
      setActiveSection(found);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
    setIsMenuOpen(false); // Close menu after scroll
  };

  const navLinks = [
    { href: "home", label: "Home", icon: HomeImg },
    { href: "projects", label: "Projects", icon: BlogImg },
    { href: "education", label: "Blog", icon: NotesImg }
  ];

  return (
    <div className='fixed top-0 left-0 right-0 z-50  backdrop-blur-lg shadow-lg  duration-300'>
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
                className={`hover:opacity-70 transition-all duration-300 relative group flex items-center gap-1 px-1 py-0.5 text-[var(--text-color)] ${activeSection === link.href ? 'font-semibold' : ''}`}
              >
                {link.icon && <img src={link.icon} alt="" className="w-5 h-5 flex justify-center mb-1" />}
                {link.label}
                <span className={`absolute bottom-0 left-0 h-[2.0px] bg-[white]/60 transition-all duration-600 ${activeSection === link.href ? 'w-full' : 'w-0'} rounded-full`}></span>
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

      {/* Mobile Navigation (Full Screen Overlay) */}
      <div 
        className={`fixed inset-0 z-40 transition-all duration-500 ease-in-out ${
          isMenuOpen 
            ? 'opacity-100 backdrop-blur-xl  visible' 
            : 'opacity-0 backdrop-blur-none bg-transparent invisible'
        }`}
        onClick={() => setIsMenuOpen(false)}
      >
        <div 
          className={`fixed inset-0 bg-[var(--bg-color)]/95 backdrop-blur-2xl transition-all duration-500 ease-in-out transform ${
            isMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close button */}
          <div className="absolute top-6 right-6">
            <button
              onClick={() => setIsMenuOpen(false)}
              className="hover:opacity-70 transition-all duration-300 p-3 text-[var(--text-color)] hover:bg-white/10 rounded-full"
              aria-label="Close menu"
            >
              <X size={28} />
            </button>
          </div>

          {/* Navigation Links - Centered */}
          <div className='h-auto pt-12 pb-6 flex flex-col  items-center gap-2   bg-black/80 '>
            {navLinks.map((link, index) => (
              <a 
                key={link.label}
                href={`#${link.href}`}
                onClick={(e) => handleScroll(e, link.href)}
                className={`text-3xl font-medium hover:opacity-70 transition-all duration-500 ease-out flex  gap-1 text-xl align-center text-[var(--text-color)] py-4 px-8 rounded-xl hover:bg-white/10 hover:scale-105 transform ${
                  isMenuOpen 
                    ? `translate-y-0 opacity-100 delay-[${100 + index * 100}ms]` 
                    : 'translate-y-8 opacity-0'
                } ${activeSection === link.href ? 'font-bold' : ''}`}
                style={{
                  transitionDelay: isMenuOpen ? `${200 + index * 100}ms` : '0ms'
                }}
              >
                {link.icon && (
                  <img 
                    src={link.icon} 
                    alt="" 
                    className="w-6 h-6 transition-transform duration-300 flex align-center group-hover:scale-110" 
                  />
                )}
                <span className="relative">
                  {link.label}
                  <span className={`absolute bottom-0 left-0 h-[1.5px] bg-[var(--primary-color)] transition-all duration-300 ${activeSection === link.href ? 'w-full' : 'w-0'} rounded-full`}></span>
                </span>
              </a>
            ))}
          </div>

          {/* Optional: Add some decorative elements */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
            <div className="w-12 h-[2px] bg-[var(--text-color)]/30 rounded-full"></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar