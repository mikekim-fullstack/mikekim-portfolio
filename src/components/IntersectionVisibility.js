import { useEffect, useRef } from 'react';

export default function IntersectionVisibility({ children }) {
    const targetRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        // When the target enters the viewport
                        entry.target.classList.add("fadeIn");
                    } else {
                        // When the target exits the viewport
                        entry.target.classList.remove("fadeIn");
                    }
                });
            },
            {
                threshold: 0.1 // Trigger when 50% of the target is visible
            }
        );

        if (targetRef.current) {
            observer.observe(targetRef.current);
        }

        return () => {
            if (targetRef.current) {
                observer.unobserve(targetRef.current);
            }
        };
    }, []);
    return (<div ref={targetRef} className="target">
        {children}
    </div>);
};