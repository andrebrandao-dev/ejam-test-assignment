import ratingStars from '@/app/styles/modules/rating-stars.module.scss'

export default function RatingStars() {
  return (
    <div className={ratingStars.wrap}>
      <span className={`icon-star-filled ${ratingStars.icon}`}></span>
      <span className={`icon-star-filled ${ratingStars.icon}`}></span>
      <span className={`icon-star-filled ${ratingStars.icon}`}></span>
      <span className={`icon-star-filled ${ratingStars.icon}`}></span>
      <span className={`icon-star-filled ${ratingStars.icon}`}></span>
    </div>
  )
}
