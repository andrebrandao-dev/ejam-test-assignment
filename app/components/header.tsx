import Image from 'next/image'
import grid from '@/app/styles/modules/grid.module.scss'
import Logo from '@/app/images/logo.png'
import LogoMcAfee from '@/app/images/logo-mcafee.svg'
import LogoNorton from '@/app/images/logo-norton.svg'

export default function Header() {
  return (
    <header>
      <div className={`${ grid.container } ${ grid.justifyBetween }`}>
        <h1>
          <Image src={Logo} alt="Clarifion" priority />
        </h1>
        <div>
          <Image src={LogoMcAfee} alt="McAfee Secure" priority />
          <Image src={LogoNorton} alt="Norton by symantec" priority />
        </div>
      </div>
    </header>  
  )
}
