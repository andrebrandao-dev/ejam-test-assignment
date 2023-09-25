import grid from '@/app/styles/modules/grid.module.scss'
import footer from '@/app/styles/modules/footer.module.scss'

export default function Footer() {
  return (
    <footer className={footer.wrap}>
      <div className={grid.container}>
        <div className={footer.content}>
          <div className={footer.copy}>
            <span>Copyright (c) 2023</span>
            <span className={ footer.divider }></span>
            <a className={footer.link} href='mailto:clarifionsupport@clarifion.com'>clarifionsupport@clarifion.com</a>
          </div>

          <div className={footer.secure}>
            <span className={`icon-lock-secure ${footer.secureIcon}`}></span>
            <span>Secure 256-Bit SSL Encryption.</span>
          </div>
        </div>
      </div>
    </footer>  
  )
}
