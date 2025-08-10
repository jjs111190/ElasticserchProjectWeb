import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

export const Header: React.FC = () => {
  return (
    <header className="relative bg-white text-gray-900 py-24 border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center">
          <div className="mb-8">
            <div className="w-20 h-20 mx-auto bg-gray-900 rounded-full flex items-center justify-center mb-6">
              <span className="text-white font-bold text-2xl">J</span>
            </div>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-light mb-4 text-gray-900">
            Jang jaeseok
          </h1>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto font-light">
            Semiconductor R&D Engineer
          </p>
          
          <div className="flex justify-center space-x-4">
            <a href="https://github.com" className="p-3 text-gray-600 hover:text-gray-900 transition-colors">
              <Github className="h-5 w-5" />
            </a>
            <a href="https://linkedin.com" className="p-3 text-gray-600 hover:text-gray-900 transition-colors">
              <Linkedin className="h-5 w-5" />
            </a>
            <a href="mailto:contact@example.com" className="p-3 text-gray-600 hover:text-gray-900 transition-colors">
              <Mail className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};