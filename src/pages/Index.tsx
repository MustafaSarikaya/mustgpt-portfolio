
import { useState } from 'react';
import { Search, Mic, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';

const SearchBox = ({ onFocus }: { onFocus: () => void }) => (
  <div className="relative w-full max-w-2xl">
    <div className="flex items-center gap-3 px-4 py-3 bg-white rounded-full shadow-lg border border-gray-200">
      <Search className="w-5 h-5 text-gray-400" />
      <input
        type="text"
        placeholder="Search portfolio..."
        className="flex-1 bg-transparent outline-none text-gray-800"
        onFocus={onFocus}
      />
      <div className="flex items-center gap-3">
        <Mic className="w-5 h-5 text-gray-400" />
        <Calendar className="w-5 h-5 text-gray-400" />
      </div>
    </div>
  </div>
);

const TrendingSearches = () => (
  <div className="absolute top-full left-0 right-0 mt-2 p-4 bg-white rounded-lg shadow-lg border border-gray-200 animate-fade-in">
    <h3 className="text-sm font-medium text-gray-500 mb-3">Trending searches</h3>
    <div className="space-y-2">
      <Link to="/about" className="flex items-center gap-2 p-2 hover:bg-gray-50 rounded-md">
        <Search className="w-4 h-4 text-gray-400" />
        <span className="text-gray-700">About Me</span>
      </Link>
      <Link to="/projects" className="flex items-center gap-2 p-2 hover:bg-gray-50 rounded-md">
        <Search className="w-4 h-4 text-gray-400" />
        <span className="text-gray-700">Recent Projects</span>
      </Link>
      <Link to="/events" className="flex items-center gap-2 p-2 hover:bg-gray-50 rounded-md">
        <Search className="w-4 h-4 text-gray-400" />
        <span className="text-gray-700">Events & Talks</span>
      </Link>
    </div>
  </div>
);

const Index = () => {
  const [isSearchFocused, setIsSearchFocused] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-b from-primary to-white">
      <div className="container mx-auto px-4 py-16">
        <div className="flex flex-col items-center justify-center gap-8">
          <h1 className="text-5xl md:text-6xl font-bold text-accent animate-fade-in">
            Portfolio Search
          </h1>
          <div className="w-full max-w-2xl relative">
            <SearchBox onFocus={() => setIsSearchFocused(true)} />
            {isSearchFocused && <TrendingSearches />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
