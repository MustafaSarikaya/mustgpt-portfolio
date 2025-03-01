import { SearchBox } from '../components/SearchBox';
import { TrendingSearches } from '../components/TrendingSearches';


const Index = () => {
  return <div className="min-h-[500px] bg-gradient-to-b from-primary to-white flex flex-col justify-center">
      <div className="container mx-auto px-4 py-10 ">
        <div className="flex flex-col items-center justify-center gap-8 mt-16">
          <h1 className="text-5xl md:text-6xl font-bold text-black animate-fade-in">MustGPT</h1>
          <div className="w-full max-w-2xl relative">
            <SearchBox>
              <TrendingSearches/>
            </SearchBox>
          </div>
        </div>
      </div>
    </div>;
};
export default Index;