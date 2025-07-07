"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const BlogArticleCard = ({ imageSrc }) => (
  <div className="group bg-orange-500 rounded-2xl w-[260px] h-[384px] relative rotate-[357deg] shadow-md mx-auto">
    <div className="absolute inset-0 rotate-[3deg] rounded-2xl overflow-hidden">
      <div>
        <Image
          src={imageSrc}
          alt="Article image"
          width={260}
          height={180}
          className="w-full h-[180px] object-cover rounded-t-2xl"
          priority
        />
        <button className="absolute top-2 left-2 bg-white px-4 py-1.5 font-bold text-sm rounded-2xl">
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

const BlogSlider = () => {
  const articles = [
    { imageSrc: "/blog.png" },
    { imageSrc: "/blog.png" },
    { imageSrc: "/blog.png" },
  ];

  return (
    <section className="w-[84%] m-auto py-16">
      <div className="flex items-center justify-between flex-wrap mb-10">
        <h2 className="text-black text-[clamp(1rem,4vw,3rem)] text-center md:text-left w-full md:w-[60%]">
          Our latest <span className="text-[#FD853A]">articles & resources</span>
        </h2>
        <div className="w-full md:w-[40%] flex justify-center md:justify-end mt-4 md:mt-0">
          <button className="bg-[#4F3DFE] text-lg text-white font-medium py-3 px-6 rounded-[30px]">
            Browse
          </button>
        </div>
      </div>

      <Swiper
        slidesPerView={1}
        spaceBetween={20}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        pagination={{ clickable: true }}
        navigation
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        {articles.map((article, index) => (
          <SwiperSlide key={index}>
            <BlogArticleCard {...article} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default BlogSlider;
