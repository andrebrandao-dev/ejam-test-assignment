import Image from 'next/image'
import header from '@/app/styles/modules/header.module.scss'
import grid from '@/app/styles/modules/grid.module.scss'
import Logo from '@/app/images/logo.png'
import LogoMcAfee from '@/app/images/logo-mcafee.svg'
import LogoNorton from '@/app/images/logo-norton.svg'

export default function Header() {
  return (
    <header className={header.wrap}>
      <div className={`${ grid.container } ${ header.content }`}>
        <h1>
          <Image className={header.logo } src={Logo} alt="Clarifion" priority />
        </h1>
        <div>
          <Image className={header.image } src={LogoMcAfee} alt="McAfee Secure" priority />
          <Image className={header.image } src={LogoNorton} alt="Norton by symantec" priority />
        </div>
      </div>
    </header>  
  )
}
