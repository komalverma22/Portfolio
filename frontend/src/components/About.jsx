import React, { useState, useEffect } from 'react'
// import Profile from "../assets/images/profile-image.jpg"
import Buttons from './Buttons'
import Skills from './Skills'
import Heading from './Heading'

const About = () => {
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const roles = [
    "Full-Stack Developer",
    "Frontend Developer",
    "Backend Developer"
  ];

  useEffect(() => {
    const targetText = roles[currentIndex];
    const typingSpeed = 100; // Faster typing (0.1s per character)
    const deletingSpeed = 50; // Even faster deletion
    const pauseTime = 800; // Shorter pause

    if (!isDeleting && currentText === targetText) {
      setTimeout(() => setIsDeleting(true), pauseTime);
      return;
    }

    if (isDeleting && currentText === '') {
      setIsDeleting(false);
      setCurrentIndex((prev) => (prev + 1) % roles.length);
      return;
    }

    const timer = setTimeout(() => {
      setCurrentText(isDeleting 
        ? targetText.substring(0, currentText.length - 1)
        : targetText.substring(0, currentText.length + 1)
      );
    }, isDeleting ? deletingSpeed : typingSpeed);

    return () => clearTimeout(timer);
  }, [currentText, currentIndex, isDeleting]);

  return (
    <div className='pt-[82px] mb-16'>
      {/* Mobile Image - Only visible on mobile */}
      <div className='md:hidden mb-2 flex justify-center opacity-0 animate-slide-in-left'>
        <img src="https://i.pinimg.com/736x/2b/7b/66/2b7b66b0ef840fcf89a97e8ef90d9f3b.jpg" alt="Profile" className='rounded-full w-28 h-28 object-cover transition-transform duration-300 hover:scale-105' />
      </div>

      <div className='border-[0.2px] border-[var(--primary-color)]/30 backdrop-blur-lg bg-zinc-900 rounded-lg p-6 shadow-lg'>
        <div className="mb-4 opacity-0 animate-slide-in-left">
          {/* <div name="About Me" className="text-white"/> */}
          <h1 className='text-white/80 text-2xl font-bold '>ABOUT ME</h1>
        </div>
        
        <div className='flex flex-col md:flex-row gap-0 stagger-children'>
          {/* Content Section - full width on mobile, 70% on desktop */}
          <div className='w-full md:w-[76%] space-y-3 text-lg text-white/80 stagger-children opacity-0 animate-slide-up'>
            <p className="text-xl opacity-0 animate-slide-up">
              Hey! I'm <span className='font-["Geist"] font-medium'>Komal Verma</span>, a{' '}
              <span className="text-[var(--primary-color)]  font-medium text-3xl">
                {currentText}
              </span>
              {' '}
            </p>
            <p className="text-xl opacity-0 animate-slide-up">
              I am a skilled and passionate web designer with experience in creating visually appearing and user-friendly websites.
            </p>
            <p className='text-xl opacity-0 animate-slide-up'>
           I enjoy learning new technologies and building digital products that solve real problems and bring joy to users.
            </p>
          </div>

          {/* Image Section - hidden on mobile, 30% on desktop */}
          <div className='hidden md:block w-44 h-44 opacity-0 animate-slide-in-right'>
            <img src="https://i.pinimg.com/736x/2b/7b/66/2b7b66b0ef840fcf89a97e8ef90d9f3b.jpg" alt="Profile" className='rounded-full w-full h-full object-cover transition-transform duration-300 hover:scale-105' />
          </div>
        </div>
        <div className="mt-4 opacity-0 animate-slide-up">
          <Buttons/>
        </div>
      </div>
      <Skills/>
    </div>
  )
}

export default About