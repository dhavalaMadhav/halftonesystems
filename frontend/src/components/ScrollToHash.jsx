import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToHash = () => {
    const { hash, pathname } = useLocation();

    useEffect(() => {
        if (hash) {
            const id = hash.replace('#', '');
            
            // Try to find the element and scroll to it.
            // Using a short timeout ensures the browser has rendered the new page DOM.
            const attemptScroll = () => {
                const element = document.getElementById(id);
                if (element) {
                    element.scrollIntoView({ behavior: 'auto', block: 'start' });
                }
            };
            
            // Try immediately
            attemptScroll();
            // Try again after mount finishes
            const timer = setTimeout(attemptScroll, 100);
            return () => clearTimeout(timer);
        } else {
            window.scrollTo(0, 0);
        }
    }, [hash, pathname]);

    return null;
};

export default ScrollToHash;
