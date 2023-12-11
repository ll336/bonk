/**
 * @module hooks
 * @description Custom hooks used in the application
 */

import { useState, useEffect } from "react";
import { isDesktop, isMobile, isTablet } from "react-device-detect";

/**
 * @function useScreenSize
 * @description Hook to track the screen size and determine if it's a desktop or mobile screen
 * @returns {Object} An object containing the screen size information
 * @param {boolean} isDesktopScreen - Indicates if the screen size is desktop
 * @param {boolean} isMobileScreen - Indicates if the screen size is mobile
 * @param {boolean} isTabletScreen - Indicates if the screen size is tablet
 */

export function useScreenSize() {
  const [isDesktopScreen, setIsDesktopScreen] = useState(isDesktop);
  const [isMobileScreen, setIsMobileScreen] = useState(isMobile);
  const [isTabletScreen, setIsTabletScreen] = useState(isTablet);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktopScreen(isDesktop);
      setIsMobileScreen(isMobile);
      setIsTabletScreen(isTablet);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return { isDesktopScreen, isMobileScreen, isTabletScreen };
}
