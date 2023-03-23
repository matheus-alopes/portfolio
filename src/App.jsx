import profilePicture from "../src/assets/images/profile-picture.png"
import curriculum from "../src/assets/curriculum/cv.pdf"

import './css/index.css'
import { Header } from './assets/components/sections/header'
import { Home } from './assets/components/sections/home'
import { About } from './assets/components/sections/about'
import { Habilities } from "./assets/components/sections/habilities"
import { Projects } from "./assets/components/sections/projects"
import { Footer } from "./assets/components/sections/footer"

function App() {
  return (
    <>
      <Header />

      <Home image={profilePicture}/>

      <About image={profilePicture} cv={curriculum}/>

      <Habilities />

      <Projects />

      <Footer />
    </>
  )
}

export default App