import React, { useState, useEffect } from 'react';
import { Plus, Settings } from 'lucide-react';
import { FilterSection } from '../components/FilterSection';
import { ProjectGrid } from '../components/ProjectGrid';
import { ProjectForm } from '../components/ProjectForm';
import { useSearch } from '../hooks/useSearch';
import { useProjects } from '../hooks/useProjects';
import { categories, allTags } from '../data/projects';
import { Project } from '../types';

export const ProjectsPage: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [editingProject, setEditingProject] = useState<Project | undefined>();
  const [showActions, setShowActions] = useState(false);
  
  const { projects, addProject, updateProject, deleteProject } = useProjects();
  const {
    filters,
    filteredProjects,
    updateSearch,
    updateCategory,
    toggleTag,
    clearFilters
  } = useSearch(projects);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const handleSaveProject = (projectData: Omit<Project, 'id'>) => {
    if (editingProject) {
      updateProject(editingProject.id, projectData);
    } else {
      addProject(projectData);
    }
    setShowForm(false);
    setEditingProject(undefined);
  };

  const handleEditProject = (project: Project) => {
    setEditingProject(project);
    setShowForm(true);
  };

  const handleCancelForm = () => {
    setShowForm(false);
    setEditingProject(undefined);
  };
  return (
    <div className="space-y-8">
      <div className="text-center py-12">
        <div className="flex items-center justify-center space-x-4 mb-4">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
            프로젝트
          </h1>
          <div className="flex space-x-2">
            <button
              onClick={() => setShowForm(true)}
              className="p-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full hover:shadow-lg transform hover:scale-105 transition-all duration-200"
              title="새 프로젝트 추가"
            >
              <Plus className="h-6 w-6" />
            </button>
            <button
              onClick={() => setShowActions(!showActions)}
              className={`p-3 rounded-full transition-all duration-200 ${
                showActions 
                  ? 'bg-red-500 text-white shadow-lg' 
                  : 'bg-gray-200 text-gray-600 hover:bg-gray-300'
              }`}
              title="편집 모드"
            >
              <Settings className="h-6 w-6" />
            </button>
          </div>
        </div>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          다양한 분야에서 진행한 {projects.length}개 이상의 프로젝트를 확인해보세요
        </p>
      </div>
      
      <FilterSection
        searchQuery={filters.search}
        onSearchChange={updateSearch}
        categories={categories}
        selectedCategory={filters.category}
        onCategoryChange={updateCategory}
        availableTags={allTags}
        selectedTags={filters.tags}
        onToggleTag={toggleTag}
        onClearFilters={clearFilters}
        resultsCount={filteredProjects.length}
      />
      
      <ProjectGrid 
        projects={filteredProjects} 
        loading={loading}
        onEdit={handleEditProject}
        onDelete={deleteProject}
        showActions={showActions}
      />

      {showForm && (
        <ProjectForm
          project={editingProject}
          onSave={handleSaveProject}
          onCancel={handleCancelForm}
        />
      )}
    </div>
  );
};