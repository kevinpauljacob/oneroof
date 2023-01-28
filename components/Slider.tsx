import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Image from 'next/image'
import City from "../public/assets/city.jpg"
import { PropertyType } from '../typings'
interface Props {
    property: PropertyType,
}

const Slider = ({ property }: Props) => {
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
        {
          property.images.map((image: string) => (
            <SwiperSlide key={property._id} className='min-[1200px]:px-[1px] px-[1px]'>
              <img className="w-full rounded-xl object-contain" src={image} alt=""/>
            </SwiperSlide>
          ))
        }
      </Swiper>
  )
}

export default Slider