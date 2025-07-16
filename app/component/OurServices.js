"use client";
import { RiArrowRightUpFill } from "react-icons/ri";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Link from "next/link";
import ServiceText from "./ServiceText";

const OurServices = () => {
  const services = [
    {
      title: "Web Design",
      image: "/Sevice1.jpg",
      href: "/shopify-website-development",
    },
    {
      title: "App Development",
      image: "/Sevice1.jpg",
      href: "/AppDevelopment",
    },
    {
      title: "Ecommerce",
      image: "/Sevice1.jpg",
      href: "/Ecommerce",
    },
  ];

  return (
    <div className="w-[80%] m-auto">
      <ServiceText
        service_head="Our"
        service_span="Services"
        service_para="Explore the diverse range of digital marketing services we offer to elevate your digital impression. "
      />

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
        {services.map((service, index) => (
          <SwiperSlide key={index}>
            <div className="group bg-gray-400 m-3 rounded-[35px] relative hover:bg-orange-400 transition-colors duration-500">
              <h2 className="text-3xl p-8">{service.title}</h2>
              <hr className="text-white" />
              <div className="hover:h-[300px] transition-all duration-500">
                <div className="w-full h-[329px] bg-[#757575] rounded-[35px] relative flex mt-5 group-hover:scale-105 transition-transform duration-500" />
                <div className="w-full h-[329px] rounded-[35px] bg-[#9E9D9D] absolute top-40 group-hover:scale-105 transition-transform duration-500" />
                <div
                  className="clipRect w-full h-[307px] rounded-2xl absolute top-[40%] group-hover:scale-105 transition-transform duration-500"
                  style={{
                    backgroundImage: `url(${service.image})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                />
                <Link href={service.href}>
                  <div className="w-[100px] h-[100px] rounded-full bg-[#1D2939] absolute flex justify-center items-center text-white bottom-0 right-0 group-hover:bg-orange-400 group-hover:text-white transition-colors">
                    <RiArrowRightUpFill className="text-4xl" />
                  </div>
                </Link>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default OurServices;
 