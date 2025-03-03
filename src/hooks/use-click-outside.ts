import { useEffect, RefObject } from 'react';

type Handler = () => void;

/**
 * Hook that handles click outside of the passed ref
 */
export function useClickOutside<T extends HTMLElement = HTMLElement>(
  ref: RefObject<T>,
  handler: Handler,
  isActive: boolean = true
): void {
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        handler();
      }
    };
    
    if (isActive) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [ref, handler, isActive]);
}
