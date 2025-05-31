'use client';

import { useState, useRef, useEffect } from 'react';
import { Search, Tag, X } from 'lucide-react';
import { cn } from '@/commons/lib/utils';
import { Badge } from '@/commons/components/ui/badge';
import { Input } from '@/commons/components/ui/input';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/commons/components/ui/dropdown-menu';
import { Button } from '@/commons/components/ui/button';

type SearchMode = 'title' | 'tag';

export default function SearchBar() {
  const [searchMode, setSearchMode] = useState<SearchMode>('title');
  const [searchQuery, setSearchQuery] = useState('');
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [selectedSuggestionIndex, setSelectedSuggestionIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const suggestionsRef = useRef<HTMLDivElement>(null);

  // Mock data for tag suggestions
  const tagSuggestions = [
    'React',
    'Next.js',
    'TypeScript',
    'JavaScript',
    'CSS',
    'HTML',
    'Node.js',
    'GraphQL',
    'AI',
    'Machine Learning',
    'AWS',
    'DevOps',
  ];

  // Filter suggestions based on input
  const filteredSuggestions = tagSuggestions.filter(
    (tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()) && !selectedTags.includes(tag),
  );

  const handleSearch = () => {
    // Handle search logic
    console.log('Searching for:', searchQuery);
    console.log('Mode:', searchMode);
    console.log('Selected tags:', selectedTags);
    setShowSuggestions(false);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (!showSuggestions || searchMode !== 'tag') {
      if (e.key === 'Enter') {
        handleSearch();
      }
      return;
    }

    switch (e.key) {
      case 'ArrowDown':
        e.preventDefault();
        setSelectedSuggestionIndex((prev) => (prev < filteredSuggestions.length - 1 ? prev + 1 : prev));
        break;
      case 'ArrowUp':
        e.preventDefault();
        setSelectedSuggestionIndex((prev) => (prev > 0 ? prev - 1 : 0));
        break;
      case 'Enter':
        e.preventDefault();
        if (filteredSuggestions.length > 0) {
          addTag(filteredSuggestions[selectedSuggestionIndex]);
        }
        break;
      case 'Escape':
        setShowSuggestions(false);
        break;
    }
  };

  const toggleSearchMode = () => {
    setSearchMode(searchMode === 'title' ? 'tag' : 'title');
    setSelectedTags([]);
    setSearchQuery('');
    setShowSuggestions(false);
    setSelectedSuggestionIndex(0);
  };

  const addTag = (tag: string) => {
    setSelectedTags([...selectedTags, tag]);
    setSearchQuery('');
    setShowSuggestions(false);
    setSelectedSuggestionIndex(0);
  };

  const removeTag = (tag: string) => {
    setSelectedTags(selectedTags.filter((t) => t !== tag));
  };

  useEffect(() => {
    // Scroll selected suggestion into view
    if (showSuggestions && suggestionsRef.current) {
      const suggestionElements = suggestionsRef.current.children;
      if (suggestionElements[selectedSuggestionIndex]) {
        suggestionElements[selectedSuggestionIndex].scrollIntoView({
          block: 'nearest',
        });
      }
    }
  }, [selectedSuggestionIndex, showSuggestions]);

  useEffect(() => {
    // Reset selected index when suggestions change
    setSelectedSuggestionIndex(0);
  }, [searchQuery]);

  useEffect(() => {
    // Close suggestions when clicking outside
    const handleClickOutside = (e: MouseEvent) => {
      if (inputRef.current && !inputRef.current.contains(e.target as Node)) {
        setShowSuggestions(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="w-full max-w-3xl mx-auto">
      <div className="relative">
        <div
          className={cn(
            'flex flex-wrap items-center border rounded-lg px-3 py-2 bg-background focus-within:ring-2 focus-within:ring-ring focus-within:ring-offset-2 transition-all',
            selectedTags.length > 0 && searchMode === 'tag' ? 'pl-2' : 'pl-3',
          )}
        >
          {searchMode === 'tag' && selectedTags.length > 0 && (
            <div className="flex flex-wrap gap-2 mr-2">
              {selectedTags.map((tag) => (
                <Badge key={tag} variant="secondary" className="flex items-center gap-1">
                  {tag}
                  <X className="h-3 w-3 cursor-pointer hover:text-destructive" onClick={() => removeTag(tag)} />
                </Badge>
              ))}
            </div>
          )}
          <div className="flex-1 flex items-center min-w-[100px]">
            <Input
              ref={inputRef}
              type="text"
              placeholder={searchMode === 'title' ? 'Search by title...' : 'Search or add tags...'}
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                if (searchMode === 'tag' && e.target.value) {
                  setShowSuggestions(true);
                }
              }}
              onFocus={() => {
                if (searchMode === 'tag' && searchQuery) {
                  setShowSuggestions(true);
                }
              }}
              onKeyDown={handleKeyDown}
              className="border-none shadow-none focus-visible:ring-0 focus-visible:ring-offset-0 pl-0"
            />
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="sm" className="h-8 gap-1 text-xs" onClick={(e) => e.stopPropagation()}>
                  {searchMode === 'title' ? (
                    <>
                      <Search className="h-3.5 w-3.5" />
                      Title
                    </>
                  ) : (
                    <>
                      <Tag className="h-3.5 w-3.5" />
                      Tag
                    </>
                  )}
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem onClick={toggleSearchMode}>
                  {searchMode === 'title' ? (
                    <>
                      <Tag className="h-4 w-4 mr-2" />
                      Search by tags
                    </>
                  ) : (
                    <>
                      <Search className="h-4 w-4 mr-2" />
                      Search by title
                    </>
                  )}
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <Button variant="default" size="sm" onClick={handleSearch}>
              Search
            </Button>
          </div>
        </div>

        {searchMode === 'tag' && showSuggestions && filteredSuggestions.length > 0 && (
          <div
            ref={suggestionsRef}
            className="absolute top-full left-0 right-0 mt-1 rounded-md border bg-popover shadow-md z-10 max-h-[200px] overflow-auto"
          >
            {filteredSuggestions.map((tag, index) => (
              <div
                key={tag}
                className={cn(
                  'px-3 py-2 hover:bg-muted cursor-pointer flex items-center gap-2',
                  selectedSuggestionIndex === index && 'bg-muted',
                )}
                onClick={() => addTag(tag)}
                onMouseEnter={() => setSelectedSuggestionIndex(index)}
              >
                <Tag className="h-4 w-4" />
                {tag}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
