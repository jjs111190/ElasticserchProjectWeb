import { useState, useEffect } from 'react';
import { Project } from '../types';
import { projects as initialProjects } from '../data/projects';

export const useProjects = () => {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    // 로컬 스토리지에서 프로젝트 불러오기
    const savedProjects = localStorage.getItem('portfolio-projects');
    if (savedProjects) {
      try {
        setProjects(JSON.parse(savedProjects));
      } catch (error) {
        console.error('Failed to parse saved projects:', error);
        setProjects(initialProjects);
      }
    } else {
      setProjects(initialProjects);
    }
  }, []);

  const saveProjects = (newProjects: Project[]) => {
    setProjects(newProjects);
    localStorage.setItem('portfolio-projects', JSON.stringify(newProjects));
  };

  const addProject = (projectData: Omit<Project, 'id'>) => {
    const newProject: Project = {
      ...projectData,
      id: Date.now().toString()
    };
    const updatedProjects = [newProject, ...projects];
    saveProjects(updatedProjects);
  };

  const updateProject = (id: string, projectData: Omit<Project, 'id'>) => {
    const updatedProjects = projects.map(project =>
      project.id === id ? { ...projectData, id } : project
    );
    saveProjects(updatedProjects);
  };

  const deleteProject = (id: string) => {
    const updatedProjects = projects.filter(project => project.id !== id);
    saveProjects(updatedProjects);
  };

  return {
    projects,
    addProject,
    updateProject,
    deleteProject
  };
};