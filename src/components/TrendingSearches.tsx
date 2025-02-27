import { Link } from "react-router-dom";
import { Search } from 'lucide-react';

export const TrendingSearches = () => <div className="absolute top-full left-0 right-0 mt-2 p-4 bg-white rounded-lg shadow-lg border border-gray-200 animate-fade-in">
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
  </div>;