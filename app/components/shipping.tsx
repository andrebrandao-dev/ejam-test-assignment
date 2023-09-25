import Image from 'next/image'

import Amex from '@/app/images/card_flags/amex.svg'
import ApplePay from '@/app/images/card_flags/applepay.svg'
import GPay from '@/app/images/card_flags/gpay.svg'
import MasterCard from '@/app/images/card_flags/mastercard.svg'
import PayPal from '@/app/images/card_flags/paypal.svg'
import ShopPay from '@/app/images/card_flags/shoppay.svg'
import Visa from '@/app/images/card_flags/visa.svg'

import shipping from '@/app/styles/modules/shipping.module.scss'

export default function Shipping() {
  return (
    <div className={shipping.wrap}>
      <span>Free Shipping</span>
      <div className={shipping.divider}></div>
      <div>
        <span className='icon-lock-secure'></span>
        <span style={{marginLeft: '.575rem' }}>Secure 256-bit SSL encryption.</span>
      </div>
      <div className={shipping.wrapFlags}>
          <Image
            className={shipping.flag}
            src={Visa}
            alt="Visa"
            priority
          />
          <Image
            className={shipping.flag}
            src={ShopPay}
            alt="ShopPay"
            priority
          />
          <Image
            className={shipping.flag}
            src={PayPal}
            alt="Paypal"
            priority
          />
          <Image
            className={shipping.flag}
            src={MasterCard}
            alt="MasterCard"
            priority
          />
          <Image
            className={shipping.flag}
            src={GPay}
            alt="Google Pay"
            priority
          />
          <Image
            className={shipping.flag}
            src={ApplePay}
            alt="Apple Pay"
            priority
          />
          <Image
            className={shipping.flag}
            src={Amex}
            alt="Amex"
            priority
          />
      </div>
    </div>
  )
}
