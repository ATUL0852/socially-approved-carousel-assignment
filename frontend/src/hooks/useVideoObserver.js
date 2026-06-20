import { useEffect, useState } from "react";

const useVideoObserver = (videoRef) => {

  const [isVisible, setIsVisible] =
    useState(false);

  useEffect(() => {
    const observer =
      new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        },
        {
          threshold: 0.5,
        }
      );

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => { observer.disconnect(); };
  }, [videoRef]);

  return isVisible;
};

export default useVideoObserver;