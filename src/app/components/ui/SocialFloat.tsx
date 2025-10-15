'use client';

import { useState } from 'react';
import { portfolioData } from '@/app/data/portfolio-data';
import { Github, Linkedin, Twitter, Mail, X } from 'lucide-react';

const SocialFloat = () => {
  const [isOpen, setIsOpen] = useState(false);

  const getSocialIcon = (iconName: string) => {
    switch (iconName.toLowerCase()) {
      case 'github':
        return <Github size={20} />;
      case 'linkedin':
        return <Linkedin size={20} />;
      case 'twitter':
        return <Twitter size={20} />;
      case 'mail':
        return <Mail size={20} />;
      default:
        return null;
    }
  };

  return (
    <>
      {/* Mobile Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="lg:hidden fixed bottom-6 right-6 z-50 w-12 h-12 bg-primary text-white rounded-full shadow-lg hover:bg-blue-600 transition-all duration-300 flex items-center justify-center"
      >
        {isOpen ? <X size={24} /> : <div className="flex flex-col space-y-1">
          <div className="w-4 h-0.5 bg-white"></div>
          <div className="w-4 h-0.5 bg-white"></div>
          <div className="w-4 h-0.5 bg-white"></div>
        </div>}
      </button>

      {/* Social Media Sidebar */}
      <div className={`
        fixed left-0 top-1/2 transform -translate-y-1/2 z-40
        transition-all duration-300 ease-in-out
        ${isOpen ? 'translate-x-0 opacity-100' : '-translate-x-full lg:translate-x-0 opacity-0 lg:opacity-100'}
      `}>
        <div className="bg-white/90 backdrop-blur-md rounded-r-2xl shadow-2xl border border-gray-200 border-l-0 p-4">
          <div className="flex flex-col space-y-4">
            {portfolioData.social.map((social, index) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  w-12 h-12 rounded-xl
                  bg-gradient-to-br from-gray-50 to-white
                  border border-gray-200
                  flex items-center justify-center
                  text-gray-600 hover:text-white
                  transition-all duration-300
                  hover:scale-110 hover:shadow-lg
                  group relative
                  hover:from-primary hover:to-blue-600
                "
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                {getSocialIcon(social.icon)}
                
                {/* Tooltip */}
                <span className="
                  absolute left-full ml-3 px-2 py-1
                  bg-gray-900 text-white text-xs rounded
                  opacity-0 group-hover:opacity-100
                  transition-opacity duration-200
                  whitespace-nowrap
                  pointer-events-none
                ">
                  {social.name}
                </span>
              </a>
            ))}
            
            {/* Email Link */}
            <a
              href={`mailto:${portfolioData.personal.email}`}
              className="
                w-12 h-12 rounded-xl
                bg-gradient-to-br from-gray-50 to-white
                border border-gray-200
                flex items-center justify-center
                text-gray-600 hover:text-white
                transition-all duration-300
                hover:scale-110 hover:shadow-lg
                group relative
                hover:from-green-500 hover:to-green-600
              "
            >
              <Mail size={20} />
              <span className="
                absolute left-full ml-3 px-2 py-1
                bg-gray-900 text-white text-xs rounded
                opacity-0 group-hover:opacity-100
                transition-opacity duration-200
                whitespace-nowrap
                pointer-events-none
              ">
                Email Me
              </span>
            </a>
          </div>
        </div>
      </div>

      {isOpen && (
        <div 
          className="lg:hidden fixed inset-0 bg-black/20 z-30"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
};

export default SocialFloat;