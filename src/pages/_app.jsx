import "../styles/globals.css"
import React, { useState, useEffect } from "react";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { cn } from "@/lib/utils";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "../styles/styles.css"


// Font files can be colocated inside of `app`





export default function App({ Component, pageProps: { session, ...pageProps } }) {
  const [mounted, setMounted] = useState(false);
 
  

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
          `min-h-screen  lg:w-full relative`
        )}>


        
      
        <Component {...pageProps} />
       
      
      
      </div>
      <ToastContainer />
      </>
    );
  }
}
