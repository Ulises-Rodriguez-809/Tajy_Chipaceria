import './App.css'
import { AboutUsContainer } from './pages/AboutUsContainer'
import {NavBarContainer } from './pages/NavBarContainer'
import { TestimonialsContainer } from './pages/TestimonialsContainer'

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
    </>
  )
}

export default App
