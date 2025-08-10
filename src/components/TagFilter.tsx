import React from 'react';
import { X, ChevronDown, ChevronUp } from 'lucide-react';

interface TagFilterProps {
  availableTags: string[];
  selectedTags: string[];
  onToggleTag: (tag: string) => void;
}

export const TagFilter: React.FC<TagFilterProps> = ({
  availableTags,
  selectedTags,
  onToggleTag
}) => {
  const [showAllTags, setShowAllTags] = React.useState(false);
  const maxVisibleTags = 8;
  const visibleTags = showAllTags ? availableTags : availableTags.slice(0, maxVisibleTags);
  const hasMoreTags = availableTags.length > maxVisibleTags;

  return (
    <div className="space-y-3">
      <h3 className="text-sm font-semibold text-gray-700">기술 스택</h3>
      <div className="flex flex-wrap gap-2">
        {visibleTags.map((tag) => {
          const isSelected = selectedTags.includes(tag);
          return (
            <button
              key={tag}
              onClick={() => onToggleTag(tag)}
              className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium transition-all duration-200 ${
                isSelected
                  ? 'bg-blue-100 text-blue-800 border border-blue-200'
                  : 'bg-gray-100 text-gray-700 border border-gray-200 hover:bg-gray-200'
              }`}
            >
              {tag}
              {isSelected && (
                <X className="ml-1 h-3 w-3" />
              )}
            </button>
          );
        })}
      </div>
      {hasMoreTags && (
        <button
          onClick={() => setShowAllTags(!showAllTags)}
          className="flex items-center text-sm text-blue-600 hover:text-blue-800 transition-colors font-medium"
        >
          {showAllTags ? (
            <>
              <ChevronUp className="h-4 w-4 mr-1" />
              접기
            </>
          ) : (
            <>
              <ChevronDown className="h-4 w-4 mr-1" />
              +{availableTags.length - maxVisibleTags}개 더보기
            </>
          )}
        </button>
      )}
    </div>
  );
};