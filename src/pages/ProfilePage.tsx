import React from 'react';
import { ProfileSection } from '../components/ProfileSection';

export const ProfilePage: React.FC = () => {
  return (
    <div className="space-y-8">
      <div className="text-center py-12">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          프로필
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          개발자로서의 여정과 경험, 그리고 앞으로의 비전을 소개합니다
        </p>
      </div>
      
      <ProfileSection />
    </div>
  );
};