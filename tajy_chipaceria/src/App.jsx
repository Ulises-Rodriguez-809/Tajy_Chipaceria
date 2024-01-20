import './App.css'
import { OurServ } from './components/OurServ/OurServ'
import { AboutUsContainer } from './pages/AboutUsContainer'
import { ContactUsContainer } from './pages/ContactUsContainer'
import { FooterContainer } from './pages/FooterContainer'
import {NavBarContainer } from './pages/NavBarContainer'
import { TestimonialsContainer } from './pages/TestimonialsContainer'

function App() {

  return (
    <>
      <NavBarContainer />
      <AboutUsContainer />
      <img className='fondo1' src="./imgBG/fondo1.png" alt='fondo1' />
      <div className='text-center'>Nuestros productos</div>
      <div className='text-center'>Nuestro servicio</div>
      <img className='fondo1' src="./imgBG/fondo2.png" alt='fondo2' />
      <OurServ />
      <TestimonialsContainer />
      <ContactUsContainer />
      <FooterContainer />
    </>
  )
}

export default App
