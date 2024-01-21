import React from 'react'
import { NavBar } from '../components/navBar/NavBar'
import { NavBarTitle } from '../components/navBar/NavBarTitle'
import { NavBarImg } from '../components/navBar/NavBarImg'
import { NavBarButton } from '../components/navBar/NavBarButton'
// import { NavBarText } from '../components/navBar/navBarText'

export const NavBarContainer = () => {

  return (
    <div className='container-fluid container-bg'>
      <div>
        <NavBar />
      </div>
      <div className='container-fluid textContainer'>
        <div className='row'>
          <div className='col-xxl-6'>
            <NavBarTitle />
            {/* <NavBarText /> */}
            <div className='navBar-text fontStyle'>
                <p>
                    Descubre la auténtica experiencia de Tajy Chipacería, donde la calidez y la tradición se fusionan en cada bocado. Nuestros chipa calentitos, ofrecen una experiencia única que no querrás perderte.  ¡Haz de tu día algo especial con Tajy Chipacería!
                </p>
            </div>
          </div>
          <NavBarImg srcImg={'./imgNav/navTextImg2.png'} altImg={'chipa imagen'}/>
          <div className='col-xl-12 btn-container mb-5'>
            <NavBarButton cellNumber={"+5492613663231"} />
          </div>
        </div>
      </div>
    </div>
  )
}
