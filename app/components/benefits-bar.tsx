import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation } from "swiper/modules"
import { SwiperOptions } from "swiper/types"

import benefits from '@/app/styles/modules/benefits.module.scss'
import grid from '@/app/styles/modules/grid.module.scss'

import 'swiper/css'
import 'swiper/css/navigation'

export default function BenefitsBar() {
  const swiperOptions: SwiperOptions = {
    slidesPerView: 1,
    spaceBetween: 10,
    navigation: true,
    breakpoints: {
      720: {
        slidesPerView: 2,
      },

      1050: {
        slidesPerView: 4,
        navigation: {
          disabledClass: 'navigation-disabled' 
        }
      }
    }
  }

  return (
    <div className={benefits.wrap}>
      <div className={grid.container}>
        <Swiper
          modules={[Navigation]}
          navigation={swiperOptions.navigation}
          slidesPerView={swiperOptions.slidesPerView}
          spaceBetween={swiperOptions.spaceBetween}
          breakpoints={swiperOptions.breakpoints}
        >
          <SwiperSlide>
            <div className={benefits.text}>
              <i className={`icon-verified ${benefits.icon}`}></i>
              <span>30-Day Satisfaction Guarantee</span>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={benefits.text}>
              <i className={`icon-truck ${benefits.icon}`}></i>
              <span>Free delivery on orders over $40.00</span>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={benefits.text}>
              <i className={`icon-heart ${benefits.icon}`}></i>
              <span>50.000+ Happy Customers</span>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={benefits.text}>
              <i className={`icon-sync-checkmark ${benefits.icon}`}></i>
              <span>100% Money Back Guarantee</span>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  )
}
