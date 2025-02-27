import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Toaster } from './components/ui/toaster';
import { TooltipProvider } from './components/ui/tooltip';
import Index from './pages/Index';
import About from './pages/About';
import Projects from './pages/Projects';
import Events from './pages/Events';
import NotFound from './pages/NotFound';
import Layout from './components/Layout';
import TestimonialOne from './pages/testimonials/TestimonialOne';
import TestimonialTwo from './pages/testimonials/TestimonialTwo';
import TestimonialThree from './pages/testimonials/TestimonialThree';

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <TooltipProvider>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/about" element={<About />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/events" element={<Events />} />
              <Route path="/testimonials/one" element={<TestimonialOne />} />
              <Route path="/testimonials/two" element={<TestimonialTwo />} />
              <Route path="/testimonials/three" element={<TestimonialThree />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
        </TooltipProvider>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
