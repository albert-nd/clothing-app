import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

const CardSlide = () => {
  const cards = [
    { img: "https://i.pinimg.com/736x/c8/84/f4/c884f49c3472d35e6fbbf3a2e3442b48.jpg" },
    { img: "https://i.pinimg.com/736x/5e/cd/f6/5ecdf6ee01ed0523040e399e4d9ba206.jpg" },
    { img: "https://i.pinimg.com/1200x/91/44/07/9144071337cd8095fca07e56a7d8a3be.jpg" },
    { img: "https://i.pinimg.com/1200x/61/b0/20/61b020adf0d2cb79f7197ff22b3e2343.jpg " },
    { img: "https://i.pinimg.com/1200x/b4/34/db/b434dbe2ba71a00b366828490772fd0e.jpg" },
    { img: "https://i.pinimg.com/736x/96/fc/c6/96fcc67b94cf023b0e3bd7e86478c09e.jpg" },
  ];

  return (
    <div className="max-w-[1800px] mx-auto pt-[100px] pb-7 ">
      <div className="w-full h-[300px] sm:h-[380px] md:h-[450px] overflow-hidden shadow-xl">

        <Swiper
          modules={[Autoplay]}
          loop
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
          }}
          speed={20000} 
          spaceBetween={20}
          slidesPerView={3}   // Show more slides since it's larger
          className="w-full h-full"
        >
          {cards.map((card, i) => (
            <SwiperSlide key={i}>
              <div className="relative h-full w-full">

                <img
                  src={card.img}
                  alt={`slide-${i}`}
                  className="h-[300px] w-full object-cover"
                />

              </div>
            </SwiperSlide>
          ))}
        </Swiper>

      </div>
    </div>
  );
};

export default CardSlide;
