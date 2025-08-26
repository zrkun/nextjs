import { useEffect, useState } from 'react';

export function useMobileLayout() {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const onResize = () => setIsMobile(typeof window !== 'undefined' ? window.innerWidth < 768 : false);
    onResize();
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);
  return { isMobile };
}


