import { SearchBox } from '../components/SearchBox';
import { TrendingSearches } from '../components/TrendingSearches';
import Navigation from '../components/Navigation';


const Index = () => {
  return <div className="min-h-screen bg-gradient-to-b from-primary to-white flex flex-col w-full">
    <Navigation />
    <div className="flex flex-col justify-center items-center w-full h-full">
      <div className="container mx-auto px-4 pb-20 ">
        <div className="flex flex-col items-center justify-center gap-8">
          <h1 className="text-5xl md:text-6xl font-bold text-black animate-fade-in">MustGPT</h1>
          <div className="w-full max-w-2xl relative">
            <SearchBox>
              <TrendingSearches />
            </SearchBox>
          </div>
        </div>
      </div>
    </div>
  </div>;
};
export default Index;