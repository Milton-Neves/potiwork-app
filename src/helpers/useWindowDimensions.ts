import { useEffect, useState } from 'react';

export const useWindowDimensions = () => {
  const hasWindow = typeof window !== "undefined";

  const getWindowDimensions = () => {
    return { windowWidth: hasWindow ? window.innerWidth : null }
  }

  const [windowDimension, setWindowDimension] = useState(getWindowDimensions());

  useEffect(() => {
    if (hasWindow) {
      const resizeWindow = () => {
        setWindowDimension(getWindowDimensions());
      }

      window.addEventListener("resize", resizeWindow);
      window.removeEventListener("resize", resizeWindow);
    }
  }, [hasWindow])

  return windowDimension;
}