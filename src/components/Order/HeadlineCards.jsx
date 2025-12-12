import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

const HeadlineCards = () => {
  const cards = [
    {
      title: "Street and Everyday Style",
      subtitle: "Swagg to be envied",
      img: "https://i.pinimg.com/736x/c8/84/f4/c884f49c3472d35e6fbbf3a2e3442b48.jpg",
    },
    {
      title: "Co-operate Outfit",
      subtitle: "Show off your elegance",
      img: "https://i.pinimg.com/1200x/f7/82/35/f782356d937906c152fa5ec0092bb74c.jpg",
    },
    {
      title: "Sports and Gym Outfit",
      subtitle: "Unleash your energy",
      img: "https://i.pinimg.com/736x/f6/7f/bf/f67fbfc9686c59b822995db7143cfa3a.jpg",
    },
  ];

  return (
    <div className="max-w-[1640px] mx-auto p-4">
      <Swiper
        modules={[Autoplay]}
        loop
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        speed={750} // Smooth slide speed
        spaceBetween={30}
        slidesPerView={1}
        className="w-full h-[420px]"
      >
        {cards.map((card, i) => (
          <SwiperSlide key={i}>
            {/* Stand-alone card container */}
            <div className="relative h-full w-[100%] overflow-hidden shadow-lg bg-black/20">

              {/* Smooth zoom-in animated image */}
              <img
                src={card.img}
                alt={card.title}
                className="h-full w-full object-cover animate-zoomIn"
              />

              {/* Dark overlay */}
              <div className="absolute inset-0 bg-black/40"></div>

              {/* Text content */}
              <div className="absolute bottom-8 left-8 text-white animate-slideUp opacity-0">
                <p className="text-3xl font-bold">{card.title}</p>
                <p className="text-lg mb-2">{card.subtitle}</p>
                <p className="text-xl font-semibold mb-3">{card.price}</p>
                <button className="bg-white text-black font-bold px-4 py-2 hover:bg-black hover:text-white transition duration-300">
                  Add to Cart
                </button>
              </div>

            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Animations */}
      <style>{`
        /* Slide-up for text */
        @keyframes slideUp {
          0% { transform: translateY(40px); opacity: 0; }
          100% { transform: translateY(0); opacity: 1; }
        }
        .animate-slideUp {
          animation: slideUp 1s ease forwards 0.4s;
        }

        /* Slow zoom-in effect */
        @keyframes zoomIn {
          0% { transform: scale(1); }
          100% { transform: scale(1.1); }
        }
        .animate-zoomIn {
          animation: zoomIn 4s ease-in-out forwards;
        }
      `}</style>
    </div>
  );
};

export default HeadlineCards;
