import Image from 'next/image'
import RatingStars from './rating-stars'

import ProductImage from '@/app/images/product.png'
import product from '@/app/styles/modules/product.module.scss'
import image from '@/app/styles/modules/image.module.scss'

export default function Product() {
  return (
    <div className={product.wrap}>
      <div className={product.image}>
        <Image
          src={ProductImage}
          alt='Details about the product'
          priority
        />
      </div>
      <div className={product.content}>
        <div className={product.wrapTitle}>
          <h4 className={product.title}>Clarifion Air lonizer</h4>
          <div className={product.price}>
            <span className={product.priceOld}>$180</span>
            <span className={product.priceNew}>$84</span>
          </div>
        </div>
        <RatingStars icon="icon-star-bold" />
        <div className={product.stock}>
          <span className={product.stockIn}></span>
          <span>12 left in Stock</span>
        </div>
        <p className={product.description}>
          Simply plug a Clarifion into any standard outlet and replace bulky, expensive air purifiers with a simple.
        </p>
      </div>
    </div>
  )
}
