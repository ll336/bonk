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
        
        `}>
        <Component {...pageProps} />
      </div>
      <ToastContainer />
    </>
  );
}