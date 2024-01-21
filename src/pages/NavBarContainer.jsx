import React from 'react'
import { NavBar } from '../components/navBar/NavBar'
import { NavBarTitle } from '../components/navBar/NavBarTitle'
import { NavBarImg } from '../components/navBar/NavBarImg'
import { NavBarButton } from '../components/navBar/NavBarButton'
import { NavBarText } from '../components/navBar/navBarText'

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
            <NavBarText />
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
