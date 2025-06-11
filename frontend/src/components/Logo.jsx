import React from 'react'
import { Github, Linkedin, Twitter, Mail } from 'lucide-react'

const Logo = () => {
  const socialLinks = [
    {
      icon: Github,
      href: "https://github.com/komalverma22",
      name: "Github"
    },
    {
      icon: Twitter,
      href: "https://twitter.com/coffee_0708",
      name: "Twitter"
    },
    {
      icon: Linkedin,
      href: "https://linkedin.com/in/komalverma07",
      name: "LinkedIn"
    },
    {
      icon: Mail,
      href: "mailto:komalverma2212005@gmail.com",
      name: "Email"
    }
  ]

  return (
    <div className='flex gap-3 px-2 justify-center text-center'>
      {socialLinks.map((social, index) => (
        <a
          key={index}
          href={social.href}
          target="_blank"
          rel="noopener noreferrer"
          className='group relative'
        >
          <div className='absolute -top-8 left-1/2 -translate-x-1/2 px-2 py-0.5 bg-zinc-800 text-white text-sm opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 rounded-sm'>
            {social.name}
            <div className='absolute -bottom-1 left-1/2 -translate-x-1/2 border-2 border-transparent border-t-zinc-800'></div>
          </div>
          <div className='p-2 bg-zinc-900/90 backdrop-blur-sm rounded-sm transition-all duration-300 group-hover:bg-zinc-800/90 border-[0.2px] border-[var(--primary-color)]/30'>
            <social.icon 
              size={18} 
              className='text-white/80 group-hover:text-white transition-colors duration-300'
            />
          </div>
        </a>
      ))}
    </div>
  )
}

export default Logo