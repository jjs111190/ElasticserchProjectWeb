import React from 'react';
import { ProjectCard } from './ProjectCard';
import { Project } from '../types';
import { Search } from 'lucide-react';

interface ProjectGridProps {
  projects: Project[];
  loading?: boolean;
  onEdit?: (project: Project) => void;
  onDelete?: (id: string) => void;
  showActions?: boolean;
}

export const ProjectGrid: React.FC<ProjectGridProps> = ({ 
  projects, 
  loading = false, 
  onEdit, 
  onDelete, 
  showActions = false 
}) => {
  if (loading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[...Array(6)].map((_, index) => (
          <div key={index} className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden animate-pulse">
            <div className="w-full h-48 bg-gray-200" />
            <div className="p-6">
              <div className="h-6 bg-gray-200 rounded mb-3" />
              <div className="h-4 bg-gray-200 rounded mb-2" />
              <div className="h-4 bg-gray-200 rounded w-3/4 mb-4" />
              <div className="flex space-x-2 mb-4">
                <div className="h-6 w-16 bg-gray-200 rounded" />
                <div className="h-6 w-20 bg-gray-200 rounded" />
                <div className="h-6 w-14 bg-gray-200 rounded" />
              </div>
              <div className="flex justify-between items-center">
                <div className="h-4 w-20 bg-gray-200 rounded" />
                <div className="flex space-x-2">
                  <div className="h-8 w-8 bg-gray-200 rounded-full" />
                  <div className="h-8 w-8 bg-gray-200 rounded-full" />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }

  if (projects.length === 0) {
    return (
      <div className="text-center py-16">
        <div className="w-24 h-24 mx-auto mb-6 bg-gray-100 rounded-full flex items-center justify-center">
          <Search className="h-12 w-12 text-gray-400" />
        </div>
        <h3 className="text-xl font-semibold text-gray-900 mb-2">
          검색 결과가 없습니다
        </h3>
        <p className="text-gray-600">
          다른 키워드로 검색하거나 필터를 조정해 보세요.
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {projects.map((project) => (
        <ProjectCard 
          key={project.id} 
          project={project} 
          onEdit={onEdit}
          onDelete={onDelete}
          showActions={showActions}
        />
      ))}
    </div>
  );
};