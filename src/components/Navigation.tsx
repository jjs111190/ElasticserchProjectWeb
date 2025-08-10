import React from 'react';
import { Home, User, FolderOpen, Mail } from 'lucide-react';

interface NavigationProps {
  currentPage: string;
  onPageChange: (page: string) => void;
}

export const Navigation: React.FC<NavigationProps> = ({ currentPage, onPageChange }) => {
  const navItems = [
    { id: 'home', label: '홈', icon: Home },
    { id: 'profile', label: '프로필', icon: User },
    { id: 'projects', label: '프로젝트', icon: FolderOpen },
    { id: 'contact', label: '연락처', icon: Mail }
  ];

  return (
    <nav className="bg-white border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between h-14">
          <div className="flex items-center space-x-2">
            <div className="w-7 h-7 bg-gray-900 rounded-full flex items-center justify-center">
              <span className="text-white font-medium text-xs">J</span>
            </div>
            <span className="font-medium text-gray-900">Jang jaeseok</span>
          </div>
          
          <div className="flex space-x-0">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = currentPage === item.id;
              
              return (
                <button
                  key={item.id}
                  onClick={() => onPageChange(item.id)}
                  className={`flex items-center space-x-2 px-4 py-2 text-sm font-medium transition-colors ${
                    isActive
                      ? 'text-gray-900 border-b-2 border-gray-900'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  <Icon className="h-4 w-4" />
                  <span className="hidden sm:inline">{item.label}</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </nav>
  );
};