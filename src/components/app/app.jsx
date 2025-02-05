import { useTheme } from '../theme/theme'
import { useResize } from '../resize/resize'
import {Navbar} from '../navbar/navbar'
import { MainScreen } from '../main-screen/main-screen'
import { PortfolioBlock } from '../portfolio-block/portfolio-block'
import {SkillsServices} from '../skills-services/skills-services'
import { ServicesBlock } from '../services-block/services-block'
import {Skills} from '../skills/skills'
import {Footer} from '../footer/footer'

function App() {

    const { theme, setTheme } = useTheme()
    const isPortrait = useResize()

  return (
    <>
      <Navbar theme={theme} setTheme={setTheme} />
      <MainScreen />
      {isPortrait ? <Skills /> : ''}
      <SkillsServices theme={theme} />
      <PortfolioBlock />
      <ServicesBlock />
      <Footer theme={theme} />
    </>
  )
}

export default App
