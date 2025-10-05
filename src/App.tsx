import { Footer } from "./components/Footer/Footer"
import { Header } from "./components/Header/Header"
import { SolarSystem } from "./components/SolarSystem/SolarSystem"

function App() {

  return (
    <main className="bg-black gap-5 text-white flex flex-col text-center p-5">
      <Header />
      <SolarSystem />
      <Footer />
    </main>
  )
}

export default App
