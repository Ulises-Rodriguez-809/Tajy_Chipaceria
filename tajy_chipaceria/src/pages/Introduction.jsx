import React from 'react'
import { NavBar } from '../components/intruduction/navBar/NavBar'
import { TextBox } from '../components/TextBox'
import { TitleBox } from '../components/TitleBox'

export const Introduction = () => {

  return (
    <div className='container-fluid container-bg'>
      <div>
        <NavBar />
      </div>
      <div className='container-fluid textContainer'>
        <div className='row ourChipa-container'>
          <div className='col-lg-6'>
            <TitleBox title={"Nuestro chipá es"} title2={"único e inigualable"} colorText={{ color1: "#fff", color2: "#F65A1B" }} />
            <TextBox text={"Descubre la auténtica experiencia de Tajy Chipacería, donde la calidez y la tradición se fusionan en cada bocado. Nuestros chipa calentitos, ofrecen una experiencia única que no querrás perderte.  ¡Haz de tu día algo especial con Tajy Chipacería!"} styleText={{ color: "#fff" }} />
          </div>
          <div className='col-lg-6 intrduction-img-container'>
            <img src='./imgIntroduction/introductionImg.png' alt='chipa imagen' className='introduction-img' />
          </div>
        </div>
      </div>
      <div className='btn-container'>
        <button className='btn-realizar-pedido'>
          <a href='#' target='_blank'>Realizar Pedido</a>
        </button>
      </div>
    </div>
  )
}
