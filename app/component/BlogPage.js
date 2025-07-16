"use client";
import Image from "next/image";
import React from "react";

const BlogPage = ({ imageSrc, title, content }) => {
  return (
    <>
      <div className="w-full max-w-screen-xl mx-auto px-4">
        <div className="relative aspect-[16/9] w-full overflow-hidden rounded-lg">
          <Image
            src={imageSrc}
            alt={title}
            fill
         
            priority
            sizes="(max-width: 768px) 100vw, 
                   (max-width: 1200px) 90vw, 
                   1200px"
          />
        </div>
      </div>

      <div className="w-full max-w-screen-xl px-4 md:px-10 py-6 mx-auto">
        <h2 className="text-[clamp(1.5rem,5vw,3rem)] font-semibold text-center mb-4">
          {title}
        </h2>

        <p className="text-base leading-relaxed text-gray-700 whitespace-pre-line">
          {content}
        </p>
      </div>
    </>
  );
};

export default BlogPage;
