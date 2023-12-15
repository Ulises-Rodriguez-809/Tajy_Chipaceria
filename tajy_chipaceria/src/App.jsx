import './App.css'
import { AboustUs } from './pages/AboustUs'
import { OurChipa } from './pages/OurChipa'
import { Testimonials } from './pages/Testimonials'

function App() {
  console.log(screen.width)

  return (
    <>
      <OurChipa />
      <AboustUs />
      <img className='fondo1' src="./imgBG/fondo1.png" alt='fondo1' />
      <div className='text-center'>Nuestros productos</div>
      <div className='text-center'>Nuestro servicio</div>
      <img className='fondo1' src="./imgBG/fondo2.png" alt='fondo2' />
      <Testimonials />
      <div id='final'>Saltamos al final</div>
    </>
  )
}

export default App
