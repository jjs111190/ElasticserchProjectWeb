import React from 'react';
import { Heart, Code2 } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-gray-100 py-8 mt-16">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center">
          <div className="flex justify-center items-center mb-3">
            <div className="w-6 h-6 bg-gray-900 rounded-full flex items-center justify-center mr-2">
              <span className="text-white font-medium text-xs">J</span>
            </div>
            <h3 className="text-lg font-medium text-gray-900">Jang jaeseok</h3>
          </div>
          <p className="text-gray-600 mb-4 font-light">
            Semiconductor R&D Engineer
          </p>
          <div className="flex justify-center items-center text-sm text-gray-500 font-light">
            <span>Made with</span>
            <Heart className="h-4 w-4 mx-1 text-gray-400" />
            <span>and React</span>
          </div>
          <div className="mt-3 text-xs text-gray-500 font-light">
            © 2024 Jang jaesok. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};