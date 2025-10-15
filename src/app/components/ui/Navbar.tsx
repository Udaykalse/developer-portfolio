'use client';

import { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin } from 'lucide-react';
import { portfolioData } from '@/app/data/portfolio-data';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' },
  ];

  const socialLinks = portfolioData.social.filter(social => 
    social.icon === 'github' || social.icon === 'linkedin'
  );

  const getSocialIcon = (iconName: string) => {
    switch (iconName) {
      case 'github':
        return <Github size={18} />;
      case 'linkedin':
        return <Linkedin size={18} />;
      default:
        return null;
    }
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-lg shadow-lg' 
        : 'bg-white/90 backdrop-blur-md shadow-sm'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-3">
          <a
            href="#home"
            className="font-bold text-xl text-primary hover:text-blue-600 transition-all duration-300 transform hover:scale-105 group"
          >
            <span className="group-hover:text-shadow-lg group-hover:drop-shadow-md transition-all duration-300">
              &lt;Uday/&gt;
            </span>
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="relative px-4 py-2 font-medium text-gray-700 hover:text-primary transition-all duration-300 group overflow-hidden"
              >
                <span className="relative z-10 transition-transform duration-300 group-hover:-translate-y-1">
                  {item.name}
                </span>
                <span className="absolute inset-0 bg-gradient-to-b from-blue-50 to-blue-100 rounded-lg transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
              </a>
            ))}
          </div>

          {/* Mobile Menu Button with Social Icons */}
          <div className="md:hidden flex items-center space-x-3">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-primary transition-all duration-300 p-2 rounded-full hover:bg-gray-100 transform hover:scale-110 hover:shadow-md border border-transparent hover:border-gray-200"
              >
                {getSocialIcon(social.icon)}
              </a>
            ))}
            
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-primary transition-all duration-300 p-2 rounded-lg hover:bg-gray-100 transform hover:scale-110 hover:shadow-md border border-gray-200 hover:border-gray-300 active:scale-95"
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Enhanced Mobile Menu with Same Effects */}
        {isOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-white/95 backdrop-blur-lg shadow-xl border-t border-gray-100">
            <div className="px-4 py-4 space-y-3">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="relative block py-4 px-6 font-medium text-gray-700 hover:text-primary transition-all duration-300 group overflow-hidden rounded-xl active:scale-95"
                  onClick={() => setIsOpen(false)}
                >
                  <span className="relative z-10 transition-transform duration-300 group-hover:-translate-y-1 group-active:translate-y-0">
                    {item.name}
                  </span>
                  
                  <span className="absolute inset-0 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
                  
                  <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-1 bg-primary group-hover:w-4/5 transition-all duration-300 rounded-full"></span>
                  
                  <span className="absolute inset-0 bg-primary opacity-0 group-hover:opacity-5 rounded-xl transition-opacity duration-300"></span>
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;