import { useState, useMemo } from 'react';
import { Project, FilterState } from '../types';

export const useSearch = (projects: Project[]) => {
  const [filters, setFilters] = useState<FilterState>({
    search: '',
    category: '전체',
    tags: []
  });

  const filteredProjects = useMemo(() => {
    return projects.filter(project => {
      const matchesSearch = filters.search === '' || 
        project.title.toLowerCase().includes(filters.search.toLowerCase()) ||
        project.description.toLowerCase().includes(filters.search.toLowerCase()) ||
        project.longDescription.toLowerCase().includes(filters.search.toLowerCase()) ||
        project.tags.some(tag => tag.toLowerCase().includes(filters.search.toLowerCase()));

      const matchesCategory = filters.category === '전체' || 
        project.category === filters.category;

      const matchesTags = filters.tags.length === 0 || 
        filters.tags.every(filterTag => 
          project.tags.some(projectTag => 
            projectTag.toLowerCase().includes(filterTag.toLowerCase())
          )
        );

      return matchesSearch && matchesCategory && matchesTags;
    });
  }, [projects, filters]);

  const updateSearch = (search: string) => {
    setFilters(prev => ({ ...prev, search }));
  };

  const updateCategory = (category: string) => {
    setFilters(prev => ({ ...prev, category }));
  };

  const toggleTag = (tag: string) => {
    setFilters(prev => ({
      ...prev,
      tags: prev.tags.includes(tag)
        ? prev.tags.filter(t => t !== tag)
        : [...prev.tags, tag]
    }));
  };

  const clearFilters = () => {
    setFilters({
      search: '',
      category: '전체',
      tags: []
    });
  };

  return {
    filters,
    filteredProjects,
    updateSearch,
    updateCategory,
    toggleTag,
    clearFilters
  };
};