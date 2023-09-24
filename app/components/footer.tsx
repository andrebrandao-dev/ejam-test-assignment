import grid from '@/app/styles/modules/grid.module.scss'

export default function Header() {
  return (
    <footer>
      <div className={grid.container}>
        <div>
          <span>Copyright (c) 2023</span>
          <span className='divider'></span>
          <a href='mailto:clarifionsupport@clarifion.com'>clarifionsupport@clarifion.com</a>
        </div>

        <div>
           <span className='icon-lock'></span>
           <span>Secure 256-Bit SSL Encryption.</span>
        </div>
      </div>
    </footer>  
  )
}
