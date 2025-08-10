import React from 'react';
import { SearchBar } from './SearchBar';
import { CategoryFilter } from './CategoryFilter';
import { TagFilter } from './TagFilter';
import { Filter, X } from 'lucide-react';

interface FilterSectionProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
  categories: string[];
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
  availableTags: string[];
  selectedTags: string[];
  onToggleTag: (tag: string) => void;
  onClearFilters: () => void;
  resultsCount: number;
}

export const FilterSection: React.FC<FilterSectionProps> = ({
  searchQuery,
  onSearchChange,
  categories,
  selectedCategory,
  onCategoryChange,
  availableTags,
  selectedTags,
  onToggleTag,
  onClearFilters,
  resultsCount
}) => {
  const hasActiveFilters = searchQuery || selectedCategory !== '전체' || selectedTags.length > 0;

  return (
    <div className="bg-white/50 backdrop-blur-sm rounded-2xl p-6 shadow-sm border border-gray-100 space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Filter className="h-5 w-5 text-gray-600" />
          <h2 className="text-lg font-semibold text-gray-900">프로젝트 검색 및 필터</h2>
        </div>
        {hasActiveFilters && (
          <button
            onClick={onClearFilters}
            className="flex items-center space-x-1 px-3 py-1 text-sm text-gray-600 hover:text-gray-900 bg-gray-100 hover:bg-gray-200 rounded-full transition-colors"
          >
            <X className="h-4 w-4" />
            <span>초기화</span>
          </button>
        )}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-4">
          <div>
            <SearchBar
              value={searchQuery}
              onChange={onSearchChange}
              placeholder="프로젝트, 기술 스택으로 검색..."
            />
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-gray-700 mb-2">카테고리</h3>
            <CategoryFilter
              categories={categories}
              selected={selectedCategory}
              onSelect={onCategoryChange}
            />
          </div>
        </div>

        <div>
          <TagFilter
            availableTags={availableTags}
            selectedTags={selectedTags}
            onToggleTag={onToggleTag}
          />
        </div>
      </div>

      <div className="flex items-center justify-between pt-4 border-t border-gray-200">
        <p className="text-sm text-gray-600">
          <span className="font-semibold">{resultsCount}개</span>의 프로젝트가 검색되었습니다
        </p>
        {selectedTags.length > 0 && (
          <div className="flex items-center space-x-2">
            <span className="text-xs text-gray-500">선택된 태그:</span>
            <div className="flex space-x-1">
              {selectedTags.map(tag => (
                <span key={tag} className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-md">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};