import { Search, Mic, Calendar } from 'lucide-react';
import { useState, useRef } from 'react';
import { getText } from '../utils/dictionary';
import { useClickOutside } from '../hooks/use-click-outside';

interface SearchBoxProps {
  children?: React.ReactNode;
  width?: 'full' | '30%';
}

export const SearchBox = ({ children, width = 'full' }: SearchBoxProps) => { 
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);
  
  const handleButtonClick = () => {
    setIsSearchOpen(true);
  };
  
  useClickOutside(searchRef, () => setIsSearchOpen(false), isSearchOpen);
  
  return (
    <div className={`relative ${width === 'full' ? 'w-full' : 'w-[30vw]'}`} ref={searchRef}>
      <button 
        onClick={handleButtonClick}
        className="flex items-center gap-3 px-4 py-3 bg-white rounded-full shadow-lg border border-gray-200 w-full text-left"
        aria-label="Open search"
      >
        <Search className="w-5 h-5 text-gray-400" />
        <div className="flex-1 bg-transparent outline-none text-gray-500 truncate">
          {getText('components.searchBox.placeholder')}
        </div>
        <div className="flex items-center gap-2">
          <Mic className="w-5 h-5 text-gray-400" />
          <Calendar className="w-5 h-5 text-gray-400" />
        </div>
      </button>
      {isSearchOpen && (
        <div className="absolute w-full z-10">
          {children}
        </div>
      )}
    </div>
  );
};