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

  const achievements = [
    "Secured 1st position in Web Development Competition",
    "Completed 100+ DSA Problems",
    "Built 10+ Full Stack Projects",
    "Active Open Source Contributor"
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
                <Star size={19} className="text-[var(--primary-color)] animate-sparkle" />
              </h3>
              <div className="text-[var(--primary-color)] mb-2">{edu.institution}</div>
              <div className="flex items-center gap-2 text-sm text-white/60 mb-3">
                <Calendar size={19} className="animate-wiggle" />
                <span>{edu.duration}</span>
                <span className="text-[var(--primary-color)] text-2xl">•</span>
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

      <div className="mt-16">
        <Heading name="Education" />
        <div className="mt-8 border-[0.2px] border-[var(--primary-color)]/30 backdrop-blur-sm rounded-lg p-5 shadow-lg">
          <div className="flex flex-col md:flex-row gap-8">
            {/* Education Details */}
            <div className="w-full md:w-[60%] space-y-4">
              <div className="space-y-2">
                <h3 className="text-xl font-semibold text-white">Bachelor of Technology in Computer Science</h3>
                <p className="text-white/80">Guru Gobind Singh Indraprastha University</p>
                <p className="text-white/60 text-sm">2020 - 2024</p>
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-semibold text-white">Senior Secondary Education</h3>
                <p className="text-white/80">Delhi Public School, Rohini</p>
                <p className="text-white/60 text-sm">2018 - 2020</p>
              </div>
            </div>

            {/* Achievements */}
            <div className="w-full md:w-[40%]">
              <h3 className="text-xl font-semibold text-white mb-4">Achievements</h3>
              <div className="space-y-3">
                {achievements.map((achievement, index) => (
                  <div
                    key={index}
                    className="group relative bg-white/5 p-3 rounded-lg border border-[var(--primary-color)]/20 hover:border-[var(--primary-color)] transition-all duration-300 hover:shadow-lg hover:shadow-[var(--primary-color)]/10"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-[var(--primary-color)]/10 to-purple-500/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <p className="relative text-white/80 group-hover:text-white transition-colors duration-300">
                      {achievement}
                    </p>
                    <div className="absolute -right-2 -top-2 w-4 h-4 bg-[var(--primary-color)] rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-0 group-hover:scale-100"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Education