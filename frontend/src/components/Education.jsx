import React, { useState, useEffect, useRef } from 'react'
import Heading from './Heading'
import { GraduationCap, Calendar, Star, Trophy, Sparkles } from 'lucide-react'

const Education = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [visibleItems, setVisibleItems] = useState(new Map());
  const itemRefs = useRef([]);

  const educationData = [
    {
      degree: "Bachelor of Technology in Computer Science",
      institution: "DCRUST",
      location: "Haryana, India",
      duration: "2023 - 2027",
      achievements: [
        "Core Team Member of the Open Developers Community (ODC)",
        "Active participant in multiple Hackathons across India",
        "Won 1st Prize at Punjab University",
        "Secured 2nd Prize at IIT Mandi",
        "Achieved 2nd Prize at NIT Kuk"
      ],
      showAchievementsOnLeft: false
    },
    {
      degree: "Senior Secondary (XII), Science",
      institution: "MLP Public School",
      location: "Haryana, India",
      duration: "2021 - 2023",
      achievements: [
        "School topper",
        "Participated in various competitions"
      ],
      showAchievementsOnLeft: true
    }
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setVisibleItems(prev => new Map(prev).set(parseInt(entry.target.dataset.index), true));
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 } // Trigger when 20% of the item is visible
    );

    itemRefs.current.forEach(ref => {
      if (ref) {
        observer.observe(ref);
      }
    });

    return () => {
      itemRefs.current.forEach(ref => {
        if (ref) {
          observer.unobserve(ref);
        }
      });
    };
  }, []);

  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = (index) => {
    // Add a small delay to prevent flickering when moving between card and popup
    setTimeout(() => {
      setHoveredIndex(null);
    }, 1000);
  };

  return (
    <div className="mt-8">
      <div className="mb-8">
        <Heading name="EDUCATION"/>
      </div>

      <div className="space-y-8">
        {educationData.map((edu, index) => {
          const isVisible = visibleItems.get(index);
          const isHovered = hoveredIndex === index;
          
          return (
            <div 
              key={index}
              ref={el => itemRefs.current[index] = el}
              data-index={index} // Used to identify the element in the observer callback
              className={`relative pl-4 pb-8 group transition-all duration-700 ease-out transform
                ${isVisible 
                  ? (edu.showAchievementsOnLeft ? 'translate-x-0 opacity-100 animate-slide-in-left' : 'translate-x-0 opacity-100 animate-slide-in-right')
                  : (edu.showAchievementsOnLeft ? '-translate-x-full opacity-0' : 'translate-x-full opacity-0')
                }`}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={() => handleMouseLeave(index)}
            >
              {/* Timeline line */}
              <div className="absolute left-0 top-0 bottom-0 w-[1px] bg-[var(--primary-color)]/20 group-last:bg-transparent">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-zinc-900 border-[0.2px] border-[var(--primary-color)]/30 flex items-center justify-center group-hover:animate-bounce-slow hover-transition">
                  <GraduationCap size={12} className="text-[var(--primary-color)]" />
                </div>
              </div>

              {/* Content */}
              <div className="bg-zinc-900/90 backdrop-blur-sm rounded-lg p-4 border-[0.2px] border-[var(--primary-color)]/30 hover:bg-zinc-800/90 hover-transition hover-scale relative overflow-visible">
                <h3 className="text-xl font-semibold text-white mb-1 flex items-center gap-2">
                  {edu.degree}
                  <Star size={19} className="text-[var(--primary-color)] animate-sparkle hover-transition" />
                </h3>
                <div className="text-[var(--primary-color)] mb-2 hover-transition">{edu.institution}</div>
                <div className="flex items-center gap-2 text-sm text-white/60 mb-4">
                  <Calendar size={19} className="animate-wiggle hover-transition" />
                  <span>{edu.duration}</span>
                  <span className="text-[var(--primary-color)] text-2xl hover-transition">•</span>
                  <span>{edu.location}</span>
                </div>

                {/* Achievements Popup */}
                {isHovered && (
                  <div 
                    className="mt-4 w-full bg-zinc-900/95 backdrop-blur-sm rounded-lg p-2 border border-[var(--primary-color)]/30 shadow-lg shadow-[var(--primary-color)]/10 z-10 hover-transition animate-slide-in-up"
                  >
                    <div className="flex items-center gap-2 mb-3 text-[var(--primary-color)]">
                      <Trophy size={18} className="animate-bounce hover-transition" />
                      <h4 className="font-semibold flex items-center gap-2">
                        Achievements
                        <Sparkles size={16} className="animate-twinkle hover-transition" />
                      </h4>
                    </div>
                    <div className="space-y-2">
                      {edu.achievements.map((achievement, i) => (
                        <div 
                          key={i} 
                          className="flex items-start gap-2 text-md text-white/80 hover:text-white hover-transition animate-fade-in-slow hover:translate-x-1"
                          style={{ 
                            animationDelay: `${i * 250}ms`,
                            transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)'
                          }}
                        >
                          <span className="text-[var(--primary-color)] mt-1 animate-pulse-slow hover-transition">•</span>
                          <span className="leading-relaxed">{achievement}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  )
}

export default Education