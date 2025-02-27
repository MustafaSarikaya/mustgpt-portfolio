import { Search, Mic, Calendar } from 'lucide-react';
import { useState } from 'react';

interface SearchBoxProps {
  children?: React.ReactNode;
  width?: 'full' | '30%';
}

export const SearchBox = ({ children, width = 'full' }: SearchBoxProps) => { 
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  
  return (
    <div className={`relative ${width === 'full' ? 'w-full' : 'w-[30vw]'}`}>
      <div className="flex items-center gap-3 px-4 py-3 bg-white rounded-full shadow-lg border border-gray-200">
        <Search className="w-5 h-5 text-gray-400" />
        <input 
          type="text" 
          placeholder="Ask MustGPT..." 
          className="flex-1 bg-transparent outline-none text-gray-800" 
          onFocus={() => setIsSearchFocused(true)}
          onBlur={() => setTimeout(() => setIsSearchFocused(false), 200)}
        />
        <div className="flex items-center gap-2">
          <Mic className="w-5 h-5 text-gray-400" />
          <Calendar className="w-5 h-5 text-gray-400" />
        </div>
      </div>
      {isSearchFocused && children}
    </div>
  );
};