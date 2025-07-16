"use client";
import Image from "next/image";
import Link from 'next/link';

// Reusable Article component
const Article = ({ imageSrc, title, description, href }) => (
  <div className="relative m-6 p-6 bg-orange-500 rounded-2xl w-[260px] h-[384px] flex items-center justify-center rotate-[357deg] shadow-md">
    <div className="absolute inset-0 rotate-[3deg] rounded-2xl overflow-hidden">
      <Link href={href}>
        <div>
          <Image
            src={imageSrc}
            alt={title}
            width={500}
            height={500}
            className="w-full h-[180px] rounded-tl-2xl rounded-tr-2xl"
            priority
          />
          <button className="absolute top-2 left-2 bg-white px-4 py-1.5 font-bold text-sm rounded-2xl">
            Digital Whopper
          </button>
          <div className="bg-white h-[216px] text-center rounded-b-2xl px-3 py-4">
            <h2 className="font-bold text-base leading-tight">
              {title}
            </h2>
            <p className="text-sm pt-2 text-gray-600">
              {description}
            </p>
          </div>
        </div>
      </Link>
    </div>
  </div>
);

// Articles component rendering list
const Articles = () => {
  const articles = [
    {
      imageSrc: "/blog-1.jpg",
      title: "Why It Is Important To...",
      description:
        "Digital marketing is extremely important for any business to have a strong online presence...",
      href: "/why-it-is-important-to-choose-the-best-digital-marketing-service-provider-for-your-business-growth-in-2024-25",
    },
    {
      imageSrc: "/blog-2.jpg",
      title: "How To Create LMS...",
      description:
        "LMS Creation from Scratch: Training without a Learning Management System (LMS) is unrealis...",
      href: "how-to-create-lms",
    },
    {
      imageSrc: "/blog-3.jpg",
      title: "crafting-high-imp...",
      description:
        "In the fast-evolving landscape of digital marketing, a well-executed PPC (Pay-Per-Click) campaign...",
      href: "/crafting-high-impact-ppc-campaigns-for-digital-marketing-success",
    },
  ];

  return (
    <section className="blogg">
      <div className="flex flex-col items-center justify-between md:flex-row md:flex-wrap gap-6">
        {articles.map((article, index) => (
          <Article key={index} {...article} />
        ))}
      </div>
    </section>
  );
};

export default Articles;
