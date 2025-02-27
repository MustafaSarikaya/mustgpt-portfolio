import { ReactNode } from 'react';

interface SafeAreaProps {
  children: ReactNode;
  className?: string;
}

export const SafeArea = ({ children, className = '' }: SafeAreaProps) => {
  return (
    <div className={`min-h-screen ${className}`}>
      <div className="max-w-screen-xl mx-auto">
        {children}
      </div>
    </div>
  );
};
