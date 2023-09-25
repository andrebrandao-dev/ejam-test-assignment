'use client'

import BenefitsBar from "./components/benefits-bar"
import Order from './components/order'

import Header from "./components/header"

export default function Home() {
  return (
    <main>
      <BenefitsBar />
      <Header />
      <Order />
    </main>
  )
}
