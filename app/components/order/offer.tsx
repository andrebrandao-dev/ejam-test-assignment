import Image from 'next/image'
import Commentary from '../commentary'
import ProductDetail from '@/app/images/product-detail.png'

import grid from '@/app/styles/modules/grid.module.scss'
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

          <div className='box'>
            <div className='box-image'>
              {/* <Image
                className="img"
                src={Product}
                alt="Details about the product"
                priority
              /> */}
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
            {/* <div className='shipping-cards'>
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
            </div>  */}
          </div>
          
          <div className={offer.noAccept}>
            <button className={button.linkRed} type='button'>No thanks, I don't want this</button>
          </div>

          {/* <div className='satisfaction'>
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
          </div> */}
        </div>
      </div>
    </div>
  )
}
