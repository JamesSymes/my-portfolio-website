// useOnScroll.js
import { useState, useEffect } from 'react';

function useOnScroll(ref) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // If the element is intersecting, set it to visible and stop observing
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(ref.current);
        }
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.4,
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.unobserve(ref.current);
  }, [ref]);

  return isVisible;
}

export default useOnScroll;
