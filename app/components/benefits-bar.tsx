import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation } from "swiper/modules"
import { SwiperOptions } from "swiper/types"

import 'swiper/css'
import 'swiper/css/navigation'

export default function BenefitsBar() {
  const swiperOptions: SwiperOptions = {
    slidesPerView: 1,
    spaceBetween: 0,
    navigation: true,
    breakpoints: {
      360: {
        slidesPerView: 2,
      },

      720: {
        slidesPerView: 4,
        navigation: {
          disabledClass: 'navigation-disabled'
        }
      }
    }
  }

  return (
    <Swiper
      modules={[Navigation]}
      navigation={swiperOptions.navigation}
      slidesPerView={swiperOptions.slidesPerView}
      spaceBetween={swiperOptions.spaceBetween}
      breakpoints={swiperOptions.breakpoints}
    >
      <SwiperSlide>
        <div>
          <i className="icon-check">check</i>
          <span>30-Day Satisfaction Guarantee</span>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div>
          <i className="icon-truck">truck</i>
          <span>Free delivery on orders over $40.00</span>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div>
          <i className="icon-heart">heart</i>
          <span>50.000+ Happy Customers</span>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div>
          <i className="icon-cashback">cashback</i>
          <span>100% Money Back Guarantee</span>
        </div>
      </SwiperSlide>
    </Swiper>
  )
}
