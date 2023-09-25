import OrderSteps from './steps'
import Offer from './offer'

import order from '@/app/styles/modules/order.module.scss'
import grid from '@/app/styles/modules/grid.module.scss'

export default function Order() {
  return (
    <div className={order.wrap}>
      <div className={grid.container}>
        <div className={order.head}>
          <h2 className={order.title}>Wait! Your Order In Progress.</h2>
          <p className={order.description}>Lorem ipsum dolor sit amet, consectetur adipiscing</p>
        </div>
        
        <OrderSteps />
        <Offer />
      </div>
    </div>
  )
}
