import './App.css'
import { AboutUsContainer } from './pages/AboutUsContainer'
import { ContactUsContainer } from './pages/ContactUsContainer'
import { FooterContainer } from './pages/FooterContainer'
import {NavBarContainer } from './pages/NavBarContainer'
import { TestimonialsContainer } from './pages/TestimonialsContainer'
// import { ContactUsContainer } from './pages/ContactUsContainer'

function App() {
  console.log(screen.width)

  return (
    <>
      <NavBarContainer />
      <AboutUsContainer />
      <img className='fondo1' src="./imgBG/fondo1.png" alt='fondo1' />
      <div className='text-center'>Nuestros productos</div>
      <div className='text-center'>Nuestro servicio</div>
      <img className='fondo1' src="./imgBG/fondo2.png" alt='fondo2' />
      <TestimonialsContainer />
      {/* <ContactUsContainer /> */}
      <ContactUsContainer></ContactUsContainer>
      <FooterContainer></FooterContainer>
    </>
  )
}

export default App
