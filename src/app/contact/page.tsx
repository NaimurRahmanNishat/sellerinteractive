"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
// import { motion } from "framer-motion";

const Contact = () => {
  const [bgIndex, setBgIndex] = useState<number>(0);
  const contactBgImage = [
    "bg3.png",
    "bg4.jpg",
  ];
  useEffect(()=>{
    const interval = setInterval(()=>{
      setBgIndex((prevIndex)=>(prevIndex+1)%contactBgImage.length);
    },2000);
    return ()=> clearInterval(interval);
  },[contactBgImage.length]);
  return (
    <main style={{backgroundImage:`url(${contactBgImage[bgIndex]})`}} className="bg-cover bg-center w-full h-[1080px]">
      <div className="pt-[100px] px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 w-full">
        <h1 className="pt-[2px] md:pt-[20px] flex justify-center font-secondery font-bold md:text-[100px] text-[56px] text-sky-800">
          Contact us
        </h1>
        <div className="flex gap-3 items-center justify-center pt-2 text-[24px] md:pt-3">
          <Link href="/">
            <h3 className="text-blue-800 hover:text-orange-900 cursor-pointer font-semibold">
              Home
            </h3>
          </Link>
          <span className="font-semibold">||</span>
          <h3 className="text-[24px] font-semibold text-blue-700 hover:text-violet-900 cursor-pointer">
            Contact
          </h3>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-center pt-4 md:pt-[100px] gap-[12px] md:gap-[24px]">
          {/* image and text */}
          <div>image</div>
          {/* name email and message */}
          <div>message</div>
        </div>
      </div>
    </main>
  );
};

export default Contact;

// initial={{opacity:0, y:100}} animate={{opacity:1, y:0}} transition={{type: "spring", stiffness:100, damping:10, delay:0.8,}}