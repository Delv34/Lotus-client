import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { ReactComponent as Arrow} from "../images/Arrow.svg"
import news1 from "../images/news1.png"
import news2 from "../images/news2.png"
import news3 from "../images/news3.png"

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Navigation } from 'swiper/modules';

function SimpleSlider() {
  return (
    <>
    <Arrow className="prevarrow fill-[#1D27A4] hover:fill-[#5965F9] cursor-pointer"/>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        navigation={{
          clickable: true,
          nextEl: ".nextarrow",
          prevEl: ".prevarrow",
        }}
        modules={[Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
        <div className="flex flex-col items-center max-w-[220px] min-h-[441px]">
            <div className="font-I-Reg text-[16px] mb-[5px]">21.05.24</div>
            <div className="font-I-Bold text-[20px] mb-[10px]">Новинка!</div>
            <img className="mb-[10px]" src={news1}/>
            <div className="font-I-Reg text-[14px] mx-[10px]">Мы решили расширить наш ассортимент в честь наступления лета. Поэксперементировав наши кондитеры смогли придумать новые...</div>
        </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="flex flex-col items-center max-w-[220px] min-h-[441px]">
            <div className="font-I-Reg text-[16px] mb-[5px]">25.04.24</div>
            <div className="font-I-Bold text-[20px] mb-[10px]">Мероприятие</div>
            <img className="mb-[10px]" src={news2}/>
            <div className="font-I-Reg text-[14px] mx-[10px]">Наш кондитерский магазин будет проводить мастер-класс на городской площади 1 мая.</div>
        </div> 
        </SwiperSlide>
        <SwiperSlide>
        <div className="flex flex-col items-center max-w-[220px] min-h-[441px]">
            <div className="font-I-Reg text-[16px] mb-[5px]">16.04.24</div>
            <div className="font-I-Bold text-[20px] mb-[10px]">Рецепт</div>
            <img className="mb-[10px]" src={news3}/>
            <div className="font-I-Reg text-[14px] mx-[10px]">Наши повара-кондитеры, захотели поделиться рецептом домашней шарлотки с нашими клиентами.</div>
        </div> 
        </SwiperSlide>
      </Swiper>
      <Arrow className="nextarrow rotate-180 fill-[#1D27A4] hover:fill-[#5965F9] cursor-pointer" />
    </>
  );
}

export default SimpleSlider;