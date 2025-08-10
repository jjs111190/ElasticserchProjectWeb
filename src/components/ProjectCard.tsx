import React from 'react';
import { ExternalLink, Github, Star, ChevronDown, ChevronUp, Edit, Trash2 } from 'lucide-react';
import { Project } from '../types';

interface ProjectCardProps {
  project: Project;
  onEdit?: (project: Project) => void;
  onDelete?: (id: string) => void;
  showActions?: boolean;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ 
  project, 
  onEdit, 
  onDelete, 
  showActions = false 
}) => {
  const [showAllTags, setShowAllTags] = React.useState(false);
  const maxVisibleTags = 3;
  const visibleTags = showAllTags ? project.tags : project.tags.slice(0, maxVisibleTags);
  const hasMoreTags = project.tags.length > maxVisibleTags;

  const handleDelete = () => {
    if (window.confirm('정말로 이 프로젝트를 삭제하시겠습니까?')) {
      onDelete?.(project.id);
    }
  };
  return (
    <div className="bg-white border border-gray-100 hover:border-gray-200 transition-colors overflow-hidden">
      {project.featured && (
        <div className="absolute top-4 right-4 z-10">
          <div className="bg-gray-900 text-white px-2 py-1 text-xs font-medium flex items-center">
            <Star className="h-3 w-3 mr-1" />
            Featured
          </div>
        </div>
      )}
      
      {showActions && (
        <div className="absolute top-4 left-4 z-10 flex space-x-2">
          <button
            onClick={() => onEdit?.(project)}
            className="p-2 bg-gray-900 text-white hover:bg-gray-800 transition-colors"
          >
            <Edit className="h-4 w-4" />
          </button>
          <button
            onClick={handleDelete}
            className="p-2 bg-red-600 text-white hover:bg-red-700 transition-colors"
          >
            <Trash2 className="h-4 w-4" />
          </button>
        </div>
      )}
      
      <div className="relative overflow-hidden">
        <img 
          src={project.image} 
          alt={project.title}
          className="w-full h-40 object-cover"
        />
      </div>

      <div className="p-4">
        <div className="flex items-start justify-between mb-3">
          <h3 className="text-lg font-medium text-gray-900 line-clamp-1">
            {project.title}
          </h3>
        </div>
        
        <p className="text-sm text-gray-600 mb-3 line-clamp-2 font-light">
          {project.description}
        </p>
        
        <div className="mb-4">
          <div className="flex flex-wrap gap-2 mb-2">
            {visibleTags.map((tag) => (
              <span 
                key={tag}
                className="px-2 py-1 bg-gray-100 text-gray-700 text-xs"
              >
                {tag}
              </span>
            ))}
          </div>
          {hasMoreTags && (
            <button
              onClick={() => setShowAllTags(!showAllTags)}
              className="flex items-center text-xs text-gray-600 hover:text-gray-900 transition-colors"
            >
              {showAllTags ? (
                <>
                  <ChevronUp className="h-3 w-3 mr-1" />
                  접기
                </>
              ) : (
                <>
                  <ChevronDown className="h-3 w-3 mr-1" />
                  +{project.tags.length - maxVisibleTags}개 더보기
                </>
              )}
            </button>
          )}
        </div>

        <div className="flex items-center justify-between">
          <span className="text-xs text-gray-500 font-light">
            {new Date(project.createdAt).toLocaleDateString('ko-KR')}
          </span>
          
          <div className="flex space-x-2">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-gray-600 hover:text-gray-900 transition-colors"
              >
                <Github className="h-4 w-4" />
              </a>
            )}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-gray-600 hover:text-gray-900 transition-colors"
              >
                <ExternalLink className="h-4 w-4" />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};