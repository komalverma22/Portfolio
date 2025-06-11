import React from 'react'
import Heading from './Heading'
import { GraduationCap, Calendar, Star } from 'lucide-react'

const Education = () => {
  const educationData = [
    {
      degree: "Bachelor of Technology in Computer Science",
      institution: "DCRUST",
      location: "Haryana, India",
      duration: "2023 - 2027",
      grade: "CGPA: 9.2",
     achievements: [
  "Core Team Member of the Open Developers Community (ODC)",
  "Active participant in multiple Hackathons across India",
  "Won 1st Prize at Punjab University (PU)",
  "Secured 2nd Prize at IIT Mandi",
  "Achieved 2nd Prize at NIT Kurukshetra "
]

    },
    {
      degree: "Senior Secondary (XII), Science",
      institution: "MLP Public School",
      location: "Haryana, India",
      grade: "Percentage: 93%",
      achievements: [
        "School topper",
        "Participated in various competitions"
      ]
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
            className="relative pl-8 pb-8 group animate-slide-up"
          >
            {/* Timeline line */}
            <div className="absolute left-0 top-0 bottom-0 w-[1px] bg-[var(--primary-color)]/20 group-last:bg-transparent">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-zinc-900 border-[0.2px] border-[var(--primary-color)]/30 flex items-center justify-center group-hover:animate-bounce-slow">
                <GraduationCap size={12} className="text-[var(--primary-color)]" />
              </div>
            </div>

            {/* Content */}
            <div className="bg-zinc-900/90 backdrop-blur-sm rounded-lg p-4 border-[0.2px] border-[var(--primary-color)]/30 hover:bg-zinc-800/90 transition-all duration-300 group-hover:scale-[1.02] group-hover:animate-glow">
              <h3 className="text-xl font-semibold text-white mb-1 flex items-center gap-2">
                {edu.degree}
                <Star size={16} className="text-[var(--primary-color)] animate-sparkle" />
              </h3>
              <div className="text-[var(--primary-color)] mb-2">{edu.institution}</div>
              <div className="flex items-center gap-2 text-sm text-white/60 mb-3">
                <Calendar size={14} className="animate-wiggle" />
                <span>{edu.duration}</span>
                <span className="text-[var(--primary-color)]">•</span>
                <span>{edu.location}</span>
              </div>
              <div className="text-white/80 mb-2">{edu.grade}</div>
              <div className="space-y-1">
                {edu.achievements.map((achievement, i) => (
                  <div 
                    key={i} 
                    className="flex items-start gap-2 text-sm text-white/70 hover:text-white transition-colors duration-300"
                  >
                    <span className="text-[var(--primary-color)] mt-1 animate-pulse">•</span>
                    <span>{achievement}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Education
