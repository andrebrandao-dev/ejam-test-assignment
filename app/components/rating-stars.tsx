import ratingStars from '@/app/styles/modules/rating-stars.module.scss'

type RatingStarsProps = {
  icon: string,
}


export default function RatingStars({ icon }: RatingStarsProps) {
  return (
    <div className={ratingStars.wrap}>
      <span className={`${icon} ${ratingStars.icon}`}></span>
      <span className={`${icon} ${ratingStars.icon}`}></span>
      <span className={`${icon} ${ratingStars.icon}`}></span>
      <span className={`${icon} ${ratingStars.icon}`}></span>
      <span className={`${icon} ${ratingStars.icon}`}></span>
    </div>
  )
}
