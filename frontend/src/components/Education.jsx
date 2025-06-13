import React, { useState } from 'react'
import Heading from './Heading'
import { GraduationCap, Calendar, Star, Trophy, Sparkles } from 'lucide-react'

const Education = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [hoveredPopup, setHoveredPopup] = useState(false);

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

  return (
    <div className="mt-8">
      <div className="mb-8">
        <Heading name="EDUCATION"/>
      </div>

      <div className="space-y-8 stagger-children">
        {educationData.map((edu, index) => (
          <div 
            key={index}
            className="relative pl-4 pb-8 group animate-slide-up"
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => !hoveredPopup && setHoveredIndex(null)}
          >
            {/* Timeline line */}
            <div className="absolute left-0 top-0 bottom-0 w-[1px] bg-[var(--primary-color)]/20 group-last:bg-transparent">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-zinc-900 border-[0.2px] border-[var(--primary-color)]/30 flex items-center justify-center group-hover:animate-bounce-slow hover-transition">
                <GraduationCap size={12} className="text-[var(--primary-color)]" />
              </div>
            </div>

            {/* Content */}
            <div className="bg-zinc-900/90 backdrop-blur-sm rounded-lg p-4 border-[0.2px] border-[var(--primary-color)]/30 hover:bg-zinc-800/90 hover-transition hover-scale relative">
              <h3 className="text-xl font-semibold text-white mb-1 flex items-center gap-2">
                {edu.degree}
                <Star size={19} className="text-[var(--primary-color)] animate-sparkle hover-transition" />
              </h3>
              <div className="text-[var(--primary-color)] mb-2 hover-transition">{edu.institution}</div>
              <div className="flex items-center gap-2 text-sm text-white/60">
                <Calendar size={19} className="animate-wiggle hover-transition" />
                <span>{edu.duration}</span>
                <span className="text-[var(--primary-color)] text-2xl hover-transition">•</span>
                <span>{edu.location}</span>
              </div>

              {/* Achievements Popup */}
              {(hoveredIndex === index || hoveredPopup) && (
                <div 
                  className={`absolute ${edu.showAchievementsOnLeft ? 'right-full mr-4' : 'left-full ml-4'} top-0 w-65 bg-zinc-900/95 backdrop-blur-sm rounded-lg p-2 border border-[var(--primary-color)]/30 shadow-lg shadow-[var(--primary-color)]/10 z-10 hover-transition ${
                    edu.showAchievementsOnLeft ? 'animate-slide-in-left' : 'animate-slide-in-right'
                  }`}
                  onMouseEnter={() => setHoveredPopup(true)}
                  onMouseLeave={() => setHoveredPopup(false)}
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
                        className="flex items-start gap-2 text-sm text-white/80 hover:text-white hover-transition animate-fade-in-slow hover:translate-x-1"
                        style={{ 
                          animationDelay: `${i * 250}ms`,
                          transform: edu.showAchievementsOnLeft ? 'translateX(0)' : 'translateX(0)',
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
        ))}
      </div>
    </div>
  )
}

export default Education
