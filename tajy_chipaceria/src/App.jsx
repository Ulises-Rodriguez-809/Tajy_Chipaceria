import "./App.css";
import { ContactUsContainer } from "./pages/ContactUsContainer";
import { FooterContainer } from "./pages/FooterContainer.jsx";
import { AboutUsContainer } from './pages/AboutUsContainer'
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
      <TestimonialsContainer />      
      <ContactUsContainer />
      <FooterContainer />
    </>
  );
}

export default App;
