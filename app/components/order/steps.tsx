import steps from '@/app/styles/modules/order-steps.module.scss'

export default function OrderSteps() {
  return (
    <ol className={steps.list}>
      <li className={steps.item}>
        <span className={steps.iconDone}>
          <span className='icon-tick'></span>
        </span>
        <span className={steps.text}>
          <span className={steps.textStep}>Step 1:</span> Cart Review
        </span>
      </li>
      <li className={steps.item}>
        <span className={steps.iconDone}>
          <span className='icon-tick'></span>
        </span>
        <span className={steps.text}>
          <span className={steps.textStep}>Step 2:</span> Checkout
        </span>
      </li>
      <li className={steps.item}>
        <span className={steps.iconCurrent}>
          3
        </span>
        <span className={steps.text}>
          <span className={steps.textStep}>Step 3:</span> Special Offer
        </span>
      </li>
      <li className={steps.item}>
        <span className={steps.iconNext}>
          4
        </span>
        <span className={steps.text}>
          <span className={steps.textStep}>Step 4:</span> Confirmation
        </span>
      </li>
    </ol>      
  )
}
