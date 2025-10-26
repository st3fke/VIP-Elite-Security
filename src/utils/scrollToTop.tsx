import { ArrowUp } from 'lucide-react';
import {useState, useEffect} from 'react';

export function ScrollToTop() {
    const [visible, setVisible] = useState(false);
  
    useEffect(() => {
      const onScroll = () => setVisible(window.scrollY > 400);
      window.addEventListener('scroll', onScroll);
      return () => window.removeEventListener('scroll', onScroll);
    }, []);
  
    return visible ? (
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-6 right-6 p-3 bg-red-600 text-white rounded-full shadow-lg hover:bg-red-700 transition-all z-50"
      >
        <ArrowUp className="w-5 h-5" />
      </button>
    ) : null;
  }