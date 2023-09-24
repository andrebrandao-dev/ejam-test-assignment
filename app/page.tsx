'use client'

import Image from 'next/image'
import BenefitsBar from "./components/benefits-bar"
import BlankSpace from './components/blank-space'
import Order from './components/order'

import Header from "./components/header"
import textaligin from './styles/modules/textaligin.module.scss'

import Product from './images/product.png'
import ProductDetail from './images/product-detail.png'
import BadgeSatisfaction from './images/badge-satisfaction.png'
import Avatar from './images/avatar.png'

import Amex from './images/card_flags/amex.svg'
import ApplePay from './images/card_flags/applepay.svg'
import GPay from './images/card_flags/gpay.svg'
import MasterCard from './images/card_flags/mastercard.svg'
import PayPal from './images/card_flags/paypal.svg'
import ShopPay from './images/card_flags/shoppay.svg'
import Visa from './images/card_flags/visa.svg'

export default function Home() {
  return (
    <main>
      <BenefitsBar />
      <Header />
      <Order />

      <div className="gray">
        <div className="row">
          <div className="col-6">
            <Image
              className="img"
              src={ProductDetail}
              alt="Details about the product"
              priority
            />

            <div className='comment'>
              <div className='comment-head'>
                <Image
                  className="img"
                  src={Avatar}
                  alt="Details about the product"
                  priority
                />
                <div>
                  <div className="box-rating">
                    <span className="icon-star">star</span>
                    <span className="icon-star">star</span>
                    <span className="icon-star">star</span>
                    <span className="icon-star">star</span>
                    <span className="icon-star">star</span>
                  </div>
                  <strong>Ken T.</strong>
                  <span>
                    <span className='icon-verified'></span>
                    Verified Customer
                  </span>
                </div>
              </div>
              <p>“As soon as the Clarifions arrived I put one in my bedroom. This was late in the afternoon. When I went to the bedroom in the evening it smelled clean. When I went to bed I felt I could breathe better. Wonderful.”</p>
            </div>
          </div>

          <div className="col-6">
            <h3>
              <span>One time only</span>
              Special Price For Extra Clarifion For Only
              <span>$14 Each</span>
              ($84.00 Total!)
            </h3>

            <div className='box'>
              <div className='box-image'>
                <Image
                  className="img"
                  src={Product}
                  alt="Details about the product"
                  priority
                />
              </div>
              <div className='box-content'>
                <div className='box-title'>
                  <h4>Clarifion Air lonizer</h4>
                  <div className='box-prices'>
                    <span className='old'>$180</span>
                    <span className='offer'>$84</span>
                  </div>
                </div>
                <div className="box-rating">
                  <span className="icon-star">star</span>
                  <span className="icon-star">star</span>
                  <span className="icon-star">star</span>
                  <span className="icon-star">star</span>
                  <span className="icon-star">star</span>
                </div>
                <div className='box-stock'>
                  <span className="stock"></span>
                  <span>12 left in Stock</span>
                </div>
                <div className='box-description'>
                  <p>Simply plug a Clarifion into any standard outlet and replace bulky, expensive air purifiers with a simple.</p>
                </div>
              </div>
            </div>

            <ul>
              <li>Negative Ion Technology may <span>help with allergens </span></li>
              <li>Designed for <strong>air rejuvenation</strong></li>
              <li><strong>Perfect for every room</strong> in all types of places.</li>
            </ul>

            <div className='discount-total'>
              <span className='percent'></span>
              <p>Save <strong>53%</strong> and get <span>6 extra Clarifision</span> for only <span>$14 Each</span>.</p>
            </div>
            
            <button type='button'>
              Yes - Claim my discount <span className='arrow-right'></span>
            </button>

            <div className='shipping'>
              <div className='shipping-price'>
                <span>Free Shipping</span>
              </div>
              <div className='shipping-secure'>
                <span className='icon-lock'></span>
                <span>Secure 256-bit SSL encryption.</span>
              </div>
              <div className='shipping-cards'>
                  <Image
                    className="img"
                    src={Visa}
                    alt="Visa"
                    priority
                  />
                  <Image
                    className="img"
                    src={ShopPay}
                    alt="ShopPay"
                    priority
                  />
                  <Image
                    className="img"
                    src={PayPal}
                    alt="Paypal"
                    priority
                  />
                  <Image
                    className="img"
                    src={MasterCard}
                    alt="MasterCard"
                    priority
                  />
                  <Image
                    className="img"
                    src={GPay}
                    alt="Google Pay"
                    priority
                  />
                  <Image
                    className="img"
                    src={ApplePay}
                    alt="Apple Pay"
                    priority
                  />
                  <Image
                    className="img"
                    src={Amex}
                    alt="Amex"
                    priority
                  />
              </div> 
            </div>

            <button type='button'>No thanks, I don't want this</button>

            <div className='satisfaction'>
                <Image
                  className="img"
                  src={BadgeSatisfaction}
                  alt="Badge Satisfaction"
                  priority
                />
                <p>
                  If you are not completely thrilled with your Clarifion -
                  We have a <strong>30 day satisfaction guarantee</strong>. 
                  Please refer to our  return policy at the bottom of the page for more details. Happy Shopping!
                </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
