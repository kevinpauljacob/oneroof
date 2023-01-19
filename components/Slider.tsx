import { FunctionComponent } from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Image from 'next/image'
import City from "../public/assets/city.jpg"

const Slider: FunctionComponent = () => {
  return (
    <Swiper
        slidesPerView={1}
        spaceBetween={30}
        slidesPerGroup={1}
        loop={true}
        loopFillGroupWithBlank={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper h-full w-full rounded-xl"
      >
        <SwiperSlide className='min-[1200px]:px-[1px] px-[10px]'>
            <Image className="rounded-xl" src={City} alt=""/>
        </SwiperSlide>
        <SwiperSlide className='min-[1200px]:px-[1px] px-[10px]'>
            <Image className="rounded-xl" src={City} alt=""/>
        </SwiperSlide>
        <SwiperSlide className='min-[1200px]:px-[1px] px-[10px]'>
            <Image className="rounded-xl" src={City} alt=""/>
        </SwiperSlide>
      </Swiper>
  )
}

export default Slider