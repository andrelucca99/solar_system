import { Footer } from "./components/Footer/Footer"
import { Header } from "./components/Header/Header"
import { SolarSystem } from "./components/SolarSystem/SolarSystem"
import bgImage from "./images/background.png"

function App() {

  return (
    <main
      className="bg-no-repeat bg-cover min-h-screen gap-5 text-white flex flex-col text-center p-5"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <Header />
      <SolarSystem />
      <Footer />
    </main>
  )
}

export default App
