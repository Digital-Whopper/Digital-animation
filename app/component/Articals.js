"use client";
import Image from "next/image";
import Link from 'next/link';
const Article = ({ imageSrc}) => (






  
 <div className="relative m-6 p-6 bg-orange-500 rounded-2xl w-[260px] h-[384px] flex items-center justify-center rotate-[357deg] shadow-md">
    <div className="absolute inset-0 rotate-[3deg] rounded-2xl overflow-hidden">
      <div>
        <Image
          src={imageSrc}
          alt="Article image"
          width={260}
          height={180}
          className="w-full h-[180px] object-cover rounded-tl-2xl rounded-tr-2xl"
          priority
        />
        <button
          className="absolute top-2 left-2 bg-white px-4 py-1.5 font-bold text-sm rounded-2xl"
        >
          Expertise
        </button>
        <div className="bg-white h-[216px] text-center rounded-b-2xl px-3 py-4">
          <h1 className="font-bold text-base leading-tight">
            Signs Your Ex Is Spying On <br /> You
          </h1>
          <p className="text-sm pt-2 text-gray-600">
            In an ideal world, after a relationship ends both you and your ex
            will move on. But what if they can’t let go, and start spying on
            your...
          </p>
        </div>
      </div>
    </div>
  </div>


 
);

const Articles = () => {
  const articles = [
   { imageSrc: "/blog.png" },
    { imageSrc: "/blog.png" },
    { imageSrc: "/blog.png" },
  ];

  return (
    <section className="w-[84%] m-auto">
<div className="flex justify-between">
 <div className="heading">
 <h2 className='text-black text-[clamp(1rem,4vw,3rem)]'>Our latest articles & resources</h2>
 </div>



 <div className="btn">
    <Link href="/Blog">
              <button className='bg-[#4F3DFE] text-lg text-white font-medium	py-3 px-4 rounded-[30px] w-full'>
    Browse
</button>
                </Link>

 </div>
</div>
      <div className="flex flex-col items-center justify-between md:flex-row md:flex-wrap gap-6">
        {articles.map((article, index) => (
          <Article key={index} {...article} />
        ))}
      </div>
    </section>
  );
};

export default Articles;
