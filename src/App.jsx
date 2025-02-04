import './App.css'
import Analytics from './components/Analytics'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Newsletter from './components/Newsletter'
import PricingCards from './components/PricingCards'
import StartView from './components/StartView'

function App() {

  return (
    <>
      <Navbar/>
      <StartView/>
      <Analytics/>
      <Newsletter/>
      <PricingCards/>
      <Footer/>
    </>
  )
}

export default App
