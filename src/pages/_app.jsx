import "../styles/globals.css"
import React, { useState, useEffect } from "react";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { cn, useWindowSize } from "@/lib/utils";
import "../styles/styles.css"


// Font files can be colocated inside of `app`


export default function App({ Component, pageProps: { session, ...pageProps } }) {
  const [mounted, setMounted] = useState(false);
  const windowSize = useWindowSize()
  const shouldApplyScroll = windowSize.height <= 650
  

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  if (typeof window === "undefined") {
    return <></>;
  } else {
    return (
      
  
<>
        <div 
        className={cn(
          `h-screen ${shouldApplyScroll ? "lg:overflow-y-auto lg:max-h-full" : "lg:overflow-hidden lg:max-h-screen"} overflow-y-auto max-h-full lg:w-full relative`
        )}>


        
      
        <Component {...pageProps} />
       
      
      
      </div>
      <ToastContainer />
      </>
    );
  }
}
