import React from "react";
import { Link } from "react-router-dom";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Carousel_1 from "../assets/img/carousel-1.jpg";
import Carousel_2 from "../assets/img/carousel-2.jpg";

export default function App() {
  return (
    <>
      <style>
        {`
          .swiper-button-prev::after, .swiper-button-next::after {
            font-size: 24px;
            color: white;
          }
          .slide-text {
            margin-bottom: 10px;
          }
          .additional-btn {
            background-color: white;
            color: #0F172B;
          }
        `}
      </style>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
          dynamicBullets: true,
          el: ".swiper-pagination",
          type: "bullets",
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper h-screen"
      >
        <div className="swiper-pagination flex justify-center mb-4"></div>{" "}
        {/* Add this line */}
        <SwiperSlide>
          <img
            src={Carousel_1}
            alt="Slide 1"
            className="w-full h-full object-cover"
          />
          <div className="absolute top-0 left-0 right-0 bottom-0 flex flex-col justify-center items-center z-10 bg-[rgba(15,23,43,0.7)] text-white">
            <div className="p-8 max-w-[700px] text-center">
              <h6 className="section-title text-xl md:text-2xl text-[#FEA116] uppercase mb-4 font-bold slide-text">
                Exotic Destinations
              </h6>
              <h1 className="text-3xl md:text-5xl font-bold mb-6 slide-text">
                Explore the World's Most <br /> Breathtaking Places
              </h1>
              <div className="flex justify-center my-6">
                <a
                  className="btn btn-primary py-2 md:py-3 px-4 md:px-6 mr-3 bg-[#FEA116] text-white rounded-md hover:bg-[#d58c0a] transition-colors duration-300 !border-0 outline-0"
                >
                  Book Now
                </a>
                <Link
                  to={'/all-spots'}
                  className="btn additional-btn py-2 md:py-3 px-4 md:px-6 bg-white text-[#0F172B] rounded-md hover:bg-gray-200 transition-colors duration-300 !border-0 outline-0"
                >
                  Our Rooms
                </Link>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={Carousel_2}
            alt="Slide 2"
            className="w-full h-full object-cover"
          />
          <div className="absolute top-0 left-0 right-0 bottom-0 flex flex-col justify-center items-center z-10 bg-[rgba(15,23,43,0.7)] text-white">
            <div className="p-8 max-w-[700px] text-center">
              <h6 className="section-title text-xl md:text-2xl text-[#FEA116] uppercase mb-4 font-bold slide-text">
                Luxurious Getaways
              </h6>
              <h1 className="text-3xl md:text-5xl font-bold mb-6 slide-text">
                Experience Unmatched <br /> Comfort and Luxury
              </h1>
              <div className="flex justify-center my-6">
                <a
                  className="btn btn-primary py-2 md:py-3 px-4 md:px-6 mr-3 bg-[#FEA116] text-white rounded-md hover:bg-[#d58c0a] transition-colors duration-300 !border-0 outline-0"
                >
                  Book Now
                </a>
                <Link
                  to={'/all-spots'}
                  className="btn additional-btn py-2 md:py-3 px-4 md:px-6 bg-white text-[#0F172B] rounded-md hover:bg-gray-200 transition-colors duration-300 !border-0 outline-0"
                >
                  Our Rooms
                </Link>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://i.ibb.co/PZfN7N2/image.png"
            alt="Slide 3"
            className="w-full h-full object-cover"
          />

          <div className="absolute top-0 left-0 right-0 bottom-0 flex flex-col justify-center items-center z-10 bg-[rgba(15,23,43,0.7)] text-white">
            <div className="p-8 max-w-[700px] text-center">
              <h6 className="section-title text-xl md:text-2xl text-[#FEA116] uppercase mb-4 font-bold slide-text">
                Coastal Retreats
              </h6>
              <h1 className="text-3xl md:text-5xl font-bold mb-6 slide-text">
                Escape to Serenity <br /> Along Stunning Coastlines
              </h1>
              <div className="flex justify-center my-6">
                <a
                  className="btn btn-primary py-2 md:py-3 px-4 md:px-6 mr-3 bg-[#FEA116] text-white rounded-md hover:bg-[#d58c0a] transition-colors duration-300 !border-0 outline-0"
                >
                  Book Now
                </a>
                <Link
                  to={'/all-spots'}
                  className="btn additional-btn py-2 md:py-3 px-4 md:px-6 bg-white text-[#0F172B] rounded-md hover:bg-gray-200 transition-colors duration-300 !border-0 outline-0"
                >
                  Our Rooms
                </Link>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
