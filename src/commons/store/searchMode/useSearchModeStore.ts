import { SearchMode } from '@/commons/types/search/search.type';
import { create } from 'zustand';

interface SearchModeState {
  searchMode: SearchMode;
  toggleSearchMode: () => void;
  setSearchMode: (mode: SearchMode) => void;
}

export const useSearchModeStore = create<SearchModeState>((set) => ({
  searchMode: SearchMode.TAG,
  toggleSearchMode: () =>
    set((state) => ({
      searchMode: state.searchMode === SearchMode.TITLE ? SearchMode.TAG : SearchMode.TITLE,
    })),
  setSearchMode: (mode) => set({ searchMode: mode }),
}));
