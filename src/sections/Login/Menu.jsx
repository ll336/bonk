import React, { useState } from "react";
import { links } from "@/constants";
import { signOut } from "next-auth/react";
import { useRouter } from "next/router";
import { Icons } from "@/components/ui/icons";




const Menu = ({code, counter}) => {

  const router = useRouter()

  const [copied, setCopied] = useState(false);
  return (
    <>
     <div className="flex flex-col w-full justify-start items-center gap-7">
    {router.pathname !== "/activation" && router.pathname !== "/holder"
    ?
   <>
    {links.map((link) => (
      <div
        key={link.name}
        onClick={() => {
          if(link.path !== "/logout"){
            router.push(link.path)
          }else{
            localStorage.clear();
            signOut({ callbackUrl: "/login" }); 
          }
        }}
        className="flex w-full justify-start items-center gap-3 text-[#1FBCFF] font-semibold text-base font-montserrat"
      >
        <Icons.disconnect />
        {link.name}
      </div>
    ))}
</>
    :
<>
{links.map((link) => {
  if(link.path == "/logout"){
    return(
      <div
        key={link.name}
        onClick={() => {
            localStorage.clear();
            signOut({ callbackUrl: "/login" }); 
        }}
        className="flex w-full justify-start items-center gap-3 text-black font-semibold text-base font-montserrat"
      >
         <Icons.disconnect />
        {link.name}
      </div>


    )


  }
      
    })}

</>


    }

<div className="flex flex-col h-full w-full items-center justify-end mt-28 pb-10">
                  <div className="flex gap-6">
                  <a href="https://twitter.com/ClearCollectNFT" target="_blank">
                      <Icons.xLogo className="w-5 h-5" />
                    </a>
                    <a href="https://discord.com/invite/clearcollectibles" target="_blank">
                      <Icons.discordLogo className="w-5 h-5" />
                    </a>
                    <a href="https://matrica.io/settings" target="_blank">
                      <Icons.squareLogo className="w-5 h-5" />
                    </a>
                 
                
                  </div>
                </div>
       </div>
    
    </>
  );
};

export default Menu;
