import Image from 'next/image'
import RatingStars from './rating-stars'
import Avatar from '@/app/images/avatar.png'
import image from '@/app/styles/modules/image.module.scss'
import commentary from '@/app/styles/modules/commentary.module.scss'

export default function Commentary() {
  return (
    <div className={commentary.wrap}>
      <div className={commentary.head}>
        <Image
          className={image.avatar}
          src={Avatar}
          alt='Details about the product'
          priority
        />
        <div className={commentary.infos}>
          <RatingStars icon='icon-star-filled' />
          <div className={commentary.textGroup}>
            <strong className={commentary.title}>Ken T.</strong>
            <span className={commentary.verified}>
              <span className={`icon-verified ${commentary.verifiedIcon}`}></span>
              Verified Customer
            </span>
          </div>
        </div>
      </div>
      <p className={commentary.text}>“As soon as the Clarifions arrived I put one in my bedroom. This was late in the afternoon. When I went to the bedroom in the evening it smelled clean. When I went to bed I felt I could breathe better. Wonderful.”</p>
    </div>
  )
}
