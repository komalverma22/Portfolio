import React, { useState } from 'react';
import Heading from './Heading';
import { Send, Mail, MapPin, Phone, Coffee, Heart, Sparkles } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Add your form submission logic here
    setTimeout(() => setIsSubmitting(false), 1000);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      text: "komalverma2212005@gmail.com",
      href: "mailto:komalverma2212005@gmail.com"
    },
    {
      icon: MapPin,
      text: "Haryana, India",
      href: "https://maps.google.com/?q=Haryana,India"
    },
    {
      icon: Phone,
      text: "+91 XXXX XXXX XX",
      href: "tel:+91XXXXXXXXXX"
    }
  ];

  return (
    <div className="mt-8 mb-16">
      <div className="mb-8 opacity-0 animate-slide-up">
        <Heading name="GET IN TOUCH" />
      </div>

      <div className="grid md:grid-cols-2 gap-8 stagger-children">
        {/* Left Side - Contact Info */}
        <div className="space-y-6 opacity-0 animate-slide-up stagger-children">
          <div className="bg-zinc-900/90 backdrop-blur-sm rounded-lg p-6 border-[0.2px] border-[var(--primary-color)]/30 hover:animate-glow transition-all duration-300 opacity-0 animate-slide-up">
            <h3 className="text-xl font-semibold text-white mb-6 flex items-center gap-2">
             <a href=""> Buy Me A Coffee⁠♡</a><Coffee size={25} className="text-[var(--primary-color)] animate-wiggle mb-2" />
            </h3>
            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <a
                  key={index}
                  href={info.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-white hover:text-white transition-all duration-300 group hover:translate-x-2"
                >
                  <div className="p-2 rounded-sm border-[0.2px] border-white/20 group-hover:border-white/50 transition-all duration-300 group-hover:animate-bounce-slow">
                    <info.icon size={16} className="text-white-700" />
                  </div>
                  <span>{info.text}</span>
                </a>
              ))}
            </div>
          </div>

          <div className="bg-zinc-900/90 backdrop-blur-sm rounded-lg p-6 border-[0.2px] border-[var(--primary-color)]/30 hover:animate-glow transition-all duration-300 opacity-0 animate-slide-up">
            <div className="flex items-center gap-2 text-white/80 mb-4">
              <Heart size={16} className="text-[var(--primary-color)] animate-heart" />
              <span>Looking forward to hearing from you!</span>
            </div>
            <div className="text-sm text-white/60">
              Feel free to reach out for collaborations, opportunities, or just a friendly chat about tech and coding.
            </div>
          </div>
        </div>

        {/* Right Side - Contact Form */}
        <div className="bg-zinc-900/90 backdrop-blur-sm rounded-lg px-6 py-4 border-[0.2px] border-[var(--primary-color)]/30 hover:animate-glow transition-all duration-300 opacity-0 animate-slide-up">
          <form onSubmit={handleSubmit} className="space-y-4 stagger-children">
            <div className="opacity-0 animate-slide-up">
              <label htmlFor="name" className="block text-sm text-white/70 mb-2">
                Your Name <span className="text-[var(--primary-color)] animate-pulse">*</span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-1.5 rounded-sm bg-zinc-800/50 border-[0.2px] border-white/20 text-white/90 focus:outline-none focus:border-white/50 transition-all duration-300 focus:animate-glow"
                placeholder="Enter your name"
              />
            </div>
            <div className="opacity-0 animate-slide-up">
              <label htmlFor="email" className="block text-sm text-white/70 mb-2">
                Your Email <span className="text-[var(--primary-color)] animate-pulse">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-1.5 rounded-sm bg-zinc-800/50 border-[0.2px] border-white/20 text-white/90 focus:outline-none focus:border-white/50 transition-all duration-300 focus:animate-glow"
                placeholder="xyz@example.com"
              />
            </div>
            <div className="opacity-0 animate-slide-up">
              <label htmlFor="message" className="block text-sm text-white/70 mb-2">
                Your Message <span className="text-[var(--primary-color)] animate-pulse">*</span>
              </label>
              <textarea
                id="message"
                name="message"
                required
                value={formData.message}
                onChange={handleChange}
                rows="3"
                className="w-full px-4 py-1.5 rounded-sm bg-zinc-800/50 border-[0.2px] border-white/20 text-white/90 focus:outline-none focus:border-white/50 transition-all duration-300 resize-none focus:animate-glow"
                placeholder="Hi there! I'd like to talk about..."
              />
            </div>
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-1/2 mx-auto py-2.5 px-4 text-md rounded-lg bg-white/60 text-zinc-900 font-medium transition-all duration-300 ease-in-out flex items-center justify-center gap-2 group disabled:opacity-70 hover:animate-glow hover:scale-[1.02] h  opacity-0 animate-slide-up"
            >
              {isSubmitting ? (
                <Sparkles size={18} className="animate-spin" />
              ) : (
                <>
                  Send Message
                  <Send size={18} className="transition-transform duration-300 group-hover:translate-x-1 group-hover:animate-wiggle" />
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
