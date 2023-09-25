import Image from 'next/image'
import Commentary from '../commentary'
import Product from '../product'

import ProductDetail from '@/app/images/product-detail.png'
import BadgeSatisfaction from '@/app/images/badge-satisfaction.png'

import Amex from '@/app/images/card_flags/amex.svg'
import ApplePay from '@/app/images/card_flags/applepay.svg'
import GPay from '@/app/images/card_flags/gpay.svg'
import MasterCard from '@/app/images/card_flags/mastercard.svg'
import PayPal from '@/app/images/card_flags/paypal.svg'
import ShopPay from '@/app/images/card_flags/shoppay.svg'
import Visa from '@/app/images/card_flags/visa.svg'

import grid from '@/app/styles/modules/grid.module.scss'
import image from '@/app/styles/modules/image.module.scss'
import list from '@/app/styles/modules/list.module.scss'
import offer from '@/app/styles/modules/offer.module.scss'
import button from '@/app/styles/modules/buttons.module.scss'

export default function Offer() {
  return (
    <div className={offer.wrap}>
      <div className={grid.row}>
        <div className={grid.col}>
          <Image
            className={offer.image}
            src={ProductDetail}
            alt='Details about the product'
            priority
          />

          <Commentary />
        </div>

        <div className={grid.col}>
          <h3 className={offer.title}>
            <span className={offer.titleAlternativeUpper}>One time only</span> Special Price For Extra Clarifion For Only <span className={offer.titleAlternative}>$14 Each</span> ($84.00 Total!)
          </h3>

          <Product />

          <ul className={`${list.list} ${offer.list}`}>
            <li className={list.item}>
              <span className={`icon-tick ${list.icon}`}></span>
              <span>
                Negative Ion Technology may <strong>help with allergens </strong>
              </span>
            </li>
            <li className={list.item}>
              <span className={`icon-tick ${list.icon}`}></span>
              <span>
                Designed for <strong>air rejuvenation</strong>
              </span>
            </li>
            <li className={list.item}>
              <span className={`icon-tick ${list.icon}`}></span>
              <span>
                <strong>Perfect for every room</strong> in all types of places.
              </span>
            </li>
          </ul>

          <div className={offer.saving}>
            <span className={offer.savingIcon}>
              <span className='icon-percent'></span>
            </span>
            <p className={offer.savingText}>
              Save <strong>53%</strong> and get <strong>6 extra Clarifision</strong> for only <strong>$14 Each</strong>.
            </p>
          </div>
          
          <button className={button.secondary} type='button'>
            Yes - Claim my discount
            <svg viewBox="0 0 18 15" className={button.icon} fill="none">
              <path d="M17.0806 8.19875C17.4665 7.81284 17.4665 7.18716 17.0806 6.80125L10.7918 0.512476C10.4059 0.126565 9.78025 0.126565 9.39434 0.512476C9.00843 0.898386 9.00843 1.52407 9.39434 1.90998L14.9844 7.5L9.39434 13.09C9.00843 13.4759 9.00843 14.1016 9.39434 14.4875C9.78025 14.8734 10.4059 14.8734 10.7918 14.4875L17.0806 8.19875ZM0.381866 8.48819H16.3819V6.51181H0.381866V8.48819Z" fill="white"/>
            </svg>
          </button>

          <div className={offer.shipping}>
            <span>Free Shipping</span>
            <div className={offer.shippingDivider}></div>
            <div>
              <span className='icon-lock-secure'></span>
              <span style={{marginLeft: '.575rem' }}>Secure 256-bit SSL encryption.</span>
            </div>
            <div className={offer.wrapFlags}>
                <Image
                  className={offer.cardFlag}
                  src={Visa}
                  alt="Visa"
                  priority
                />
                <Image
                  className={offer.cardFlag}
                  src={ShopPay}
                  alt="ShopPay"
                  priority
                />
                <Image
                  className={offer.cardFlag}
                  src={PayPal}
                  alt="Paypal"
                  priority
                />
                <Image
                  className={offer.cardFlag}
                  src={MasterCard}
                  alt="MasterCard"
                  priority
                />
                <Image
                  className={offer.cardFlag}
                  src={GPay}
                  alt="Google Pay"
                  priority
                />
                <Image
                  className={offer.cardFlag}
                  src={ApplePay}
                  alt="Apple Pay"
                  priority
                />
                <Image
                  className={offer.cardFlag}
                  src={Amex}
                  alt="Amex"
                  priority
                />
            </div>
          </div>
          
          <div className={offer.noAccept}>
            <button className={button.linkRed} type='button'>No thanks, I don't want this</button>
          </div>

          <div className={offer.satisfaction}>
              <Image
                className={image.responsive}
                src={BadgeSatisfaction}
                alt='Badge Satisfaction'
                priority
              />
              <p className={offer.satisfactionText}>
                If you are not completely thrilled with your Clarifion -
                We have a <strong>30 day satisfaction guarantee</strong>. 
                Please refer to our  return policy at the bottom of the page for more details. Happy Shopping!
              </p>
          </div>
        </div>
      </div>
    </div>
  )
}
