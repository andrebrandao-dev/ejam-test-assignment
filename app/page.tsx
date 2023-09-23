import colors from './styles/modules/colors.module.scss'
import buttons from './styles/modules/buttons.module.scss'

export default function Home() {
  return (
    <main>
      <h1 className={colors.primary}>Hey</h1>
      <button type="button" className={buttons.secondary}>Clique aqui</button>
    </main>
  )
}
