import { clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import {useState, useEffect} from 'react'
 
export function cn(...inputs) {
  return twMerge(clsx(inputs))
}
export function cleanPathname (pathname) {
  if (pathname === "/") return "home";
  return pathname.replace("/", "");
};

    export function useWindowSize(){
      const [windowSize, setWindowSize] = useState({
        width: undefined,
        height: undefined
      })
  
  
      useEffect(() => {
        function handleResize(){
          setWindowSize({
            width:window.innerWidth,
            height:window.innerHeight
          })
        }
  
        window.addEventListener('resize', handleResize)
        handleResize()
  
        return () => window.removeEventListener('resize', handleResize)
      }, [])
  
      return windowSize
    }
  
