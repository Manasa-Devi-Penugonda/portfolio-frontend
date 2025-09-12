import React from 'react';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h3 className="text-2xl font-bold mb-2">Manasa Devi Penugonda</h3>
            <p className="text-gray-400">Full Stack Developer & AWS Integration Specialist</p>
          </div>
          
          <div className="flex space-x-6">
            <a
              href="https://github.com/Manasa-Devi-Penugonda"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-emerald-400 transition-colors duration-200 hover:scale-110 transform"
            >
              <Github size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/manasa-devi-penugonda-b734b9236/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-emerald-400 transition-colors duration-200 hover:scale-110 transform"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="mailto:manasadevipenugonda18@gmail.com"
              className="text-gray-400 hover:text-emerald-400 transition-colors duration-200 hover:scale-110 transform"
            >
              <Mail size={24} />
            </a>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 flex items-center justify-center">
            © {currentYear} Manasa Devi Penugonda. Made with <Heart size={16} className="mx-1 text-emerald-400" /> and code.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;