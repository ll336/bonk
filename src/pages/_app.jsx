import "../styles/globals.css"
import React, { useState, useEffect } from "react";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { cn, useWindowSize } from "@/lib/utils";
import "../styles/styles.css"

export default function App({ Component, pageProps: { session, ...pageProps } }) {
  const windowSize = useWindowSize();

  
  return (
    <>
      <div 
        className={`
          "h-screen ${
          (windowSize.height <= 730 && windowSize.width > 1024) 
            ? "!overflow-y-auto" 
            : "lg:max-h-screen lg:overflow-hidden"}
          overflow-y-auto max-h-full lg:w-full"
        `}>
        <Component {...pageProps} />
      </div>
      <ToastContainer />
    </>
  );
}